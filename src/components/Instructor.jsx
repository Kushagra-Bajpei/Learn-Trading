import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Award, BookOpen, TrendingUp, Globe, Share2, Rss, CheckCircle2 } from 'lucide-react';

const achievements = [
  '15+ Years of Active Trading Experience',
  'Traded ₹500Cr+ in cumulative volume',
  'Trained 10,000+ students across India',
  'Featured on CNBC & Zee Business',
  'Expert in Nifty, Bank Nifty & Options',
  'Author of "Price Action Decoded" Book',
];

const stats = [
  { icon: <TrendingUp size={20} />, val: '15+', label: 'Years Experience' },
  { icon: <BookOpen size={20} />, val: '10K+', label: 'Students Trained' },
  { icon: <Award size={20} />, val: '98%', label: 'Success Rate' },
];

export default function Instructor() {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(imgRef.current,
      { scale: 0.85, opacity: 0, rotate: -3 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: imgRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section id="instructor" className="py-24 bg-[#0a0f0d] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 opacity-5 rounded-full"
        style={{ background: 'radial-gradient(circle, #00ff88, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-[#00ff88] text-sm font-semibold uppercase tracking-widest mb-3">Your Mentor</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Meet Your <span className="gradient-text">Expert Instructor</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar card */}
          <div ref={imgRef} className="opacity-0 relative">
            <div className="relative mx-auto w-fit">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl glow opacity-50" />
              <div className="gradient-card border border-[#00ff88]/20 rounded-3xl p-8 relative z-10">
                {/* Avatar placeholder */}
                <div className="w-48 h-48 rounded-2xl mx-auto mb-6 overflow-hidden relative"
                  style={{ background: 'linear-gradient(135deg,#0f2a1a,#1a3d28)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full gradient-brand mx-auto flex items-center justify-center mb-2">
                        <span className="text-[#0a0f0d] font-display font-bold text-3xl">RK</span>
                      </div>
                      <p className="text-[#6b8c74] text-xs">Professional Trader</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-white text-2xl">Rajesh Kumar</h3>
                  <p className="text-[#00ff88] text-sm font-semibold mt-1">SEBI Registered Analyst & Head Trainer</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {stats.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="bg-[#0a0f0d] border border-[#1e3028] rounded-xl p-3 text-center">
                      <div className="text-[#00ff88] flex justify-center mb-1">{s.icon}</div>
                      <p className="text-white font-bold text-lg font-display">{s.val}</p>
                      <p className="text-[#6b8c74] text-xs">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex justify-center gap-3">
                  {[Rss, Share2, Globe].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-xl bg-[#0a0f0d] border border-[#1e3028] flex items-center justify-center text-[#6b8c74] hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-colors">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}>
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              15 Years of Market Mastery, <br />
              <span className="gradient-text">Now Yours to Learn</span>
            </h3>
            <p className="text-[#a8c5b2] leading-relaxed mb-6">
              Rajesh Kumar has been trading the Indian stock markets since 2009 — through bull markets, bear markets,
              black swan events, and everything in between. His systematic, risk-first approach has consistently
              delivered returns above market benchmarks.
            </p>
            <p className="text-[#a8c5b2] leading-relaxed mb-8">
              He founded TradeMastery to democratize quality trading education in India. His teaching style is
              practical, jargon-free, and results-focused — whether you're a complete beginner or an experienced trader
              looking to level up.
            </p>

            <div className="space-y-3 mb-8">
              {achievements.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#00ff88] shrink-0 mt-0.5" />
                  <span className="text-[#a8c5b2] text-sm">{a}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary px-8 py-3.5 relative z-10">Learn From Rajesh →</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
