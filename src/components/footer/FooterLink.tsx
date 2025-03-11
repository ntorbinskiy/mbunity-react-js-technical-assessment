import React from "react";
import Link from "next/link";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="text-white hover:text-gray-300 transition-colors duration-300"
        >
            {children}
        </Link>
    );
};
