import React from "react";
import { ContactInfo } from "@/components/contact-page/contact-info/ContactInfo";
import { ContactForm } from "@/components/contact-page/contact-form/ContactForm";

export const metadata = {
    title: "Contact Us | Your Company",
    description: "Get in touch with our team for any questions or inquiries.",
};

const ContactPage: React.FC = () => (
    <>
        <main className="flex flex-col items-center py-16  md:px-8">
            <div className="w-full max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-5xl font-bold font-poppins mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-sm md:text-lg font-poppins">
                        Any question or remarks? <br />
                        Just write us a message!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row md:p-3 w-full bg-white rounded-lg shadow-lg overflow-hidden min-h-170 relative">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </main>
    </>
);

export default ContactPage;
