import { ButtonStyled } from "./style";

interface ButtonProps {
  type: "button" | "reset" | "submit";
  collorButton: "primary" | "success" | "danger";
  title: string;
  onClick: () => void;
}

export function Button({ type, title, onClick, collorButton }: ButtonProps) {
  return (
    <ButtonStyled className={collorButton} type={type} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}
