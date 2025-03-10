import React, { useState } from "react";

interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    required?: boolean;
    className?: string;
    error: string | null;
}

export const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    type = "text",
    placeholder = "",
    value = "",
    onChange,
    onBlur,
    required = false,
    className = "",
    error,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = (): void => {
        setIsFocused(true);
    };

    const handleBlur = (): void => {
        setIsFocused(false);
        if (onBlur) {
            onBlur();
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <label
                htmlFor={id}
                className={`font-medium text-xs ${
                    isFocused ? "text-black" : "text-gray-contact-form"
                } transition-colors`}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`border-b ${
                    className.includes("border-red-500")
                        ? "border-red-500"
                        : "border-gray-contact-form"
                } pb-2 outline-none ${
                    isFocused
                        ? "border-black text-black"
                        : "text-gray-contact-form"
                } transition-colors h-10 w-full ${className}`}
            />
            {error && (
                <span className="text-red-500 text-xs mt-1">{error}</span>
            )}
        </div>
    );
};
