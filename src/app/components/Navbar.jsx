// src/app/components/Navbar.jsx
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Navbar() {
  return (
    <nav className={`${nunito.className} fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8"> 
        <div className="flex items-center justify-between h-20">
          {/* Logo - increased size, moved left with transform */}
          <div className="flex-shrink-0 relative w-24 h-24 transform -translate-x-5"> {/* Increased width/height, shifted left */}
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

          {/* Navigation Links */}
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
        </div>
      </div>
    </nav>
  );
}
