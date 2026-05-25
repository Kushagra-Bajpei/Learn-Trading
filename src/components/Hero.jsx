import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Play, TrendingUp, BarChart2, ShieldCheck } from 'lucide-react';

const tickers = [
  { sym: 'NIFTY 50', val: '22,641.45', chg: '+1.23%', up: true },
  { sym: 'SENSEX', val: '74,572.00', chg: '+0.98%', up: true },
  { sym: 'RELIANCE', val: '2,934.15', chg: '+2.14%', up: true },
  { sym: 'TCS', val: '3,821.30', chg: '-0.45%', up: false },
  { sym: 'HDFC BANK', val: '1,672.55', chg: '+1.67%', up: true },
  { sym: 'INFY', val: '1,478.20', chg: '+0.88%', up: true },
  { sym: 'WIPRO', val: '456.80', chg: '-0.32%', up: false },
  { sym: 'ITC', val: '432.10', chg: '+0.55%', up: true },
];

function CandlestickChart() {
  const candles = [
    { h: 80, b: 40, up: true, bTop: 30 },
    { h: 60, b: 30, up: false, bTop: 20 },
    { h: 90, b: 50, up: true, bTop: 25 },
    { h: 50, b: 25, up: false, bTop: 35 },
    { h: 100, b: 60, up: true, bTop: 10 },
    { h: 70, b: 35, up: true, bTop: 20 },
    { h: 85, b: 45, up: false, bTop: 25 },
    { h: 95, b: 55, up: true, bTop: 15 },
  ];

  return (
    <div className="flex items-end gap-2 h-32 px-2">
      {candles.map((c, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.1 * i + 0.5, duration: 0.5, ease: 'easeOut' }}
          style={{ originY: 1 }}
          className="flex flex-col items-center gap-0.5 flex-1"
        >
          {/* Wick top */}
          <div className="w-px flex-1" style={{ background: c.up ? '#00ff88' : '#ff4d4d' }} />
          {/* Body */}
          <div
            className="w-full rounded-sm"
            style={{
              height: `${c.b}px`,
              background: c.up
                ? 'linear-gradient(180deg,#00ff88,#00c853)'
                : 'linear-gradient(180deg,#ff4d4d,#cc0000)',
            }}
          />
          {/* Wick bottom */}
          <div className="w-px" style={{ height: 8, background: c.up ? '#00ff88' : '#ff4d4d' }} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const headRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
    );
  }, []);

  const tickerRow = [...tickers, ...tickers];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,136,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse, #00ff88 0%, transparent 70%)' }}
      />

      {/* Ticker bar */}
      <div className="mt-16 border-y border-[#1e3028] bg-[#0a0f0d]/80 py-2.5 ticker-wrap">
        <div className="ticker-track flex gap-10">
          {tickerRow.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-mono">
              <span className="text-[#6b8c74]">{t.sym}</span>
              <span className="text-white font-semibold">{t.val}</span>
              <span className={t.up ? 'text-[#00ff88]' : 'text-[#ff4d4d]'}>{t.chg}</span>
              <span className="text-[#1e3028]">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main hero */}
      <div className="flex-1 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#0f1a14] border border-[#1e3028] rounded-full px-4 py-1.5 mb-6"
          >
            <span className="live-dot" />
            <span className="text-xs font-semibold text-[#00ff88] tracking-wider uppercase">
              Live Trading Sessions Available
            </span>
          </motion.div>

          <h1 ref={headRef} className="opacity-0 font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Learn Trading.<br />
            <span className="gradient-text glow-text">Trade with</span><br />
            Confidence.
          </h1>

          <p ref={subRef} className="opacity-0 text-[#a8c5b2] text-lg leading-relaxed mb-6 max-w-xl">
            From beginner to profitable trader — master the stock market with 15+ years of expert guidance by <strong className="text-white">Hari</strong>,
            proven strategies, and live market sessions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-8 p-4 rounded-xl bg-[#0f1a14] border border-[#00ff88]/20 flex items-center gap-3 max-w-lg"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff88]"></span>
            </span>
            <div className="text-xs">
              <span className="text-white font-bold">SUMMER CAMP OFFER:</span> Get the full course for <span className="text-[#00ff88] font-bold">₹19,999</span> <span className="text-[#6b8c74] line-through">₹30,000+</span> + get 25% referral commissions!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button className="btn-primary px-7 py-3.5 text-base flex items-center gap-2 relative z-10">
              Explore Courses <ArrowRight size={18} />
            </button>
            <button className="btn-outline px-7 py-3.5 text-base flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
                <Play size={12} fill="#00ff88" className="text-[#00ff88] ml-0.5" />
              </div>
              Watch Intro
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: <TrendingUp size={16} />, label: 'Structured Video Lessons' },
              { icon: <BarChart2 size={16} />, label: 'Proven Strategies' },
              { icon: <ShieldCheck size={16} />, label: 'Community & Support' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#a8c5b2]">
                <span className="text-[#00ff88]">{f.icon}</span>
                {f.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right – chart card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          className="float-anim"
        >
          <div className="glass rounded-2xl p-6 glow">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-[#6b8c74] uppercase tracking-wider">Portfolio Today</p>
                <p className="text-3xl font-display font-bold text-white mt-0.5">+12.45%</p>
              </div>
              <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-xl px-4 py-2 text-right">
                <p className="text-xs text-[#6b8c74]">Profit</p>
                <p className="text-[#00ff88] font-bold text-lg">₹24,890</p>
              </div>
            </div>

            {/* Candlestick */}
            <CandlestickChart />

            {/* Divider */}
            <div className="border-t border-[#1e3028] my-4" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Win Rate', val: '78%' },
                { label: 'Trades', val: '156' },
                { label: 'Returns', val: '3.2x' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-[#00ff88] font-bold text-xl">{s.val}</p>
                  <p className="text-[#6b8c74] text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Course progress pill */}
            <div className="mt-4 bg-[#0a0f0d] rounded-xl p-3 flex items-center gap-3 border border-[#1e3028]">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shrink-0">
                <Play size={12} fill="#0a0f0d" className="text-[#0a0f0d] ml-0.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">Price Action Basics</p>
                <div className="mt-1.5 h-1 bg-[#1e3028] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '72%' }}
                    transition={{ delay: 1.5, duration: 1.2, ease: 'easeOut' }}
                    className="h-full gradient-brand rounded-full"
                  />
                </div>
              </div>
              <span className="text-xs text-[#00ff88] font-bold shrink-0">72%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom trust bar */}
      <div className="border-t border-[#1e3028] bg-[#0a0f0d]/60 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-sm text-[#6b8c74]">
          {[
            '⭐ 4.9/5 Rating',
            '10,000+ Students Enrolled',
            '30-Day Money Back',
            '15+ Years Expert Trader',
            'Live Sessions Weekly',
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-1">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
