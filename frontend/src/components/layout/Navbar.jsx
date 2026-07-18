import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/solutions", label: "Solutions" },
        { path: "/innovation", label: "Innovation" },
        { path: "/case-studies", label: "Case Studies" }
    ];

    return (
        <>
            <m.nav 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
                    scrolled 
                        ? "bg-white/70 backdrop-blur-xl border-b border-black/4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03),0_4px_6px_-2px_rgba(0,0,0,0.01)]" 
                        : "bg-transparent border-b border-transparent shadow-none"
                }`}
            >
                <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-container-max mx-auto relative">
                    {/* Brand Area */}
                    <Link to="/" className="flex items-center gap-3 group relative select-none">
                        <Logo />
                    </Link>

                    {/* Desktop NavLinks */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `nav-link-item font-medium text-sm tracking-wide pb-1 relative transition-colors duration-300 ${
                                        isActive
                                            ? "text-secondary font-semibold nav-link-active"
                                            : "text-on-surface-variant hover:text-secondary"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right side contact & mobile toggle */}
                    <div className="flex items-center space-x-6">
                        <Link to="/contact" className="hidden sm:block">
                            <m.button 
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="relative overflow-hidden bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-sm shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer group"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                <span className="relative z-10">Let's Talk</span>
                                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </m.button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center p-2 text-primary hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
                            aria-label="Toggle mobile menu"
                        >
                            <span className="material-symbols-outlined text-[28px]">
                                {mobileMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </m.nav>

            {/* Mobile Menu Glass Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/10 backdrop-blur-xs z-40"
                        />
                        {/* Drawer */}
                        <m.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0.05, duration: 0.4 }}
                            className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/80 backdrop-blur-2xl border-l border-black/4 shadow-2xl z-50 flex flex-col p-6 pt-24"
                        >
                            {/* Close button inside drawer */}
                            <button 
                                onClick={() => setMobileMenuOpen(false)}
                                className="absolute top-5 right-5 flex items-center justify-center p-2 text-primary hover:bg-black/5 rounded-full transition-colors cursor-pointer"
                                aria-label="Close mobile menu"
                            >
                                <span className="material-symbols-outlined text-[28px]">
                                    close
                                </span>
                            </button>

                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `text-[16px] font-medium py-3.5 px-4 rounded-xl transition-all duration-200 ${
                                                isActive
                                                    ? "bg-secondary/10 text-secondary border-l-4 border-secondary pl-3"
                                                    : "text-on-surface-variant hover:bg-black/5 hover:text-primary"
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                                <NavLink
                                    to="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `text-[16px] font-medium py-3.5 px-4 rounded-xl transition-all duration-200 ${
                                            isActive
                                                ? "bg-secondary/10 text-secondary border-l-4 border-secondary pl-3"
                                                : "text-on-surface-variant hover:bg-black/5 hover:text-primary"
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </m.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
