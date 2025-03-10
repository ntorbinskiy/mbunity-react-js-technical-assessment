import React, { useState, useEffect } from "react";
import { FormInput } from "./FormInput";
import { EmailError, ErrorMessages } from "./types";
interface EmailInputProps {
    email: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
    error: EmailError;
    setError: (error: EmailError) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({
    email,
    onChange,
    required = true,
    placeholder = "example@email.com",
    error,
    setError,
}) => {
    const [touched, setTouched] = useState<boolean>(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        let newError: EmailError = null;

        if (touched && email) {
            if (!validateEmail(email)) {
                newError = ErrorMessages.EMAIL_INVALID;
            }
        } else if (touched && required && !email) {
            newError = ErrorMessages.EMAIL_REQUIRED;
        }

        if (error !== newError) {
            setError(newError);
        }
    }, [email, touched, required, setError, error]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(e);
        if (touched) {
            const value = e.target.value;
            if (!value && required) {
                setError(ErrorMessages.EMAIL_REQUIRED);
            } else if (value && !validateEmail(value)) {
                setError(ErrorMessages.EMAIL_INVALID);
            } else {
                setError(null);
            }
        }
    };

    const handleBlur = (): void => {
        setTouched(true);
        if (!email && required) {
            setError(ErrorMessages.EMAIL_REQUIRED);
        } else if (email && !validateEmail(email)) {
            setError(ErrorMessages.EMAIL_INVALID);
        } else {
            setError(null);
        }
    };

    return (
        <div className="flex flex-col">
            <FormInput
                id="email"
                label="Email"
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                required={required}
                className={error ? "border-red-500" : ""}
                error={error}
            />
        </div>
    );
};
