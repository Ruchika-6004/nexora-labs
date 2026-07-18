import { m } from "framer-motion";
import { pageVariants } from "../utils/motion";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();

  return (
    <m.main
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="pt-20 bg-background"
    >
      {/* Hero Section: Editorial Asymmetry */}
      <section className="relative px-4 sm:px-6 md:px-10 max-w-container-max mx-auto pt-12 pb-14 md:pt-20 md:pb-16 bg-dot-pattern">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter items-center">
          <div className="lg:col-span-6 z-10 space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
              EST. 2026
            </span>
            <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-display-lg text-primary leading-tight">
              Architecting the{" "}
              <span className="text-secondary italic font-normal">Future</span>{" "}
              of High-Fidelity Systems.
            </h1>
            <p className="font-body-lg text-body-sm sm:text-body-md md:text-body-lg text-on-surface-variant max-w-xl mx-auto lg:mx-0">
              We blend high-level strategy with precise technical execution to
              build the next generation of enterprise digital infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <Link to="/solutions" className="w-full sm:w-auto">
                <button className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md flex items-center gap-2 group transition-all duration-300 hover:shadow-lg hover:-translate-y-px cursor-pointer justify-center w-full sm:w-auto">
                  Explore Labs
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </Link>
              <Link to="/innovation" className="w-full sm:w-auto">
                <button className="bg-surface border border-outline-variant text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md transition-all duration-300 hover:bg-surface-container-low hover:-translate-y-px cursor-pointer justify-center w-full sm:w-auto">
                  Our Methodology
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative mt-10 lg:mt-0 animate-prepare-hero w-[88%] sm:w-[90%] md:w-[75%] lg:w-full mx-auto flex items-center justify-center">
            {/* Soft radial glow behind the hero illustration */}
            <div className="absolute w-[150%] h-[150%] radial-glow-hero -z-10 pointer-events-none blur-xl"></div>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-surface-container-highest premium-image-wrapper transform animate-hero-float-glow premium-card-hover">
              <img
                className="w-full h-auto object-contain"
                alt="Sophisticated data architecture crystalline structure"
                src="/hero-crystal.png"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/8 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Core Disciplines */}
      <section className="bg-[#fcfcfd] py-16 md:py-24 border-b border-black/2 relative overflow-hidden animate-prepare-disciplines bg-grid-pattern">
        {/* Subtle radial glow in the corner */}
        <div className="absolute top-0 right-0 w-100 h-100 radial-glow-accent -z-10 opacity-60"></div>
        <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto relative z-10">
          <div className="mb-12 md:mb-16 max-w-2xl text-center md:text-left">
            <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-primary mb-4">
              Core Disciplines
            </h2>
            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant">
              Three pillars of engineering excellence that define our laboratory
              output.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* AI & Intelligence */}
            <Link
              to="/solutions#artificial-intelligence"
              className="group border-l-2 border-outline-variant hover:border-secondary pl-6 md:pl-8 py-2 md:py-4 transition-all duration-300 block"
            >
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 md:mb-6 block transition-transform group-hover:-translate-y-0.5">
                psychology
              </span>
              <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3 md:mb-4 group-hover:text-secondary transition-colors">
                Generative Intelligence
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                Developing proprietary LLM architectures and neural interfaces
                that integrate seamlessly into existing enterprise workflows.
              </p>
            </Link>
            {/* Cloud Infrastructure */}
            <Link
              to="/solutions#cloud-engineering"
              className="group border-l-2 border-outline-variant hover:border-primary pl-6 md:pl-8 py-2 md:py-4 transition-all duration-300 block"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-4 md:mb-6 block transition-transform group-hover:-translate-y-0.5">
                cloud_done
              </span>
              <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3 md:mb-4 group-hover:text-primary transition-colors">
                Cloud Orchestration
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                High-availability serverless ecosystems designed for global
                scale, prioritizing zero-latency and resilient failover logic.
              </p>
            </Link>
            {/* Cyber Systems */}
            <Link
              to="/solutions#cybersecurity"
              className="group border-l-2 border-outline-variant hover:border-secondary pl-6 md:pl-8 py-2 md:py-4 transition-all duration-300 block"
            >
              <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4 md:mb-6 block transition-transform group-hover:-translate-y-0.5">
                shield_lock
              </span>
              <h3 className="font-headline-md text-xl md:text-headline-md text-primary mb-3 md:mb-4 group-hover:text-secondary transition-colors">
                Fortified Security
              </h3>
              <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                Implementing quantum-resistant encryption and predictive threat
                modeling to secure the most sensitive data vectors.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-background overflow-hidden relative animate-prepare-philosophy">
        <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
        <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary mb-6 md:mb-8 leading-tight">
              Innovation through{" "}
              <span className="text-secondary/80">Collective Intelligence</span>
              .
            </h2>
            <div className="w-16 md:w-24 h-1 bg-secondary/20 mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant md:text-2xl font-light italic leading-relaxed">
              "At Nexora, we don't just build software. We engineer cognitive
              frameworks that allow businesses to out-think their competition
              before the first line of code is even committed."
            </p>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Featured Insight: High-Fidelity Card */}
      <section className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto py-16 md:py-24 animate-prepare-insight">
        <div className="relative rounded-2xl overflow-hidden glass-card flex flex-col md:flex-row min-h-100 md:min-h-125 border border-black/4 premium-card-hover">
          <div className="md:w-1/2 w-full p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/40 z-10">
            <span className="font-label-md text-label-md text-xs sm:text-label-md text-secondary uppercase tracking-widest mb-3 md:mb-4">
              Latest Case Study
            </span>
            <h3 className="font-headline-lg text-xl sm:text-headline-lg text-primary mb-4 md:mb-6">
              The Quant Project: Real-time Data Liquidity for Global Markets
            </h3>
            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
              How we restructured the core processing engine for a Tier 1
              financial institution, achieving a 400% increase in transaction
              throughput with sub-millisecond latency.
            </p>
            <div>
              <Link
                className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-4 transition-all font-bold"
                to="/case-studies"
              >
                View Full Report{" "}
                <span className="material-symbols-outlined">east</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-surface-container-low overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="An abstract visualization of financial data flow"
              src="/case-study-visual.png"
              loading="lazy"
              decoding="async"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-r from-white/70 via-transparent to-transparent hidden md:block"></div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* Client Trust: Logo Cloud */}
      <section className="bg-[#fcfcfd] py-16 md:py-24 border-b border-black/2 animate-prepare-logos bg-dot-pattern">
        <div className="px-4 sm:px-6 md:px-10 max-w-container-max mx-auto">
          <p className="text-center font-label-md text-label-md text-on-surface-variant mb-8 md:mb-10 uppercase tracking-widest text-xs">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Faux Logos using Geist and simple shapes */}
            <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
              <div className="w-5 h-5 bg-primary rounded-sm"></div>
              <span className="text-lg md:text-headline-md font-bold text-primary">
                AETHER
              </span>
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
              <div className="w-5 h-5 border-2 border-primary rotate-45"></div>
              <span className="text-lg md:text-headline-md font-bold text-primary">
                VERTEX
              </span>
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
              <div className="w-7 h-3.5 bg-primary rounded-full"></div>
              <span className="text-lg md:text-headline-md font-bold text-primary">
                NOVA
              </span>
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
              <div className="w-1 h-5 bg-primary"></div>
              <div className="w-1 h-5 bg-primary"></div>
              <span className="text-lg md:text-headline-md font-bold text-primary">
                AXIS
              </span>
            </div>
            <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
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
