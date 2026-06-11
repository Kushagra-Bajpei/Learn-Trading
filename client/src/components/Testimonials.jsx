// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Star } from 'lucide-react';

// const testimonials = [
//   {
//     image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
//     name: 'Arjun Sharma',
//     handle: '@arjun_trades',
//     role: 'Full-Time Trader · Mumbai',
//     rating: 5,
//     text: 'Trade with Bhardwaj completely changed my life. In 6 months I went from losing money to making ₹80,000/month. Bhardwaj sir\'s Price Action course is pure gold.',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
//     name: 'Priya Patel',
//     handle: '@priya_investor',
//     role: 'IT Professional · Bangalore',
//     rating: 5,
//     text: 'The live sessions are absolutely incredible. Watching a real trade being placed with full explanation gives you so much confidence. Recovered my course fees in the first month!',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
//     name: 'Vikram Singh',
//     handle: '@vikram_options',
//     role: 'Options Trader · Delhi',
//     rating: 5,
//     text: 'I was skeptical at first but the Options Trading Blueprint is hands down the best investment I have made. Cleared my first ₹1 lakh profit in 3 months of joining.',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
//     name: 'Rohit Gupta',
//     handle: '@rohit_ca_trader',
//     role: 'CA & Trader · Pune',
//     rating: 5,
//     text: 'As a CA I thought I understood markets, but Bhardwaj sir\'s technical analysis framework was eye-opening. The community support alone is worth the entire course fee.',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200',
//     name: 'Meena Reddy',
//     handle: '@meena_invest',
//     role: 'Homemaker · Hyderabad',
//     rating: 5,
//     text: 'I had zero knowledge about stock markets. After completing the Beginners course I started SIP+trading and now my portfolio is up 34% YoY. Thank you Trade with Bhardwaj!',
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
//     name: 'Sanjay Mehta',
//     handle: '@sanjay_markets',
//     role: 'Retired Banker · Chennai',
//     rating: 5,
//     text: 'Enrolled after retirement to generate passive income. The structured learning path made it easy even at my age. Now earning ₹45,000/month consistently from markets.',
//   },
// ];

// // Verified badge SVG
// const VerifiedBadge = () => (
//   <svg className="mt-0.5" style={{ fill: '#ff8c00' }} width="13" height="13" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//     <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
//   </svg>
// );

// const TestimonialCard = ({ t }) => (
//   <div
//     className="mx-3 shrink-0 w-80 rounded-2xl border border-[#2e1f08] p-5 flex flex-col gap-3"
//     style={{ background: 'linear-gradient(135deg,#1a1206,#110e04)' }}
//   >
//     {/* Stars */}
//     <div className="flex gap-0.5">
//       {[...Array(t.rating)].map((_, i) => (
//         <Star key={i} size={13} fill="#ff8c00" className="text-[#ff8c00]" />
//       ))}
//     </div>
//     {/* Quote */}
//     <p className="text-[#d4b896] text-sm leading-relaxed flex-1">"{t.text}"</p>
//     {/* Author */}
//     <div className="flex items-center gap-3 pt-2 border-t border-[#2e1f08]">
//       <img
//         className="w-10 h-10 rounded-full object-cover shrink-0"
//         src={t.image}
//         alt={t.name}
//       />
//       <div className="min-w-0">
//         <div className="flex items-center gap-1">
//           <p className="text-white text-sm font-semibold truncate">{t.name}</p>
//           <VerifiedBadge />
//         </div>
//         <p className="text-[#8c7050] text-xs truncate">{t.handle}</p>
//         <p className="text-[#8c7050] text-xs truncate">{t.role}</p>
//       </div>
//     </div>
//   </div>
// );

// const row1 = [...testimonials, ...testimonials];
// const row2 = [...[...testimonials].reverse(), ...[...testimonials].reverse()];

// export default function Testimonials() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-60px' });

//   return (
//     <section className="py-24 bg-[#0a0705] relative overflow-hidden">
//       <div className="absolute inset-0 opacity-[0.02]"
//         style={{ backgroundImage: 'radial-gradient(circle, rgba(255,140,0,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

//       {/* Heading */}
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         className="text-center mb-14 px-6"
//       >
//         <p className="text-[#ff8c00] text-sm font-semibold uppercase tracking-widest mb-3">Student Stories</p>
//         <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
//           Real Traders. <span className="gradient-text">Real Results.</span>
//         </h2>
//         <p className="text-[#8c7050] max-w-lg mx-auto">
//           Join 10,000+ students who have transformed their financial future with Trade with Bhardwaj.
//         </p>
//       </motion.div>

//       {/* Marquee rows */}
//       <style>{`
//         @keyframes marqueeForward {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes marqueeReverse {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//         .marquee-fwd { animation: marqueeForward 35s linear infinite; }
//         .marquee-rev { animation: marqueeReverse 35s linear infinite; }
//       `}</style>

//       {/* Row 1 — left to right */}
//       <div className="relative overflow-hidden mb-4">
//         <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to right, #0a0705, transparent)' }} />
//         <div className="marquee-fwd flex min-w-[200%] py-3">
//           {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
//         </div>
//         <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to left, #0a0705, transparent)' }} />
//       </div>

//       {/* Row 2 — right to left */}
//       <div className="relative overflow-hidden">
//         <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to right, #0a0705, transparent)' }} />
//         <div className="marquee-rev flex min-w-[200%] py-3">
//           {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
//         </div>
//         <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(to left, #0a0705, transparent)' }} />
//       </div>

//       {/* Trust strip */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ delay: 0.8 }}
//         className="mt-14 mx-6 glass rounded-2xl px-8 py-6 flex flex-wrap justify-center gap-10 border border-[#2e1f08] max-w-5xl lg:mx-auto"
//       >
//         {[
//           { val: '10,000+', label: 'Students Enrolled' },
//           { val: '4.9 / 5', label: 'Average Rating' },
//           { val: '₹12Cr+', label: 'Student Profits Generated' },
//           { val: '30-Day', label: 'Money Back Guarantee' },
//         ].map((s, i) => (
//           <div key={i} className="text-center">
//             <p className="font-display font-bold text-2xl text-[#ff8c00]">{s.val}</p>
//             <p className="text-[#8c7050] text-xs mt-1">{s.label}</p>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
