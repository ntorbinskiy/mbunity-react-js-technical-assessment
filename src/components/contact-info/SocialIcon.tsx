import React from 'react';
import Link from 'next/link';

interface SocialIconProps {
    href: string;
    icon: React.ReactElement;
    ariaLabel: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, ariaLabel }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="w-8 h-8 rounded-full bg-[#1B1B1B] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
            {icon}
        </Link>
    );
};
