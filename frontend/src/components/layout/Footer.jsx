import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-[#001c3d] to-[#000c1c] text-white/90 w-full py-16 relative overflow-hidden">
            {/* Very low opacity grid texture */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            
            {/* Background decorative glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#8b5cf6]/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                {/* Brand info */}
                <div className="col-span-1 md:col-span-3 flex flex-col justify-between min-h-40">
                    <div>
                        <div className="mb-6">
                            <Logo light={true} />
                        </div>
                        <p className="text-white/60 text-sm leading-[1.7] mb-6 max-w-sm">
                            Pioneering high-fidelity engineering for the modern global enterprise. We build intelligent infrastructure.
                        </p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Twitter">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="mailto:info@nexoralabs.com" className="footer-social-icon" aria-label="Email">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Company column */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/40 mb-6 uppercase tracking-wider">
                        Company
                    </h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/solutions">
                                Solutions
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/innovation">
                                Innovation
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Solutions column */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/40 mb-6 uppercase tracking-wider">
                        Solutions
                    </h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/solutions#artificial-intelligence">
                                Artificial Intelligence
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/solutions#cloud-engineering">
                                Cloud Engineering
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/solutions#cybersecurity">
                                Cybersecurity
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/solutions#software-development">
                                Software Development
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources & Contact column */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/40 mb-6 uppercase tracking-wider">
                        Resources
                    </h4>
                    <ul className="space-y-4 text-sm font-medium mb-6">
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/innovation">
                                Innovation
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                    </ul>
                    <h4 className="text-xs font-semibold text-white/40 mb-4 uppercase tracking-wider">
                        Contact
                    </h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/contact">
                                Get In Touch
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70" to="/contact">
                                Start a Project
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter column */}
                <div className="col-span-1 md:col-span-3">
                    <h4 className="text-xs font-semibold text-white/40 mb-6 uppercase tracking-wider">
                        Newsletter
                    </h4>
                    <p className="text-white/60 text-xs mb-6 leading-[1.7] max-w-xs">
                        Stay updated with our latest insights and research.
                    </p>
                    <div className="relative flex items-center group">
                        <input
                            className="w-full bg-white/5 border border-white/8 focus:border-secondary focus:ring-1 focus:ring-secondary/30 rounded-full px-5 py-3.5 pr-14 text-xs text-white outline-none placeholder:text-white/30 backdrop-blur-md transition-all duration-300"
                            placeholder="Email address"
                            type="email"
                        />
                        <button className="absolute right-1.5 p-2 rounded-full bg-linear-to-r from-primary via-secondary to-[#7c3aed] text-white hover:-translate-y-px shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center group-hover:brightness-110" aria-label="Subscribe">
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-16 max-w-7xl mx-auto px-6 md:px-12">
                <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/70 font-medium">
                    <div>
                        © {new Date().getFullYear()} Nexora Labs. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a className="hover:text-white transition-colors" href="#privacy">
                            Privacy Policy
                        </a>
                        <a className="hover:text-white transition-colors" href="#terms">
                            Terms of Service
                        </a>
                        <a className="hover:text-white transition-colors" href="#security">
                            Security
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;