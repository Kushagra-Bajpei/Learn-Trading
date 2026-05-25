import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Menu, X } from 'lucide-react';

const links = ['Home', 'Courses', 'Live Trading', 'Instructor', 'Pricing', 'Referral'];

export default function Navbar({ onLinkClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const handleLinkClick = (e, l) => {
    if (onLinkClick) {
      onLinkClick(null);
    }
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-[#2e1f08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center glow-sm">
            <TrendingUp size={18} className="text-[#0d0a06]" strokeWidth={3} />
          </div>
          <div className="leading-tight">
            <span className="font-display font-800 text-white text-lg tracking-tight">Trade with</span>
            <span className="font-display font-800 gradient-text text-lg tracking-tight"> Bhardwaj</span>
            <p className="text-[10px] text-[#8c7050] -mt-1 tracking-widest uppercase">Learn · Trade · Grow</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleLinkClick(e, l)}
              className="text-sm text-[#d4b896] hover:text-[#ff8c00] transition-colors duration-200 font-medium"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline text-sm px-5 py-2">Login</button>
          <button className="btn-primary text-sm px-5 py-2 relative z-10">Enroll Now</button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#ff8c00] p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-[#2e1f08] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleLinkClick(e, l)}
                  className="text-[#d4b896] hover:text-[#ff8c00] text-sm font-medium transition-colors"
                >
                  {l}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <button className="btn-outline text-sm px-4 py-2 flex-1">Login</button>
                <button className="btn-primary text-sm px-4 py-2 flex-1 relative z-10">Enroll Now</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
