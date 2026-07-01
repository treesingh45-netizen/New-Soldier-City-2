import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
          alt="New Soldier City Entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-bold text-white mb-4 drop-shadow-2xl tracking-tight uppercase">
            A WISH FULL DESIRE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md font-sans font-light tracking-wide">
            A Premium Housing Project on Karachi - Hyderabad M-9 Motorway
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#pricing"
              className="bg-[#C8A24A] hover:bg-[#b5903b] text-white px-8 py-3.5 rounded font-semibold text-lg transition-all flex items-center gap-2 shadow-lg"
            >
              View Payment Plan <ChevronRight size={20} />
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white hover:bg-white/10 text-white px-10 py-3.5 rounded font-semibold text-lg transition-all shadow-lg backdrop-blur-sm"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
