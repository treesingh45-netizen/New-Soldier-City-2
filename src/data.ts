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
  { size: '80 Sq. Yard', booking: '5,600', total: '436,000' },
  { size: '120 Sq. Yard', booking: '8,500', total: '610,000' },
  { size: '200 Sq. Yard', booking: '14,000', total: '990,000' },
  { size: '240 Sq. Yard', booking: '17,000', total: '12,20,000' },
  { size: '300 Sq. Yard', booking: '23,000', total: '16,30,000' },
  { size: '400 Sq. Yard', booking: '28,000', total: '19,80,000' },
  { size: '500 Sq. Yard', booking: '34,000', total: '23,90,000' },
  { size: '1000 Sq. Yard', booking: '69,000', total: '46,40,000' },
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
