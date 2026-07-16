import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
            <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
                <Link to="/" className="text-headline-md font-headline-lg tracking-tight text-primary">
                    Nexora Labs
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-300"
                                : "text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-300"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/solutions"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-300"
                                : "text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-300"
                        }
                    >
                        Solutions
                    </NavLink>
                    <NavLink
                        to="/innovation"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-300"
                                : "text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-300"
                        }
                    >
                        Innovation
                    </NavLink>
                    <NavLink
                        to="/case-studies"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-300"
                                : "text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors duration-300"
                        }
                    >
                        Case Studies
                    </NavLink>
                </div>
                <Link to="/contact">
                    <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md cursor-pointer active:scale-95 transition-all">
                        Contact Us
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;