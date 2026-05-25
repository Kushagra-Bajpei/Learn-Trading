import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Sharma', role: 'Full-Time Trader', location: 'Mumbai', rating: 5, avatar: 'AS', color: '#00ff88',
    text: 'TradeMastery completely changed my life. In 6 months I went from losing money consistently to making ₹80,000/month from trading. Rajesh sir\'s Price Action course is pure gold.' },
  { name: 'Priya Patel', role: 'IT Professional & Trader', location: 'Bangalore', rating: 5, avatar: 'PP', color: '#a855f7',
    text: 'The live sessions are absolutely incredible. Watching a real trade being placed with full explanation gives you so much confidence. I\'ve recovered my course fees in the first month itself!' },
  { name: 'Vikram Singh', role: 'Options Trader', location: 'Delhi', rating: 5, avatar: 'VS', color: '#3b82f6',
    text: 'I was skeptical at first but the Options Trading Blueprint course is hands down the best investment I have made. Cleared my first ₹1 lakh profit in 3 months of joining.' },
  { name: 'Meena Reddy', role: 'Homemaker & Investor', location: 'Hyderabad', rating: 5, avatar: 'MR', color: '#f97316',
    text: 'I had zero knowledge about stock markets. After completing the Beginners course I started SIP+trading and now my portfolio is up 34% YoY. Thank you TradeMastery!' },
  { name: 'Rohit Gupta', role: 'CA & Trader', location: 'Pune', rating: 5, avatar: 'RG', color: '#eab308',
    text: 'As a CA I thought I understood markets, but Rajesh sir\'s technical analysis framework was eye-opening. The community support group alone is worth the entire course fee.' },
  { name: 'Sanjay Mehta', role: 'Retired Banker', location: 'Chennai', rating: 5, avatar: 'SM', color: '#ef4444',
    text: 'Enrolled after retirement to generate passive income. The structured learning path made it easy even at my age. Now earning ₹45,000/month consistently from markets.' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#080d0b] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(0,255,136,1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-[#00ff88] text-sm font-semibold uppercase tracking-widest mb-3">Student Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Real Traders. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-[#6b8c74] max-w-lg mx-auto">
            Join 10,000+ students who have transformed their financial future with TradeMastery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card-hover gradient-card border border-[#1e3028] rounded-2xl p-6 flex flex-col gap-4">
              <Quote size={28} className="text-[#1e3028]" />
              <p className="text-[#a8c5b2] text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} fill="#eab308" className="text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-[#1e3028] pt-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-[#0a0f0d] shrink-0"
                  style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#6b8c74] text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          className="mt-14 glass rounded-2xl px-8 py-6 flex flex-wrap justify-center gap-10 border border-[#1e3028]">
          {[
            { val: '10,000+', label: 'Students Enrolled' },
            { val: '4.9 / 5', label: 'Average Rating' },
            { val: '₹12Cr+', label: 'Student Profits Generated' },
            { val: '30-Day', label: 'Money Back Guarantee' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-bold text-2xl text-[#00ff88]">{s.val}</p>
              <p className="text-[#6b8c74] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
