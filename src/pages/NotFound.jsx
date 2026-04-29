import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#FAF9F6]">
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-bold text-[#C5A059]/10 leading-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <Music className="w-24 h-24 text-[#C5A059] animate-bounce" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">عذراً، هذه الصفحة رحلت..</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
        لكن صوت الست باقٍ معنا دائماً. ربما أضعت الطريق في أروقة الفن الجميل، دعنا نعد للمسرح الرئيسي.
      </p>
      <Link 
        to="/" 
        className="bg-[#1a1a1a] text-[#C5A059] px-8 py-3 rounded-none font-bold hover:bg-[#C5A059] hover:text-[#1a1a1a] transition-all"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
