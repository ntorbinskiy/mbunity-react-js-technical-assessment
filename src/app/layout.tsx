import type { Metadata } from 'next';
import './globals.css';
import { inter, poppins, roboto } from './fonts';
import React from 'react';
import { NavBar } from '@/components/nav-bar/NavBar';

export const metadata: Metadata = {
  title: 'Contact Us | Company Name',
  description: 'Contact us for any inquiries or questions.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = async ({ children }: RootLayoutProps): Promise<React.ReactNode> => {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
      <body className="font-poppins bg-gray-50">
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
