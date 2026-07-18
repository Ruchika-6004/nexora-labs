import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Solutions = lazy(() => import("../pages/Solutions"));
const Innovation = lazy(() => import("../pages/Innovation"));
const CaseStudies = lazy(() => import("../pages/CaseStudies"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const PageLoader = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-surface w-full">
        <div className="relative w-12 h-12">
            {/* Elegant spinning rings matching Material and primary branding */}
            <div className="absolute inset-0 rounded-full border-4 border-outline-variant/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
        </div>
        <p className="mt-4 font-label-md text-label-md text-primary tracking-widest uppercase animate-pulse">
            Loading...
        </p>
    </div>
);

function AppRoutes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/innovation" element={<Innovation />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;