import Link from "next/link";
import React from "react";

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({
    href,
    isActive,
    children,
}) => {
    return (
        <Link
            href={href}
            className={`font-roboto text-base  ${
                isActive
                    ? "font-medium text-black"
                    : "text-gray-700 hover:text-black"
            }`}
        >
            {children}
        </Link>
    );
};
