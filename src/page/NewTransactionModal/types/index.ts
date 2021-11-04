export interface IRadioBoxButtonProps {
    type: "button" | "reset" | "submit";
    title: string;
    isActive: boolean;
    activeColor: "red" | "green";
    icon: string;
    onClick: () => void;
}

export interface INewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export interface IRadioBoxButtonStyleProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}