import React from "react";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";

const links: Record<string, { href: string; isActivePath: string }> = {
    Home: { href: "/", isActivePath: "/" },
    Features: { href: "#", isActivePath: "/features" },
    Blog: { href: "#", isActivePath: "/blog" },
    Shop: { href: "#", isActivePath: "/shop" },
    About: { href: "#", isActivePath: "/about" },
    Contact: { href: "/contact", isActivePath: "/contact" },
};

export const NavLinkList: React.FC = () => {
    const currentPath = usePathname();

    return (
        <>
            {Object.entries(links).map(([name, { href, isActivePath }]) => (
                <NavLink
                    key={name}
                    href={href}
                    isActive={currentPath === isActivePath}
                >
                    {name}
                </NavLink>
            ))}
        </>
    );
};
