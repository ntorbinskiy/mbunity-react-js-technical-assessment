import React from "react";

interface FormButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    isSubmitted?: boolean;
    submittedText?: string;
}

export const FormButton: React.FC<FormButtonProps> = ({
    text,
    type = "button",
    onClick,
    className = "",
    disabled = false,
    isSubmitted = false,
    submittedText = "Submitted!",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || isSubmitted}
            className={`
                py-4 
                px-8 
                rounded-md 
                font-medium 
                transition-colors 
                ${!disabled && !isSubmitted ? "hover:bg-gray-800" : ""} 
                ${className} 
                ${disabled || isSubmitted ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                ${isSubmitted ? "bg-green-500 text-white" : "bg-black text-white"}
                not-sm:w-full
            `}
        >
            {isSubmitted ? submittedText : text}
        </button>
    );
};
