import React from "react";

interface FooterColumnProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({
    title,
    children,
    className,
}) => {
    return (
        <div className={className}>
            <h3 className="text-lg font-semibold mb-6">{title}</h3>
            {children}
        </div>
    );
};
