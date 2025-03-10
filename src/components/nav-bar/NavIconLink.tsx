import Link from "next/link";
import React from "react";
import Image from "next/image";

interface NavIconLinkProps {
    icon: string;
    alt: string;
    href: string;
    ariaLabel: string;
}

export const NavIconLink: React.FC<NavIconLinkProps> = ({
    icon,
    alt,
    href,
    ariaLabel,
}) => {
    return (
        <Link
            href={href}
            className="w-8 h-8 p-1 rounded-full border-1 border-black hover:bg-gray-200 flex items-center justify-center"
            aria-label={ariaLabel}
        >
            <Image src={icon} alt={alt} width={16} height={16} />
        </Link>
    );
};
