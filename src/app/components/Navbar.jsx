// "use client";

// import { Menu, X } from 'lucide-react';
// import { Nunito } from 'next/font/google';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// const nunito = Nunito({
//   subsets: ['latin'],
//   weight: ['600'],
// });

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className={`${nunito.className} fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm`}>
//       <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo - increased size, moved left with transform */}
//           <div className="flex-shrink-0 relative w-24 h-24 transform -translate-x-5">
//             <Link href="/">
//               <Image
//                 src="/logoo.png"
//                 alt="Logo"
//                 fill
//                 className="object-contain hover:scale-105 transition-transform duration-300"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Navigation Links - hidden on mobile, shown on desktop */}
//           <div className="hidden md:flex items-center space-x-12">
//             {['About', 'Project', 'Contact'].map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="relative group"
//               >
//                 <span className="text-gray-800 hover:text-black font-semibold text-lg transition-colors duration-300">
//                   {item}
//                 </span>
//                 {/* Animated underline effect */}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
//               </Link>
//             ))}
//           </div>

//           {/* Hamburger menu on mobile */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               className="bg-white p-2 rounded-md text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-800"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div
//             className="
//               md:hidden fixed top-[80px] right-0 bottom-0 bg-gradient-to-b from-white to-white/0
//               shadow-lg w-full max-w-xs px-6 py-6
//               translate-x-full transition-transform duration-300 ease-out
//               [animation:slide-in-right_0.5s_forwards]
//               h-[calc(100vh-80px)]
//             "
//           >
//             <div className="flex flex-col space-y-8 h-full overflow-y-auto">
//               {['About', 'Project', 'Contact'].map((item) => (
//                 <Link
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-800 hover:text-black font-semibold text-lg transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {!isMenuOpen && (
//           <div
//             className="
//               md:hidden fixed top-[80px] right-[-100%] bottom-0 bg-gradient-to-b from-white to-white/0
//               shadow-lg w-full max-w-xs px-6 py-6
//               translate-x-0 transition-transform duration-300 ease-out
//               [animation:slide-in-left_0.5s_forwards]
//               h-[calc(100vh-80px)]
//             "
//           >
//             <div className="flex flex-col space-y-8 h-full overflow-y-auto">
//               {['About', 'Project', 'Contact'].map((item) => (
//                 <Link
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-800 hover:text-black font-semibold text-lg transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";

import { Menu, X } from 'lucide-react';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${nunito.className} fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - increased size, moved left with transform */}
          <div className="flex-shrink-0 relative w-24 h-24 transform -translate-x-5">
            <Link href="/">
              <Image
                src="/logoo.png"
                alt="Logo"
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Project', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-gray-800 hover:text-black font-semibold text-lg transition-colors duration-300">
                  {item}
                </span>
                {/* Animated underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger menu on mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="bg-white p-2 rounded-md text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="
              md:hidden fixed top-[80px] right-0 bottom-0 bg-gradient-to-b from-white/95 to-white/80
              shadow-lg w-full max-w-xs px-6 py-6
              translate-x-full transition-transform duration-300 ease-out
              [animation:slide-in-right_0.5s_forwards]
              h-[calc(100vh-80px)]
            "
          >
            <div className="flex flex-col space-y-8 h-full overflow-y-auto">
              {['About', 'Project', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-black font-semibold text-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}

        {!isMenuOpen && (
          <div
            className="
              md:hidden fixed top-[80px] right-[-100%] bottom-0 bg-gradient-to-b from-white/95 to-white/80
              shadow-lg w-full max-w-xs px-6 py-6
              translate-x-0 transition-transform duration-300 ease-out
              [animation:slide-in-left_0.5s_forwards]
              h-[calc(100vh-80px)]
            "
          >
            <div className="flex flex-col space-y-8 h-full overflow-y-auto">
              {['About', 'Project', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-black font-semibold text-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
