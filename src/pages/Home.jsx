import { m } from "framer-motion";
import { pageVariants } from "../utils/motion";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Home = () => {
    useScrollReveal();

    return (
        <m.main initial="initial" animate="animate" variants={pageVariants} className="pt-20">
            

            {/* Hero Section: Editorial Asymmetry */}
            <section className="relative px-4 sm:px-6 md:px-10 max-w-container-max mx-auto py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter items-center">
                    <div className="lg:col-span-7 z-10 space-y-6 text-center lg:text-left">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                            EST. 2024
                        </span>
                        <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-display-lg text-primary leading-tight">
                            Architecting the{" "}
                            <span className="text-secondary italic font-normal">
                                Future
                            </span>{" "}
                            of High-Fidelity Systems.
                        </h1>
                        <p className="font-body-lg text-body-sm sm:text-body-md md:text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0">
                            We blend high-level strategy with precise technical
                            execution to build the next generation of enterprise
                            digital infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                            <Link to="/solutions" className="w-full sm:w-auto">
                                <button className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md flex items-center gap-2 group transition-all editorial-shadow cursor-pointer justify-center w-full sm:w-auto">
                                    Explore Labs
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                        arrow_forward
                                    </span>
                                </button>
                            </Link>
                            <Link to="/innovation" className="w-full sm:w-auto">
                                <button className="bg-surface border border-outline-variant text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md transition-all hover:bg-surface-container-low cursor-pointer justify-center w-full sm:w-auto">
                                    Our Methodology
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-prepare-hero max-w-md mx-auto lg:max-w-none w-full">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow transform bg-surface-container-highest border border-outline-variant/30 animate-hero-float-glow">
                            <img
                                className="w-full h-full object-cover premium-img-hover" alt="Sophisticated data architecture crystalline structure" src="/hero-crystal.png" fetchPriority="high" loading="eager" decoding="async"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>
 
             {/* Core Disciplines */}
             <section className="bg-surface-container-lowest py-10 md:py-16 border-y border-outline-variant/30 animate-prepare-disciplines">
                 <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto">
                     <div className="mb-10 md:mb-12 max-w-2xl text-center md:text-left">
                         <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary mb-4">
                             Core Disciplines
                         </h2>
                         <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant">
                             Three pillars of engineering excellence that define
                             our laboratory output.
                         </p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                         {/* AI & Intelligence */}
                         <Link to="/solutions#artificial-intelligence" className="group border-l-2 border-outline-variant hover:border-secondary pl-6 md:pl-8 py-2 md:py-4 transition-all block">
                             <span className="material-symbols-outlined text-4xl text-secondary mb-4 md:mb-6 block">
                                 psychology
                             </span>
                             <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3 md:mb-4">
                                 Generative Intelligence
                             </h3>
                             <p className="font-body-md text-body-sm sm:text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                                 Developing proprietary LLM architectures and
                                 neural interfaces that integrate seamlessly into
                                 existing enterprise workflows.
                             </p>
                         </Link>
                         {/* Cloud Infrastructure */}
                         <Link to="/solutions#cloud-engineering" className="group border-l-2 border-outline-variant hover:border-primary pl-6 md:pl-8 py-2 md:py-4 transition-all block">
                             <span className="material-symbols-outlined text-4xl text-primary mb-4 md:mb-6 block">
                                 cloud_done
                             </span>
                             <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3 md:mb-4">
                                 Cloud Orchestration
                             </h3>
                             <p className="font-body-md text-body-sm sm:text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                                 High-availability serverless ecosystems designed
                                 for global scale, prioritizing zero-latency and
                                 resilient failover logic.
                             </p>
                         </Link>
                         {/* Cyber Systems */}
                         <Link to="/solutions#cybersecurity" className="group border-l-2 border-outline-variant hover:border-secondary-container pl-6 md:pl-8 py-2 md:py-4 transition-all block">
                             <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4 md:mb-6 block">
                                 shield_lock
                             </span>
                             <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3 md:mb-4">
                                 Fortified Security
                             </h3>
                             <p className="font-body-md text-body-sm sm:text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                                 Implementing quantum-resistant encryption and
                                 predictive threat modeling to secure the most
                                 sensitive data vectors.
                             </p>
                         </Link>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-10 md:py-16 bg-background overflow-hidden animate-prepare-philosophy">
                <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary mb-6 md:mb-8 leading-tight">
                            Innovation through{" "}
                            <span className="text-secondary/80">
                                Collective Intelligence
                            </span>
                            .
                        </h2>
                        <div className="w-16 md:w-24 h-1 bg-primary mx-auto mb-6 md:mb-8 rounded-full"></div>
                        <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant md:text-2xl font-light italic leading-relaxed">
                            "At Nexora, we don't just build software. We
                            engineer cognitive frameworks that allow businesses
                            to out-think their competition before the first line
                            of code is even committed."
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Insight: High-Fidelity Card */}
            <section className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto pb-12 md:pb-16 animate-prepare-insight">
                <div className="relative rounded-2xl overflow-hidden glass-card flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]">
                    <div className="md:w-1/2 w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/40 z-10">
                        <span className="font-label-md text-label-md text-xs sm:text-label-md text-secondary uppercase tracking-widest mb-3 md:mb-4">
                            Latest Case Study
                        </span>
                        <h3 className="font-headline-lg text-xl sm:text-headline-lg text-primary mb-4 md:mb-6">
                            The Quant Project: Real-time Data Liquidity for
                            Global Markets
                        </h3>
                        <p className="font-body-md text-body-sm sm:text-body-sm sm:text-body-md text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
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
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-surface-container-low overflow-hidden">
                        <img
                            className="w-full h-full object-cover premium-img-hover" alt="An abstract visualization of financial data flow" src="/case-study-visual.png" loading="lazy" decoding="async"
                        />
                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block"></div>
                    </div>
                </div>
            </section>

            {/* Client Trust: Logo Cloud */}
            <section className="bg-surface py-10 md:py-16 border-t border-outline-variant/20 animate-prepare-logos">
                <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto">
                    <p className="text-center font-label-md text-label-md text-on-surface-variant mb-6 md:mb-8 uppercase tracking-widest">
                        Trusted by Industry Leaders
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
                        {/* Faux Logos using Geist and simple shapes */}
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-primary rounded-sm"></div>
                            <span className="text-lg md:text-headline-md font-bold text-primary">
                                AETHER
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-primary rotate-45"></div>
                            <span className="text-lg md:text-headline-md font-bold text-primary">
                                VERTEX
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-3.5 bg-primary rounded-full"></div>
                            <span className="text-lg md:text-headline-md font-bold text-primary">
                                NOVA
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-5 bg-primary"></div>
                            <div className="w-1 h-5 bg-primary"></div>
                            <span className="text-lg md:text-headline-md font-bold text-primary">
                                AXIS
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-primary flex items-center justify-center rounded-full">
                                <div className="w-1.5 h-1.5 bg-white"></div>
                            </div>
                            <span className="text-lg md:text-headline-md font-bold text-primary">
                                ORBIT
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </m.main>
    );
};

export default Home;