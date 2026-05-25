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
    { h: 64, b: 32, up: true, bTop: 24 },
    { h: 48, b: 24, up: false, bTop: 16 },
    { h: 72, b: 40, up: true, bTop: 20 },
    { h: 40, b: 20, up: false, bTop: 28 },
    { h: 80, b: 48, up: true, bTop: 8 },
    { h: 56, b: 28, up: true, bTop: 16 },
    { h: 68, b: 36, up: false, bTop: 20 },
    { h: 76, b: 44, up: true, bTop: 12 },
  ];

  return (
    <div className="flex items-end gap-2 h-24 px-2">
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
          <div className="w-px flex-1" style={{ background: c.up ? '#ff8c00' : '#ff4d4d' }} />
          {/* Body */}
          <div
            className="w-full rounded-sm"
            style={{
              height: `${c.b}px`,
              background: c.up
                ? 'linear-gradient(180deg,#ff8c00,#e07000)'
                : 'linear-gradient(180deg,#ff4d4d,#cc0000)',
            }}
          />
          {/* Wick bottom */}
          <div className="w-px" style={{ height: 8, background: c.up ? '#ff8c00' : '#ff4d4d' }} />
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
            'linear-gradient(rgba(255,140,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,140,0,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(ellipse, #ff8c00 0%, transparent 70%)' }}
      />

      {/* Ticker bar border-y border-[#2e1f08] bg-[#0d0a06]/80 py-2 ticker-wrap */}
      <div className="mt-16 lg:mt-6 border-y border-[#2e1f08] bg-[#0d0a06]/80 py-1.5 ticker-wrap">
        <div className="ticker-track flex gap-10">
          {tickerRow.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-mono">
              <span className="text-[#8c7050]">{t.sym}</span>
              <span className="text-white font-semibold">{t.val}</span>
              <span className={t.up ? 'text-[#ff8c00]' : 'text-[#ff4d4d]'}>{t.chg}</span>
              <span className="text-[#2e1f08]">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main hero */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center py-4 sm:py-6 lg:py-2">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#1a1206] border border-[#2e1f08] rounded-full px-4 py-1.5 mb-3 lg:mb-3"
          >
            <span className="live-dot" />
            <span className="text-xs font-semibold text-[#ff8c00] tracking-wider uppercase">
              Live Trading Sessions Available
            </span>
          </motion.div>

          <h1 ref={headRef} className="opacity-0 font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 lg:mb-2">
            Learn Trading.<br />
            <span className="gradient-text glow-text">Trade with</span><br />
            Confidence.
          </h1>

          <p ref={subRef} className="opacity-0 text-[#d4b896] text-sm lg:text-base leading-relaxed mb-3 lg:mb-3 max-w-xl">
            From beginner to profitable trader — master the stock market with 15+ years of expert guidance by <strong className="text-white">Bhardwaj</strong>,
            proven strategies, and live market sessions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-4 lg:mb-4 p-2 lg:p-3 rounded-xl bg-[#1a1206] border border-[#ff8c00]/20 flex items-center gap-3 max-w-lg"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8c00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff8c00]"></span>
            </span>
            <div className="text-xs">
              <span className="text-white font-bold">SUMMER CAMP OFFER:</span> Get the full course for <span className="text-[#ff8c00] font-bold">₹19,999</span> <span className="text-[#8c7050] line-through">₹30,000+</span> + get 25% referral commissions!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 lg:mb-5"
          >
            <button className="btn-primary px-7 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 relative z-10 w-full sm:w-auto">
              Explore Courses <ArrowRight size={18} />
            </button>
            <button className="btn-outline px-7 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-[#ff8c00]/10 border border-[#ff8c00]/30 flex items-center justify-center">
                <Play size={12} fill="#ff8c00" className="text-[#ff8c00] ml-0.5" />
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
              <div key={i} className="flex items-center gap-2 text-sm text-[#d4b896]">
                <span className="text-[#ff8c00]">{f.icon}</span>
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
          <div className="glass rounded-2xl p-4 lg:p-5 glow">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-[#8c7050] uppercase tracking-wider">Portfolio Today</p>
                <p className="text-3xl font-display font-bold text-white mt-0.5">+12.45%</p>
              </div>
              <div className="bg-[#ff8c00]/10 border border-[#ff8c00]/20 rounded-xl px-4 py-2 text-right">
                <p className="text-xs text-[#8c7050]">Profit</p>
                <p className="text-[#ff8c00] font-bold text-lg">₹24,890</p>
              </div>
            </div>

            {/* Candlestick */}
            <CandlestickChart />

            {/* Divider */}
            <div className="border-t border-[#2e1f08] my-3" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Win Rate', val: '78%' },
                { label: 'Trades', val: '156' },
                { label: 'Returns', val: '3.2x' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-[#ff8c00] font-bold text-lg lg:text-xl">{s.val}</p>
                  <p className="text-[#8c7050] text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Course progress pill */}
            <div className="mt-4 bg-[#0d0a06] rounded-xl p-3 flex items-center gap-3 border border-[#2e1f08]">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shrink-0">
                <Play size={12} fill="#0d0a06" className="text-[#0d0a06] ml-0.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">Price Action Basics</p>
                <div className="mt-1.5 h-1 bg-[#2e1f08] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '72%' }}
                    transition={{ delay: 1.5, duration: 1.2, ease: 'easeOut' }}
                    className="h-full gradient-brand rounded-full"
                  />
                </div>
              </div>
              <span className="text-xs text-[#ff8c00] font-bold shrink-0">72%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom trust bar */}
      <div className="border-t border-[#2e1f08] bg-[#0d0a06]/60 py-3 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-4 sm:gap-10 text-xs sm:text-sm text-[#8c7050]">
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
