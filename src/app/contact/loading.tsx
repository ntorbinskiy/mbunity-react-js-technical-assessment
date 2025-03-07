import React, { JSX } from 'react';

export default function Loading(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[300px] p-6">
            <div className="w-12 h-12 relative">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-500 rounded-full animate-spin"></div>
            </div>

            <p className="mt-4 text-base text-gray-600 font-medium">Loading...</p>
        </div>
    );
}
