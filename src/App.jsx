import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("./utils/framer-features").then((res) => res.default);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Delay slightly to allow any dynamic rendering or lazy components to load
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <LazyMotion features={loadFeatures}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;