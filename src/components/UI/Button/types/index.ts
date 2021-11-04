export interface IButtonProps {
    type: "button" | "reset" | "submit";
    collorButton: "primary" | "success" | "danger";
    title: string;
    onClick?: () => void;
}