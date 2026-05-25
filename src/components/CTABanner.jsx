import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const XIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);
const TelegramIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2L2 10l8 3 3 8z" />
    <path d="M10 13l5.5-5.5" />
  </svg>
);
const InstagramIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email Us',
    value: 'support@tradewithbhardwaj.com',
    sub: 'Response within 4 hours',
    href: 'mailto:support@tradewithbhardwaj.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call / WhatsApp',
    value: '+91 98765 43210',
    sub: 'Mon – Sat, 9 AM to 6 PM IST',
    href: 'tel:+919876543210',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Our Office',
    value: 'Mumbai, Maharashtra',
    sub: 'India — 400001',
    href: '#',
  },
  {
    icon: <Clock size={20} />,
    label: 'Support Hours',
    value: '9:00 AM – 6:00 PM',
    sub: 'Monday to Saturday (IST)',
    href: '#',
  },
];

const socials = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <XIcon />, label: 'X (Twitter)', href: 'https://x.com' },
  { icon: <TelegramIcon />, label: 'Telegram', href: 'https://telegram.org' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com' },
];

const topics = [
  'Course Enrollment',
  'Live Session Access',
  'Affiliate Program',
  'Refund Request',
  'Technical Support',
  'Other',
];

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0a06] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,140,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,140,0,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a06] via-transparent to-[#0d0a06]" />

      {/* Orange glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff8c00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#ff8c00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            We're Here to <span className="gradient-text glow-text">Help You</span>
          </h2>
          <p className="text-[#8c7050] text-base max-w-xl mx-auto">
            Have questions about our courses, live sessions, or referrals? Our team responds within 4 business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left: Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((c, i) => (
              <a key={i} href={c.href}
                className="flex items-center gap-4 bg-[#1a1206] border border-[#2e1f08] rounded-2xl p-4 hover:border-[#ff8c00]/40 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00] shrink-0 group-hover:bg-[#ff8c00]/20 transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[#8c7050] text-xs mb-0.5">{c.label}</p>
                  <p className="text-white text-sm font-semibold">{c.value}</p>
                  <p className="text-[#6b5035] text-xs">{c.sub}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="bg-[#1a1206] border border-[#2e1f08] rounded-2xl p-5">
              <p className="text-white text-sm font-semibold mb-4">Follow Us</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#8c7050] hover:text-[#ff8c00] text-xs font-medium transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0d0a06] border border-[#2e1f08] flex items-center justify-center group-hover:border-[#ff8c00]/40 transition-colors">
                      {s.icon}
                    </div>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-[#ff8c00]/15 rounded-3xl p-8 glow">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#ff8c00]/15 flex items-center justify-center mb-2">
                    <CheckCircle size={36} className="text-[#ff8c00]" />
                  </div>
                  <h3 className="text-white text-2xl font-bold font-display">Message Sent!</h3>
                  <p className="text-[#8c7050] text-sm max-w-xs">Our team has received your message and will respond within 4 hours during business hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', topic: '', message: '' }); }}
                    className="btn-outline text-sm px-6 py-2.5 mt-2">Send Another</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center glow-sm">
                      <MessageCircle size={18} className="text-[#0d0a06]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold font-display text-lg">Send a Message</h3>
                      <p className="text-[#8c7050] text-xs">We'll get back to you within 4 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Full Name *</label>
                        <input
                          name="name" value={form.name} onChange={handleChange} required
                          placeholder="Rahul Sharma"
                          className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a3520] outline-none focus:border-[#ff8c00]/50 focus:ring-1 focus:ring-[#ff8c00]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Email Address *</label>
                        <input
                          name="email" value={form.email} onChange={handleChange} required type="email"
                          placeholder="rahul@example.com"
                          className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a3520] outline-none focus:border-[#ff8c00]/50 focus:ring-1 focus:ring-[#ff8c00]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Phone / WhatsApp</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a3520] outline-none focus:border-[#ff8c00]/50 focus:ring-1 focus:ring-[#ff8c00]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Topic *</label>
                        <select
                          name="topic" value={form.topic} onChange={handleChange} required
                          className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#ff8c00]/50 focus:ring-1 focus:ring-[#ff8c00]/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a topic</option>
                          {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#8c7050] text-xs mb-1.5 font-medium">Your Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required
                        rows={5}
                        placeholder="Tell us how we can help you…"
                        className="w-full bg-[#0d0a06] border border-[#2e1f08] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a3520] outline-none focus:border-[#ff8c00]/50 focus:ring-1 focus:ring-[#ff8c00]/20 transition-all resize-none"
                      />
                    </div>

                    <button type="submit"
                      className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2 relative z-10"
                    >
                      <Send size={16} /> Send Message
                    </button>

                    <p className="text-[#4a3520] text-xs text-center">
                      🔒 Your data is 100% secure and never shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
