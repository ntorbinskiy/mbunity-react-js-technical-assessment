import React from "react";
import { ContactMethod } from "./ContactMethod";
import { SocialIcon } from "./SocialIcon";
import { TwitterIcon } from "./TwitterIcon";
import { InstagramIcon } from "./InstagramIcon";
import { DiscordIcon } from "./DiscordIcon";

export const ContactInfo: React.FC = () => (
    <div className="lg:w-2/5 bg-black text-white p-10 rounded-t-lg lg:rounded-l-lg flex flex-col justify-between relative overflow-hidden">
        <div>
            <h2 className="text-3xl font-bold mb-1.5">
                Contact Information
            </h2>
            <p className="text-[#C9C9C9]">
                Say something to start a live
                chat!
            </p>
        </div>

        <div className="flex flex-col gap-y-10 my-8 lg:my-0">
            <ContactMethod
                icon="/phone.svg"
                type="phone"
                details="+1 012 3456 789"
            />
            <ContactMethod
                icon="/email.svg"
                type="email"
                details="demo@gmail.com"
            />
            <ContactMethod
                icon="/location.svg"
                type="address"
                details="132 Dartmouth Street Boston, Massachusetts 02156 United States"
            />
        </div>

        <div className="flex gap-x-4 relative z-10">
            <SocialIcon
                href="https://twitter.com"
                icon={<TwitterIcon />}
                ariaLabel="Twitter"
            />
            <SocialIcon
                href="https://instagram.com"
                icon={<InstagramIcon />}
                ariaLabel="Instagram"
            />
            <SocialIcon
                href="https://discord.com"
                icon={<DiscordIcon />}
                ariaLabel="Discord"
            />
        </div>
        <div
            className="absolute  w-34.5 h-34.5 rounded-full  bottom-16 right-16 z-1"
            style={{
                background:
                    "rgba(72, 72, 72, 0.5)",
            }}
        />
        <div
            className="absolute bottom-0 right-0 w-67 h-67  rounded-full translate-1/3"
            style={{
                background: "rgb(26, 26, 26)",
            }}
        />
    </div>
);
