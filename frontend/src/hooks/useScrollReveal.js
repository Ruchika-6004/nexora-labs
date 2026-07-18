import { useEffect } from "react";

/**
 * Custom hook to register IntersectionObserver for scroll-reveal animations
 * and active scale interactions for buttons/links.
 * 
 * @param {Object} config Config object for customization.
 * @param {string} config.revealSelector CSS selector for reveal items (default: "section > div")
 * @param {string[]} config.initialClasses Classes to add initially
 * @param {string[]} config.revealClasses Classes to add when in view
 * @param {string[]} config.removeClasses Classes to remove when in view
 * @param {string} config.interactiveSelector CSS selector for scaling elements (default: "button, a")
 */
export function useScrollReveal({
    revealSelector = "section > div",
    initialClasses = ["transition-all", "duration-600", "opacity-0", "translate-y-5", "ease-out"],
    revealClasses = ["opacity-100", "translate-y-0"],
    removeClasses = ["opacity-0", "translate-y-5"],
    threshold = 0.1
} = {}) {
    useEffect(() => {
        const observerOptions = { threshold };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(...revealClasses);
                    entry.target.classList.remove(...removeClasses);
                }
            });
        }, observerOptions);

        const targets = document.querySelectorAll(revealSelector);
        targets.forEach((el) => {
            el.classList.add(...initialClasses);
            observer.observe(el);
        });

        return () => {
            targets.forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, [revealSelector, initialClasses.join(','), revealClasses.join(','), removeClasses.join(','), threshold]);
}
