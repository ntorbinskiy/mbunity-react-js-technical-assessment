'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const MobileMenuButton: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
            >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                    <svg
                        className="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                ) : (
                    <svg
                        className="block h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </button>
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 inset-x-0 z-10" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black text-white">
                        <Link href="#" className="block px-3 py-2 text-base font-medium">
                            Home
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-base font-medium">
                            Features
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-base font-medium">
                            Blog
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-base font-medium">
                            Shop
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-base font-medium">
                            About
                        </Link>
                        <Link href="#" className="block px-3 py-2 text-base font-medium font-bold">
                            Contact
                        </Link>

                        <div className="flex justify-center space-x-6 pt-4">
                            <Link
                                href="#"
                                className="p-1 rounded-full text-white"
                                aria-label="User account"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="p-1 rounded-full text-white"
                                aria-label="Shopping cart"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
