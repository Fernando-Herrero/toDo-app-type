import type { ChangeEvent } from "react";

export type InputFieldProps = {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};
