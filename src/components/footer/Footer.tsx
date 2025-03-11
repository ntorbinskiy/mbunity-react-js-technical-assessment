import React from "react";
import { ContactMethodsList } from "../contact-page/contact-info/ContactMethodsList";
import { FooterLink } from "./FooterLink";
import { FooterColumn } from "./FooterColumn";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-inter font-extrabold">
                        Logo Here
                    </h2>
                    <hr className="border-white my-11" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                    <FooterColumn title="Reach us">
                        <ContactMethodsList />
                    </FooterColumn>

                    <FooterColumn title="Company">
                        <ul className="space-y-4">
                            <li>
                                <FooterLink href="#">About</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="/contact">Contact</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#">Blogs</FooterLink>
                            </li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn title="Legal">
                        <ul className="space-y-4">
                            <li>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#">
                                    Terms & Services
                                </FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#">Terms of Use</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#">Refund Policy</FooterLink>
                            </li>
                        </ul>
                    </FooterColumn>

                    <FooterColumn title="Quick Links">
                        <ul className="space-y-4">
                            <li>
                                <FooterLink href="#">
                                    Techlabz Keybox
                                </FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#">Downloads</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#">Forum</FooterLink>
                            </li>
                        </ul>
                    </FooterColumn>
                </div>
            </div>
        </footer>
    );
};
