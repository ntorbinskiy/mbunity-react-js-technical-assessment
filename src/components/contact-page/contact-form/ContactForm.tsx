"use client";

import React, { useState } from "react";
import { NameFields } from "./NameFields";

interface ContactFormState {
    firstName: string;
    lastName: string;
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormState>({
        firstName: "",
        lastName: "",
    });

    const handleInputChange =
        (field: keyof ContactFormState) =>
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            setFormData({
                ...formData,
                [field]: event.target.value,
            });
        };

    return (
        <div className="lg:w-3/5 bg-white px-12.5 pt-15 rounded-r-lg">
            <form>
                <div className="flex gap-y-6 ">
                    <NameFields
                        firstName={formData.firstName}
                        lastName={formData.lastName}
                        onFirstNameChange={handleInputChange("firstName")}
                        onLastNameChange={handleInputChange("lastName")}
                    />
                    {/* Other form fields will be added here */}
                </div>
            </form>
        </div>
    );
};
