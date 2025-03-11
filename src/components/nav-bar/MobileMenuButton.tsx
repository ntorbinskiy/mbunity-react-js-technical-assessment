"use client";

import React, { useState, useRef } from "react";
import { HamburgerButton } from "./HamburgerButton";
import { NavLinkList } from "./nav-link/NavLinks";
import { MobileProfileAndCartLinks } from "./MobileProfileAndCartLinks";

export const MobileMenuButton: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HamburgerButton
                isOpen={isMenuOpen}
                onClick={toggleMenu}
                buttonRef={buttonRef}
                setIsMenuOpen={setIsMenuOpen}
            />
            <div
                ref={menuRef}
                className={`md:hidden absolute top-16 inset-x-0 z-10 ${isMenuOpen ? "active" : ""}`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black text-white flex flex-col items-left">
                    <NavLinkList />
                    <div className="flex justify-center space-x-6 pt-4">
                        <MobileProfileAndCartLinks />
                    </div>
                </div>
            </div>
        </>
    );
};
