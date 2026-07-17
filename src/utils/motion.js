export const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1] 
        } 
    }
};

export const staggerContainer = (staggerDelay = 0.1) => ({
    initial: {},
    animate: {
        transition: {
            staggerChildren: staggerDelay
        }
    }
});

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1] 
        } 
    }
};

export const sectionReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1] 
        } 
    },
    viewport: { once: true, amount: 0.15 }
};

export const hoverScale = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.4, ease: "easeOut" }
};

export const cardHoverScale = {
    whileHover: { 
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
    },
    whileTap: { scale: 0.98 }
};
