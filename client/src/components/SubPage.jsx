import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Mail, Phone, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function SubPage({ pageName, onClose }) {
  // Page content definitions
  const getContent = () => {
    switch (pageName) {
      // Courses
      case 'Trading for Beginners':
        return {
          title: 'Trading for Beginners',
          subtitle: 'Your journey from zero to self-reliant stock market trader.',
          body: (
            <div className="space-y-6">
              <p>This comprehensive starter track is designed for individuals with absolutely no prior background in finance or stock markets. We break down complex terms into simple, logical structures.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] space-y-4">
                <h4 className="text-white font-semibold">What You Will Master:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-[#d4b896]">
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Basics of NSE/BSE Stock Exchanges</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> How to Open & Navigate Demat Accounts</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Reading Basic Candlestick Patterns</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Portfolio Building for Long-Term Wealth</div>
                </div>
              </div>
            </div>
          )
        };
      case 'Price Action Mastery':
        return {
          title: 'Price Action Mastery',
          subtitle: 'Read the market charts cleanly without complex indicator clutter.',
          body: (
            <div className="space-y-6">
              <p>Learn to view charts the way institutions do. Master pure price moves, order blocks, and market structures to time entries and exits with surgical precision.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] space-y-4">
                <h4 className="text-white font-semibold">Course Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-[#d4b896]">
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Support & Resistance Validations</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Liquidity Swings & Order Blocks</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Multiple Time Frame Analysis</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> High Risk-to-Reward Ratio Setups</div>
                </div>
              </div>
            </div>
          )
        };
      case 'Options Blueprint':
        return {
          title: 'Options Blueprint',
          subtitle: 'Advanced derivative strategies to generate regular weekly income.',
          body: (
            <div className="space-y-6">
              <p>Options are powerful tools for hedging and leverage when understood correctly. Learn options buying and selling strategies with structured risk management models.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] space-y-4">
                <h4 className="text-white font-semibold">Course Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-[#d4b896]">
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Understanding Option Greeks (Theta, Delta, etc.)</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Hedging & Non-Directional Strategies</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Option Chain Analysis & OI Interpretation</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Adjustment rules for volatile markets</div>
                </div>
              </div>
            </div>
          )
        };
      case 'Futures & Derivatives':
        return {
          title: 'Futures & Derivatives',
          subtitle: 'Leverage future contracts and hedge equity portfolios.',
          body: (
            <div className="space-y-6">
              <p>Gain absolute clarity on derivative products. Master futures pricing, rollover analysis, arbitrage opportunities, and capital protection strategies.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] space-y-4">
                <h4 className="text-white font-semibold">Course Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-[#d4b896]">
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Long & Short Build-up Identifications</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Margin Management & Leveraged Risks</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Hedging equity portfolios during events</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Basis spreads & arbitrage models</div>
                </div>
              </div>
            </div>
          )
        };
      case 'Intraday Secrets':
        return {
          title: 'Intraday Secrets',
          subtitle: 'Master fast execution setups for Nifty & liquid stocks.',
          body: (
            <div className="space-y-6">
              <p>Learn to navigate the noise of daily market opens. Master high-probability setups that execute in minutes, with clear, predefined exit boundaries.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] space-y-4">
                <h4 className="text-white font-semibold">Course Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-[#d4b896]">
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Opening Range Breakout (ORB) Secrets</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Volume Profile & Market Depth Indicators</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Intraday Scan setups using free platforms</div>
                  <div className="flex gap-2"><CheckCircle size={16} className="text-[#ff8c00] shrink-0 mt-0.5" /> Dynamic stop-loss adjustments</div>
                </div>
              </div>
            </div>
          )
        };

      // Company
      case 'About Us':
        return {
          title: 'About Trade with Bhardwaj',
          subtitle: 'Democratizing institutional trading for retail investors.',
          body: (
            <div className="space-y-6 text-[#d4b896] leading-relaxed">
              <p>Founded by veteran professional trader Bhardwaj, our academy was born out of a single realization: *most retail traders lose money because they rely on laggy indicators and tip channels instead of genuine market understanding.*</p>
              <p>We pride ourselves on offering **no-nonsense, action-focused education**. Our live trading sessions with real capital prove that our models are practical and profitable in live markets.</p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="bg-[#1a1206] p-4 rounded-xl text-center border border-[#2e1f08]">
                  <p className="text-2xl font-bold text-[#ff8c00]">10,000+</p>
                  <p className="text-xs text-[#8c7050]">Students Trained</p>
                </div>
                <div className="bg-[#1a1206] p-4 rounded-xl text-center border border-[#2e1f08]">
                  <p className="text-2xl font-bold text-[#ff8c00]">15+ Years</p>
                  <p className="text-xs text-[#8c7050]">Market Experience</p>
                </div>
                <div className="bg-[#1a1206] p-4 rounded-xl text-center border border-[#2e1f08]">
                  <p className="text-2xl font-bold text-[#ff8c00]">94%</p>
                  <p className="text-xs text-[#8c7050]">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          )
        };
      case 'Our Instructor':
        return {
          title: 'Meet Instructor Bhardwaj',
          subtitle: 'Professional Trader, Mentor & Analyst.',
          body: (
            <div className="space-y-6 text-[#d4b896]">
              <p>Bhardwaj is a seasoned professional trader who has completed 15+ years in the Indian stock markets. He specializes in Technical Analysis, Options Buying/Selling spreads, and Intraday index setups.</p>
              <p>His philosophy is simple: **risk management first**. By maintaining strict position sizing rules, anyone can build a reliable trading income over time.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08]">
                <h4 className="text-white font-semibold mb-3">Professional Milestones:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Successfully traded through major global events (2008, 2020, etc.)</li>
                  <li>• Designed the proprietary Price Action Mastery Framework</li>
                  <li>• Active advisor and community leader for 10,000+ students</li>
                </ul>
              </div>
            </div>
          )
        };
      case 'Success Stories':
        return {
          title: 'Student Success Stories',
          subtitle: 'Inspiring journeys of students who turned profitable.',
          body: (
            <div className="space-y-6">
              <p>We believe in transparent results. Read through verification screenshots, journal entries, and stories shared by our academy students.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08]">
                  <p className="text-white font-semibold">"₹80K/month consistently"</p>
                  <p className="text-xs text-[#8c7050] mt-1">— Arjun S., Mumbai</p>
                  <p className="text-sm text-[#d4b896] mt-3">"The Price Action setups completely transformed my chart reading. Clean zones and institutional flow are all you need."</p>
                </div>
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08]">
                  <p className="text-white font-semibold">"Recovered fees in 3 weeks"</p>
                  <p className="text-xs text-[#8c7050] mt-1">— Priya P., IT Professional</p>
                  <p className="text-sm text-[#d4b896] mt-3">"Attending the live Wednesday & Saturday sessions cleared all my entry hesitations. Safe, structured risk-reward setups."</p>
                </div>
              </div>
            </div>
          )
        };
      case 'Blog & Resources':
        return {
          title: 'Blog & Free Resources',
          subtitle: 'Read deep market analyses and download trading cheatsheets.',
          body: (
            <div className="space-y-6">
              <p>Level up your knowledge with our free educational resources, updated weekly by our analysts.</p>
              <div className="space-y-4">
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08] flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-sm">Download: Price Action Cheatsheet (PDF)</h4>
                    <p className="text-xs text-[#8c7050] mt-1">Free resource for chart reading setups</p>
                  </div>
                  <button className="btn-primary text-xs px-4 py-2 relative z-10">Download</button>
                </div>
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08] flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-sm">Article: 5 Common Trading Mistakes in 2026</h4>
                    <p className="text-xs text-[#8c7050] mt-1">Learn to avoid emotional mistakes</p>
                  </div>
                  <button className="btn-outline text-xs px-4 py-2">Read Post</button>
                </div>
              </div>
            </div>
          )
        };
      case 'Affiliate Program':
        return {
          title: 'Affiliate Partner Program',
          subtitle: 'Get 25% commissions for every student you refer.',
          body: (
            <div className="space-y-6">
              <p>Promote genuine stock market education and build a reliable secondary income stream. We offer premium affiliate structures and fast weekly payouts.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] space-y-4">
                <h4 className="text-white font-semibold">Affiliate Benefits:</h4>
                <ul className="space-y-2 text-sm text-[#d4b896]">
                  <li>✔ **25% Flat Payout**: Earn ₹5,000 for every referral enrollment.</li>
                  <li>✔ **Weekly Payouts**: Automated settlements directly to your bank account via UPI.</li>
                  <li>✔ **Partner Dashboard**: Track link clicks, conversions, and commissions in real-time.</li>
                  <li>✔ **Marketing Assets**: Banners, swipes, and templates provided to help you promote.</li>
                </ul>
              </div>
            </div>
          )
        };

      // Support
      case 'Help Center':
        return {
          title: 'Help Center & Support',
          subtitle: 'Frequently asked questions regarding logins, Zoom invites, and payments.',
          body: (
            <div className="space-y-6">
              <p>Need support? We are here to help resolve any access issues quickly.</p>
              <div className="space-y-4">
                <div className="bg-[#1a1206] p-4 rounded-xl border border-[#2e1f08]">
                  <h4 className="text-white font-medium text-sm">When do I receive Zoom links for live trading?</h4>
                  <p className="text-xs text-[#d4b896] mt-2">All link invites are emailed 30 minutes before market open and posted inside the Private Discord channels.</p>
                </div>
                <div className="bg-[#1a1206] p-4 rounded-xl border border-[#2e1f08]">
                  <h4 className="text-white font-medium text-sm">Can I request a refund if the times do not suit me?</h4>
                  <p className="text-xs text-[#d4b896] mt-2">Yes. We support a 30-day money-back guarantee. Just contact us at support@tradewithbhardwaj.com</p>
                </div>
              </div>
            </div>
          )
        };
      case 'Contact Us':
        return {
          title: 'Contact Us',
          subtitle: 'Get in touch with the Trade with Bhardwaj Support Team.',
          body: (
            <div className="space-y-6">
              <p>We are available from 9:00 AM to 6:00 PM IST (Monday to Saturday).</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08] text-center">
                  <Mail className="text-[#ff8c00] mx-auto mb-2" size={24} />
                  <p className="text-white text-xs font-semibold">Email Us</p>
                  <p className="text-[#d4b896] text-xs mt-1 truncate">support@tradewithbhardwaj.com</p>
                </div>
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08] text-center">
                  <Phone className="text-[#ff8c00] mx-auto mb-2" size={24} />
                  <p className="text-white text-xs font-semibold">Call / WhatsApp</p>
                  <p className="text-[#d4b896] text-xs mt-1">+91 98765 43210</p>
                </div>
                <div className="bg-[#1a1206] p-5 rounded-xl border border-[#2e1f08] text-center">
                  <MapPin className="text-[#ff8c00] mx-auto mb-2" size={24} />
                  <p className="text-white text-xs font-semibold">Our Office</p>
                  <p className="text-[#d4b896] text-xs mt-1">Mumbai, MH, India</p>
                </div>
              </div>
            </div>
          )
        };
      case 'Community Forum':
        return {
          title: 'Private Trading Community',
          subtitle: 'Collaborate and share charts inside the Discord channel.',
          body: (
            <div className="space-y-6">
              <p>Our private community forum acts as your trading room. Share charts, clarify entries, review daily logs, and grow alongside 10,000+ traders.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] text-center">
                <h4 className="text-white font-semibold mb-2">Access Instructions</h4>
                <p className="text-xs text-[#d4b896] mb-4">You will receive an automated Discord server link inside your course registration welcome email.</p>
                <button className="btn-primary text-xs px-6 py-2.5 relative z-10">Request Invite Link</button>
              </div>
            </div>
          )
        };
      case 'Live Chat':
        return {
          title: 'Live Chat Support',
          subtitle: 'Talk directly to our support staff.',
          body: (
            <div className="space-y-6">
              <p>Need instant help? Our support agents are active during trading hours (9:15 AM - 3:30 PM).</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] text-center">
                <p className="text-white font-medium mb-3">Live chat is currently: <span className="text-[#ff8c00] font-bold">ONLINE</span></p>
                <button className="btn-primary text-xs px-6 py-2.5 relative z-10">Start Chat Now</button>
              </div>
            </div>
          )
        };
      case 'Schedule a Call':
        return {
          title: 'Schedule a Call',
          subtitle: 'Book a free 1-on-1 career consultation call with an expert advisor.',
          body: (
            <div className="space-y-6">
              <p>Unsure which path is right for you? Book a 15-minute diagnostic call where we review your trading goals and structure a suitable plan.</p>
              <div className="bg-[#1a1206] p-6 rounded-2xl border border-[#2e1f08] text-center">
                <h4 className="text-white font-semibold mb-2">Book Your Slot</h4>
                <p className="text-xs text-[#8c7050] mb-4">Choose a convenient time and an advisor will connect with you on WhatsApp/Zoom.</p>
                <button className="btn-primary text-xs px-6 py-2.5 relative z-10">Open Scheduler</button>
              </div>
            </div>
          )
        };

      // Legal
      case 'Privacy Policy':
        return {
          title: 'Privacy Policy',
          subtitle: 'How we collect, store, and secure your personal credentials.',
          body: (
            <div className="space-y-4 text-xs text-[#d4b896] leading-relaxed">
              <p>We prioritize security. Your phone numbers, email addresses, and transaction logs are encrypted using industrial-grade SSL certificates. We never sell, lease, or share client information with third-party promoters.</p>
              <p>Our secure UPI and debit/credit payment gateways are integrated directly through RBI-compliant vendor networks (Razorpay).</p>
            </div>
          )
        };
      case 'Terms of Service':
        return {
          title: 'Terms of Service',
          subtitle: 'Account sharing and usage limitations.',
          body: (
            <div className="space-y-4 text-xs text-[#d4b896] leading-relaxed">
              <p>By registering, you agree that course materials (video modules, files, daily analysis sheets) are meant for your personal educational use only.</p>
              <p>Strict anti-piracy controls are active. Sharing accounts, recording Zoom screens, or distributing strategy PDFs will trigger automated account suspension.</p>
            </div>
          )
        };
      case 'Refund Policy':
        return {
          title: 'Refund Policy',
          subtitle: 'Our 30-day money-back guarantee guidelines.',
          body: (
            <div className="space-y-4 text-sm text-[#d4b896] leading-relaxed">
              <p>We are fully confident in the quality of our content. If you feel the academy does not match your expectations, we offer a **30-day no-questions-asked refund guarantee**.</p>
              <p>Simply contact us at **support@tradewithbhardwaj.com** referencing your order details, and we will initiate the full refund immediately.</p>
            </div>
          )
        };
      case 'Disclaimer':
        return {
          title: 'Disclaimer & Risk Disclosure',
          subtitle: 'Standard equity risk disclosures.',
          body: (
            <div className="space-y-4 text-xs text-[#d4b896] leading-relaxed">
              <p className="flex gap-2 items-start text-amber-400 bg-amber-500/10 p-3 rounded-lg border border-amber-500/30">
                <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                <span>**WARNING**: Stock market investments, futures, options, and commodities are subject to high volatility and market risk. Loss of capital is possible.</span>
              </p>
              <p>All strategies, indicators, and setups taught inside the academy are purely for educational purposes. We do not guarantee fixed income returns.</p>
            </div>
          )
        };
      case 'SEBI Disclosure':
        return {
          title: 'SEBI Disclosure',
          subtitle: 'SEBI Registered Research Analyst disclosures.',
          body: (
            <div className="space-y-4 text-xs text-[#d4b896] leading-relaxed">
              <p className="flex gap-2 items-start text-[#ff8c00] bg-[#ff8c00]/10 p-3 rounded-lg border border-[#ff8c00]/30">
                <ShieldCheck size={18} className="shrink-0 mt-0.5" />
                <span>Trade with Bhardwaj is operated by a registered SEBI Research Analyst.</span>
              </p>
              <p>Discussions regarding indices or specific shares in classes are mock simulations. Please consult a personal certified financial advisor before committing real capital.</p>
            </div>
          )
        };

      default:
        return {
          title: pageName,
          subtitle: 'Educational details & structures.',
          body: <p>Detailed content regarding this section is currently being updated by the team.</p>
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-[#0d0a06] text-[#f5ede0] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back navigation */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm text-[#8c7050] hover:text-[#ff8c00] transition-colors mb-8 cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home Page
        </button>

        {/* Title Block */}
        <div className="border-b border-[#2e1f08] pb-8 mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            {content.title}
          </h1>
          <p className="text-[#ff8c00] text-sm md:text-base font-medium">
            {content.subtitle}
          </p>
        </div>

        {/* Page Content */}
        <div className="prose prose-invert max-w-none text-[#d4b896] text-sm md:text-base leading-relaxed">
          {content.body}
        </div>
      </div>
    </div>
  );
}  
