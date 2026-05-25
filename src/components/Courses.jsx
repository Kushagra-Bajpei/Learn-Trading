import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, BookOpen, ArrowRight, Star } from 'lucide-react';

const courses = [
  {
    badge: 'Best Seller',
    badgeColor: 'bg-[#ff8c00] text-[#0d0a06]',
    title: 'Trading for Beginners',
    desc: 'Start your trading journey from scratch and build a strong foundation in stock markets.',
    hours: '8+ Hours',
    lessons: '32 Lessons',
    price: '₹4,999',
    originalPrice: '₹9,999',
    rating: 4.9,
    students: '3.2k',
    gradient: 'from-orange-900/40 to-[#0d0a06]',
    accent: '#ff8c00',
  },
  {
    badge: 'Most Popular',
    badgeColor: 'bg-purple-500 text-white',
    title: 'Price Action Mastery',
    desc: 'Learn advanced price action techniques and read the market like a professional trader.',
    hours: '10+ Hours',
    lessons: '40 Lessons',
    price: '₹7,999',
    originalPrice: '₹14,999',
    rating: 4.8,
    students: '2.8k',
    gradient: 'from-purple-900/40 to-[#0d0a06]',
    accent: '#a855f7',
  },
  {
    badge: 'Advanced',
    badgeColor: 'bg-blue-500 text-white',
    title: 'Options Trading Blueprint',
    desc: 'Master options trading strategies, Greeks, and risk management for consistent profits.',
    hours: '12+ Hours',
    lessons: '45 Lessons',
    price: '₹9,999',
    originalPrice: '₹19,999',
    rating: 4.9,
    students: '1.9k',
    gradient: 'from-blue-900/40 to-[#0d0a06]',
    accent: '#3b82f6',
  },
  {
    badge: 'New',
    badgeColor: 'bg-orange-500 text-white',
    title: 'Futures & Derivatives',
    desc: 'Deep dive into futures contracts, hedging techniques and leveraged trading strategies.',
    hours: '9+ Hours',
    lessons: '36 Lessons',
    price: '₹8,499',
    originalPrice: '₹16,999',
    rating: 4.7,
    students: '980',
    gradient: 'from-orange-900/40 to-[#0d0a06]',
    accent: '#f97316',
  },
  {
    badge: 'Hot',
    badgeColor: 'bg-red-500 text-white',
    title: 'Intraday Trading Secrets',
    desc: 'Learn scalping, momentum trading, and intraday setups for daily consistent profits.',
    hours: '11+ Hours',
    lessons: '42 Lessons',
    price: '₹6,999',
    originalPrice: '₹13,999',
    rating: 4.8,
    students: '2.1k',
    gradient: 'from-red-900/40 to-[#0d0a06]',
    accent: '#ef4444',
  },
  {
    badge: 'Elite',
    badgeColor: 'bg-yellow-500 text-[#0d0a06]',
    title: 'Complete Market Mastery',
    desc: 'The ultimate course bundle — all strategies, tools, and mentorship in one package.',
    hours: '40+ Hours',
    lessons: '150 Lessons',
    price: '₹19,999',
    originalPrice: '₹49,999',
    rating: 5.0,
    students: '560',
    gradient: 'from-yellow-900/40 to-[#0d0a06]',
    accent: '#eab308',
  },
];

function CourseCard({ course, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      className="card-hover gradient-card border border-[#2e1f08] rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Card visual */}
      <div className={`h-44 bg-gradient-to-b ${course.gradient} relative flex items-end p-4`}>
        {/* Animated chart lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 80" preserveAspectRatio="none">
          <polyline
            points="0,60 25,45 50,55 75,30 100,40 125,20 150,35 175,15 200,25"
            fill="none"
            stroke={course.accent}
            strokeWidth="1.5"
          />
          <polyline
            points="0,70 25,65 50,70 75,50 100,60 125,40 150,55 175,35 200,45"
            fill="none"
            stroke={course.accent}
            strokeWidth="0.8"
            opacity="0.4"
          />
        </svg>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full z-10 ${course.badgeColor}`}>
          {course.badge}
        </span>
        <button
          className="ml-auto z-10 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          style={{ color: course.accent }}
        >
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display font-bold text-white text-lg leading-tight">{course.title}</h3>
        <p className="text-[#8c7050] text-sm leading-relaxed flex-1">{course.desc}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < Math.floor(course.rating) ? '#eab308' : 'none'} className="text-yellow-500" />
            ))}
          </div>
          <span className="text-yellow-400 text-xs font-bold">{course.rating}</span>
          <span className="text-[#8c7050] text-xs">({course.students} students)</span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#8c7050]">
          <span className="flex items-center gap-1"><Clock size={12} /> {course.hours}</span>
          <span className="flex items-center gap-1"><BookOpen size={12} /> {course.lessons}</span>
        </div>

        <div className="border-t border-[#2e1f08] pt-3 flex items-center justify-between">
          <div>
            <p className="text-[#8c7050] text-xs">Individual Value</p>
            <p className="text-white font-semibold text-sm">{course.price}</p>
          </div>
          <span className="bg-[#ff8c00]/10 text-[#ff8c00] border border-[#ff8c00]/20 text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">
            Included in Bundle
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="courses" className="py-24 bg-[#0a0705]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#ff8c00] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Top <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-[#8c7050] max-w-xl mx-auto">
            Choose from our expert-crafted courses — each designed to take you from where you are to where you want to be.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <CourseCard key={i} course={c} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <button className="btn-outline px-8 py-3 flex items-center gap-2 mx-auto">
            View All Courses <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
