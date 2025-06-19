
import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-32 h-32 border-4 border-transparent border-t-purple-400 border-r-blue-400 rounded-full animate-spin"></div>
        
        {/* Inner ring */}
        <div className="absolute top-2 left-2 w-28 h-28 border-4 border-transparent border-t-pink-400 border-l-cyan-400 rounded-full animate-spin-reverse"></div>
        
        {/* Center logo/text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">BK</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
