import { ButtonStyled } from "./style";
import { IButtonProps } from "./types";

export function Button({ type, title, onClick, collorButton }: IButtonProps) {
  return (
    <ButtonStyled className={collorButton} type={type} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}
