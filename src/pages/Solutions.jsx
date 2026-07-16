import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const serviceBlocks = [
    {
        icon: "psychology",
        iconBg: "bg-primary-container",
        iconColor: "text-on-primary-container",
        title: "Advanced AI & Machine Learning",
        description: "Deploying sovereign AI architectures that transform raw enterprise data into predictive intelligence. Our models focus on high-reliability environments where precision is non-negotiable. We specialize in LLM fine-tuning, computer vision for manufacturing, and predictive supply chain modeling.",
        bullets: [
            "Custom Neural Network Architectures",
            "Natural Language Understanding (NLU) Systems",
            "Ethical AI Governance Frameworks"
        ],
        linkText: "Deep dive into AI capabilities",
        linkHref: "#",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd2nKGvE-7wLMRCKswK1DvO_Fnu9q9TESIKBPxHUnergCCGPqmHsq5y_Bd6gdoh0eeVdDLg4tWyh_m0IS1NFxJUSCmhOwSIH6rzh9AAwQZrTKi8_DvoBNwVNIaQ5DKP3W5na1Xf2AFY3RgDfOp8jqfXIdAuEbIwWQ7zw6AgPDNWHsSxd_Etz2dO1fLqjMfhqlDBEQPcjjG1CWTkQHfmyr1j9QRxPeSCCqEaxpyS8A-CEsfa39YiUOq",
        imageAlt: "A clean, high-fidelity technical visualization of a complex neural network structure in a dark blue and violet color palette. The graphic features glowing nodes and data pathways, suggesting high-speed processing and advanced intelligence. The lighting is crisp and modern, reflecting a premium enterprise tech aesthetic with plenty of whitespace.",
        hasOverlay: true
    },
    {
        icon: "cloud_done",
        iconBg: "bg-secondary-container",
        iconColor: "text-on-secondary-container",
        title: "Cloud-Native Infrastructure",
        description: "Architecting resilient, elastic, and high-performance cloud environments. We transition monolithic infrastructures into modern, microservices-led ecosystems using Kubernetes, Serverless, and Multi-cloud strategies. Our focus is on zero-downtime migrations and cost-optimized scaling.",
        bullets: [
            "Kubernetes Orchestration & Management",
            "Multi-Cloud Strategy (AWS, GCP, Azure)",
            "Infrastructure as Code (Terraform, Ansible)"
        ],
        linkText: "Explore infrastructure solutions",
        linkHref: "#",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG6y9sZNDNV8CyAqragYMzlJKrl9PnadmrEYaXX_MXXqSuJTgvSCuwRw1lR6xhh95Co_R8g5RaxMWGDpoaDG5gof26eRyOeQOEBezuu-gJj2WeKR0Oi0bsDmfH8RPvvtMugh9i3g3Lg7wTAHYHaweE_OTExg9GhGT-6hsY3H2YZpGmmbkLxBC1tisAvIVO5LKtzTYC_Q_2GwxNwb18wy9_tK3Vcfk3-f-8tnUdsAtA2b24DfXr944v",
        imageAlt: "A sophisticated 3D isometric representation of a cloud-native infrastructure with floating server modules and data streams. The visual style is minimalist and editorial, using shades of primary blue and royal purple. Soft ambient shadows give the elements a layered paper feel, while glowing light streaks represent seamless connectivity and high-speed data transfer.",
        hasOverlay: false
    },
    {
        icon: "shield_lock",
        iconBg: "bg-tertiary-container",
        iconColor: "text-on-tertiary-container",
        title: "Cybersecurity & Resilience",
        description: "Fortifying the enterprise perimeter with Zero-Trust architectures. Our security services range from automated threat detection to high-stakes forensic analysis. We ensure your digital assets are protected against emerging vectors through continuous monitoring and adaptive defense systems.",
        bullets: [
            "Zero Trust Network Access (ZTNA)",
            "SOC-as-a-Service & Managed Detection",
            "Compliance & Risk Mitigation (SOC2, ISO)"
        ],
        linkText: "View security framework",
        linkHref: "#",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqOtTLJCYJRlspOyyvOV0xmyOfjRgljQitspeuuJfoMEvoDxhczagHS5oVabYbVW6Pdez6Urc-ewdYO4n1Cvu3MBF85MU5G9AXV9YZASNca58XD9VKyLN88vqG1tsw0y5QYwQkf-7tG6HbLHahjivVuDIalaO1-KpZjwiNspXeCdqABS44DvacL1mwD9-70Iw3XDB1J_QRCe0ONz2VEdspK08J5znYWbyNAyfdX4v1zQOilCbuQlMz",
        imageAlt: "A clean and authoritative technical graphic depicting an abstracted digital shield composed of interlocking geometric data points. The palette is dominated by deep blues and steel grays with sharp violet highlights. The aesthetic is professional and secure, utilizing fine lines and thin strokes to convey a sense of meticulous high-fidelity engineering and impenetrable defense.",
        hasOverlay: false
    },
    {
        icon: "developer_mode_tv",
        iconBg: "bg-surface-container-highest",
        iconColor: "text-primary",
        title: "Bespoke Software Development",
        description: "Engineering custom-built platforms that drive competitive advantage. From enterprise ERPs to specialized fintech applications, we focus on code quality, scalability, and exceptional user experiences. Our development lifecycle integrates QA automation and DevSecOps from day one.",
        bullets: [
            "Full-Stack Enterprise Applications",
            "Automated QA & Continuous Integration",
            "Scalable API Ecosystem Design"
        ],
        linkText: "See development process",
        linkHref: "#",
        imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY1amW41XNgREKtsNGKQ-CISFBjx9-JlQL-Becj-MIdu61EbvYdLjP20LqVueY7jUEjKJS_ccXAj5Os8jL4mp7OAAth9NudaPxmZ224IsdP_N_6xJhcJGiS0JcFcXskJeI4a0quZU0MqLj8xgSNy4UDlNSsVEH6NYVgsfTdhbCzo7C77ShY2EzSS8ML8IOKoou17nWYCUi7M6k9YWcC2h_Vii1DenXySumZ38COTOURm1A_Gq_EdHU",
        imageAlt: "A stylized view of a high-end code editor interface showing clean, minimalist syntax highlighting in a professional color scheme. The image includes blurred background layers of UI design components and wireframes, suggesting a holistic approach to software development. The atmosphere is intellectual and focused, using high-key lighting and a soft-focus editorial finish.",
        hasOverlay: false
    }
];

const techMatrix = [
    {
        title: "Languages",
        icon: "code",
        items: [
            { name: "TypeScript", detail: "Native" },
            { name: "Python", detail: "AI/ML" },
            { name: "Go", detail: "Systems" },
            { name: "Rust", detail: "Secure" }
        ]
    },
    {
        title: "Platforms",
        icon: "layers",
        items: [
            { name: "AWS", detail: "Tier 1" },
            { name: "Google Cloud", detail: "Data" },
            { name: "Kubernetes", detail: "Core" },
            { name: "Azure", detail: "Enterprise" }
        ]
    },
    {
        title: "Architectures",
        icon: "view_quilt",
        items: [
            { name: "React / Next.js", detail: "Web" },
            { name: "PyTorch", detail: "Neural" },
            { name: "Microservices", detail: "Scale" },
            { name: "Event-Driven", detail: "Async" }
        ]
    },
    {
        title: "Protection",
        icon: "security",
        items: [
            { name: "CrowdStrike", detail: "EDR" },
            { name: "Okta", detail: "IAM" },
            { name: "HashiCorp Vault", detail: "Secrets" },
            { name: "Prisma Cloud", detail: "CNAPP" }
        ]
    }
];

const Solutions = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-12");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const blocks = document.querySelectorAll(".service-block");
        blocks.forEach((block) => {
            block.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-12");
            observer.observe(block);
        });

        return () => {
            blocks.forEach((block) => {
                observer.unobserve(block);
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
            `}</style>

            {/* Solutions Header */}
            <section
                className="relative py-12 md:py-16 animate-prepare-header"
                style={{
                    backgroundImage: "radial-gradient(#d3e4fe 0.5px, transparent 0.5px)",
                    backgroundSize: "24px 24px"
                }}
            >
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="max-w-3xl">
                        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4 block">
                            Our Solutions
                        </span>
                        <h1 className="font-display-lg text-display-lg text-primary mb-6">
                            Strategic Capabilities
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            We engineer high-fidelity digital systems that drive enterprise performance. Nexora Labs specializes in bridging the gap between legacy foundations and futuristic operational excellence through four core technical pillars.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vertical Scrolling Service Blocks */}
            <section className="space-y-16 py-12 md:py-16">
                {serviceBlocks.map((block, index) => {
                    const isEven = index % 2 === 1;
                    return (
                        <div
                            key={index}
                            className="service-block max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-24 items-center animate-prepare-services"
                        >
                            <div className={`content-wrapper ${isEven ? "md:order-2" : "md:order-1"}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-lg ${block.iconBg} flex items-center justify-center ${block.iconColor}`}>
                                        <span className="material-symbols-outlined">{block.icon}</span>
                                    </div>
                                    <h2 className="font-headline-lg text-headline-lg text-primary">
                                        {block.title}
                                    </h2>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                    {block.description}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {block.bullets.map((bullet, bulletIdx) => (
                                        <li
                                            key={bulletIdx}
                                            className="flex items-center gap-3 font-label-md text-label-md text-on-surface"
                                        >
                                            <span
                                                className="material-symbols-outlined text-secondary"
                                                style={{ fontVariationSettings: "'FILL' 1" }}
                                            >
                                                check_circle
                                            </span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:gap-4 transition-all"
                                    to={block.linkHref}
                                >
                                    {block.linkText}{" "}
                                    <span className="material-symbols-outlined text-[18px]">
                                        arrow_forward
                                    </span>
                                </Link>
                            </div>
                            <div className={`visual-wrapper group ${isEven ? "md:order-1" : "md:order-2"}`}>
                                <div className="rounded-xl overflow-hidden shadow-xl border border-outline-variant/30 aspect-[4/3] bg-surface-container relative">
                                    <img
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        alt={block.imageAlt}
                                        src={block.imageSrc}
                                        loading="lazy"
                                    />
                                    {block.hasOverlay && (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Capability Matrix */}
            <section className="py-12 md:py-16 bg-surface-container-low border-t border-outline-variant/20 animate-prepare-matrix">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="text-center mb-16">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                            Technology Stack Matrix
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                            Our toolkit is selected for performance, security, and long-term maintainability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techMatrix.map((col, idx) => (
                            <div
                                key={idx}
                                className="glass-card p-8 rounded-xl shadow-sm"
                            >
                                <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary">
                                        {col.icon}
                                    </span>{" "}
                                    {col.title}
                                </h3>
                                <ul className="space-y-4">
                                    {col.items.map((item, itemIdx) => (
                                        <li
                                            key={itemIdx}
                                            className="flex justify-between items-center pb-2 border-b border-outline-variant/30"
                                        >
                                            <span className="font-label-md text-label-md text-on-surface">
                                                {item.name}
                                            </span>
                                            <span className="text-body-sm text-secondary font-medium">
                                                {item.detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions CTA */}
            <section className="py-12 md:py-16 bg-primary relative overflow-hidden animate-prepare-cta">
                {/* Animated atmospheric circle */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
                    <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8">
                        Ready for a Strategic Shift?
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-12">
                        Schedule a consultation with our senior engineering team to discuss your specific technical challenges and business objectives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-label-md text-label-md rounded-lg hover:bg-surface-variant transition-colors shadow-lg active:scale-95 duration-200">
                            Request a technical briefing
                        </button>
                        <button className="px-6 py-3 md:px-8 md:py-4 border border-white/30 text-white font-label-md text-label-md rounded-lg hover:bg-white/10 transition-colors active:scale-95 duration-200">
                            View our portfolio
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Solutions;