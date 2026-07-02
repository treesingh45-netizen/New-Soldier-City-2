import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Building2, Leaf, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Realistic Home"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image doesn't load
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mt-16"
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-bold text-white mb-4 drop-shadow-2xl tracking-tight uppercase py-2 leading-tight">
            INVEST IN EXCELLENCE
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center w-full max-w-2xl mx-auto mb-6">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent opacity-60"></div>
            <div className="mx-4 text-[#C8A24A] text-2xl font-serif">∽</div>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent opacity-60"></div>
          </div>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-3xl text-[#E8D8A8] tracking-[0.2em] sm:tracking-[0.3em] font-light uppercase mb-8 drop-shadow-lg">
            YOUR DREAM HOUSE AWAITS
          </h2>

          <div className="text-sm md:text-base text-[#E8D8A8] mb-10 max-w-3xl mx-auto drop-shadow-md font-sans font-medium uppercase tracking-[0.15em] space-y-3 opacity-90">
            <p>Defining the Next Era of Upscale Residential Living</p>
            <p>A Distinguished Community for Discerning Families and Visionary Investors</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <a
              href="#pricing"
              className="bg-gradient-to-r from-[#C8A24A] to-[#B8892D] hover:from-[#B8892D] hover:to-[#9e7626] text-white px-10 py-4 rounded font-semibold text-lg transition-all flex justify-center items-center gap-2 shadow-xl hover:shadow-2xl w-full sm:w-auto"
            >
              View Payment Plan <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="bg-black/30 backdrop-blur-sm border-2 border-[#C8A24A] hover:bg-[#C8A24A]/20 text-white px-10 py-4 rounded font-semibold text-lg transition-all shadow-lg w-full sm:w-auto text-center"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Features Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-[#C8A24A]/30 z-20 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#C8A24A]/30">
          
          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 px-2 text-center xl:text-left">
            <ShieldCheck className="text-[#C8A24A] shrink-0" size={40} strokeWidth={1.5} />
            <div>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">Secure</p>
              <p className="text-gray-300 text-xs uppercase tracking-wider mt-0.5">Gated Community</p>
            </div>
          </div>
          
          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 px-2 text-center xl:text-left">
            <Building2 className="text-[#C8A24A] shrink-0" size={40} strokeWidth={1.5} />
            <div>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">Modern</p>
              <p className="text-gray-300 text-xs uppercase tracking-wider mt-0.5">Infrastructure</p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 px-2 text-center xl:text-left">
            <Leaf className="text-[#C8A24A] shrink-0" size={40} strokeWidth={1.5} />
            <div>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">Green & Clean</p>
              <p className="text-gray-300 text-xs uppercase tracking-wider mt-0.5">Environment</p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 px-2 text-center xl:text-left">
            <TrendingUp className="text-[#C8A24A] shrink-0" size={40} strokeWidth={1.5} />
            <div>
              <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">High Return On</p>
              <p className="text-gray-300 text-xs uppercase tracking-wider mt-0.5">Investment</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
