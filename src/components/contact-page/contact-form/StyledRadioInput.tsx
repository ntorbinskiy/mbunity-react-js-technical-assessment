import React from "react";

interface StyledRadioInputProps {
    id: string;
    name: string;
    value: string;
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledRadioInput: React.FC<StyledRadioInputProps> = ({
    id,
    name,
    value,
    label,
    checked = false,
    onChange,
}) => {
    return (
        <div className="relative">
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="sr-only" // Hide the default radio button
            />
            <label
                htmlFor={id}
                className="flex items-center cursor-pointer text-base"
            >
                <span
                    className={`flex-shrink-0 rounded-full flex items-center justify-center mr-3 transition-colors
            ${
                checked ? "bg-black text-white" : "bg-gray-200 text-transparent"
            }`}
                    style={{ width: "13px", height: "13px" }}
                >
                    {checked && (
                        <svg
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white"
                            style={{ margin: "-1px" }}
                        >
                            <path
                                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </span>
                <span className="text-xs">{label}</span>
            </label>
        </div>
    );
};
