"use client";

import React, { useState, FormEvent, useCallback } from "react";
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
import Image from "next/image";
import { StyledRadioInput } from "./StyledRadioInput";

export const ContactForm: React.FC = () => {
    const [selectedSubject, setSelectedSubject] =
        useState<string>("generalInquiry");

    const handleSubjectChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setSelectedSubject(e.target.value);
    };
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

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
        const updatedErrors = { ...formErrors };

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

        Object.keys(formData).forEach((key) => {
            validateField(
                key as keyof ContactFormState,
                formData[key as keyof ContactFormState],
            );
        });

        const hasErrors = Object.values(formErrors).some(
            (error) => error !== null,
        );

        if (!hasErrors) {
            setIsSubmitted(true);

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

            setFormErrors({
                firstNameError: null,
                lastNameError: null,
                emailError: null,
                phoneError: null,
                messageError: null,
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
        <div className="lg:w-3/5 bg-white px-8 pt-10 pb-40 rounded-r-lg relative">
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
                            setError={useCallback((error: EmailError) => {
                                setFormErrors((prev) => ({
                                    ...prev,
                                    emailError: error,
                                }));
                            }, [])}
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
                            <StyledRadioInput
                                id="generalInquiry"
                                name="subject"
                                value="generalInquiry"
                                label="General Inquiry"
                                checked={selectedSubject === "generalInquiry"}
                                onChange={handleSubjectChange}
                            />
                            <StyledRadioInput
                                id="technicalSupport"
                                name="subject"
                                value="technicalSupport"
                                label="General Inquiry"
                                checked={selectedSubject === "technicalSupport"}
                                onChange={handleSubjectChange}
                            />
                            <StyledRadioInput
                                id="billing"
                                name="subject"
                                value="billing"
                                label="General Inquiry"
                                checked={selectedSubject === "billing"}
                                onChange={handleSubjectChange}
                            />
                            <StyledRadioInput
                                id="other"
                                name="subject"
                                value="other"
                                label="General Inquiry"
                                checked={selectedSubject === "other"}
                                onChange={handleSubjectChange}
                            />
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
                            isSubmitted={isSubmitted}
                            submittedText="Message Sent!"
                        />
                    </div>
                </div>
            </form>
            <Image
                src="/flying_kite.png"
                alt="Flying Kite"
                width={240}
                height={100}
                className="absolute bottom-[-49px] left-[100px]"
            />
        </div>
    );
};
