import { m } from "framer-motion";

const Logo = ({ light = false }) => {
    return (
        <div className="flex items-center gap-3 select-none">
            <m.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center"
            >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                        <linearGradient id="nexora-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                    </defs>
                    <path d="M24 75 L24 25 L40 19 L40 69 Z" fill="url(#nexora-logo-gradient)" opacity="0.85" />
                    <path d="M24 25 L40 19 L76 75 L60 81 Z" fill="url(#nexora-logo-gradient)" />
                    <path d="M60 31 L60 81 L76 75 L76 25 Z" fill="url(#nexora-logo-gradient)" opacity="0.7" />
                </svg>
            </m.div>
            <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${light ? "text-white" : "text-on-background"}`}>
                Nexora Labs
            </span>
        </div>
    );
};

export default Logo;
