import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Play, Clock, Heart } from 'lucide-react';

const songsData = [
  { id: 1, name: "إنت عمري", length: "42:15", composer: "محمد عبد الوهاب", year: "1964" },
  { id: 2, name: "ألف ليلة وليلة", length: "53:40", composer: "بليغ حمدي", year: "1969" },
  { id: 3, name: "للصبر حدود", length: "48:22", composer: "محمد الموجي", year: "1964" },
  { id: 4, name: "فكروني", length: "45:10", composer: "محمد عبد الوهاب", year: "1966" },
  { id: 5, name: "الأطلال", length: "52:00", composer: "رياض السنباطي", year: "1966" },
  { id: 6, name: "حب إيه", length: "38:50", composer: "بليغ حمدي", year: "1960" },
  { id: 7, name: "بعيد عنك", length: "40:20", composer: "بليغ حمدي", year: "1965" },
];

const Songs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songsData.filter(song => 
    song.name.includes(searchTerm) || song.composer.includes(searchTerm)
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">أرشيف الروائع</h2>
          <p className="text-gray-600 max-w-xl mx-auto italic">قائمة مختارة بعناية لأعظم ما تغنت به كوكب الشرق، مرتبة حسب الملحنين وسنوات الصدور.</p>
        </header>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="ابحث عن أغنية أو ملحن..."
            className="w-full h-16 pr-12 pl-6 bg-white border-2 border-[#C5A059]/30 rounded-full focus:border-[#C5A059] outline-none shadow-sm text-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Songs List */}
        <div className="space-y-4">
          {filteredSongs.map((song, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={song.id}
              className="bg-white p-6 border-r-4 border-[#C5A059] flex items-center justify-between hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="bg-[#1a1a1a] text-[#C5A059] w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  <Play size={20} className="fill-current" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{song.name}</h3>
                  <div className="flex gap-4 text-sm text-gray-500 mt-1">
                    <span>ألحان: {song.composer}</span>
                    <span>•</span>
                    <span>عام: {song.year}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>{song.length}</span>
                </div>
                <button className="text-gray-300 hover:text-red-500 transition-colors">
                  <Heart size={24} />
                </button>
              </div>
            </motion.div>
          ))}

          {filteredSongs.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              لا توجد أغاني مطابقة لبحثك.. حاول البحث بكلمات أخرى.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Songs;
