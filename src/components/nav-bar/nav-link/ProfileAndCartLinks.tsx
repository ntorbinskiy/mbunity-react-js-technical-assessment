import React from "react";

import { NavIconLink } from "./NavIconLink";

export const ProfileAndCartLinks: React.FC = () => (
    <>
        <NavIconLink
            icon="/user.svg"
            alt="User"
            href="#"
            ariaLabel="User account"
        />
        <NavIconLink
            icon="/cart.svg"
            alt="Cart"
            href="#"
            ariaLabel="Shopping cart"
        />
    </>
);
