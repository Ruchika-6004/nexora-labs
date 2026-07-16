import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const caseStudiesData = [
    {
        id: "medisync",
        category: "Healthcare",
        filterCategory: "Healthcare",
        title: "MediSync AI Diagnostics",
        description: "Implementing real-time data orchestration for personalized patient treatment plans across 50+ clinics.",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcqWwyxRu2WNVNtILkH7cgAq8m-RiYcM3_ZKhRpAqiI7-D5bXoM9Q9SfURFMnEUCXzjinx1oxwPDdIPlT2OFRUuPYD3A4bXBESSdc9A185HqWcHNdHFemCXC2L4hvRcrlkujFFI9bZnuRAmb2TYuVEI9hB00lMQaBhzf-3Lqmj5NLRgWihVj71zpgvKeNLwi8y4abvSDbfMdbv8vAHCwkT9yOJ-RgxEswTqc-k0v0M8U-qRulcBgDi",
        imageAlt: "A modern medical diagnostic laboratory with advanced robotic arms.",
        gridClass: "md:col-span-2",
        layoutClass: "flex-col md:flex-row",
        resultLabel: "Key Result",
        resultValue: "99.8% Accuracy",
        hasArrow: true
    },
    {
        id: "nextgen",
        category: "Retail",
        filterCategory: "Retail",
        title: "NextGen Storefront",
        description: "Omnichannel inventory sync for a luxury global fashion house.",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD7dY1XMEJGihpam44RA2gpWUZ0Age9lnM1cf2pxb5nUf1w5mw5A3EwFrOT0IgeZ4SbAoARdLx-mrnzVnxMW6L8qRcHgmH4OZ5ka4i9jQwpAE49UtIoxjXLFA_6Jb4nmjCQxrwntW8-PYq3ZF6k1pdWgUbXTC_jnw6rxoGvLPun8sfrRO2FYOyBBBxek3rojDcbz1qcB9L_cP2oBjNaseQbVzBCDib9M7ahrRW-ZdP9--i3woElNrI",
        imageAlt: "An upscale, minimalist retail space with architectural lighting.",
        gridClass: "col-span-1",
        layoutClass: "flex-col",
        resultLabel: "Sales Growth",
        resultValue: "+32% YoY",
        isStatBox: true
    },
    {
        id: "vanguard",
        category: "Cybersecurity",
        filterCategory: "Finance",
        title: "Vanguard Protocol",
        description: "End-to-end encryption upgrade for a national banking consortium.",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSj8vGZiCDvr22whlI-uFl4PvCKBdZFLSVUOhTPJQq2DG2QkHzHaH0t9rjjp-GhutSzfolTvo-C8HFgGQA3l4cgjujmVaKW_IofJTo_3sX2G6KWJinhDAdOXoGzimPIyXl3vhs8cowT8ZuU0kMCfcvVMsftTk2ZJ8bAB9cRYDNdqk8Li5m3X0J2S7Z9_3eDdLUwZENAWkOm5XhVhvu27VYKw7OzL3wO09ALCMrrefhFv3cVxfWyufA",
        imageAlt: "A close-up of a digital interface showing complex cryptographic strings.",
        gridClass: "col-span-1",
        layoutClass: "flex-col",
        isProgressBar: true,
        progressLabel: "Zero Breaches"
    },
    {
        id: "globalroute",
        category: "Logistics",
        filterCategory: "Logistics",
        title: "Global Route Optimizer",
        description: "Reducing carbon footprint through ML-driven fleet orchestration and real-time traffic analysis.",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo1m4ZIA4IDisegj8gZOrZOZx14eY7Ahtw8HqOgP6mKTAJoWsBcbvw6GpiVULX_3sHIfZOIVySLJns3J8cIfbTiHTyIgiGNlD2f-X-oYylAFXOduiZXB_1rGL3vKvF2vetrWuqlRjmZv2sDsnsSMi46-DQQ7CaOuY6cuxXZ-OwIngI1aHO9QLtCZGhHEo2wwwMJqvzY_8q7bz1OXJbgLfH3rIaBqa1IB5-ZWsJUmbf8gq-GfYX9g7s",
        imageAlt: "A large-scale logistics hub at dusk with automated vehicles.",
        gridClass: "md:col-span-2",
        layoutClass: "flex-col md:flex-row-reverse",
        isTertiaryBox: true,
        tertiaryLabel: "CO2 Reduction",
        tertiaryValue: "15,000 Tons"
    }
];

const CaseStudies = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

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

        // Haptic scaling micro-interactions
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

    const filteredCaseStudies = selectedFilter === "All"
        ? caseStudiesData
        : caseStudiesData.filter(item => item.filterCategory === selectedFilter);

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
            `}</style>

            {/* Success Stories Header */}
            <section className="py-12 md:py-16 px-margin-desktop max-w-container-max mx-auto text-center md:text-left animate-prepare-header">
                <div className="max-w-3xl">
                    <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-md text-label-md mb-4 uppercase tracking-widest">
                        Global Success
                    </span>
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                        Proven results for the digital frontier.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                        We partner with industry leaders to solve their most complex technical challenges. Explore how Nexora Labs delivers high-fidelity innovation across global markets.
                    </p>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="relative min-h-[500px] flex items-center overflow-hidden mb-12 md:mb-16 animate-prepare-featured">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmR9jy2EglChHPDSsf-jRwtADQsBag41uC6hyR4iJi-bKju1C67T-ItOzoXfd8Zo2LHikDpebwFOh9faeB8BI2EG4Pe46EzIg1a7rk0oNeE81_vN6p9ZhByik4eaPKCP1k_T-qzh6bezbICNwyYH2k1_EtEUyhcdez7vRwiAHjPy604sC_WDGERk2VrjAiNhjUs6w87V_uovPDNEA_YW16azTinQZHiZuD10wsCAiq3sRvqp3XsA77')"
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
                </div>
                <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full py-12 md:py-16">
                    <div className="max-w-2xl text-white space-y-6">
                        <div className="flex items-center gap-2 text-secondary-fixed">
                            <span className="material-symbols-outlined">star</span>
                            <span className="font-label-md text-label-md uppercase tracking-wider">Featured Story</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg">
                            Lumina Financial: Reimagining Global Asset Management
                        </h2>
                        <p className="font-body-md text-body-md opacity-90 leading-relaxed">
                            How we engineered a secure, AI-driven platform for Lumina Financial, achieving 40% reduction in transaction latency across 12 international markets.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-2">
                            <div>
                                <div className="text-display-lg-mobile font-display-lg text-secondary-fixed">40%</div>
                                <div className="font-label-md text-label-md opacity-70">Lower Latency</div>
                            </div>
                            <div>
                                <div className="text-display-lg-mobile font-display-lg text-secondary-fixed">$2.4B</div>
                                <div className="font-label-md text-label-md opacity-70">Assets Managed</div>
                            </div>
                        </div>
                        <button className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-lg">
                            View Full Case Study
                        </button>
                    </div>
                </div>
            </section>

            {/* Case Study Grid (Masonry-like Bento) */}
            <section className="px-margin-desktop max-w-container-max mx-auto py-12 md:py-16 border-t border-outline-variant/20 animate-prepare-grid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-primary">Industry Diversification</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            Scalable solutions tailored for high-stakes environments.
                        </p>
                    </div>
                    {/* Horizontal scroll support for filter chips on mobile */}
                    <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-none max-w-full">
                        {["All", "Finance", "Healthcare", "Retail"].map((filter) => {
                            const isActive = selectedFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 rounded-full border font-label-md text-label-md transition-all ${
                                        isActive
                                            ? "border-primary bg-primary text-on-primary"
                                            : "border-outline-variant text-on-surface-variant hover:bg-surface-container"
                                    }`}
                                >
                                    {filter === "All" ? "All Industries" : filter}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {filteredCaseStudies.map((card) => (
                        <div
                            key={card.id}
                            className={`${card.gridClass} glass-card rounded-xl overflow-hidden flex ${card.layoutClass} group`}
                        >
                            {/* Card Image Container */}
                            <div className={`${card.gridClass.includes("col-span-2") ? "md:w-1/2" : "w-full"} ${card.id === "medisync" ? "h-64 md:h-auto" : "h-48 md:h-auto"} overflow-hidden`}>
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${card.imageSrc}')` }}
                                    title={card.imageAlt}
                                    loading="lazy"
                                ></div>
                            </div>

                            {/* Card Content Container */}
                            <div className={`p-6 ${card.gridClass.includes("col-span-2") ? "md:w-1/2" : "w-full"} flex flex-col justify-between`}>
                                <div>
                                    <span className="text-secondary font-label-md text-label-md mb-2 block">
                                        {card.category}
                                    </span>
                                    <h3 className="font-headline-md text-headline-md text-primary mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Custom Bottom Blocks based on card type */}
                                {card.hasArrow && (
                                    <div className="border-t border-outline-variant/30 pt-4 flex items-center justify-between">
                                        <div>
                                            <span className="font-label-md text-label-md text-on-surface-variant block">
                                                {card.resultLabel}
                                            </span>
                                            <span className="font-headline-md text-headline-md text-primary">
                                                {card.resultValue}
                                            </span>
                                        </div>
                                        <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300">
                                            arrow_forward
                                        </span>
                                    </div>
                                )}

                                {card.isStatBox && (
                                    <div className="bg-surface-container-low p-4 rounded-lg">
                                        <span className="font-label-md text-label-md text-on-surface-variant block">
                                            {card.resultLabel}
                                        </span>
                                        <span className="font-headline-md text-headline-md text-primary">
                                            {card.resultValue}
                                        </span>
                                    </div>
                                )}

                                {card.isProgressBar && (
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-2 bg-outline-variant/30 rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-primary rounded-full"></div>
                                        </div>
                                        <span className="font-label-md text-label-md text-primary">
                                            {card.progressLabel}
                                        </span>
                                    </div>
                                )}

                                {card.isTertiaryBox && (
                                    <div className="flex gap-4">
                                        <div className="p-4 bg-tertiary-fixed rounded-lg flex-1">
                                            <span className="font-label-md text-label-md text-on-tertiary-fixed-variant block">
                                                {card.tertiaryLabel}
                                            </span>
                                            <span className="font-headline-md text-headline-md text-on-tertiary-fixed font-bold">
                                                {card.tertiaryValue}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Impact Map */}
            <section className="py-12 md:py-16 bg-primary-container text-white overflow-hidden border-t border-outline-variant/20 animate-prepare-map">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
                        <div className="relative">
                            <h2 className="font-headline-lg text-headline-lg mb-6">Our global footprint is expanding.</h2>
                            <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
                                Nexora Labs operates across 4 continents, delivering locally optimized technology with global-scale reliability.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container">
                                        <span className="material-symbols-outlined">public</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-headline-md">24+ Countries</h4>
                                        <p className="font-body-sm text-body-sm opacity-70">
                                            Active deployments in North America, Europe, Asia, and Oceania.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container">
                                        <span className="material-symbols-outlined">partner_exchange</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-headline-md">Fortune 500 Network</h4>
                                        <p className="font-body-sm text-body-sm opacity-70">
                                            Over 60% of our clients are global enterprise market leaders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] md:h-[500px]">
                            {/* Stylized Map Points Visualization */}
                            <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'wght' 100" }}>
                                    map
                                </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full max-w-md mx-auto">
                                    {/* NY Point */}
                                    <div className="absolute top-1/3 left-1/4 group cursor-pointer">
                                        <div className="w-3 h-3 bg-secondary-fixed rounded-full animate-ping absolute"></div>
                                        <div className="w-3 h-3 bg-secondary-fixed rounded-full relative"></div>
                                        <div className="hidden group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary p-2 rounded shadow-lg text-xs whitespace-nowrap z-20 transition-all duration-300">
                                            New York (HQ)
                                        </div>
                                    </div>
                                    {/* London Point */}
                                    <div className="absolute top-1/4 left-1/2 group cursor-pointer">
                                        <div className="w-2 h-2 bg-secondary-fixed rounded-full"></div>
                                        <div className="hidden group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary p-2 rounded shadow-lg text-xs whitespace-nowrap z-20 transition-all duration-300">
                                            London Ops
                                        </div>
                                    </div>
                                    {/* Tokyo Point */}
                                    <div className="absolute top-1/3 right-1/4 group cursor-pointer">
                                        <div className="w-2 h-2 bg-secondary-fixed rounded-full"></div>
                                        <div className="hidden group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary p-2 rounded shadow-lg text-xs whitespace-nowrap z-20 transition-all duration-300">
                                            Tokyo Lab
                                        </div>
                                    </div>
                                    {/* Singapore Point */}
                                    <div className="absolute bottom-1/3 right-1/3 group cursor-pointer">
                                        <div className="w-2 h-2 bg-secondary-fixed rounded-full"></div>
                                        <div className="hidden group-hover:block absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-primary p-2 rounded shadow-lg text-xs whitespace-nowrap z-20 transition-all duration-300">
                                            Singapore Hub
                                        </div>
                                    </div>
                                    {/* Map Background Image */}
                                    <div
                                        className="w-full h-full bg-contain bg-no-repeat bg-center opacity-40"
                                        style={{
                                            backgroundImage: "url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudies;