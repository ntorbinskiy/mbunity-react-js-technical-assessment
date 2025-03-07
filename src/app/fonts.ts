import { Inter, Poppins, Roboto } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['800'],
    variable: '--font-inter',
});

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600'],
    variable: '--font-poppins',
});

export const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500'],
    variable: '--font-roboto',
});

