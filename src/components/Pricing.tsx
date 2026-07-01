import React from 'react';
import { motion } from 'motion/react';
import { pricingData } from '../data';
import EmiEstimator from './EmiEstimator';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold-premium font-semibold tracking-wider uppercase text-sm mb-2 block">Investment Options</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
              Payment Schedule
            </h2>
            <div className="w-24 h-1 bg-gold-premium mx-auto mb-6"></div>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Flexible and easy installment options designed to make your dream home a reality. Book your plot today!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-xl border border-gold-light shadow-xl xl:col-span-2"
          >
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-text-main text-white">
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700">PLOT SIZE</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center">BOOKING</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center">INSTALLMENT (x59)</th>
                  <th className="p-4 font-serif font-semibold border-b text-center bg-gold-premium text-white">TOTAL VALUE (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border-light hover:bg-gold-light/10 transition-colors ${index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
                  >
                    <td className="p-4 font-semibold text-text-main border-r border-border-light">
                      {row.size}
                    </td>
                    <td className="p-4 text-center font-mono text-text-muted border-r border-border-light">
                      Rs. {row.booking}
                    </td>
                    <td className="p-4 text-center font-mono text-text-muted border-r border-border-light">
                      Rs. {row.booking}
                    </td>
                    <td className="p-4 text-center font-bold text-gold-accent bg-gold-light/5">
                      Rs. {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="xl:col-span-1"
          >
            <EmiEstimator />
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-12 bg-secondary p-6 rounded-xl border border-border-light text-sm text-text-muted space-y-2"
        >
          <h4 className="font-bold text-text-main mb-3 uppercase underline decoration-gold-premium underline-offset-4">Important Notes:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Corner, West Open, Park Facing, Wide Road Charges are 10% cash & 15% for 100ft Wide Road is charged separately.</li>
            <li>All Extras will be payable within 180 days from the date of booking.</li>
            <li>Installments start must be deposited by the 10th of each month.</li>
            <li>Documentation Charges, Surveyor Charges, Lease Charges, Development Charges (Internal & External) Road, Sewerage, Connection Charges for Gas, Water and demanded by the company.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
