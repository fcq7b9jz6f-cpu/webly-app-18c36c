import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div>
          <h4 className="text-[#C5A059] text-xl font-bold mb-6 italic">عن المنصة</h4>
          <p className="text-gray-400 leading-relaxed">
            مشروع رقمي يهدف لتوثيق وحفظ تراث السيدة أم كلثوم الفني والثقافي للأجيال القادمة، ليبقى فنها حياً في ذاكرة التاريخ العربي.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#C5A059] text-xl font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">الرئيسية</a></li>
            <li><a href="/biography" className="hover:text-white transition-colors">السيرة والتاريخ</a></li>
            <li><a href="/songs" className="hover:text-white transition-colors">مكتبة الأغاني</a></li>
            <li><a href="/gallery" className="hover:text-white transition-colors">معرض الصور</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#C5A059] text-xl font-bold mb-6">تواصل معنا</h4>
          <div className="flex gap-4 mb-6">
            <Facebook className="hover:text-[#C5A059] cursor-pointer transition-colors" />
            <Youtube className="hover:text-[#C5A059] cursor-pointer transition-colors" />
            <Instagram className="hover:text-[#C5A059] cursor-pointer transition-colors" />
          </div>
          <div className="text-gray-400 flex items-center gap-2">
            <Mail size={18} />
            <span>info@om-kalthoum.com</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لدار الأوبرا المصرية والأرشيف الرقمي</p>
      </div>
    </footer>
  );
};

export default Footer;
