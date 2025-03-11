"use client";

import React, { useState } from "react";

interface NewsletterSubscriptionProps {
    className?: string;
}

export const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
    className = "",
}) => {
    const [email, setEmail] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail("");
        }
    };

    return (
        <div
            className={`bg-[#121212] text-white p-8 rounded-lg ${className} -col-end-1 not-lg:col-start-1`}
        >
            <h3 className="text-3xl font-bold mb-8">Join Our Newsletter</h3>

            <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex flex-col sm:flex-row">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="flex-grow py-4 px-4 bg-[#1E1E1E] text-gray-300 placeholder-gray-500 rounded-t-md sm:rounded-tr-none sm:rounded-l-md focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className={`py-4 px-8 font-semibold border border-black rounded-b-md sm:rounded-bl-none sm:rounded-r-md transition-colors ${
                            isSubmitted
                                ? "bg-green-500 text-white hover:bg-green-600"
                                : "bg-black text-white hover:bg-gray-900"
                        }`}
                    >
                        {isSubmitted ? "Subscribed!" : "Subscribe"}
                    </button>
                </div>
            </form>

            {isSubmitted && (
                <p className="text-green-500 text-sm">
                    Thank you for subscribing!
                </p>
            )}

            <p className="text-gray-500 text-sm">
                * Will send you weekly updates for your better tool management.
            </p>
        </div>
    );
};
