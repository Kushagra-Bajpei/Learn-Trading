import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Do I need any prior knowledge to join?', a: 'No! Our Trading for Beginners course starts from absolute zero. We cover everything from what a stock is to advanced trading strategies. Anyone can join and learn.' },
  { q: 'Are the live sessions recorded?', a: 'Yes, all live trading sessions are recorded and uploaded within 24 hours. You can watch them anytime at your convenience, even if you miss the live session.' },
  { q: 'What markets do you teach?', a: 'We primarily focus on Indian markets — NSE/BSE stocks, Nifty 50, Bank Nifty, equity derivatives (futures & options), and commodity trading basics.' },
  { q: 'How long do I get access to the courses?', a: 'Starter plan gives 1-year access. Pro Trader gives 3-year access. Elite Mastery gives lifetime access including all future course updates at no extra cost.' },
  { q: 'Is there a money-back guarantee?', a: 'Absolutely. We offer a 30-day no-questions-asked money-back guarantee on all plans. If you feel the course is not for you, just email us and we refund 100%.' },
  { q: 'What is the payment method?', a: 'We accept UPI, Net Banking, all major Credit/Debit Cards, and EMI options. Payments are processed securely through Razorpay.' },
  { q: 'How are the live sessions conducted?', a: 'Live sessions are conducted via Zoom with screen sharing of the trading terminal. Students can ask questions in real-time. Sessions are limited to 30 students for quality interaction.' },
  { q: 'Can I access courses on mobile?', a: 'Yes! Our platform is fully mobile-responsive. You can watch video lessons, attend live sessions, and access community support from any device.' },
];

function FAQItem({ item, index, inView }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border border-[#1e3028] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${open ? 'bg-[#0f1a14]' : 'bg-[#0a0f0d] hover:bg-[#0f1a14]'}`}
      >
        <span className="text-white font-semibold text-sm pr-4">{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}
          className="shrink-0 text-[#00ff88]">
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-2 bg-[#0f1a14] text-[#a8c5b2] text-sm leading-relaxed border-t border-[#1e3028]">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-[#080d0b]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-[#00ff88] text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#6b8c74]">Everything you need to know before enrolling.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          className="text-center mt-10">
          <p className="text-[#6b8c74] text-sm">
            Still have questions?{' '}
            <a href="mailto:support@trademastery.in" className="text-[#00ff88] hover:underline font-semibold">
              Contact us →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
