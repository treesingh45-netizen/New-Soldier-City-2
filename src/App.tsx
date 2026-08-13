/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Location />
      <Pricing />
      <Gallery />
      <Contact />
    </div>
  );
}
import sameerImage from '../assets/sameer-ali-siddiqui.png';
<img
  src={sameerImage}
  alt="Sameer Ali Siddiqui"
  className="w-full h-full object-cover"
/>
