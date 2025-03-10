import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactMethodProps {
    icon: string;
    details: string | React.ReactNode;
    type?: "phone" | "email" | "address";
}

export const ContactMethod: React.FC<ContactMethodProps> = ({
    icon,
    details,
    type,
}) => {
    const iconAlt = type || "contact";

    const renderDetails = (): JSX.Element => {
        if (type === "phone") {
            return (
                <Link
                    href={`tel:${details}`}
                    className=" hover:text-[#c9c9c9] focus:text-[#c9c9c9] transition-colors"
                >
                    {details}
                </Link>
            );
        } else if (type === "email") {
            return (
                <Link
                    href={`mailto:${details}`}
                    className="hover:text-[#c9c9c9] focus:text-[#c9c9c9] transition-colors"
                >
                    {details}
                </Link>
            );
        } else {
            return <div className="md:text-left text-center">{details}</div>;
        }
    };

    return (
        <div className="flex items-center md:flex-row flex-col not-md:justify-center">
            <div className="w-10 h-10 flex-shrink-0 md:mr-4  flex items-center justify-center ">
                <Image src={icon} alt={iconAlt} width={24} height={24} />
            </div>
            {renderDetails()}
        </div>
    );
};
