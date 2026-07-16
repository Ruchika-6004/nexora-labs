import React from "react";

const Button = ({ children }) => {
    return (
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
            {children}
        </button>
    );
};

export default Button;