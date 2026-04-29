import { motion } from "framer-motion";

const Biography = () => {
  const events = [
    {
      year: "1898",
      title: "الميلاد والنشأة",
      desc: "ولدت فاطمة إبراهيم البلتاجي في قرية 'طماي الزهايرة' بمحافظة الدقهلية. بدأت الغناء وهي طفلة مع أبناء عمومتها في الموالد بزي بدوي كغلام."
    },
    {
      year: "1923",
      title: "الانتقال إلى القاهرة",
      desc: "نقطة التحول الكبرى بلقائها بالشيخ أبو العلا محمد والموسيقار محمد القصبجي، وتأسيس فرقتها الخاصة."
    },
    {
      year: "1940-1950",
      title: "العصر الذهبي",
      desc: "تربعت على عرش الغناء، تلاحمت مع قضايا الوطن، وبدأت حفلات الخميس الشهيرة التي كان العالم العربي ينصت لها من المحيط إلى الخليج."
    },
    {
      year: "1967",
      title: "المجهود الحربي",
      desc: "قادت حملة عالمية لجمع التبرعات من أجل إعادة إعمار مصر بعد النكسة، غنت في باريس والعديد من العواصم العربية."
    },
    {
      year: "1975",
      title: "الرحيل الخالد",
      desc: "ودعها الملايين في واحدة من أكبر الجنازات في التاريخ المعاصر، لتبقى ذكراها حية في كل بيت عربي."
    }
  ];

  return (
    <div className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-stone-900">سيرة ومسيرة</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </header>

        <div className="relative border-r-2 border-amber-900/10 pr-8 space-y-16">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -right-[41px] top-0 w-5 h-5 bg-amber-600 rounded-full border-4 border-stone-50"></div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
                <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-lg font-bold mb-4">
                  {event.year}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">{event.title}</h3>
                <p className="text-stone-600 leading-relaxed text-lg italic">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-stone-900 text-white rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-6">أثر لا ينمحي</h2>
            <p className="text-stone-400 text-lg leading-loose mb-8">
              لم تكن أم كلثوم مجرد مطربة، بل كانت ظاهرة ثقافية واجتماعية وسياسية. استطاعت بصوتها أن توحد الشعوب العربية، وكانت حفلاتها تعطل حركة المرور في كبرى العواصم. تميزت بدقة اختيار الكلمات (أحمد شوقي، بيرم التونسي) والألحان (السنباطي، بليغ حمدي، عبد الوهاب).
            </p>
          </div>
          <div className="absolute bottom-0 left-0 opacity-10 translate-y-1/2 -translate-x-1/2">
             <span className="text-[200px] font-serif font-bold">كلثوم</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;