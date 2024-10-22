import { useState } from 'react'
import { Button } from "antd"
import { CopyOutlined, CheckOutlined } from "@ant-design/icons"
import { CopyToClipboard } from 'react-copy-to-clipboard';

type Props = {
    text: string
}

export default function CopyTextButton({ text }: Props) {
    const [isCopied, setIsCopied] = useState(false); // To indicate if the text was copied

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset status after 2 seconds
    };

    return (
        <CopyToClipboard text={text} onCopy={onCopyText}>
            <Button
                type="dashed"
                icon={isCopied ? <CheckOutlined /> : <CopyOutlined />}
            >
                Copy
            </Button>
        </CopyToClipboard>
    )
}
