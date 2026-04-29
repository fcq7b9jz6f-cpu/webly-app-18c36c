import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514525253361-bee8a48740d1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800"
];

const Gallery = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen py-24 px-4 text-[#C5A059]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">ألبوم الذكريات</h2>
          <p className="text-gray-400">لقطات نادرة من حفلاتها، رحلاتها، ولحظات خلف الكواليس.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative group aspect-[4/5] overflow-hidden bg-gray-900 border border-[#C5A059]/20 shadow-2xl"
            >
              <img 
                src={img} 
                alt="Am Kalthoum Gallery" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold tracking-widest uppercase">حفل مسرح الأزبكية - 1968</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
