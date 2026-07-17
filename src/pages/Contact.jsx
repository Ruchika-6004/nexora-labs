import { useState } from "react";
import { m } from "framer-motion";
import { pageVariants } from "../utils/motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";

const locations = [
    {
        name: "New York",
        address: "Level 42, One World Trade Center\nNew York, NY 10007, USA"
    },
    {
        name: "London",
        address: "The Shard, 32 London Bridge St\nLondon SE1 9SG, United Kingdom"
    },
    {
        name: "Singapore",
        address: "Marina Bay Financial Centre Tower 1\n8 Marina Blvd, Singapore 018981"
    }
];

const departments = [
    {
        title: "Sales & Partnerships",
        desc: "Explore solutions for your enterprise.",
        email: "solutions@nexoralabs.io",
        icon: "payments",
        bg: "bg-primary-fixed",
        color: "text-on-primary-fixed"
    },
    {
        title: "Press & Media",
        desc: "Inquiries regarding brand and news.",
        email: "press@nexoralabs.io",
        icon: "campaign",
        bg: "bg-secondary-fixed",
        color: "text-on-secondary-fixed"
    },
    {
        title: "Technical Support",
        desc: "24/7 assistance for active clients.",
        email: "support@nexoralabs.io",
        icon: "support_agent",
        bg: "bg-tertiary-fixed",
        color: "text-on-tertiary-fixed"
    }
];

const faqs = [
    {
        q: "How long does the initial consultation take?",
        a: "Typically, our initial strategy alignment takes 45-60 minutes. We focus on understanding your architectural bottlenecks and defining clear success metrics for a potential engagement."
    },
    {
        q: "Do you offer custom SLA agreements for support?",
        a: "Yes, all enterprise-level partnerships include customizable Service Level Agreements (SLAs) ranging from 99.9% to 99.99% uptime guarantees and 1-hour critical response times."
    },
    {
        q: "Can we schedule an on-site workshop?",
        a: "Nexora Labs offers executive briefings and technical deep-dive workshops at any of our global hubs or at your corporate headquarters globally."
    }
];

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | success
    const [focusedField, setFocusedField] = useState("");

    // Form inputs state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        industry: "Financial Services",
        message: "",
        agreePrivacy: false
    });

    useScrollReveal();

    const handleFocus = (fieldId) => {
        setFocusedField(fieldId);
    };

    const handleBlur = () => {
        setFocusedField("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus("sending");

        setTimeout(() => {
            setSubmitStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                industry: "Financial Services",
                message: "",
                agreePrivacy: false
            });

            setTimeout(() => {
                setSubmitStatus("idle");
            }, 3000);
        }, 1000);
    };

    const getLabelColor = (fieldId) => {
        return focusedField === fieldId ? "text-primary font-bold" : "text-on-surface";
    };

    return (
        <m.main initial="initial" animate="animate" variants={pageVariants} className="pt-20">
            

            {/* Contact Header */}
            <header className="py-10 md:py-16 bg-surface-container-lowest overflow-hidden relative animate-prepare-header">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-10 relative z-10 py-6">
                    <div className="max-w-3xl">
                        <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-display-lg text-primary mb-6">Engage with Nexora</h1>
                        <p className="font-body-lg text-body-sm sm:text-body-md md:text-body-lg text-on-surface-variant">
                            Our team of experts is ready to help you navigate the complexities of modern enterprise transformation. Let's build the future together.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-bl from-secondary to-transparent"></div>
                </div>
            </header>

            {/* Split Layout: Form & Locations */}
            <section className="py-10 md:py-10 md:py-16 border-t border-outline-variant/20 animate-prepare-split">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-gutter">
                    {/* Left: Premium Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="glass-card rounded-xl p-6 sm:p-8 lg:p-12">
                            <h2 className="font-headline-lg text-xl sm:text-2xl lg:text-xl sm:text-headline-lg text-primary mb-8">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className={`font-label-md text-body-sm uppercase tracking-wider transition-colors ${getLabelColor("firstName")}`}>
                                            First Name
                                        </label>
                                        <input
                                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 sm:p-4 font-body-md input-focus-effect transition-all"
                                            placeholder="John"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            onFocus={() => handleFocus("firstName")}
                                            onBlur={handleBlur}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={`font-label-md text-body-sm uppercase tracking-wider transition-colors ${getLabelColor("lastName")}`}>
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 sm:p-4 font-body-md input-focus-effect transition-all"
                                            placeholder="Doe"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            onFocus={() => handleFocus("lastName")}
                                            onBlur={handleBlur}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className={`font-label-md text-body-sm uppercase tracking-wider transition-colors ${getLabelColor("email")}`}>
                                        Enterprise Email
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 sm:p-4 font-body-md input-focus-effect transition-all"
                                        placeholder="john.doe@enterprise.com"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        onFocus={() => handleFocus("email")}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={`font-label-md text-body-sm uppercase tracking-wider transition-colors ${getLabelColor("industry")}`}>
                                        Industry
                                    </label>
                                    <select
                                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 font-body-md input-focus-effect appearance-none transition-all"
                                        value={formData.industry}
                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                        onFocus={() => handleFocus("industry")}
                                        onBlur={handleBlur}
                                    >
                                        <option>Financial Services</option>
                                        <option>Healthcare &amp; Pharma</option>
                                        <option>Manufacturing</option>
                                        <option>Technology</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className={`font-label-md text-body-sm uppercase tracking-wider transition-colors ${getLabelColor("message")}`}>
                                        How can we help?
                                    </label>
                                    <textarea
                                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 sm:p-4 font-body-md input-focus-effect transition-all"
                                        placeholder="Tell us about your project requirements..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onFocus={() => handleFocus("message")}
                                        onBlur={handleBlur}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex items-center space-x-3 py-2">
                                    <input
                                        className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant cursor-pointer"
                                        id="privacy"
                                        type="checkbox"
                                        checked={formData.agreePrivacy}
                                        onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                                        required
                                    />
                                    <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="privacy">
                                        I agree to the privacy policy and consent to receiving communications.
                                    </label>
                                </div>
                                <button
                                    className={`w-full py-4 rounded-lg font-label-md text-label-md hover:shadow-md transition-all active:scale-[0.98] shadow-sm text-on-primary ${
                                        submitStatus === "success"
                                            ? "bg-secondary"
                                            : "bg-primary hover:bg-primary-container"
                                    }`}
                                    type="submit"
                                    disabled={submitStatus === "sending"}
                                >
                                    {submitStatus === "sending" && "Sending..."}
                                    {submitStatus === "success" && "Message Sent"}
                                    {submitStatus === "idle" && "Submit Inquiry"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Global Locations */}
                    <div className="lg:col-span-5 space-y-8 animate-prepare-locations">
                        <div className="space-y-4">
                            <h2 className="font-headline-lg text-xl sm:text-headline-lg text-primary">Global Presence</h2>
                            <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant">
                                Strategic hubs driving local innovation and global excellence.
                            </p>
                        </div>
                        {/* Location Cards */}
                        <div className="space-y-4">
                            {locations.map((loc, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-xl border border-outline-variant bg-surface-container-lowest hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-headline-md text-lg sm:text-lg md:text-headline-md text-primary mb-1">{loc.name}</h3>
                                            <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                                                {loc.address}
                                            </p>
                                        </div>
                                        <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform shrink-0">
                                            location_on
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Map Placeholder */}
                        <div className="rounded-xl overflow-hidden h-48 border border-outline-variant relative grayscale hover:grayscale-0 transition-all duration-500">
                            <img
                                className="w-full h-full object-cover"
                                alt="Modern grayscale enterprise map"
                                src="/contact-map.webp"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary/5 backdrop-blur-[1px]"></div>
                            <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 px-3 py-1 rounded-full text-xs md:text-label-md text-primary border border-outline-variant shadow-sm">
                                Global Network
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Directory */}
            <section className="py-10 md:py-10 md:py-16 bg-surface-container border-t border-outline-variant/20 animate-prepare-directory">
                <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-10">
                    <div className="text-center mb-10 md:mb-12">
                        <h2 className="font-headline-lg text-xl sm:text-headline-lg text-primary">Department Directory</h2>
                        <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant mt-2">
                            Reach out directly to the experts who can assist you best.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
                        {departments.map((dept, idx) => (
                            <div
                                key={idx}
                                className="glass-card p-8 rounded-xl text-center"
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 ${dept.bg} ${dept.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <span className="material-symbols-outlined text-lg md:text-headline-md">{dept.icon}</span>
                                </div>
                                <h3 className="font-headline-md text-lg md:text-headline-md text-primary mb-2">{dept.title}</h3>
                                <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant mb-6">{dept.desc}</p>
                                <a
                                    className="font-label-md text-xs sm:text-label-md text-secondary hover:text-primary transition-colors font-bold"
                                    href={`mailto:${dept.email}`}
                                >
                                    {dept.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Snippet (Accordion) */}
            <section className="py-10 md:py-10 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 border-t border-outline-variant/20 animate-prepare-faq">
                <h2 className="font-headline-lg text-xl sm:text-headline-lg text-primary mb-10 md:mb-12 text-center">Common Inquiries</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group border border-outline-variant/50 rounded-xl bg-surface-container-lowest overflow-hidden transition-all"
                        >
                            <summary className="flex justify-between items-center p-6 cursor-pointer font-headline-md text-lg md:text-headline-md text-on-surface hover:bg-surface-variant/10 transition-colors list-none">
                                <span className="font-medium">{faq.q}</span>
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">
                                    expand_more
                                </span>
                            </summary>
                            <div className="px-6 pb-6 font-body-md text-body-sm sm:text-body-md text-on-surface-variant border-t border-outline-variant/20 pt-4 leading-relaxed">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Exploration Section */}
            <section className="py-10 md:py-16 text-center max-w-container-max mx-auto px-4 sm:px-6 md:px-10 border-t border-outline-variant/20 animate-prepare-exploration">
                <h3 className="font-headline-lg text-primary mb-6">Continue Exploring Nexora</h3>
                <p className="font-body-md text-on-surface-variant mb-8 max-w-lg mx-auto">
                    Discover how we design, validate, and scale high-fidelity enterprise solutions across sectors.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link to="/solutions" className="px-6 py-3 border border-outline-variant text-primary font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all duration-200">
                        Explore Solutions
                    </Link>
                    <Link to="/innovation" className="px-6 py-3 border border-outline-variant text-primary font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all duration-200">
                        Our Innovation
                    </Link>
                    <Link to="/case-studies" className="px-6 py-3 border border-outline-variant text-primary font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all duration-200">
                        Case Studies
                    </Link>
                </div>
            </section>
        </m.main>
    );
};

export default Contact;