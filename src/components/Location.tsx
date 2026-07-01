import React from 'react';
import { motion } from 'motion/react';
import { locationData } from '../data';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold-premium font-semibold tracking-wider uppercase text-sm mb-2 block">Strategic Positioning</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-8">
              Excellent Location
            </h2>
            <p className="text-text-muted mb-10 text-lg">
              Situated right on the M-9 Motorway, ensuring quick access to major city hubs while maintaining a peaceful suburban environment.
            </p>
            
            <div className="space-y-4">
              {locationData.map((loc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-primary rounded-lg border border-border-light shadow-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gold-premium" size={24} />
                    <span className="font-semibold text-text-main">{loc.place}</span>
                  </div>
                  <span className="text-gold-accent font-medium bg-gold-light/30 px-3 py-1 rounded-full text-sm">
                    {loc.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* A styled placeholder map to represent the location, since we don't have an interactive map key right now */}
            <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center">
                <div className="text-center p-8 bg-white/90 backdrop-blur rounded-xl shadow-xl border border-gold-light">
                  <MapPin className="text-gold-premium w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-2xl text-text-main mb-2">M-9 Motorway</h3>
                  <p className="text-text-muted">Karachi - Hyderabad</p>
                </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1000&auto=format&fit=crop" 
              alt="Community Map" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
