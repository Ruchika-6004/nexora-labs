import { m } from "framer-motion";
import { pageVariants } from "../utils/motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Innovation = () => {
    useScrollReveal();

    const timelineSteps = [
        {
            title: "Fundamental Research",
            description: "Identifying emergent theoretical physics and computational models to solve tomorrow's architectural bottlenecks.",
            icon: "science",
            colorClass: "bg-primary"
        },
        {
            title: "Prototyping & Stress",
            description: "Rigorous sandboxing where we push emerging tech to its absolute breaking point to ensure industrial stability.",
            icon: "architecture",
            colorClass: "bg-secondary"
        },
        {
            title: "Strategic Integration",
            description: "Fusing validated technologies into existing enterprise ecosystems with zero friction or operational downtime.",
            icon: "hub",
            colorClass: "bg-primary"
        },
        {
            title: "Global Deployment",
            description: "Scaling refined solutions across global networks, supported by our intelligent monitoring and autonomous maintenance systems.",
            icon: "public",
            colorClass: "bg-secondary"
        }
    ];

    return (
        <m.main initial="initial" animate="animate" variants={pageVariants} className="pt-20 bg-background">
            

            {/* Hero Section */}
            <section className="relative min-h-150 flex items-center overflow-hidden px-4 sm:px-6 md:px-10 py-12 md:py-20 bg-dot-pattern">
                {/* Soft radial glow behind hero */}
                <div className="absolute inset-0 radial-glow-hero -z-10 pointer-events-none opacity-80"></div>
                <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full text-primary font-label-md text-sm uppercase tracking-widest animate-prepare-badge">
                            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                            Future Forward
                        </div>
                        <h1 className="font-display-lg text-display-lg text-primary leading-none">
                            Beyond the <br />
                            <span className="text-secondary">Horizon.</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                            At Nexora Labs, we don't just follow trends—we define them. Our innovation engine transforms speculative concepts into high-fidelity enterprise realities through rigorous R&amp;D.
                        </p>
                        <div className="flex gap-stack-sm pt-2">
                            <Link to="/solutions" className="inline-block">
                                <button className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md transition-all duration-300 hover:shadow-lg hover:-translate-y-px cursor-pointer">
                                    Explore Labs
                                </button>
                            </Link>
                            <Link to="/case-studies" className="inline-block">
                                <button className="bg-transparent border border-primary text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all duration-300 hover:-translate-y-px cursor-pointer">
                                    Read the Thesis
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block relative h-125 animate-prepare-hero-visual">
                        <div className="w-full h-full premium-image-wrapper premium-card-hover">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent z-10"></div>
                            <img
                                className="w-full h-full object-cover" loading="lazy" decoding="async"
                                alt="A futuristic laboratory setting with holographic data projections and minimalist architecture."
                                src="/innovation-lab.webp"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-xl border border-black/4 shadow-lg w-64 animate-bounce-slow">
                            <div className="text-secondary font-headline-md text-headline-md mb-1">98%</div>
                            <div className="text-on-surface-variant font-label-md text-sm">R&amp;D Translation Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gradient-divider" />

            {/* Business Impact Bar */}
            <section className="bg-[#fcfcfd] py-12 border-b border-black/2 animate-prepare-impact bg-grid-pattern relative">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                    <div className="text-center">
                        <p className="text-primary font-headline-lg text-headline-lg font-bold">40%</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">Efficiency Gains</p>
                    </div>
                    <div className="text-center">
                        <p className="text-secondary font-headline-lg text-headline-lg font-bold">&lt;1ms</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">Network Latency</p>
                    </div>
                    <div className="text-center">
                        <p className="text-primary font-headline-lg text-headline-lg font-bold">24/7</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">AI Governance</p>
                    </div>
                    <div className="text-center">
                        <p className="text-secondary font-headline-lg text-headline-lg font-bold">12+</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">Global Patents</p>
                    </div>
                </div>
            </section>

            <div className="gradient-divider" />

            {/* Innovation Journey */}
            <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 max-w-container-max mx-auto overflow-hidden bg-background animate-prepare-journey">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Innovation Journey</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
                </div>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/50 hidden md:block"></div>
                    <div className="space-y-12 relative">
                        {timelineSteps.map((step, index) => {
                            const isEven = index % 2 === 1;
                            return (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    {/* Text Side */}
                                    <div className={`space-y-2 ${isEven ? "order-2 md:text-left" : "order-2 md:order-1 md:text-right"}`}>
                                        <h3 className={`font-headline-md text-headline-md ${isEven ? "text-secondary" : "text-primary"}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-on-surface-variant max-w-md ${isEven ? "mr-auto" : "ml-auto"}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                    {/* Icon Side */}
                                    <div className={`relative order-1 flex ${isEven ? "justify-start md:order-1 md:justify-end" : "md:order-2 md:justify-start"}`}>
                                        <div className={`w-12 h-12 ${step.colorClass} rounded-full border-4 border-surface z-10 flex items-center justify-center ${isEven ? "md:-mr-6" : "md:-ml-6"}`}>
                                            <span className="material-symbols-outlined text-white">{step.icon}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="gradient-divider" />

            {/* Tech Pillars (Bento Grid) */}
            <section className="py-16 md:py-24 bg-[#fcfcfd] border-b border-black/2 animate-prepare-pillars relative overflow-hidden bg-grid-pattern">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-10 relative z-10">
                    <div className="mb-12 md:mb-16">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Innovation Pillars</h2>
                        <p className="text-on-surface-variant mt-2">Core specializations driving our current research cycle.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-gutter">
                        {/* Card 1 */}
                        <div className="sm:col-span-2 glass-card p-8 rounded-xl group border border-black/4">
                            <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                smart_toy
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3">Intelligent Automation</h3>
                            <p className="text-on-surface-variant font-body-md">
                                Self-healing infrastructures and cognitive workflows that anticipate system failures before they occur.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="sm:col-span-2 lg:col-span-2 glass-card p-8 rounded-xl group border border-black/4">
                            <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                cloud_sync
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3">Cloud Innovation</h3>
                            <p className="text-on-surface-variant font-body-md">
                                Next-generation serverless architectures designed for multi-cloud resilience and planetary-scale throughput.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="sm:col-span-2 lg:col-span-2 bg-primary text-on-primary p-8 rounded-xl border border-primary/20 transition-all duration-300 hover:-translate-y-0.75 hover:shadow-lg relative overflow-hidden group text-left">
                            <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    security
                                </span>
                            </div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4 inline-block">
                                    encrypted
                                </span>
                                <h3 className="font-headline-md text-headline-md mb-3 text-white">Cyber Research</h3>
                                <p className="text-primary-fixed-dim font-body-md">
                                    Quantum-resistant encryption and zero-trust verification models for a decentralized future.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="sm:col-span-3 glass-card p-8 rounded-xl group border border-black/4">
                            <div className="flex flex-col md:flex-row md:items-center gap-8">
                                <div className="w-full md:w-1/3">
                                    <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                        database
                                    </span>
                                    <h3 className="font-headline-md text-headline-md text-primary">Data Engineering</h3>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <p className="text-on-surface-variant font-body-md">
                                        Advanced ETL pipelines and neural-network enhanced data lakes that turn raw information into strategic intelligence assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="sm:col-span-3 bg-secondary text-on-secondary p-8 rounded-xl border border-secondary/20 transition-all duration-300 hover:-translate-y-0.75 hover:shadow-lg group text-left">
                            <div className="flex flex-col md:flex-row-reverse md:items-center gap-8">
                                <div className="w-full md:w-1/3">
                                    <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                        psychology
                                    </span>
                                    <h3 className="font-headline-md text-headline-md text-white">Future Tech</h3>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <p className="text-on-secondary/80 font-body-md">
                                        Exploring the frontiers of quantum computing, biotechnological interfaces, and decentralized energy distribution networks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gradient-divider" />

            {/* R&D Hub Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 max-w-container-max mx-auto animate-prepare-hub bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-gutter">
                            <div className="space-y-gutter pt-12">
                                <div className="aspect-square premium-image-wrapper premium-card-hover">
                                    <img
                                        className="w-full h-full object-cover" loading="lazy" decoding="async"
                                        alt="A clean, minimalist R&amp;D laboratory workstation featuring sleek monitors showing complex data visualizations."
                                        src="/innovation-workstation.webp"
                                    />
                                </div>
                                <div className="glass-card p-8 rounded-xl border border-black/4">
                                    <h4 className="font-headline-md text-primary mb-2">Neural Lab</h4>
                                    <p className="text-sm text-on-surface-variant">Focusing on ethical AI and large-scale language model alignment.</p>
                                </div>
                            </div>
                            <div className="space-y-gutter">
                                <div className="bg-primary p-8 rounded-xl border border-primary/20 text-on-primary transition-all duration-300 hover:-translate-y-px hover:shadow-md">
                                    <h4 className="font-headline-md mb-2 text-white">Edge Lab</h4>
                                    <p className="text-sm text-primary-fixed-dim">Developing autonomous sensor networks for extreme environments.</p>
                                </div>
                                <div className="aspect-square premium-image-wrapper premium-card-hover">
                                    <img
                                        className="w-full h-full object-cover" loading="lazy" decoding="async"
                                        alt="Close-up of a high-tech processor or quantum chip under controlled blue and purple studio lighting."
                                        src="/innovation-chip.webp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Strategic R&amp;D Ecosystem</h2>
                        <p className="text-body-lg text-on-surface-variant">
                            Our labs serve as the crucible for high-risk, high-reward experimentation. By partnering with leading academic institutions and silicon pioneers, we maintain a 3-5 year lead on market-ready technologies.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-secondary">verified</span>
                                <span className="text-on-surface font-body-md">Peer-reviewed research published in leading journals.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-secondary">verified</span>
                                <span className="text-on-surface font-body-md">Joint ventures with Fortune 100 technology divisions.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-secondary">verified</span>
                                <span className="text-on-surface font-body-md">Incubation programs for disruptive deep-tech startups.</span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link to="/contact" className="inline-block">
                                <button className="bg-transparent border-b-2 border-secondary text-secondary font-label-md py-1 px-1 flex items-center gap-2 transition-all group cursor-pointer">
                                    Explore Partnerships <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gradient-divider" />

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-[#fcfcfd] border-b border-black/2 animate-prepare-process relative overflow-hidden bg-grid-pattern">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-10 text-center relative z-10">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-10 md:mb-12">How We Innovate</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4 px-6">
                            <div className="text-secondary font-display-lg opacity-20 leading-none">01</div>
                            <h3 className="font-headline-md text-primary">Observation</h3>
                            <p className="text-on-surface-variant">We study industry friction points and emerging scientific breakthroughs to find the 'white space' of opportunity.</p>
                        </div>
                        <div className="space-y-4 px-6">
                            <div className="text-secondary font-display-lg opacity-20 leading-none">02</div>
                            <h3 className="font-headline-md text-primary">Iteration</h3>
                            <p className="text-on-surface-variant">Rapid prototyping using our proprietary 'Fail-Fast' framework ensures we only invest in viable, scalable tech.</p>
                        </div>
                        <div className="space-y-4 px-6">
                            <div className="text-secondary font-display-lg opacity-20 leading-none">03</div>
                            <h3 className="font-headline-md text-primary">Validation</h3>
                            <p className="text-on-surface-variant">Real-world stress testing within client ecosystems before moving to global deployment cycles.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="gradient-divider" />

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 animate-prepare-cta bg-background">
                <div className="max-w-container-max mx-auto relative rounded-3xl overflow-hidden bg-linear-to-br from-primary via-[#001733] to-[#1a0033] p-12 md:p-24 text-center border border-black/4">
                    {/* Animated atmospheric circle */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                    <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary">
                            Partner with the <span className="text-secondary-fixed">Future</span>
                        </h2>
                        <p className="text-primary-fixed-dim text-body-lg">
                            Accelerate your organization's digital evolution with Nexora Labs' innovation pipeline. Let's build what's next, together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link to="/contact">
                                <button className="bg-secondary text-on-secondary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all hover:-translate-y-px shadow-xl w-full sm:w-auto cursor-pointer">
                                    Start Collaboration
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="bg-transparent border border-on-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all hover:-translate-y-px w-full sm:w-auto cursor-pointer">
                                    Schedule a Workshop
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </m.main>
    );
};

export default Innovation;