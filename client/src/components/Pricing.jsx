import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Users, Flame, Award, Gift } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { initializeCheckout } from '../lib/checkout';

export default function Pricing() {
  const { user } = useAuth();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const courseFeatures = [
    'Basic to Advanced Level Stock Market Training',
    'Live Trading Sessions in Real Market Conditions',
    'Learn Practical & Proven Trading Strategies',
    'Taught by Bhardwaj (Professional Trader with 15 Years Experience)',
    'Comprehensive Options & Price Action Modules',
    'Interactive Q&A and Live Chat Support during sessions',
    'Lifetime Access to Session Recordings & Course Material',
    'Exclusive Student WhatsApp & Discord Group Access'
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0d0a06] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, #ff8c00, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-[#ff8c00] text-sm font-semibold uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Flame size={16} className="text-orange-500 animate-pulse" /> Summer Camp Offer <Flame size={16} className="text-orange-500 animate-pulse" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Invest in Your <span className="gradient-text">Financial Future</span>
          </h2>
          <p className="text-[#8c7050] max-w-lg mx-auto">
            Get complete basic-to-advanced trading education & live sessions at a special limited-time price.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Course Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-3xl border border-[#ff8c00]/30 bg-gradient-to-b from-[#1a1206] to-[#0d0a06] p-6 sm:p-8 md:p-10 glow flex flex-col justify-between"
          >
            <div className="absolute -top-4 right-8 bg-[#ff8c00] text-[#0d0a06] text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
              <Flame size={12} fill="#0d0a06" /> Summer Special
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ff8c00]/10 border border-[#ff8c00]/20 flex items-center justify-center text-[#ff8c00]">
                  <Star size={24} fill="#ff8c00" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-2xl">Complete Trading Course</h3>
                  <p className="text-[#8c7050] text-sm">Basic to Advanced + Live Trading Sessions</p>
                </div>
              </div>

              <div className="mb-8 bg-[#0d0a06]/50 rounded-2xl p-5 border border-[#2e1f08] inline-block">
                <p className="text-xs text-[#8c7050] uppercase tracking-wider">Special Price</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#ff8c00] tracking-tight">₹19,999</span>
                  <span className="text-[#8c7050] text-lg line-through">₹30,000+</span>
                </div>
                <p className="text-[#ff8c00] text-xs font-semibold mt-1">🔥 Save over ₹10,000 today (One-time payment)</p>
              </div>

              <div className="space-y-3.5 mb-8">
                {courseFeatures.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-[#ff8c00] shrink-0 mt-0.5" />
                    <span className="text-[#d4b896] text-sm md:text-base">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => initializeCheckout(user)} className="btn-primary w-full py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider relative z-10">
              Enroll in Summer Camp Now →
            </button>
          </motion.div>

          {/* Referral Commission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#13111c] to-[#0d0a06] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="absolute -top-4 right-8 bg-purple-500 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
              <Gift size={12} fill="white" /> Share & Earn
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-2xl">Referral Program</h3>
                  <p className="text-[#8c7050] text-sm">Earn while your network learns</p>
                </div>
              </div>

              <div className="mb-8 bg-[#0d0a06]/50 rounded-2xl p-5 border border-[#2e1f08] inline-block w-full">
                <p className="text-xs text-[#8c7050] uppercase tracking-wider">Referral Reward</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display font-black text-4xl text-purple-400 tracking-tight">25% Commission</span>
                </div>
                <p className="text-purple-300 text-xs font-semibold mt-1.5">💸 Earn ₹5,000 for every friend who joins!</p>
              </div>

              <div className="space-y-4 text-sm text-[#d4b896] mb-8">
                <p className="leading-relaxed">
                  Join our affiliate network and help others build a career in stock trading. When they register using your referral code or link:
                </p>
                <div className="space-y-3 bg-[#0d0a06]/30 p-4 rounded-xl border border-[#2e1f08]">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                    <p className="text-xs">Get your unique referral link upon enrollment.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                    <p className="text-xs">Share on WhatsApp, YouTube, Instagram or Telegram.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                    <p className="text-xs">Receive direct bank transfer within 24 hours of successful referral payment.</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl border border-purple-500/40 text-purple-400 font-bold hover:bg-purple-500/10 transition-colors uppercase tracking-wider">
              Become a Referrer Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
