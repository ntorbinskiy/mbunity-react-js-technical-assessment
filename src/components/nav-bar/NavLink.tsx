import Link from 'next/link';

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, isActive, children }) => {
    return (
        <Link
            href={href}
            className={`font-roboto text-base  ${
                isActive
                    ? 'font-semibold text-black'
                    : 'text-gray-700 hover:text-black'
            }`}
        >
            {children}
        </Link>
    );
};