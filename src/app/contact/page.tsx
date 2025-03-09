import React from "react";
import { ContactInfo } from "@/components/contact-page/contact-info/ContactInfo";

export const metadata = {
    title: "Contact Us | Your Company",
    description: "Get in touch with our team for any questions or inquiries.",
};

const ContactPage: React.FC = () => (
    <>
        <main className="flex flex-col items-center py-16 px-4 md:px-8">
            <div className="w-full max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-lg font-poppins">
                        Any question or remarks? Just write us a message!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row p-3 w-full bg-white rounded-lg shadow-lg overflow-hidden min-h-170">
                    <ContactInfo />
                    {/*<ContactForm />*/}
                    <div></div>
                </div>
            </div>
        </main>
    </>
);

export default ContactPage;
