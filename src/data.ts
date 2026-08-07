import {
  MapPin,
  ShieldCheck,
  Zap,
  Droplets,
  Trees,
  School,
  Store,
  HeartPulse,
  Tent,
  Sun
} from 'lucide-react';

export const pricingData = [
  { size: '80 Sq. Yard', booking: '7,000', monthly: '4,13,000', halfYearly: '23,000', total: '6,50,000', fullCash: '4,55,000', discount: '1,95,000' },
  { size: '120 Sq. Yard', booking: '10,000', monthly: '5,90,000', halfYearly: '35,000', total: '9,50,000', fullCash: '6,65,000', discount: '2,85,000' },
  { size: '200 Sq. Yard', booking: '17,000', monthly: '10,03,000', halfYearly: '33,000', total: '13,50,000', fullCash: '9,45,000', discount: '4,05,000' },
  { size: '240 Sq. Yard', booking: '20,000', monthly: '11,80,000', halfYearly: '40,000', total: '16,00,000', fullCash: '11,20,000', discount: '4,80,000' },
  { size: '300 Sq. Yard', booking: '25,425', monthly: '14,75,000', halfYearly: '54,575', total: '20,50,000', fullCash: '14,35,000', discount: '6,15,000' },
  { size: '400 Sq. Yard', booking: '25,000', monthly: '20,65,000', halfYearly: '46,000', total: '25,50,000', fullCash: '17,85,000', discount: '7,65,000' },
  { size: '500 Sq. Yard', booking: '40,000', monthly: '23,60,000', halfYearly: '54,000', total: '29,50,000', fullCash: '20,65,000', discount: '8,85,000' },
  { size: '600 Sq. Yard', booking: '47,000', monthly: '27,73,000', halfYearly: '73,000', total: '35,50,000', fullCash: '24,85,000', discount: '10,65,000' },
  { size: '1000 Sq. Yard', booking: '76,000', monthly: '44,84,000', halfYearly: '87,000', total: '53,50,000', fullCash: '37,45,000', discount: '16,05,000' },
];

export const locationData = [
  { place: 'Looni Kot Interchange', time: '02 Mins Away' },
  { place: 'Mehran University', time: '02 Mins Away' },
  { place: 'Police Station Looni Kot', time: '02 Mins Away' },
  { place: 'Nooriabad', time: '15 Mins Away' },
  { place: 'Bahria Town Phase-2', time: '20 Mins Away' },
  { place: 'DHA City', time: '30 Mins Away' },
  { place: 'Malir Expressway Link', time: '30 Mins Away' },
];

export const featuresData = [
  { title: 'Wide Roads', icon: MapPin },
  { title: 'Electricity', icon: Zap },
  { title: 'Water Supply', icon: Droplets },
  { title: 'Sewerage System', icon: Droplets },
  { title: 'Parks & Green Spaces', icon: Trees },
  { title: 'Mosque', icon: Tent },
  { title: 'Schools', icon: School },
  { title: 'Commercial Areas', icon: Store },
  { title: 'Gated Community', icon: ShieldCheck },
  { title: '24/7 Security', icon: ShieldCheck },
  { title: 'Street Lights', icon: Sun },
  { title: 'Health Care', icon: HeartPulse },
];
