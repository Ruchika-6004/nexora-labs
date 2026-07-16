import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Innovation = () => {
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

        // Simple button active scaling micro-interactions
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
                .glass-panel {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center overflow-hidden px-margin-desktop py-12 md:py-16">
                <div className="absolute inset-0 z-0 opacity-10"></div>
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
                            <button className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md shadow-lg transition-transform">
                                Explore Labs
                            </button>
                            <button className="bg-transparent border border-primary text-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                                Read the Thesis
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block relative h-[500px] animate-prepare-hero-visual">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden editorial-shadow border border-outline-variant/30">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                            <img
                                className="w-full h-full object-cover"
                                alt="A futuristic laboratory setting with holographic data projections and minimalist architecture."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXUqtZxXxwsxkabCO7MrRtsU48HribgJr1bvdHARKFx4G1EHjyACSslw3cRaLgIPr20SLjMexd_FxaO5i_ecEftzydI8CmL2MXm48mvj9tnkqYE0_Mwxp6657e7tAorTze1ktlgAg0vYkXzguKFl_P2j2Ab6jyfuQsXqzuce-WDkUzAfmjc2V8FW5dhy5_44H38s3Ydh24QwwdFBAmQPyU1TntNT8QyLCIlXmyVRH71ua7RCVnhx97"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-xl editorial-shadow border border-outline-variant/30 w-64 animate-bounce-slow">
                            <div className="text-secondary font-headline-md text-headline-md mb-1">98%</div>
                            <div className="text-on-surface-variant font-label-md text-sm">R&amp;D Translation Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact Bar */}
            <section className="bg-surface-container-low py-12 border-y border-outline-variant/20 animate-prepare-impact">
                <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="text-primary font-headline-lg text-headline-lg">40%</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">Efficiency Gains</p>
                    </div>
                    <div className="text-center">
                        <p className="text-secondary font-headline-lg text-headline-lg">&lt;1ms</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">Network Latency</p>
                    </div>
                    <div className="text-center">
                        <p className="text-primary font-headline-lg text-headline-lg">24/7</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">AI Governance</p>
                    </div>
                    <div className="text-center">
                        <p className="text-secondary font-headline-lg text-headline-lg">12+</p>
                        <p className="text-on-surface-variant font-label-md text-label-md">Global Patents</p>
                    </div>
                </div>
            </section>

            {/* Innovation Journey */}
            <section className="py-12 md:py-16 px-margin-desktop max-w-container-max mx-auto overflow-hidden animate-prepare-journey">
                <div className="text-center mb-12">
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

            {/* Tech Pillars (Bento Grid) */}
            <section className="py-12 md:py-16 bg-surface-container-lowest border-t border-outline-variant/20 animate-prepare-pillars">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="mb-12">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Innovation Pillars</h2>
                        <p className="text-on-surface-variant mt-2">Core specializations driving our current research cycle.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
                        {/* Card 1 */}
                        <div className="md:col-span-2 glass-card p-8 rounded-xl group">
                            <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                smart_toy
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3">Intelligent Automation</h3>
                            <p className="text-on-surface-variant font-body-md">
                                Self-healing infrastructures and cognitive workflows that anticipate system failures before they occur.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="md:col-span-2 lg:col-span-2 glass-card p-8 rounded-xl group">
                            <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                cloud_sync
                            </span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3">Cloud Innovation</h3>
                            <p className="text-on-surface-variant font-body-md">
                                Next-generation serverless architectures designed for multi-cloud resilience and planetary-scale throughput.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="md:col-span-2 lg:col-span-2 bg-primary text-on-primary p-8 rounded-xl border border-primary/20 editorial-shadow transition-all relative overflow-hidden group">
                            <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    security
                                </span>
                            </div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4 inline-block">
                                    encrypted
                                </span>
                                <h3 className="font-headline-md text-headline-md mb-3">Cyber Research</h3>
                                <p className="text-primary-fixed-dim font-body-md">
                                    Quantum-resistant encryption and zero-trust verification models for a decentralized future.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="md:col-span-3 glass-card p-8 rounded-xl group">
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
                        <div className="md:col-span-3 bg-secondary text-on-secondary p-8 rounded-xl border border-secondary/20 editorial-shadow transition-all group">
                            <div className="flex flex-col md:flex-row-reverse md:items-center gap-8">
                                <div className="w-full md:w-1/3">
                                    <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                                        psychology
                                    </span>
                                    <h3 className="font-headline-md text-headline-md">Future Tech</h3>
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

            {/* R&D Hub Section */}
            <section className="py-12 md:py-16 px-margin-desktop max-w-container-max mx-auto animate-prepare-hub">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-gutter">
                            <div className="space-y-gutter pt-12">
                                <div className="aspect-square rounded-2xl overflow-hidden editorial-shadow border border-outline-variant/30">
                                    <img
                                        className="w-full h-full object-cover"
                                        alt="A clean, minimalist R&amp;D laboratory workstation featuring sleek monitors showing complex data visualizations."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7u8hohE77IeUgGKibln7Mtpu9Xx8c4JLrZ_FlXOtIu-KyiplckAPyqKCJOuFlSZoaUTPplTdFF6nVrE0vgdVwMfYfedN0eLpGEQHtqVv1mLO68cMTu32ha1goZ74zJCyt87bSPPK5y5ut0tZoRtkQ7aYhMqAGooj40HvqSQG_F-xTjdTci80Og5ED1OVERLJ2MS_J5opDCb1WuPG1M8NefdA93Uux-O3bbFsL7VwzUVsKT59RfR9n"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="glass-card p-8 rounded-2xl">
                                    <h4 className="font-headline-md text-primary mb-2">Neural Lab</h4>
                                    <p className="text-sm text-on-surface-variant">Focusing on ethical AI and large-scale language model alignment.</p>
                                </div>
                            </div>
                            <div className="space-y-gutter">
                                <div className="bg-primary p-8 rounded-2xl border border-primary/20 text-on-primary editorial-shadow">
                                    <h4 className="font-headline-md mb-2">Edge Lab</h4>
                                    <p className="text-sm text-primary-fixed-dim">Developing autonomous sensor networks for extreme environments.</p>
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden editorial-shadow border border-outline-variant/30">
                                    <img
                                        className="w-full h-full object-cover"
                                        alt="Close-up of a high-tech processor or quantum chip under controlled blue and purple studio lighting."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0_FCflxi6xx53AwQmTV0be0vD0SORsLlzFIT8BhstDWC_CDp4pK_jwUz3TS71LzliXUeXtIBmBGH4XKdnspQdop1UuUqobvY2oePkZVrCH5Thh_OhGlgvIpj2fswnLN1-3BRcf4g1-t-ogHxcV3dk4iW4tWIOUuXiMRNOySWKYPPWQNGody10T2n6MJqD9Kn3ynq2dm06AlLHic7tr2UY8GaV20yz1cA0hdbHG4Ewsu6iWYMdDemZ"
                                        loading="lazy"
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
                            <button className="bg-transparent border-b-2 border-secondary text-secondary font-label-md py-1 px-1 hover:gap-4 flex items-center gap-2 transition-all group">
                                Explore Partnerships <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-12 md:py-16 bg-surface-container-lowest border-t border-outline-variant/20 animate-prepare-process">
                <div className="max-w-container-max mx-auto px-margin-desktop text-center">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-12">How We Innovate</h2>
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

            {/* CTA Section */}
            <section className="py-12 md:py-16 px-margin-desktop animate-prepare-cta">
                <div className="max-w-container-max mx-auto relative rounded-3xl overflow-hidden bg-primary p-12 md:p-24 text-center">
                    <div className="absolute inset-0 opacity-20"></div>
                    <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary">
                            Partner with the <span className="text-secondary-fixed">Future</span>
                        </h2>
                        <p className="text-primary-fixed-dim text-body-lg">
                            Accelerate your organization's digital evolution with Nexora Labs' innovation pipeline. Let's build what's next, together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <button className="bg-secondary text-on-secondary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:brightness-110 shadow-xl transition-all">
                                Start Collaboration
                            </button>
                            <button className="bg-transparent border border-on-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all">
                                Schedule a Workshop
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Innovation;