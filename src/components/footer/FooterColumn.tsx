import React from "react";

interface FooterColumnProps {
    title: string;
    children: React.ReactNode;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({
    title,
    children,
}) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-6">{title}</h3>
            {children}
        </div>
    );
};
