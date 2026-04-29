import { Mail, Github, Twitter, Facebook, Youtube, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold">أ</span>
              </div>
              <span className="text-xl font-bold tracking-wider font-serif text-white">كوكب الشرق</span>
            </Link>
            <p className="leading-loose max-w-md text-stone-500 italic">
              منصة رقمية مكرسة لإرث سيدة الغناء العربي "أم كلثوم"، نهدف من خلالها إلى تقديم أرشيف يليق بمكانتها الرفيعة في تاريخ الفن الإنساني.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><Link to="/biography" className="hover:text-amber-500 transition-colors">السيرة الذاتية</Link></li>
              <li><Link to="/songs" className="hover:text-amber-500 transition-colors">أرشيف الأغاني</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">معرض الصور</Link></li>
              <li><Link to="/" className="hover:text-amber-500 transition-colors">الرئيسية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">تابعونا</h4>
            <div className="flex gap-4">
              {[Twitter, Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <h5 className="text-sm font-bold text-stone-500 mb-4">نشرة الموقع الأخبارية</h5>
              <div className="flex bg-stone-900 rounded-lg p-1 border border-stone-800">
                <input type="email" placeholder="بريدك..." className="bg-transparent border-none focus:ring-0 text-sm px-3 flex-1" />
                <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 text-sm transition-colors">اشترك</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-stone-900 text-sm">
          <p>© {new Date().getFullYear()} جميع الحقوق التصميمية محفوظة لمشروع كوكب الشرق الرقمي.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            بني بكل <Heart className="w-4 h-4 text-red-500 fill-current" /> لعشاق الفن الأصيل.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;