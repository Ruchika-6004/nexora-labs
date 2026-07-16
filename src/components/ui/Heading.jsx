import React from "react";

const Heading = ({ children }) => {
    return (
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            {children}
        </h2>
    );
};

export default Heading;