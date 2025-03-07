import type { Metadata } from 'next';
import './globals.css';
import { inter, poppins, roboto } from './fonts';
import React, {JSX} from "react";

export const metadata: Metadata = {
    title: 'Contact Us | Company Name',
    description: 'Contact us for any inquiries or questions.',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps):JSX.Element {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
        <body className="font-poppins bg-gray-50">
        {children}
        </body>
        </html>
    );
}



export default RootLayout;