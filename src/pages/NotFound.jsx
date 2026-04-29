import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center p-4">
      <div>
        <h1 className="text-[120px] font-serif font-black text-stone-200">٤٠٤</h1>
        <h2 className="text-3xl font-bold -mt-10 mb-6">آه يا حبيبي.. الصفحة تاهت</h2>
        <p className="text-stone-500 mb-10 text-lg">يبدو أن الصفحة التي تبحث عنها قد غنت بغير كلماتنا.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-all group"
        >
          <MoveLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;