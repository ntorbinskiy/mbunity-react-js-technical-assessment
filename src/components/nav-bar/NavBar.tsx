"use client";

import Link from "next/link";
import { MobileMenuButton } from "./MobileMenuButton";
import React from "react";
import { NavLinkList } from "./nav-link/NavLinks";
import { ProfileAndCartLinks } from "./nav-link/ProfileAndCartLinks";

export const NavBar: React.FC = () => {
    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 font-inter font-extrabold text-xl">
                        <Link href="/" className="logo">
                            Logo Here
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-12">
                        <NavLinkList />
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <ProfileAndCartLinks />
                    </div>

                    <div className="md:hidden">
                        <MobileMenuButton />
                    </div>
                </div>
            </div>
        </header>
    );
};
