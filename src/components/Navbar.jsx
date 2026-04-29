import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X, Landmark, Camera } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'السيرة الذاتية', path: '/biography' },
    { name: 'روائع الأغاني', path: '/songs' },
    { name: 'معرض الصور', path: '/gallery' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#1a1a1a] text-[#C5A059] sticky top-0 z-50 border-b border-[#C5A059]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Landmark className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter">كوكب الشرق</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg transition-colors hover:text-white ${
                  isActive(link.path) ? 'border-b-2 border-[#C5A059] text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#C5A059]/20 p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-xl text-center py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
