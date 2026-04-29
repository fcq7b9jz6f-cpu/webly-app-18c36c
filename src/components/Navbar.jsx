import { Link, useLocation } from "react-router-dom";
import { Music, History, Image as ImageIcon, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: Home },
    { name: "السيرة الذاتية", path: "/biography", icon: History },
    { name: "المكتبة الغنائية", path: "/songs", icon: Music },
    { name: "معرض الصور", path: "/gallery", icon: ImageIcon },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/20">
              <span className="text-2xl font-serif font-bold">أ</span>
            </div>
            <span className="text-xl font-bold tracking-wider font-serif">كوكب الشرق</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-reverse space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path) ? "text-amber-500" : "text-stone-300 hover:text-amber-400"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-stone-900 border-b border-amber-900/30"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path) ? "bg-amber-900/20 text-amber-500" : "text-stone-300 hover:bg-stone-800"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;