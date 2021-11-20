import { ReactNode } from "react";

export interface IModalProps {
    children?: ReactNode;
    isOpen: boolean;
    onClickClose: () => void;
    titleModal?: string;
}

export interface IKeydownHandler {
    key: string;
}