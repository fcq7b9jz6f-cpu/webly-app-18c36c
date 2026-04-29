import { motion } from "framer-motion";
import { Play, Calendar, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2000" 
            alt="Microphone Vintage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-serif tracking-widest uppercase text-sm mb-4 block">سيدة الغناء العربي</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">أُم كُلثوم</h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
              صوت مصر الخالد، وقيثارة الشرق التي لم ولن تغيب عن وجدان العرب.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/songs" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" /> استمع لروائعها
              </Link>
              <Link to="/biography" className="px-8 py-4 bg-transparent border-2 border-stone-600 text-stone-300 hover:border-amber-500 hover:text-amber-500 rounded-full font-bold transition-all transform hover:scale-105">
                اكتشف مسيرتها
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Calendar, title: "7 عقود", desc: "من العطاء الفني المتواصل الذي غير شكل الطرب العربي." },
              { icon: Star, title: "300+ أغنية", desc: "أرشيف من الروائع الخالدة بين العاطفي والوطني والديني." },
              { icon: Quote, title: "كوكب الشرق", desc: "لقب أطلقه عليها محبوها وبقي محفوراً في تاريخ الفن." },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-8 bg-white rounded-2xl shadow-xl shadow-stone-200/50"
              >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{stat.title}</h3>
                <p className="text-stone-600 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Quote className="w-16 h-16 text-amber-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight max-w-4xl mx-auto mb-8">
            "إن الفن لم يكن يوماً مجرد غناء، بل هو رسالة وطن وأمة، وحينما أغني أشعر أنني أحمل تاريخ مصر في صوتي."
          </h2>
          <p className="text-amber-500 font-bold">— السيدة أم كلثوم</p>
        </div>
      </section>
    </div>
  );
};

export default Home;