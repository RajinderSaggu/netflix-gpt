import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  icon?: IconType;
  isOutline?: boolean;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon: Icon,
  isOutline = false,
  textColor = "text-white",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full px-4 py-2 rounded-md font-bold transition ${isOutline
          ? "border border-gray-400 text-gray-400 hover:text-white hover:border-white"
          : `bg-red-600 ${textColor} hover:bg-red-700`
        }`}
    >
      {Icon && <Icon size={20} />}
      {label}
    </button>
  );
};

export default Button;
