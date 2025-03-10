import Link from "next/link";
import React from "react";
import Image from "next/image";

export const CartIcon: React.FC = () => {
    return (
        <Link
            href="#"
            className="w-8 h-8 p-1 rounded-full border-1 border-black hover:bg-gray-200 flex items-center justify-center"
            aria-label="Shopping cart"
        >
            <Image src={"/cart.svg"} alt={"cart"} width="16" height="16" />
        </Link>
    );
};
