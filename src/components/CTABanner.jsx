import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-20 bg-[#0d0a06] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,140,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,140,0,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a06] via-transparent to-[#0d0a06]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass border border-[#ff8c00]/20 rounded-3xl px-8 py-14 text-center glow">

          <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-6 glow">
            <Rocket size={28} className="text-[#0d0a06]" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Change Your <br />
            <span className="gradient-text glow-text">Financial Future?</span>
          </h2>
          <p className="text-[#d4b896] text-lg max-w-xl mx-auto mb-10">
            Join thousands of successful traders who transformed their lives. Start your journey today with a 30-day money-back guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="btn-primary px-10 py-4 text-base flex items-center justify-center gap-2 relative z-10">
              Start Learning Today <ArrowRight size={20} />
            </button>
            <button className="btn-outline px-10 py-4 text-base">View All Courses</button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#8c7050]">
            {['✅ 30-Day Money Back', '🔒 100% Secure Payment', '⭐ 4.9/5 Rated', '🎓 10,000+ Students'].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
