// src/app/components/Hero.jsx
import { Nunito } from 'next/font/google';
import Image from 'next/image';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['800'],
});

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white/95 to-white/50 overflow-hidden">
      <Image
        src="/main-cover.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 z-[-1] object-cover"
        priority
      />
      
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10 max-w-xl space-y-6">
        {/* Heading animation: slide in from left + fade in */}
        <h1 
          className={`
            ${nunito.className} 
            text-6xl font-bold text-[#5A5A5A] leading-tight 
            [text-shadow:_1px_2px_2px_rgb(0_0_0_/_20%)]
            opacity-0 animate-[slideInLeft_1s_ease-out_0.2s_forwards]
          `}
        >
          Front-End Web and Mobile App Developer
        </h1>
        {/* Paragraph animation: slide in from left + fade in with delay */}
        <p 
          className={`
            ${nunito.className} 
            text-gray-900 text-lg font-semibold leading-relaxed
            opacity-0 animate-[slideInLeft_1s_ease-out_0.6s_forwards]
          `}
        >
          With proficiency in mobile and web development, I build seamless user experiences across platforms. For mobile applications, I write in Dart and Flutter to create responsive, cross-platform solutions. On the web, I leverage React.js, Next.js, JavaScript, and TypeScript to deliver dynamic, high-performance interfaces that ensure accessibility on all devices.
        </p>
      </div>

      <div className="absolute top-0 right-0 h-full w-3/5 overflow-hidden">
        {/* Background shape animation: fade in */}
        <div 
          className="
            absolute top-0 right-0 h-full w-full bg-black/75 
            [clip-path:polygon(100%_100%,0_100%,100%_-30%)]
            opacity-0 animate-[fadeIn_1.5s_ease-out_0.3s_forwards]
          "
        ></div>
        {/* Image animation: fade in + slide up */}
        <div 
          className="
            absolute bottom-0 right-0 h-[85%] w-[95%]
            opacity-0 translate-y-10
            animate-[fadeInUp_1.2s_ease-out_0.8s_forwards]
          "
        >
          <Image
            src="/mee.png"
            alt="Personal Photo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}