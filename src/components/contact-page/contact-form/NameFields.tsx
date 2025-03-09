import React from "react";
import { FormInput } from "./FormInput";

interface NameFieldsProps {
    firstName: string;
    lastName: string;
    onFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NameFields: React.FC<NameFieldsProps> = ({
    firstName,
    lastName,
    onFirstNameChange,
    onLastNameChange,
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <FormInput
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={onFirstNameChange}
                required
            />
            <FormInput
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={onLastNameChange}
                required
            />
        </div>
    );
};
