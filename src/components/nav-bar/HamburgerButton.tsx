import React, { forwardRef, useRef, useEffect } from "react";

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
    setIsMenuOpen: (isOpen: boolean) => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
    isOpen,
    onClick,
    setIsMenuOpen,
    buttonRef,
}) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsMenuOpen]);

    return (
        <button
            ref={buttonRef}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={onClick}
        >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 relative">
                <div className={`hamburger-lines ${isOpen ? "active" : ""}`}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            </div>
        </button>
    );
};
