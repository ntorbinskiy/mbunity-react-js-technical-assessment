// src/components/NavBar/UserIcon.tsx
import Link from 'next/link';

export const UserIcon: React.FC = () => {
    return (
        <Link
            href="#"
            className="p-1 rounded-full hover:bg-gray-100"
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
    );
};