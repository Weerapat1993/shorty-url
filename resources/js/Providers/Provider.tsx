// import { ThemeProvider } from "@material-tailwind/react";
// import { theme } from "@/Styles/Theme";
import React, { useMemo } from 'react'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/Redux/store";
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { ConfigProvider, App } from 'antd';
import { darkTheme } from '@ant-design/compatible';

type Props = {
    children?: React.ReactNode;
}

type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
    Button?: {
      colorPrimary: string;
      algorithm?: boolean;
    };
    Card?: {
        colorPrimary: string;
    }
  };

const defaultData: ThemeData = {
    borderRadius: 5,
    colorPrimary: 'rgba(79, 70, 229, 1)',
    Button: {
        colorPrimary: 'rgba(79, 70, 229, 1)',
    },
};

export const Provider = ({ children }: Props) => (
    <ReduxProvider store={store}>
        <ConfigProvider theme={{
            ...darkTheme,
            token: {
                ...darkTheme.token,
                colorPrimary: defaultData.colorPrimary,
                borderRadius: defaultData.borderRadius,
            },
            components: {
                ...darkTheme.components,
                Button: {
                    ...darkTheme.components?.Button,
                    colorPrimary: defaultData.Button?.colorPrimary,
                    algorithm: defaultData.Button?.algorithm,
                },
            },
         }}>
            <App>
                {children}
            </App>
        </ConfigProvider>
    </ReduxProvider>
)

export const SsrProvider = ({ children }: Props) => {
    const cache = useMemo<Entity>(() => createCache(), []);
    const styleText = extractStyle(cache);
    return (
        <ReduxProvider store={store}>
            <StyleProvider cache={cache}>
                <App>
                    {children}
                </App>
            </StyleProvider>
        </ReduxProvider>
    )
}
