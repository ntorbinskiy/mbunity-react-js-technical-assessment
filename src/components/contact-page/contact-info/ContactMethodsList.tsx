import React from "react";
import { ContactMethod } from "@/components/contact-page/contact-info/ContactMethod";

interface ContactMethodRecord {
    [type: string]: {
        icon: string;
        details: React.ReactNode;
        type: "phone" | "email" | "address";
    };
}

export const ContactMethodsList: React.FC = () => {
    const contactMethods: ContactMethodRecord = {
        phone: {
            type: "phone",
            icon: "/phone.svg",
            details: "+1012 3456 789",
        },
        email: {
            type: "email",
            icon: "/email.svg",
            details: "demo@gmail.com",
        },
        address: {
            type: "address",
            icon: "/location.svg",
            details: (
                <>
                    132 Dartmouth Street Boston, <br /> Massachusetts 02156
                    United States
                </>
            ),
        },
    };

    return (
        <>
            {Object.entries(contactMethods).map(
                ([key, { icon, type, details }]) => (
                    <ContactMethod
                        key={key}
                        icon={icon}
                        type={type}
                        details={details}
                    />
                ),
            )}
        </>
    );
};
