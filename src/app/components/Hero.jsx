import { Nunito } from 'next/font/google';
import Image from 'next/image';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['800'],
});

export default function Hero() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-white/95 to-white/50 overflow-hidden">
      <Image
        src="/main-cover.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 z-[-1] object-cover"
        priority
      />

      {/* Main container */}
      <div className="relative h-full flex flex-col justify-between md:block">
        {/* Text content */}
        <div className="
          relative z-10 px-6 md:px-12
          pt-28 md:pt-0
          md:absolute md:left-12 md:top-1/2 md:-translate-y-1/2
          max-w-xl space-y-4 md:space-y-6
        ">
          <h1 
            className={`
              ${nunito.className}
              text-3xl md:text-6xl font-bold text-[#5A5A5A] leading-tight
              [text-shadow:_1px_2px_2px_rgb(0_0_0_/_20%)]
              opacity-0 animate-[slideInLeft_1s_ease-out_0.2s_forwards]
            `}
          >
            Front-End Web and Mobile App Developer
          </h1>
          <p 
            className={`
              ${nunito.className}
              text-base md:text-lg font-semibold leading-relaxed text-gray-900
              opacity-0 animate-[slideInLeft_1s_ease-out_0.6s_forwards]

              // Adjust font size for mobile devices 390x844 and above
              @media (min-width: 390px) and (min-height: 844px) {
                font-size: 1.125rem; // 18px
              }
            `}
          >
            With proficiency in mobile and web development, I build seamless user experiences across platforms. For mobile applications, I write in Dart and Flutter to create responsive, cross-platform solutions. On the web, I leverage React.js, Next.js, JavaScript, and TypeScript to deliver dynamic, high-performance interfaces that ensure accessibility on all devices.
          </p>
        </div>
        {/* Image section */}
        <div className="
          relative h-[45%] md:h-full
          md:absolute md:top-0 md:right-0
          w-full md:w-3/5
        ">
          {/* Angled background - Updated clip-path for mobile */}
          <div 
            className="
              absolute inset-0
              bg-black/75
              [clip-path:polygon(100%_0,0_100%,100%_100%)]
              md:[clip-path:polygon(100%_100%,0_100%,100%_-30%)]
              opacity-0 animate-[fadeIn_1.5s_ease-out_0.3s_forwards]
            "
          ></div>
          {/* Image container */}
          <div 
            className="
              absolute bottom-0 right-0
              h-[85%] w-full md:w-[95%]
              opacity-0 translate-y-10
              animate-[fadeInUp_1.2s_ease-out_0.8s_forwards]
            "
          >
            <Image
              src="/mee.png"
              alt="Personal Photo"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}