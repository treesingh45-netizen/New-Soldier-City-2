import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import LegalModals from './LegalModals';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  const handleRequestCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in both name and phone number.');
      return;
    }

    const message = `Hello New Soldier City Team,

I would like to request a callback.

My Details:

👤 Name: ${name}
📞 Phone: ${phone}

I am interested in New Soldier City and would like more information about available plots, payment plans, and current offers.

Please contact me as soon as possible.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923332000019?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
    <footer id="contact" className="bg-text-main text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1920&auto=format&fit=crop" 
            alt="Background Pattern" 
            className="w-full h-full object-cover object-center grayscale"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-2 mb-6">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-white uppercase tracking-wider">
                New Soldier City
              </span>
              <div className="h-[2px] w-20 bg-gradient-to-r from-[#C8A24A] to-transparent"></div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              A premium housing project on the Karachi-Hyderabad M-9 Motorway offering an unparalleled, luxurious lifestyle. We provide world-class amenities in a secure, gated environment. Secure your future and make a smart investment today.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Carachi-Enterprises/61577766358843/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-premium transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/carachienterprises" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-premium transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-6 text-white border-b border-gray-700 pb-2">Contact Info</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="text-gold-premium mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:03332000019" className="hover:text-white transition-colors block">0333 2000019</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="text-gold-premium mt-1 flex-shrink-0" size={18} />
                <a href="https://wa.me/923332000019" target="_blank" rel="noreferrer" className="hover:text-white transition-colors block">
                  0333 2000019 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-gold-premium mt-1 flex-shrink-0" size={18} />
                <a href="mailto:newsoldiercitym9@gmail.com" className="hover:text-white transition-colors break-words">
                  newsoldiercitym9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-premium mt-1 flex-shrink-0" size={18} />
                <span className="leading-snug">
                  3rd Floor, Suite 51, Main Rashid Minhas Rd
                </span>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-xl font-serif font-bold mb-6 text-white border-b border-gray-700 pb-2">Quick Booking</h4>
             <p className="text-gray-300 mb-6 text-sm">
               Leave us your details and our official marketing partner SAS Marketing will get back to you.
             </p>
             <form className="space-y-3" onSubmit={handleRequestCallback}>
               <input 
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Full Name" 
                 required
                 className="w-full bg-white/5 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-gold-premium transition-colors"
               />
               <input 
                 type="text" 
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 placeholder="Phone Number" 
                 required
                 className="w-full bg-white/5 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-gold-premium transition-colors"
               />
               <button type="submit" className="w-full bg-gold-premium hover:bg-gold-accent text-white font-semibold py-2 rounded-md transition-colors">
                 Request Callback
               </button>
             </form>
          </div>

        </div>

        <div className="mt-8 mb-12 rounded-xl overflow-hidden border border-gray-700 h-64 md:h-80 relative z-10 w-full">
          <iframe 
            src="https://maps.google.com/maps?q=RJ%20Shopping%20Mall%2C%20Main%20Rashid%20Minhas%20Rd%2C%20Gulistan-e-Johar%2C%20Karachi%2C%2075300%2C%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="New Soldier City Head Office Location"
            className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p>Copyright {new Date().getFullYear()} New Soldier City All rights reserved</p>
            <div className="flex space-x-2 mt-2">
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }} className="hover:text-white transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('disclaimer'); }} className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
          <p>Marketed by <span className="text-gold-premium font-semibold">SAS Marketing</span></p>
        </div>
      </div>
    </footer>
    <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
