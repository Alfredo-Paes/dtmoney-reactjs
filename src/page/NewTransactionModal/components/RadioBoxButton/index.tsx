import React from "react";
import { RadioBoxButtonStyle } from "./style";

interface RadioBoxButtonProps {
  type: "button" | "reset" | "submit";
  title: string;
  isActive: boolean;
  activeColor: "red" | "green";
  icon: string;
  onClick: () => void;
}

export function RadioBoxButton({
  type,
  title,
  isActive,
  activeColor,
  icon,
  onClick,
}: RadioBoxButtonProps) {
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
