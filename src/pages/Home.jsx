import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[#1a1a1a] text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2000" 
            alt="Microphone Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C5A059] uppercase tracking-[0.2em] font-medium block mb-4">آه من زماني.. آه من غرامي</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-widest leading-tight">أم كلثوم</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            سيدة الغناء العربي، كوكب الشرق، الهرم الرابع.. رحلة خالدة في وجدان كل عربي عبر الزمن.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/songs" className="bg-[#C5A059] text-[#1a1a1a] px-10 py-4 rounded-none font-bold text-lg hover:bg-white transition-all">
              استمع لروائعها
            </Link>
            <Link to="/biography" className="border border-white px-10 py-4 rounded-none font-bold text-lg hover:bg-white hover:text-[#1a1a1a] transition-all">
              قصة حياتها
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Legacy Stats */}
      <section className="py-20 bg-white border-y border-[#C5A059]/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "300+", label: "أغنية خالدة" },
            { value: "12", label: "فيلم سينمائي" },
            { value: "50", label: "عام من العطاء" },
            { value: "∞", label: "حب في القلوب" }
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-[#C5A059] mb-2">{stat.value}</h3>
              <p className="text-gray-600 uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#FAF9F6] relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Star className="mx-auto w-12 h-12 text-[#C5A059]/30 mb-8" />
          <blockquote className="text-3xl md:text-4xl italic text-gray-800 leading-snug mb-8 font-serif">
            "الفن هو اللغة الوحيدة التي لا تحتاج لمترجم، والجمهور هو المعلم الأول والملهم الأكبر في كل خطوة خطوتها."
          </blockquote>
          <cite className="text-[#C5A059] font-bold text-xl">— السيدة أم كلثوم</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
