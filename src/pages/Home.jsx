import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-8");
                }
            });
        }, observerOptions);

        const targets = document.querySelectorAll("section > div");
        targets.forEach((el) => {
            el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-8");
            observer.observe(el);
        });

        const handleMouseDown = (e) => {
            e.currentTarget.style.transform = "scale(0.98)";
        };
        const handleMouseUp = (e) => {
            e.currentTarget.style.transform = "scale(1)";
        };

        const interactiveEls = document.querySelectorAll("button, a");
        interactiveEls.forEach((el) => {
            el.addEventListener("mousedown", handleMouseDown);
            el.addEventListener("mouseup", handleMouseUp);
            el.addEventListener("mouseleave", handleMouseUp);
        });

        return () => {
            targets.forEach((el) => {
                observer.unobserve(el);
            });
            interactiveEls.forEach((el) => {
                el.removeEventListener("mousedown", handleMouseDown);
                el.removeEventListener("mouseup", handleMouseUp);
                el.removeEventListener("mouseleave", handleMouseUp);
            });
        };
    }, []);

    return (
        <main className="pt-20">
            <style>{`
                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    box-shadow: 0 4px 12px rgba(26, 54, 93, 0.04);
                    transition: all 0.3s ease;
                }
                .glass-card:hover {
                    box-shadow: 0 12px 24px rgba(26, 54, 93, 0.08);
                    transform: translateY(-2px);
                }
                .editorial-shadow {
                    box-shadow: 0 4px 12px rgba(26, 54, 93, 0.04);
                }
            `}</style>

            {/* Hero Section: Editorial Asymmetry */}
            <section className="relative px-margin-desktop max-w-container-max mx-auto py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                    <div className="lg:col-span-7 z-10 space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                            EST. 2024
                        </span>
                        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
                            Architecting the{" "}
                            <span className="text-secondary italic font-normal">
                                Future
                            </span>{" "}
                            of High-Fidelity Systems.
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                            We blend high-level strategy with precise technical
                            execution to build the next generation of enterprise
                            digital infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md flex items-center gap-2 group transition-all editorial-shadow cursor-pointer">
                                Explore Labs
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </button>
                            <button className="bg-surface border border-outline-variant text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md transition-all hover:bg-surface-container-low cursor-pointer">
                                Our Methodology
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0 animate-prepare-hero">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow transform rotate-1 bg-surface-container-highest border border-outline-variant/30">
                            <img
                                className="w-full h-full object-cover"
                                alt="Sophisticated data architecture crystalline structure"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-0oLXIGktCBpi1mTpC9C7aE5cyyJlj-IWmyGrVaqNAyPlgl4zFs2XeC7SIQeNFAZVDTnmPrMkdO7QPhy1qpHB8NUzdwbOdq3Xd0lq5H2GHJnkJ35PXueQ1_pjc8CFHSZ5k6FJofBHeAxhoLiJAJ9Br7BV3jZw804-YNWM4DfZeUkBuDzJaL4uGxDhancRtPXio0o9XODQHQsIuD7w9rt3MtdSyOznST3ROzCkkQnnT6KEn_GOMKI"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Core Disciplines */}
            <section className="bg-surface-container-lowest py-12 md:py-16 border-y border-outline-variant/30 animate-prepare-disciplines">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <div className="mb-12 max-w-2xl">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                            Core Disciplines
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Three pillars of engineering excellence that define
                            our laboratory output.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* AI & Intelligence */}
                        <div className="group border-l-2 border-outline-variant hover:border-secondary pl-8 py-4 transition-all">
                            <span className="material-symbols-outlined text-4xl text-secondary mb-6 block">
                                psychology
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-4">
                                Generative Intelligence
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Developing proprietary LLM architectures and
                                neural interfaces that integrate seamlessly into
                                existing enterprise workflows.
                            </p>
                        </div>
                        {/* Cloud Infrastructure */}
                        <div className="group border-l-2 border-outline-variant hover:border-primary pl-8 py-4 transition-all">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 block">
                                cloud_done
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-4">
                                Cloud Orchestration
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                High-availability serverless ecosystems designed
                                for global scale, prioritizing zero-latency and
                                resilient failover logic.
                            </p>
                        </div>
                        {/* Cyber Systems */}
                        <div className="group border-l-2 border-outline-variant hover:border-secondary-container pl-8 py-4 transition-all">
                            <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-6 block">
                                shield_lock
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-4">
                                Fortified Security
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Implementing quantum-resistant encryption and
                                predictive threat modeling to secure the most
                                sensitive data vectors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-12 md:py-16 bg-background overflow-hidden animate-prepare-philosophy">
                <div className="px-margin-desktop max-w-container-max mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display-lg text-display-lg-mobile md:text-6xl text-primary mb-8 leading-tight">
                            Innovation through{" "}
                            <span className="text-secondary/80">
                                Collective Intelligence
                            </span>
                            .
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
                        <p className="font-body-lg text-body-lg text-on-surface-variant md:text-2xl font-light italic">
                            "At Nexora, we don't just build software. We
                            engineer cognitive frameworks that allow businesses
                            to out-think their competition before the first line
                            of code is even committed."
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Insight: High-Fidelity Card */}
            <section className="px-margin-desktop max-w-container-max mx-auto pb-12 md:pb-16 animate-prepare-insight">
                <div className="relative rounded-2xl overflow-hidden glass-card flex flex-col md:flex-row min-h-[500px]">
                    <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white/40 z-10">
                        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">
                            Latest Case Study
                        </span>
                        <h3 className="font-headline-lg text-headline-lg text-primary mb-6">
                            The Quant Project: Real-time Data Liquidity for
                            Global Markets
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                            How we restructured the core processing engine for a
                            Tier 1 financial institution, achieving a 400%
                            increase in transaction throughput with sub-millisecond
                            latency.
                        </p>
                        <div>
                            <Link
                                className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-4 transition-all font-bold"
                                to="/case-studies"
                            >
                                View Full Report{" "}
                                <span className="material-symbols-outlined">
                                    east
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative bg-surface-container-low overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            alt="An abstract visualization of financial data flow"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Fq8ndf3jToiTAQ336kUQxNyRsqF5wYe1A8x8BYu_dz6waneu3oFa1LXwnhIILuZBGiHI8AXD7KrIgaHDmVYqeaJi7db54jE5WaBya1D2BO7gXvBc99nni4uyBjlODclP9fWIYvrvT_Z9e6mPAXF2QVl4ZCkEkjxoXt6UimH7-w8RUbdR4htdOmEeivEBf090rxpxKuxiwDHp4ucWgCanFtypfikQ96khkP4uqPK2wwDGp0I3PuyD"
                            loading="lazy"
                        />
                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block"></div>
                    </div>
                </div>
            </section>

            {/* Client Trust: Logo Cloud */}
            <section className="bg-surface py-12 md:py-16 border-t border-outline-variant/20 animate-prepare-logos">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <p className="text-center font-label-md text-label-md text-on-surface-variant mb-8 uppercase tracking-widest">
                        Trusted by Industry Leaders
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
                        {/* Faux Logos using Geist and simple shapes */}
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary rounded-sm"></div>
                            <span className="font-headline-md font-bold text-primary">
                                AETHER
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border-2 border-primary rotate-45"></div>
                            <span className="font-headline-md font-bold text-primary">
                                VERTEX
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-4 bg-primary rounded-full"></div>
                            <span className="font-headline-md font-bold text-primary">
                                NOVA
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary"></div>
                            <div className="w-1 h-6 bg-primary"></div>
                            <span className="font-headline-md font-bold text-primary">
                                AXIS
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-full">
                                <div className="w-2 h-2 bg-white"></div>
                            </div>
                            <span className="font-headline-md font-bold text-primary">
                                ORBIT
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;