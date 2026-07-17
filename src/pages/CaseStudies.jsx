import { useState } from "react";
import { m } from "framer-motion";
import { pageVariants } from "../utils/motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

const caseStudiesData = [
    {
        id: "medisync",
        category: "Healthcare",
        filterCategory: "Healthcare",
        title: "MediSync AI Diagnostics",
        description: "Implementing real-time data orchestration for personalized patient treatment plans across 50+ clinics.",
        imageSrc: "/case-healthcare.webp",
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
        imageSrc: "/case-study-visual.png",
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
        imageSrc: "/case-security.webp",
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
        imageSrc: "/solutions-cloud.webp",
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
    useScrollReveal();

    const filteredCaseStudies = selectedFilter === "All"
        ? caseStudiesData
        : caseStudiesData.filter(item => item.filterCategory === selectedFilter);

    return (
        <m.main initial="initial" animate="animate" variants={pageVariants} className="pt-20">
            

            {/* Success Stories Header */}
            <section className="py-10 md:py-10 md:py-16 px-4 sm:px-6 md:px-10 max-w-container-max mx-auto text-center md:text-left animate-prepare-header">
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
            <section className="relative min-h-[500px] flex items-center overflow-hidden mb-8 md:mb-12 md:mb-10 md:mb-16 animate-prepare-featured">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/case-fintech.webp')"
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
                </div>
                <div className="relative z-10 px-4 sm:px-6 md:px-10 max-w-container-max mx-auto w-full py-10 md:py-10 md:py-16">
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
                        <Link to="/contact">
                            <button className="bg-white text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-lg cursor-pointer">
                                View Full Case Study
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Case Study Grid (Masonry-like Bento) */}
            <section className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto py-10 md:py-10 md:py-16 border-t border-outline-variant/20 animate-prepare-grid">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
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
                                    <span className="text-secondary font-label-md text-xs sm:text-label-md mb-2 block">
                                        {card.category}
                                    </span>
                                    <h3 className="font-headline-md text-lg md:text-lg sm:text-headline-md text-primary mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Custom Bottom Blocks based on card type */}
                                {card.hasArrow && (
                                    <div className="border-t border-outline-variant/30 pt-4 flex items-center justify-between">
                                        <div>
                                            <span className="font-label-md text-label-md text-xs sm:text-label-md text-on-surface-variant block">
                                                {card.resultLabel}
                                            </span>
                                            <span className="font-headline-md text-lg md:text-headline-md text-primary">
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
                                        <span className="font-label-md text-label-md text-xs sm:text-label-md text-on-surface-variant block">
                                            {card.resultLabel}
                                        </span>
                                        <span className="font-headline-md text-lg md:text-headline-md text-primary">
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
                                            <span className="font-headline-md text-lg md:text-headline-md text-on-tertiary-fixed font-bold">
                                                {card.tertiaryValue}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-4 pt-4 border-t border-outline-variant/30 flex gap-4 text-xs font-label-md">
                                    <Link to={card.id === "medisync" ? "/solutions#artificial-intelligence" : card.id === "nextgen" ? "/solutions#software-development" : card.id === "vanguard" ? "/solutions#cybersecurity" : "/solutions#cloud-engineering"} className="text-secondary hover:text-primary transition-colors font-bold">
                                        Related Solution
                                    </Link>
                                    <span className="text-outline-variant">|</span>
                                    <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors font-bold">
                                        Discuss Similar Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Impact Map */}
            <section className="py-10 md:py-10 md:py-16 bg-primary-container text-white overflow-hidden border-t border-outline-variant/20 animate-prepare-map">
                <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
                        <div className="relative">
                            <h2 className="font-headline-lg text-headline-lg mb-6">Our global footprint is expanding.</h2>
                            <p className="font-body-lg text-body-lg text-on-primary-container mb-8 md:mb-12">
                                Nexora Labs operates across 4 continents, delivering locally optimized technology with global-scale reliability.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container">
                                        <span className="material-symbols-outlined">public</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-lg md:text-headline-md">24+ Countries</h4>
                                        <p className="font-body-sm text-xs sm:text-body-sm opacity-70">
                                            Active deployments in North America, Europe, Asia, and Oceania.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary-container p-2 rounded-lg text-on-secondary-container">
                                        <span className="material-symbols-outlined">partner_exchange</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-lg md:text-headline-md">Fortune 500 Network</h4>
                                        <p className="font-body-sm text-xs sm:text-body-sm opacity-70">
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
                                            backgroundImage: "url('/contact-map.webp')"
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </m.main>
    );
};

export default CaseStudies;