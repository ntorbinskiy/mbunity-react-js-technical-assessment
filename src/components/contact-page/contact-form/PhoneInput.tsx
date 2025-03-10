import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { formatPhoneNumber } from "../../../helpers/phone-input-mask";
import { ErrorMessages } from "./types";

interface PhoneInputProps {
    phone: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    required?: boolean;
    placeholder?: string;
    error: string | null;
}
const EXPECTED_PHONE_LENGTH = 15;

export const PhoneInput: React.FC<PhoneInputProps> = ({
    phone,
    onChange,
    onBlur,
    required = true,
    placeholder = "+1 012 3456 789",
    error: externalError,
}) => {
    const [internalError, setInternalError] = useState<string>("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const formattedValue = formatPhoneNumber(e.target.value);
        const syntheticEvent = {
            ...e,
            target: {
                ...e.target,
                value: formattedValue,
            },
        } as React.ChangeEvent<HTMLInputElement>;

        if (
            formattedValue.length < EXPECTED_PHONE_LENGTH &&
            formattedValue.length > 0
        ) {
            setInternalError(ErrorMessages.PHONE_INVALID);
        } else {
            setInternalError("");
        }

        onChange(syntheticEvent);
    };

    // Use external error first (from form validation), then internal error (from format validation)
    const displayError = externalError || internalError;

    return (
        <FormInput
            id="phone"
            label="Phone Number"
            type="tel"
            placeholder={placeholder}
            value={phone}
            onChange={handleInputChange}
            onBlur={onBlur}
            required={required}
            error={displayError}
            className={displayError ? "border-red-500" : ""}
        />
    );
};
