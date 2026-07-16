import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Solutions from "../pages/Solutions";
import Innovation from "../pages/Innovation";
import CaseStudies from "../pages/CaseStudies";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;