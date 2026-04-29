import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Songs from './pages/Songs';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] flex flex-col font-['Cairo']" dir="rtl">
      <Navbar />
      <main className="flex-grow">
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
