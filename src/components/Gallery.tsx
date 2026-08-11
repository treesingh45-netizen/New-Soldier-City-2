import React from 'react';
import { motion } from 'motion/react';

const images = [
  { src: 'https://images.pexels.com/photos/33977060/pexels-photo-33977060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Premium Villas' },
  { src: 'https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Modern Architecture' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', title: 'Beautiful Homes' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', title: 'Lush Green Parks' },
  { src: 'https://images.pexels.com/photos/33414224/pexels-photo-33414224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Community View' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', title: 'Luxury Living' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold-premium font-semibold tracking-wider uppercase text-sm mb-2 block">Visual Tour</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
              Project Gallery
            </h2>
            <div className="w-24 h-1 bg-gold-premium mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-md"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
