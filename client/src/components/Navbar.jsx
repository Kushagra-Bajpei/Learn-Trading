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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0d0a06]/95 backdrop-blur-xl border-b border-[#2e1f08] shadow-2xl' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 py-4">
        {/* Logo — min-w-0 prevents flex overflow into hamburger area */}
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 group min-w-0 flex-shrink">
          <img src="/logo.png" alt="Trade with Bhardwaj Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shrink-0 object-cover shadow-lg border border-[#ff8c00]/20" />
          <div className="leading-tight min-w-0 overflow-hidden">
            <div className="flex items-baseline gap-0 flex-wrap">
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight whitespace-nowrap">Trade with</span>
              <span className="font-display font-bold gradient-text text-base sm:text-lg tracking-tight whitespace-nowrap">&nbsp;Bhardwaj</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#8c7050] -mt-0.5 tracking-widest uppercase hidden xs:block">Learn · Trade · Grow</p>
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

        {/* Mobile toggle — shrink-0 ensures it never gets squeezed by logo */}
        <button
          className="md:hidden text-[#ff8c00] p-2 shrink-0 ml-2"
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
