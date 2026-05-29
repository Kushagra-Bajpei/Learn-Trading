// import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

// const footerLinks = {
//   Company: ['About Us', 'Our Instructor', 'Success Stories', 'Blog & Resources', 'Affiliate Program'],
//   Support: ['Help Center', 'Contact Us', 'Community Forum', 'Live Chat', 'Schedule a Call'],
//   Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Disclaimer', 'SEBI Disclosure'],
// };

// // Custom SVG Social Icons to guarantee perfect brand render without Lucide dependency
// const LinkedInIcon = ({ size = 15 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect x="2" y="9" width="4" height="12" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const XIcon = ({ size = 15 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
//     <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
//   </svg>
// );

// const TelegramIcon = ({ size = 15 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M21 2L2 10l8 3 3 8z" />
//     <path d="M10 13l5.5-5.5" />
//   </svg>
// );

// const InstagramIcon = ({ size = 15 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// );

// const socialLinks = [
//   { icon: <LinkedInIcon size={16} />, href: 'https://linkedin.com' },
//   { icon: <XIcon size={16} />, href: 'https://x.com' },
//   { icon: <TelegramIcon size={16} />, href: 'https://telegram.org' },
//   { icon: <InstagramIcon size={16} />, href: 'https://instagram.com' },
// ];

// export default function Footer({ onLinkClick }) {
//   const handleClick = (e, link) => {
//     e.preventDefault();
//     if (onLinkClick) {
//       onLinkClick(link);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer className="bg-[#080604] border-t border-[#2e1f08]">
//       <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
//         {/* Top */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
//           {/* Brand */}
//           <div className="col-span-2">
//             <a href="#" onClick={(e) => { e.preventDefault(); onLinkClick(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 mb-4">
//               <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center glow-sm">
//                 <TrendingUp size={18} className="text-[#0d0a06]" strokeWidth={3} />
//               </div>
//               <div className="leading-tight">
//                 <span className="font-display font-bold text-white text-lg">Trade with</span>
//                 <span className="font-display font-bold gradient-text text-lg"> Bhardwaj</span>
//               </div>
//             </a>
//             <p className="text-[#8c7050] text-sm leading-relaxed mb-5 max-w-xs">
//               India's most trusted stock market education platform. Learn from Bhardwaj, a 15-year professional trader, and start your journey to financial freedom.
//             </p>
//             {/* Social Icons */}
//             <div className="flex gap-3">
//               {socialLinks.map((s, i) => (
//                 <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[#1a1206] border border-[#2e1f08] flex items-center justify-center text-[#8c7050] hover:text-[#ff8c00] hover:border-[#ff8c00]/40 transition-colors">
//                   {s.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Link columns without points/bullets */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title}>
//               <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
//               <ul className="space-y-2.5 list-none p-0 m-0">
//                 {links.map((l) => (
//                   <li key={l} className="list-none p-0 m-0">
//                     <a
//                       href="#"
//                       onClick={(e) => handleClick(e, l)}
//                       className="text-[#8c7050] text-sm hover:text-[#ff8c00] transition-colors duration-200"
//                     >
//                       {l}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Contact bar */}
//         <div className="grid md:grid-cols-3 gap-4 mb-10 bg-[#1a1206] border border-[#2e1f08] rounded-2xl p-5">
//           {[
//             { icon: <Mail size={15} />, label: 'Email Us', val: 'support@tradewithbhardwaj.com' },
//             { icon: <Phone size={15} />, label: 'Call / WhatsApp', val: '+91 98765 43210' },
//             { icon: <MapPin size={15} />, label: 'Location', val: 'Mumbai, Maharashtra, India' },
//           ].map((c, i) => (
//             <div key={i} className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-lg bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00] shrink-0">{c.icon}</div>
//               <div>
//                 <p className="text-[#8c7050] text-xs">{c.label}</p>
//                 <p className="text-white text-sm font-medium">{c.val}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-[#2e1f08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8c7050]">
//           <p>© 2026 Trade with Bhardwaj. All rights reserved. SEBI Registered Research Analyst.</p>
//           <p className="text-center">
//             ⚠️ Trading involves risk. Past performance is not indicative of future results. Please read all disclosures.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
