import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;