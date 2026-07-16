import React from "react";

const Footer = () => {
    return (
        <footer className="bg-surface-container-lowest w-full py-stack-lg border-t border-outline-variant">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
                <div className="col-span-1 md:col-span-1">
                    <div className="font-headline-md text-headline-md font-bold text-primary mb-6">
                        Nexora Labs
                    </div>
                    <p className="text-on-surface-variant font-body-sm text-body-sm mb-6 max-w-xs">
                        Pioneering high-fidelity engineering for the modern
                        global enterprise.
                    </p>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">
                        Navigation
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                Expertise
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                Case Studies
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                Methodology
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                Company
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">
                        Connect
                    </h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                Twitter / X
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-on-surface-variant hover:text-secondary transition-all font-body-sm"
                                href="#"
                            >
                                Medium
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">
                        Newsletter
                    </h4>
                    <div className="relative">
                        <input
                            className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 font-body-sm focus:ring-2 focus:ring-secondary/20 focus:border-primary outline-none transition-all"
                            placeholder="Email address"
                            type="email"
                        />
                        <button className="absolute right-2 top-2 p-1 text-primary cursor-pointer">
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-20 pt-8 border-t border-outline-variant/30 px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-body-md text-body-md text-on-surface-variant">
                    © 2024 Nexora Labs. All rights reserved.
                </div>
                <div className="flex gap-8">
                    <a
                        className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-all"
                        href="#"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-all"
                        href="#"
                    >
                        Terms of Service
                    </a>
                    <a
                        className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-all"
                        href="#"
                    >
                        Security
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;