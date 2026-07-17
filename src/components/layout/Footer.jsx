import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0B1F4D] text-white/90 w-full py-16 border-t border-white/10 relative overflow-hidden">
            {/* Background decorative glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B1F4D]/50 rounded-full blur-3xl -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                {/* Brand info */}
                <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-white to-[#8B5CF6] flex items-center justify-center shadow-md">
                                <span className="text-[#0B1F4D] font-bold text-sm">N</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Nexora Labs
                            </span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                            Pioneering high-fidelity engineering for the modern global enterprise. We build intelligent infrastructure.
                        </p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon p-2.5 rounded-lg bg-white/5 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-white/70 hover:text-white transition-all duration-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon p-2.5 rounded-lg bg-white/5 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-white/70 hover:text-white transition-all duration-300">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon p-2.5 rounded-lg bg-white/5 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-white/70 hover:text-white transition-all duration-300">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="mailto:info@nexoralabs.com" className="footer-social-icon p-2.5 rounded-lg bg-white/5 hover:bg-[#8B5CF6]/20 border border-white/10 hover:border-[#8B5CF6]/50 text-white/70 hover:text-white transition-all duration-300">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Company column */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/50 mb-6 uppercase tracking-wider">
                        Company
                    </h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/solutions">
                                Solutions
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/innovation">
                                Innovation
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Solutions column */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/50 mb-6 uppercase tracking-wider">
                        Solutions
                    </h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/solutions#artificial-intelligence">
                                Artificial Intelligence
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/solutions#cloud-engineering">
                                Cloud Engineering
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/solutions#cybersecurity">
                                Cybersecurity
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/solutions#software-development">
                                Software Development
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources & Contact column */}
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold text-white/50 mb-6 uppercase tracking-wider">
                        Resources
                    </h4>
                    <ul className="space-y-4 text-sm font-medium mb-6">
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/innovation">
                                Innovation
                            </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                    </ul>
                    <h4 className="text-xs font-semibold text-white/50 mb-4 uppercase tracking-wider">
                        Contact
                    </h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/contact">
                                Get In Touch
                              </Link>
                        </li>
                        <li>
                            <Link className="footer-link-slide text-white/70 hover:text-[#8B5CF6] transition-colors" to="/contact">
                                Start a Project
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter column */}
                <div className="col-span-1 md:col-span-3">
                    <h4 className="text-xs font-semibold text-white/50 mb-6 uppercase tracking-wider">
                        Newsletter
                    </h4>
                    <p className="text-white/70 text-xs mb-4 leading-relaxed">
                        Stay updated with our latest insights and research.
                    </p>
                    <div className="relative flex items-center">
                        <input
                            className="w-full bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6]/50 rounded-lg px-4 py-3 text-xs text-white outline-none placeholder:text-white/30 transition-all duration-300"
                            placeholder="Email address"
                            type="email"
                        />
                        <button className="absolute right-2 p-1.5 rounded-md bg-white/10 hover:bg-[#8B5CF6] text-white transition-colors cursor-pointer">
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-16 pt-8 border-t border-white/10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/55">
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
        </footer>
    );
};

export default Footer;