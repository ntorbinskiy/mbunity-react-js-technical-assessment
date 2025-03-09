import React, { useState } from "react";

interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    type = "text",
    placeholder = "",
    value = "",
    onChange,
    required = false,
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div className="flex flex-col space-y-2">
            <label
                htmlFor={id}
                className={`font-medium text-xs ${isFocused ? "text-black" : "text-gray-contact-form"} transition-colors`}
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
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="border-b border-gray-contact-form pb-2 outline-none focus:border-black focus:text-black transition-colors text-gray-contact-form h-10 w-full"
            />
        </div>
    );
};
