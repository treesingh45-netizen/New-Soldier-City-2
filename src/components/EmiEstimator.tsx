import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';
import { pricingData } from '../data';

export default function EmiEstimator() {
  const [amountString, setAmountString] = useState(pricingData[1].total); // 9,50,000
  const [duration, setDuration] = useState(59);

  // Parse amount from string like "610,000" or "12,20,000"
  const totalAmount = parseInt(amountString.replace(/,/g, ''), 10);
  const emi = totalAmount / duration;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-sm mx-auto h-full flex flex-col">
      <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-6">
        <Calculator className="text-gold-accent" size={24} />
        <h3 className="text-xl font-bold text-text-main">EMI Estimator</h3>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-muted mb-2">Total Amount (Rs.)</label>
        <div className="relative">
          <select 
            value={amountString}
            onChange={(e) => setAmountString(e.target.value)}
            className="w-full text-base font-semibold text-text-main bg-primary border border-border-light rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent cursor-pointer pr-10"
          >
            {pricingData.map((plot, idx) => (
              <option key={idx} value={plot.total}>
                Rs. {plot.total} - {plot.size}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-8 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium text-text-muted">Duration</label>
          <span className="font-bold text-gold-accent">{duration} Months</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="59" 
          value={duration} 
          onChange={(e) => setDuration(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-accent"
        />
      </div>

      <div className="bg-secondary rounded-xl p-6 mb-8 border border-gold-light/50">
        <p className="text-sm font-medium text-text-muted mb-2">Estimated Monthly Installment</p>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-gold-accent font-bold text-xl">Rs.</span>
          <span className="text-gold-accent font-bold text-4xl">{Math.round(emi).toLocaleString()}</span>
        </div>
        <p className="text-xs text-text-muted leading-tight">
          *Exclusive of development charges and taxes
        </p>
      </div>

      <a 
        href="#contact"
        className="block w-full text-center bg-gold-premium hover:bg-gold-accent text-white font-bold py-3 rounded-xl transition-colors shadow-md mt-auto"
      >
        Request Details
      </a>
    </div>
  );
}
