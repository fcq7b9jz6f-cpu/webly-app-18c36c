import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Songs from "./pages/Songs";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;