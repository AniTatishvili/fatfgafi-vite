import React from "react";
import { IconType } from "react-icons";

interface PrimaryIconProps {
  icon: IconType;
  color: string;
  size?: string;
  onClick?: () => void;
}

export const PrimaryIcon = (props: PrimaryIconProps) => {
  const { icon, color, size, onClick } = props;

  const IconElement = icon;
  return <IconElement color={color} size={size} onClick={onClick} />;
};
