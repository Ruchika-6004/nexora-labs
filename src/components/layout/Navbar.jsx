import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/solutions", label: "Solutions" },
        { path: "/innovation", label: "Innovation" },
        { path: "/case-studies", label: "Case Studies" }
    ];

    return (
        <m.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-md" : "bg-transparent backdrop-blur-none border-b border-transparent shadow-none"}`}
        >
            <div className="flex justify-between items-center h-20 px-4 md:px-10 max-w-container-max mx-auto relative">
                <Link to="/" className="text-xl md:text-headline-md font-headline-lg tracking-tight text-primary">
                    Nexora Labs
                </Link>

                {/* Desktop NavLinks */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `nav-link-item font-label-md text-label-md pb-1 relative transition-colors duration-300 ${
                                    isActive
                                        ? "text-primary nav-link-active"
                                        : "text-on-surface-variant hover:text-primary"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right side contact & mobile toggle */}
                <div className="flex items-center space-x-4">
                    <Link to="/contact" className="hidden sm:block">
                        <button className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-label-md text-label-md cursor-pointer active:scale-95 transition-all">
                            Contact Us
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex items-center justify-center p-2 text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        <span className="material-symbols-outlined text-[28px]">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden w-full bg-surface border-b border-outline-variant/30 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-primary font-bold text-lg py-2 border-l-4 border-primary pl-3"
                                            : "text-on-surface-variant text-lg py-2 hover:text-primary pl-3 transition-colors"
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary font-bold text-lg py-2 border-l-4 border-primary pl-3"
                                        : "text-on-surface-variant text-lg py-2 hover:text-primary pl-3 transition-colors"
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </m.nav>
    );
};

export default Navbar;
