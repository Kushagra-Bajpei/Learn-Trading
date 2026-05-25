import { TrendingUp, Globe, Share2, Rss, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Courses: ['Trading for Beginners', 'Price Action Mastery', 'Options Blueprint', 'Futures & Derivatives', 'Intraday Secrets'],
  Company: ['About Us', 'Our Instructor', 'Success Stories', 'Blog & Resources', 'Affiliate Program'],
  Support: ['Help Center', 'Contact Us', 'Community Forum', 'Live Chat', 'Schedule a Call'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Disclaimer', 'SEBI Disclosure'],
};

export default function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-[#2e1f08]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center glow-sm">
                <TrendingUp size={18} className="text-[#0d0a06]" strokeWidth={3} />
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-white text-lg">Trade with</span>
                <span className="font-display font-bold gradient-text text-lg"> Hari</span>
              </div>
            </a>
            <p className="text-[#8c7050] text-sm leading-relaxed mb-5 max-w-xs">
              India's most trusted stock market education platform. Learn from Hari, a 15-year professional trader, and start your journey to financial freedom.
            </p>
            <div className="flex gap-3">
              {[Rss, Share2, Globe, ExternalLink].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-[#1a1206] border border-[#2e1f08] flex items-center justify-center text-[#8c7050] hover:text-[#ff8c00] hover:border-[#ff8c00]/40 transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[#8c7050] text-sm hover:text-[#ff8c00] transition-colors duration-200">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="grid md:grid-cols-3 gap-4 mb-10 bg-[#1a1206] border border-[#2e1f08] rounded-2xl p-5">
          {[
            { icon: <Mail size={15} />, label: 'Email Us', val: 'support@tradewithhari.com' },
            { icon: <Phone size={15} />, label: 'Call / WhatsApp', val: '+91 98765 43210' },
            { icon: <MapPin size={15} />, label: 'Location', val: 'Mumbai, Maharashtra, India' },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00] shrink-0">{c.icon}</div>
              <div>
                <p className="text-[#8c7050] text-xs">{c.label}</p>
                <p className="text-white text-sm font-medium">{c.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2e1f08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8c7050]">
          <p>© 2026 Trade with Hari. All rights reserved. SEBI Registered Research Analyst.</p>
          <p className="text-center">
            ⚠️ Trading involves risk. Past performance is not indicative of future results. Please read all disclosures.
          </p>
        </div>
      </div>
    </footer>
  );
}
