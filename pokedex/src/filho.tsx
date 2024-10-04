import React, { PropsWithChildren } from "react";

interface FilhoProps {
    text?: string;
}

export const Filho: React.FC<PropsWithChildren<FilhoProps>> = ({ text, children }) => {
    return (
        <>
            <h2 className="text-red-600 font-semibold text-xl">I'm the Hello World Jr</h2>
            {children}
        </>
    )
}