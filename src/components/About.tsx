import React from 'react';
import { motion } from 'motion/react';
import leadershipImg from '../assets/leadership.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gold-premium"></div>
              <span className="text-gold-premium font-semibold tracking-wider uppercase text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
              Invest Today, Live Tomorrow
            </h2>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              New Soldier City is a meticulously planned, premium housing project situated on the prime location of the M-9 Motorway (Karachi - Hyderabad). We are dedicated to providing a luxurious, secure, and serene environment for you and your family.
            </p>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              With top-tier amenities, wide carpeted roads, lush green parks, and 24/7 security, it is not just a residence; it is a lifestyle. Our commitment is to turn your wishful desires into a beautiful reality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-primary p-4 rounded-xl shadow-sm border border-border-light">
                <h4 className="font-bold text-text-main mb-1">Gated Community</h4>
                <p className="text-sm text-text-muted">24/7 Security & Controlled Access</p>
              </div>
              <div className="bg-primary p-4 rounded-xl shadow-sm border border-border-light">
                <h4 className="font-bold text-text-main mb-1">Prime Location</h4>
                <p className="text-sm text-text-muted">Karachi–Hyderabad M-9 Motorway</p>
              </div>
              <div className="bg-primary p-4 rounded-xl shadow-sm border border-border-light">
                <h4 className="font-bold text-text-main mb-1">High Investment</h4>
                <p className="text-sm text-text-muted">Excellent Future Returns</p>
              </div>
              <div className="bg-primary p-4 rounded-xl shadow-sm border border-border-light">
                <h4 className="font-bold text-text-main mb-1">Modern Lifestyle</h4>
                <p className="text-sm text-text-muted">Parks, Wide Roads & Premium Amenities</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl sm:text-3xl text-text-main leading-none uppercase tracking-wide">
                  New Soldier City
                </span>
                <div className="h-[2px] w-16 bg-[#C8A24A] mt-2 mb-3"></div>
                <h4 className="font-serif font-bold text-lg text-text-main">SAS Marketing</h4>
                <p className="text-sm text-text-muted">Official Marketing Partner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold-premium/10 rounded-2xl -translate-x-4 translate-y-4"></div>
            <img
              src="https://images.pexels.com/photos/17226654/pexels-photo-17226654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern Villa"
              className="rounded-2xl shadow-xl relative z-10 w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* Leadership Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-20 border-t border-border-light"
        >
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gold-premium"></div>
              <span className="text-gold-premium font-semibold tracking-wider uppercase text-sm">Leadership Profile</span>
              <div className="h-[2px] w-12 bg-gold-premium"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main">Meet Our Leadership</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gold-premium/10 rounded-2xl -translate-x-4 translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500"></div>
              <img
                src={leadershipImg}
                alt="Sameer Ali Siddiqui"
                className="rounded-2xl shadow-xl relative z-10 w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-2">Sameer Ali Siddiqui</h3>
              <div className="text-gold-premium font-semibold text-lg mb-6 leading-relaxed">
                Director – Sales & Marketing, New Soldier City (Pvt.) Ltd.<br/>
                Owner – SAS Marketing
              </div>
              <p className="text-text-muted text-lg mb-6 leading-relaxed">
                Sameer Ali Siddiqui is an experienced real estate and sales & marketing professional with over 10 years of industry experience. He currently serves as Director of Sales & Marketing at New Soldier City (Pvt.) Ltd., where he focuses on sales strategy, marketing development, customer relationships, and business growth.
              </p>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                He is also the Owner of SAS Marketing, which he has been leading since 2016. With a strong background in sales, marketing, and real estate, his experience reflects a commitment to professional service, strategic growth, and long-term client relationships.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-primary p-6 rounded-xl shadow-sm border border-border-light text-center hover:border-gold-premium transition-colors">
                  <div className="text-3xl font-serif font-bold text-gold-premium mb-2">10+ Years</div>
                  <div className="text-sm font-semibold text-text-main uppercase tracking-wider">Industry Experience</div>
                </div>
                <div className="bg-primary p-6 rounded-xl shadow-sm border border-border-light text-center hover:border-gold-premium transition-colors">
                  <div className="text-3xl font-serif font-bold text-gold-premium mb-2">2016–Present</div>
                  <div className="text-sm font-semibold text-text-main uppercase tracking-wider">Owner, SAS Marketing</div>
                </div>
                <div className="bg-primary p-6 rounded-xl shadow-sm border border-border-light text-center hover:border-gold-premium transition-colors">
                  <div className="text-2xl font-serif font-bold text-gold-premium mb-2 leading-tight">Director<br/>Sales & Marketing</div>
                  <div className="text-sm font-semibold text-text-main uppercase tracking-wider mt-2">New Soldier City</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
