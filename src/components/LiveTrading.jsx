import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radio, Calendar, Clock, Users, Zap, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sessions = [
  { day: 'Monday', time: '7:00 PM IST', topic: 'Nifty & Bank Nifty Analysis', seats: 12 },
  { day: 'Wednesday', time: '7:00 PM IST', topic: 'Intraday Stock Picks & Setups', seats: 8 },
  { day: 'Friday', time: '8:00 PM IST', topic: 'Weekly Market Recap & Next Week Outlook', seats: 20 },
  { day: 'Saturday', time: '10:00 AM IST', topic: 'Live Options Trading Session', seats: 5 },
];

export default function LiveTrading() {
  const ref = useRef(null);
  const panelRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(panelRef.current, { x: 80, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: panelRef.current, start: 'top 80%' },
    });
  }, []);

  return (
    <section id="live-trading" className="py-24 relative overflow-hidden bg-[#110d04]">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ff8c00, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="live-dot" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Live Trading Sessions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Trade Live with a <br /><span className="gradient-text">15-Year Expert</span>
            </h2>
            <p className="text-[#d4b896] text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Watch a professional trader execute real trades in real time. Learn to read markets,
              manage risk, and make confident decisions — with live commentary and Q&A.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { icon: <Radio size={18} />, title: '4 Live Sessions/Week', sub: 'Mon, Wed, Fri, Sat' },
                { icon: <Users size={18} />, title: 'Limited Seats', sub: 'Max 30 per session' },
                { icon: <Clock size={18} />, title: '1-2 Hours Per Session', sub: 'With Q&A time' },
                { icon: <Zap size={18} />, title: 'Recordings Included', sub: 'Watch anytime' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#1a1206] border border-[#2e1f08] rounded-xl p-4">
                  <div className="text-[#ff8c00] mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                    <p className="text-[#8c7050] text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary px-6 sm:px-8 py-3.5 flex items-center gap-2 relative z-10 w-full sm:w-auto justify-center">
              Join Next Live Session <ArrowRight size={18} />
            </button>
          </motion.div>

          <div ref={panelRef} className="opacity-0 space-y-4">
            <div className="glass rounded-2xl p-6 glow">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-white text-lg">Upcoming Sessions</h3>
                <span className="flex items-center gap-1.5 text-xs text-red-400 font-semibold">
                  <span className="live-dot" /> LIVE This Week
                </span>
              </div>
              <div className="space-y-3">
                {sessions.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 bg-[#0d0a06] border border-[#2e1f08] rounded-xl p-4 hover:border-[#ff8c00]/30 transition-colors cursor-pointer group">
                    <div className="text-center bg-[#ff8c00]/10 rounded-lg px-3 py-2 shrink-0">
                      <p className="text-[#ff8c00] font-bold text-xs">{s.day.slice(0, 3).toUpperCase()}</p>
                      <Calendar size={14} className="text-[#ff8c00] mx-auto mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{s.topic}</p>
                      <p className="text-[#8c7050] text-xs mt-0.5">{s.time}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[#ff4d4d] text-xs font-bold">{s.seats} seats left</p>
                      <button className="text-[#ff8c00] text-xs mt-1 group-hover:underline">Register →</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[{ val: '200+', label: 'Sessions Done' }, { val: '₹2.4Cr', label: 'Student Profits' }, { val: '94%', label: 'Satisfaction' }].map((s, i) => (
                <div key={i} className="gradient-card border border-[#2e1f08] rounded-xl p-4 text-center">
                  <p className="text-[#ff8c00] font-display font-bold text-2xl">{s.val}</p>
                  <p className="text-[#8c7050] text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
