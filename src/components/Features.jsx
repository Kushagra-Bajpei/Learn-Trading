import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Map, Target, BarChart2, Users, Infinity } from 'lucide-react';

const features = [
  {
    icon: <Map size={28} />,
    title: 'Step-by-Step Learning Path',
    desc: 'Well-structured courses designed for beginners to advanced traders. Never feel lost.',
  },
  {
    icon: <Target size={28} />,
    title: 'Proven Trading Strategies',
    desc: 'Learn practical strategies that work in real market conditions with live examples.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Technical & Fundamental Analysis',
    desc: 'Master chart reading, indicators, candlestick patterns, and market fundamentals.',
  },
  {
    icon: <Users size={28} />,
    title: 'Community Support',
    desc: 'Join a community of 10,000+ traders. Ask questions, share trades, grow together.',
  },
  {
    icon: <Infinity size={28} />,
    title: 'Lifetime Access & Updates',
    desc: 'Get lifetime access to all courses and future updates for free — always stay current.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-[#0a0f0d] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,136,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#00ff88] text-sm font-semibold uppercase tracking-widest mb-3">Why TradeMastery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="card-hover gradient-card border border-[#1e3028] rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88]">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-white text-base leading-tight">{f.title}</h3>
              <p className="text-[#6b8c74] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
