import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1514320298324-a4a27858ad35?q=80&w=800", title: "في حوار صحفي", desc: "لحظة تأمل" },
    { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800", title: "على المسرح", desc: "الهيبة والشموخ" },
    { url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800", title: "فرقة أم كلثوم", desc: "التناغم الموسيقي" },
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800", title: "الحنّيات", desc: "ساعة الصفا" },
    { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800", title: "تسجيل الاستوديو", desc: "دقة العمل" },
    { url: "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=800", title: "مع الجماهير", desc: "حب لا ينتهي" },
  ];

  return (
    <div className="py-20 bg-stone-950 min-h-screen text-stone-100">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">ذاكرة بصرية</h1>
          <p className="text-stone-400 max-w-xl mx-auto italic">لقطات من حياة الست تعبر عن الرقي والأصالة في الزمن الجميل.</p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-2xl bg-stone-900 border border-stone-800"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-xl font-bold text-amber-400">{img.title}</h3>
                <p className="text-stone-300 text-sm mt-1">{img.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-amber-900/10 border border-amber-900/30 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">هل لديك صور نادرة؟</h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">نحن نسعى لجمع أكبر أرشيف رقمي للسيدة أم كلثوم. إذا كنت تمتلك مقتنيات أو صوراً نادرة، يسعدنا تواصلك معنا لإدراجها في المعرض الرقمي.</p>
          <button className="px-10 py-4 bg-amber-600 hover:bg-amber-700 rounded-full font-bold transition-all">تواصل معنا الآن</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;