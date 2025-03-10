"use client";

import React, { useState, FormEvent } from "react";
import { NameFields } from "./NameFields";
import { FormButton } from "./FormButton";
import { EmailInput } from "./EmailInput";
import { PhoneInput } from "./PhoneInput";
import {
    ContactFormState,
    ContactFormErrors,
    EmailError,
    ErrorMessages,
} from "./types";

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState<ContactFormErrors>({
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        phoneError: null,
        messageError: null,
    });

    const [touchedFields, setTouchedFields] = useState<
        Record<keyof ContactFormState, boolean>
    >({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false,
    });

    const handleInputChange =
        (field: keyof ContactFormState) =>
        (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ): void => {
            const value = event.target.value;
            setFormData({
                ...formData,
                [field]: value,
            });

            if (touchedFields[field]) {
                validateField(field, value);
            }
        };

    const handleBlur = (field: keyof ContactFormState): void => {
        setTouchedFields({
            ...touchedFields,
            [field]: true,
        });

        validateField(field, formData[field]);
    };

    const validateField = (
        field: keyof ContactFormState,
        value: string,
    ): void => {
        let updatedErrors = { ...formErrors };

        switch (field) {
            case "firstName":
                updatedErrors.firstNameError =
                    value.trim() === ""
                        ? ErrorMessages.FIRST_NAME_REQUIRED
                        : null;
                break;
            case "lastName":
                updatedErrors.lastNameError =
                    value.trim() === ""
                        ? ErrorMessages.LAST_NAME_REQUIRED
                        : null;
                break;
            case "phone":
                if (value.trim() === "") {
                    updatedErrors.phoneError = ErrorMessages.PHONE_REQUIRED;
                } else if (value.trim().length < 15) {
                    updatedErrors.phoneError = ErrorMessages.PHONE_TOO_SHORT;
                } else {
                    updatedErrors.phoneError = null;
                }
                break;
            case "message":
                updatedErrors.messageError = null;
                break;
        }

        setFormErrors(updatedErrors);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        setTouchedFields({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            message: true,
        });

        const isFirstNameValid = formData.firstName.trim() !== "";
        const isLastNameValid = formData.lastName.trim() !== "";
        const isPhoneValidLength = formData.phone.trim().length >= 15;
        const isPhoneNotEmpty = formData.phone.trim() !== "";
        const isPhoneValid = isPhoneNotEmpty && isPhoneValidLength;
        const isMessageValid = true;

        setFormErrors({
            ...formErrors,
            firstNameError: isFirstNameValid
                ? null
                : ErrorMessages.FIRST_NAME_REQUIRED,
            lastNameError: isLastNameValid
                ? null
                : ErrorMessages.LAST_NAME_REQUIRED,
            phoneError: !isPhoneNotEmpty
                ? ErrorMessages.PHONE_REQUIRED
                : !isPhoneValidLength
                  ? ErrorMessages.PHONE_TOO_SHORT
                  : null,
            messageError: null,
        });

        if (isFirstNameValid && isLastNameValid && isPhoneValid) {
            console.log("Form submitted:", formData);

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });

            setTouchedFields({
                firstName: false,
                lastName: false,
                email: false,
                phone: false,
                message: false,
            });
        }
    };

    const hasErrors = Object.values(formErrors).some((error) => error !== null);

    const hasEmptyRequiredFields =
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim();

    const isButtonDisabled = hasErrors || hasEmptyRequiredFields;

    return (
        <div className="lg:w-3/5 bg-white px-8 py-10 rounded-r-lg">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-12">
                    <NameFields
                        firstName={formData.firstName}
                        lastName={formData.lastName}
                        onFirstNameChange={handleInputChange("firstName")}
                        onLastNameChange={handleInputChange("lastName")}
                        onFirstNameBlur={() => handleBlur("firstName")}
                        onLastNameBlur={() => handleBlur("lastName")}
                        firstNameError={formErrors.firstNameError}
                        lastNameError={formErrors.lastNameError}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <EmailInput
                            email={formData.email}
                            onChange={handleInputChange("email")}
                            required
                            error={formErrors.emailError}
                            setError={(error: EmailError) =>
                                setFormErrors({
                                    ...formErrors,
                                    emailError: error,
                                })
                            }
                        />
                        <PhoneInput
                            phone={formData.phone}
                            onChange={handleInputChange("phone")}
                            onBlur={() => handleBlur("phone")}
                            required
                            error={formErrors.phoneError}
                        />
                    </div>

                    <div className="mt-4">
                        <label className="font-medium text-xs text-gray-contact-form">
                            Select Subject?
                        </label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="generalInquiry"
                                    name="subject"
                                    value="generalInquiry"
                                    className="mr-2"
                                    defaultChecked
                                />
                                <label htmlFor="generalInquiry">
                                    General Inquiry
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="technicalSupport"
                                    name="subject"
                                    value="technicalSupport"
                                    className="mr-2"
                                />
                                <label htmlFor="technicalSupport">
                                    General Inquiry
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="billing"
                                    name="subject"
                                    value="billing"
                                    className="mr-2"
                                />
                                <label htmlFor="billing">General Inquiry</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="other"
                                    name="subject"
                                    value="other"
                                    className="mr-2"
                                />
                                <label htmlFor="other">General Inquiry</label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="message"
                            className="font-medium text-xs text-gray-contact-form"
                        >
                            Message
                        </label>
                        <input
                            id="message"
                            placeholder="Write your message.."
                            className="w-full mt-2 border-b border-gray-contact-form pb-2 outline-none focus:border-black focus:text-black transition-colors text-gray-contact-form"
                            value={formData.message}
                            onChange={handleInputChange("message")}
                            onBlur={() => handleBlur("message")}
                        />
                    </div>

                    <div className="flex justify-end mt-10">
                        <FormButton
                            text="Send Message"
                            type="submit"
                            disabled={isButtonDisabled}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
