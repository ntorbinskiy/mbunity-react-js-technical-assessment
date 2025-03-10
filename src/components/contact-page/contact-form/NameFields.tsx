import React from "react";
import { FormInput } from "./FormInput";
import { FirstNameError, LastNameError } from "./types";
interface NameFieldsProps {
    firstName: string;
    lastName: string;
    firstNameError: FirstNameError;
    lastNameError: LastNameError;
    onFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFirstNameBlur: () => void;
    onLastNameBlur: () => void;
}

export const NameFields: React.FC<NameFieldsProps> = ({
    firstName,
    lastName,
    firstNameError,
    lastNameError,
    onFirstNameChange,
    onLastNameChange,
    onFirstNameBlur,
    onLastNameBlur,
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <FormInput
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={onFirstNameChange}
                onBlur={onFirstNameBlur}
                required
                error={firstNameError}
                className={firstNameError ? "border-red-500" : ""}
            />
            <FormInput
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={onLastNameChange}
                onBlur={onLastNameBlur}
                required
                error={lastNameError}
                className={lastNameError ? "border-red-500" : ""}
            />
        </div>
    );
};
