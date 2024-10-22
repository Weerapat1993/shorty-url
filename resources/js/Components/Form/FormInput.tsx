import React from 'react'
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

type Props = {
    name?: string;
    label: string;
    type: 'text' | 'number' | 'email';
    errorMessage?: string;
    id?: string;
    value?: string | number;
    required?: boolean;
    isFocused?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, errorMessage, ...props }: Props) => {
    return (
        <div>
            <InputLabel htmlFor={props.name} value={label} />
            <TextInput
                className="mt-1 block w-full"
                {...props}
            />
            <InputError className="mt-2" message={errorMessage} />
        </div>
    )
}

export default FormInput;
