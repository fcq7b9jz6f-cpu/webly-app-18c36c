import { useState, useEffect } from "react";
import { Play, Search, Heart, Share2, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const Songs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const songs = [
    { id: 1, title: "أنت عمري", length: "59:00", year: "1964", composer: "محمد عبد الوهاب", color: "bg-red-900/10" },
    { id: 2, title: "الأطلال", length: "52:00", year: "1966", composer: "رياض السنباطي", color: "bg-blue-900/10" },
    { id: 3, title: "فكروني", length: "54:30", year: "1966", composer: "محمد عبد الوهاب", color: "bg-amber-900/10" },
    { id: 4, title: "سيرة الحب", length: "45:00", year: "1964", composer: "بليغ حمدي", color: "bg-emerald-900/10" },
    { id: 5, title: "حب إيه", length: "40:00", year: "1960", composer: "بليغ حمدي", color: "bg-rose-900/10" },
    { id: 6, title: "هذه ليلتي", length: "48:00", year: "1968", composer: "محمد عبد الوهاب", color: "bg-indigo-900/10" },
    { id: 7, title: "رق الحبيب", length: "35:00", year: "1944", composer: "محمد القصبجي", color: "bg-orange-900/10" },
    { id: 8, title: "يا مسهرني", length: "56:00", year: "1972", composer: "سيد مكاوي", color: "bg-purple-900/10" },
  ];

  const filteredSongs = songs.filter(s => s.title.includes(searchTerm));

  return (
    <div className="min-h-screen py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">المكتبة الموسيقية</h1>
            <p className="text-stone-500">استعرض أجمل ما غنت الست بمرور السنوات</p>
          </div>
          <div className="relative group">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors" />
            <input 
              type="text"
              placeholder="ابحث عن أغنية..."
              className="pr-12 pl-6 py-3 bg-white border-2 border-stone-200 rounded-full w-full md:w-80 focus:outline-none focus:border-amber-500 transition-all font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={song.id}
                className="bg-white rounded-3xl p-6 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-amber-200/40 transition-all border border-stone-100 group"
              >
                <div className={`w-full aspect-square rounded-2xl mb-6 ${song.color} flex items-center justify-center relative overflow-hidden`}>
                  <Music2 className="w-24 h-24 text-stone-400/20 absolute -bottom-4 -right-4 rotate-12" />
                  <Play className="w-16 h-16 text-amber-600 fill-current opacity-20 group-hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-1">{song.title}</h3>
                    <p className="text-amber-600 font-medium">{song.composer}</p>
                  </div>
                  <span className="text-stone-400 font-mono text-sm">{song.length}</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-stone-50">
                  <span className="text-stone-500 text-sm font-bold">{song.year}</span>
                  <div className="flex gap-4">
                    <button className="text-stone-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-stone-400 hover:text-amber-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-stone-400 italic">
              لم يتم العثور على نتائج للبحث...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Songs;