import React from 'react';
import { motion } from 'motion/react';
import { featuresData } from '../data';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold-premium font-semibold tracking-wider uppercase text-sm mb-2 block">Premium Lifestyle</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
              Project Features & Amenities
            </h2>
            <div className="w-24 h-1 bg-gold-premium mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary p-8 rounded-xl border border-border-light text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-gold-premium transition-colors">
                  <Icon className="text-gold-premium group-hover:text-white" size={32} />
                </div>
                <h3 className="font-semibold text-text-main">{feature.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
