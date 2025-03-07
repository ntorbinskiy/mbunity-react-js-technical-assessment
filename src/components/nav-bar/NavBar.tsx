import Link from 'next/link';
import { NavLink } from './NavLink';
import { UserIcon } from './UserIcon';
import { CartIcon } from './CartIcon';
import { MobileMenuButton } from './MobileMenuButton';
import React from "react";

interface NavBarProps {
    currentPath: string;
}

export const NavBar: React.FC<NavBarProps> = ({ currentPath }) =>
    (
        <header className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 font-inter font-extrabold text-xl">
                        <Link href="#">Logo Here</Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-12">
                        <NavLink href="#" isActive={currentPath === '/'}>Home</NavLink>
                        <NavLink href="#" isActive={currentPath === '/features'}>
              <span className="flex items-center">
                Features
                <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
                        </NavLink>
                        <NavLink href="#" isActive={currentPath === '/blog'}>Blog</NavLink>
                        <NavLink href="#" isActive={currentPath === '/shop'}>Shop</NavLink>
                        <NavLink href="#" isActive={currentPath === '/about'}>About</NavLink>
                        <NavLink href="#" isActive={currentPath === '/contact'}>Contact</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <UserIcon/>
                        <CartIcon/>
                    </div>

                    <div className="md:hidden">
                        <MobileMenuButton/>
                    </div>
                </div>
            </div>
        </header>
    );