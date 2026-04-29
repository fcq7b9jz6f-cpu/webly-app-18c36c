import React from 'react';
import { motion } from 'framer-motion';

const Biography = () => {
  const events = [
    { year: "1898", title: "الميلاد", desc: "ولدت فاطمة بنت الشيخ إبراهيم البلتاجي في قرية طماي الزهايرة بمركز السنبلاوين." },
    { year: "1923", title: "الرحيل للقاهرة", desc: "انتقلت للقاهرة لتبدأ مسيرتها الاحترافية بمساعدة الشيخ أبو العلا محمد." },
    { year: "1934", title: "الإذاعة المصرية", desc: "كانت أول من غنى في الإذاعة المصرية عند افتتاحها بصوتها الساحر." },
    { year: "1964", title: "لقاء السحاب", desc: "أول تعاون مع الموسيقار محمد عبد الوهاب في أغنية (إنت عمري)." },
    { year: "1975", title: "الوداع", desc: "رحلت عن عالمنا تاركة خلفها إرثاً فنياً لم ولن يتكرر في تاريخ الموسيقى." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#1a1a1a] text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">رحلة الخلود</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-xl">من طفولة قروية بسيطة إلى أن أصبحت رمزاً وطنياً وفنياً عابراً للقارات.</p>
      </div>

      <div className="max-w-4xl mx-auto py-24 px-4">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute right-0 md:right-1/2 top-0 bottom-0 w-px bg-[#C5A059]/30 mr-4 md:mr-0"></div>

          {events.map((event, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              key={idx}
              className={`relative mb-20 flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="w-full md:w-[45%] pr-12 md:pr-0">
                <div className="bg-[#FAF9F6] p-8 border-l-4 border-[#C5A059] shadow-md">
                  <span className="text-[#C5A059] font-black text-2xl mb-2 block">{event.year}</span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 leading-loose">{event.desc}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute right-0 md:right-1/2 w-8 h-8 bg-[#1a1a1a] border-4 border-[#C5A059] rounded-full translate-x-1/2 z-10 hidden md:block"></div>
              
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biography;
