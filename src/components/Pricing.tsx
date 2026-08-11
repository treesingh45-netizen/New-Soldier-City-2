import React from 'react';
import { motion } from 'motion/react';
import { pricingData } from '../data';
import EmiEstimator from './EmiEstimator';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-light/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-gold-premium/10 border border-gold-premium/30 text-gold-premium font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
              Offer Valid Until 31 December 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-4">
              Official Payment Schedule 2026
            </h2>
            <div className="w-24 h-1 bg-gold-premium mx-auto mb-6"></div>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Residential Plot Payment Plan • Easy 59-Month Installments • 30% Discount on Full Cash Payment
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-xl border border-gold-light shadow-xl bg-secondary w-full"
          >
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead className="sticky top-0 z-10">
                <tr className="bg-text-main text-white">
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 whitespace-nowrap">PLOT SIZE</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center whitespace-nowrap">BOOKING</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center whitespace-nowrap">59 MONTHS INSTALLMENTS</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center whitespace-nowrap">HALF YEARLY (10)</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center whitespace-nowrap">TOTAL COST</th>
                  <th className="p-4 font-serif font-semibold border-b border-r border-gray-700 text-center whitespace-nowrap">FULL CASH (30% DISCOUNT)</th>
                  <th className="p-4 font-serif font-semibold border-b text-center bg-gold-premium text-white whitespace-nowrap">DISCOUNT (30%)</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border-light hover:bg-gold-light/10 transition-colors ${index % 2 === 0 ? 'bg-secondary' : 'bg-primary'}`}
                  >
                    <td className="p-4 font-semibold text-text-main border-r border-border-light whitespace-nowrap">
                      {row.size}
                    </td>
                    <td className="p-4 text-center font-mono text-text-muted border-r border-border-light whitespace-nowrap">
                      Rs. {row.booking}
                    </td>
                    <td className="p-4 text-center font-mono text-text-muted border-r border-border-light whitespace-nowrap">
                      Rs. {row.monthly}
                    </td>
                    <td className="p-4 text-center font-mono text-text-muted border-r border-border-light whitespace-nowrap">
                      Rs. {row.halfYearly}
                    </td>
                    <td className="p-4 text-center font-mono font-semibold text-text-main border-r border-border-light whitespace-nowrap">
                      Rs. {row.total}
                    </td>
                    <td className="p-4 text-center font-mono text-text-muted border-r border-border-light whitespace-nowrap">
                      Rs. {row.fullCash}
                    </td>
                    <td className="p-4 text-center font-bold text-gold-accent bg-gold-light/5 whitespace-nowrap">
                      Rs. {row.discount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Additional Charges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary p-8 rounded-xl border border-border-light shadow-md h-full"
            >
              <h3 className="font-serif font-bold text-2xl text-text-main mb-6 border-b border-gold-light pb-4">
                Additional Charges
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Corner Plot', value: '15% Extra' },
                  { title: 'West Open', value: '10% Extra' },
                  { title: 'Park Facing', value: '10% Extra' },
                  { title: 'Road Facing', value: '10% Extra' },
                ].map((charge, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-primary rounded-lg border border-border-light">
                    <span className="font-medium text-text-main">{charge.title}</span>
                    <span className="font-bold text-gold-accent">{charge.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EMI Estimator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-full"
            >
              <EmiEstimator />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Urdu Terms & Conditions */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="bg-text-main p-8 rounded-xl border border-gray-800 text-gray-300 shadow-xl relative overflow-hidden"
               dir="rtl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/10 rounded-full blur-3xl"></div>
              <h4 className="font-bold text-white mb-6 text-2xl border-b border-gray-700 pb-4 inline-block font-sans">شرائط و ضوابط</h4>
              <ul className="list-disc pl-5 pr-5 space-y-4 font-sans text-base leading-relaxed marker:text-gold-premium">
                <li>تمام اقساط اور واجبات مقررہ تاریخ پر ادا کرنا لازمی ہے، تاخیر کی صورت میں بلڈر پالیسی کے مطابق لیٹ پیمنٹ چارجز لاگو ہوں گے۔</li>
                <li>تمام ادائیگیاں صرف کمپنی کے آفیشل بینک اکاؤنٹس یا منظور شدہ آن لائن بینکنگ ذرائع کے ذریعے کی جائیں۔ ایزی پیسہ اور جاز کیش کی سہولت بھی دستیاب ہے۔</li>
                <li>کمپنی کے علاوہ کسی بھی فرد، ایجنٹ یا ذاتی اکاؤنٹ میں کی گئی ادائیگی کی تمام تر ذمہ داری خریدار پر ہوگی۔</li>
                <li>ڈیولپمنٹ، کارنر، ایکسٹرا لینڈ اور دیگر قابلِ اطلاق چارجز کمپنی کی پالیسی کے مطابق وصول کیے جائیں گے۔</li>
                <li>یہ پیمنٹ شیڈول صرف 31 دسمبر 2026 تک مؤثر ہے۔ اس کے بعد قیمتوں اور شرائط میں تبدیلی کا حق بلڈر کو حاصل ہوگا۔</li>
              </ul>
            </motion.div>

            {/* Urdu Important Notes */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="bg-gold-premium p-8 rounded-xl border border-gold-accent text-white shadow-xl relative overflow-hidden"
               dir="rtl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              <h4 className="font-bold text-white mb-6 text-2xl border-b border-white/30 pb-4 inline-block font-sans">اہم ہدایات</h4>
              <ul className="list-disc pl-5 pr-5 space-y-4 font-sans text-base leading-relaxed marker:text-white">
                <li>ڈیولپمنٹ چارجز بکنگ کے 180 دن کے اندر ادا کرنا لازمی ہوں گے۔</li>
                <li>تمام ادائیگیاں صرف کمپنی کے آفیشل اکاؤنٹس میں ہی قبول کی جائیں گی۔</li>
                <li>قیمتوں، شرائط و ضوابط اور پیمنٹ شیڈول میں تبدیلی کا اختیار کمپنی کے پاس محفوظ ہے۔</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
