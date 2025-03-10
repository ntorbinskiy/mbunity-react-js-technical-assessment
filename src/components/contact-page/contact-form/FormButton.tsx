import React from "react";

interface FormButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export const FormButton: React.FC<FormButtonProps> = ({
    text,
    type = "button",
    onClick,
    className = "",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                bg-black 
                text-white 
                py-4 
                px-8 
                rounded-md 
                font-medium 
                transition-colors 
                ${!disabled ? "hover:bg-gray-800" : ""} 
                ${className} 
                ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
        >
            {text}
        </button>
    );
};
