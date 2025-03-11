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
    const baseClasses = "font-roboto text-sm md:text-base";
    const activeClasses = isActive
        ? "font-medium  md:font-medium md:text-black"
        : "hover:text-gray-500 md:text-gray-700 md:hover:text-black";

    return (
        <Link href={href} className={`${baseClasses} ${activeClasses}`}>
            {children}
        </Link>
    );
};