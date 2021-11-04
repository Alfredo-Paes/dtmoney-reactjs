import React from "react";
import { IRadioBoxButtonProps } from "../../types";
import { RadioBoxButtonStyle } from "./style";


export function RadioBoxButton({
  type,
  title,
  isActive,
  activeColor,
  icon,
  onClick,
}: IRadioBoxButtonProps) {
  return (
    <RadioBoxButtonStyle
      type={type}
      isActive={isActive}
      activeColor={activeColor}
      onClick={onClick}>
      <img src={icon} alt={title} />
      <span>{title}</span>
    </RadioBoxButtonStyle>
  );
}
