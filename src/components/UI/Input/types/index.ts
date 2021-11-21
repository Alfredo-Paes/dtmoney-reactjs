import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    //onChange?: () => void;
    typeInput: "text" | "currency" | "cep";
    prefix?: string;
}

export interface IInput {
    cep: string;
    currency: string;
}