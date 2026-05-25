import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, Crown, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: <Zap size={22} />,
    price: '₹4,999',
    original: '₹9,999',
    period: 'one-time',
    color: '#00ff88',
    desc: 'Perfect for beginners entering the market',
    features: [
      'Trading for Beginners Course',
      'Basic Technical Analysis',
      '3 Months Community Access',
      'Email Support',
      '30-Day Money Back Guarantee',
    ],
    notIncluded: ['Live Trading Sessions', 'Advanced Courses', '1-on-1 Mentorship'],
    popular: false,
  },
  {
    name: 'Pro Trader',
    icon: <Star size={22} />,
    price: '₹14,999',
    original: '₹29,999',
    period: 'one-time',
    color: '#a855f7',
    desc: 'Most popular — everything you need to trade professionally',
    features: [
      'All 5 Courses Included',
      'Advanced Technical Analysis',
      '12 Months Community Access',
      '4 Live Sessions/Week Access',
      'Live Session Recordings',
      'Priority Email & WhatsApp Support',
      '30-Day Money Back Guarantee',
    ],
    notIncluded: ['1-on-1 Mentorship'],
    popular: true,
  },
  {
    name: 'Elite Mastery',
    icon: <Crown size={22} />,
    price: '₹29,999',
    original: '₹59,999',
    period: 'one-time',
    color: '#eab308',
    desc: 'Complete package with personal mentorship',
    features: [
      'All Courses — Lifetime Access',
      'All Future Courses Free',
      'Lifetime Community Access',
      'Unlimited Live Sessions',
      '4 x 1-on-1 Mentorship Calls',
      'Personal Trading Plan Review',
      'Dedicated WhatsApp Support',
      '30-Day Money Back Guarantee',
    ],
    notIncluded: [],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#0a0f0d] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-5 rounded-full"
        style={{ background: 'radial-gradient(ellipse, #00ff88, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-[#00ff88] text-sm font-semibold uppercase tracking-widest mb-3">Simple Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Invest in Your <span className="gradient-text">Trading Future</span>
          </h2>
          <p className="text-[#6b8c74] max-w-lg mx-auto mb-8">
            One-time payment. Lifetime value. No hidden fees or monthly subscriptions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 card-hover ${
                plan.popular
                  ? 'border-purple-500/60 bg-gradient-to-b from-purple-900/20 to-[#0a0f0d] glow'
                  : 'border-[#1e3028] gradient-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${plan.color}18`, border: `1px solid ${plan.color}40`, color: plan.color }}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">{plan.name}</h3>
                  <p className="text-[#6b8c74] text-xs">{plan.desc}</p>
                </div>
              </div>

              <div>
                <div className="flex items-end gap-2">
                  <span className="font-display font-bold text-4xl text-white">{plan.price}</span>
                  <span className="text-[#6b8c74] text-sm line-through mb-1">{plan.original}</span>
                </div>
                <p className="text-[#6b8c74] text-xs mt-1">{plan.period} · No EMI required</p>
              </div>

              <div className="border-t border-[#1e3028] pt-4 space-y-2.5 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <Check size={15} className="shrink-0 mt-0.5" style={{ color: plan.color }} />
                    <span className="text-[#a8c5b2] text-sm">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5 opacity-35">
                    <Check size={15} className="shrink-0 mt-0.5 text-[#6b8c74]" />
                    <span className="text-[#6b8c74] text-sm line-through">{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-purple-500 hover:bg-purple-400 text-white glow-sm'
                    : 'btn-outline'
                }`}
                style={plan.popular ? {} : { borderColor: `${plan.color}60`, color: plan.color }}
              >
                Get {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="text-center text-[#6b8c74] text-sm mt-8">
          🔒 Secure Payment · 30-Day Money Back Guarantee · Trusted by 10,000+ Students
        </motion.p>
      </div>
    </section>
  );
}
