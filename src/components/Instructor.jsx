import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Award, BookOpen, TrendingUp, Globe, Share2, Rss, CheckCircle2 } from 'lucide-react';

const achievements = [
  '15+ Years of Active Trading Experience',
  'Expert in Nifty, Bank Nifty, Options & Intraday',
  'Trained 10,000+ students across India',
  'Live Trading Sessions with Real Capital',
  'Proven Strategies for Consistent Profitability',
  'Mentor, Coach & Full-Time Professional Trader',
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
    <section id="instructor" className="py-24 bg-[#0d0a06] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 opacity-5 rounded-full"
        style={{ background: 'radial-gradient(circle, #ff8c00, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-[#ff8c00] text-sm font-semibold uppercase tracking-widest mb-3">Your Mentor</p>
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
              <div className="gradient-card border border-[#ff8c00]/20 rounded-3xl p-8 relative z-10">
                {/* Avatar placeholder */}
                <div className="w-48 h-48 rounded-2xl mx-auto mb-6 overflow-hidden relative"
                  style={{ background: 'linear-gradient(135deg,#0f2a1a,#1a3d28)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full gradient-brand mx-auto flex items-center justify-center mb-2">
                        <span className="text-[#0d0a06] font-display font-bold text-3xl">H</span>
                      </div>
                      <p className="text-[#8c7050] text-xs">Professional Trader</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-white text-2xl">Hari</h3>
                  <p className="text-[#ff8c00] text-sm font-semibold mt-1">Professional Trader & Lead Instructor</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {stats.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="bg-[#0d0a06] border border-[#2e1f08] rounded-xl p-3 text-center">
                      <div className="text-[#ff8c00] flex justify-center mb-1">{s.icon}</div>
                      <p className="text-white font-bold text-lg font-display">{s.val}</p>
                      <p className="text-[#8c7050] text-xs">{s.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex justify-center gap-3">
                  {[Rss, Share2, Globe].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-xl bg-[#0d0a06] border border-[#2e1f08] flex items-center justify-center text-[#8c7050] hover:text-[#ff8c00] hover:border-[#ff8c00]/40 transition-colors">
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
            <p className="text-[#d4b896] leading-relaxed mb-6">
              Hari is a full-time professional trader with over 15 years of experience in the Indian stock markets.
              He has traded through bull runs, bear markets, and major black swan events — developing a battle-tested,
              risk-first approach that delivers consistent results.
            </p>
            <p className="text-[#d4b896] leading-relaxed mb-8">
              He founded <strong className="text-white">Trade with Hari</strong> to give every aspiring trader access to
              genuine, no-nonsense market education. His teaching is practical, jargon-free, and built on real trading —
              not theory. Whether you are a complete beginner or looking to level up, Hari's guidance will transform how you trade.
            </p>

            <div className="space-y-3 mb-8">
              {achievements.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#ff8c00] shrink-0 mt-0.5" />
                  <span className="text-[#d4b896] text-sm">{a}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary px-8 py-3.5 relative z-10">Learn From Hari →</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
