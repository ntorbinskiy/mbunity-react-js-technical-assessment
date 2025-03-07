import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                poppins: ['var(--font-poppins)'],
                roboto: ['var(--font-roboto)'],
            },
            colors: {
                primary: '#000000',
                accent: {
                    light: '#E5E5E5',
                    DEFAULT: '#CCCCCC',
                },
            },
        },
    },
    plugins: [],
};

export default config;