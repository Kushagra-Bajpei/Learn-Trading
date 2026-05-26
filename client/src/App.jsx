import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import LiveTrading from './components/LiveTrading';
import Instructor from './components/Instructor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import SubPage from './components/SubPage';
import './index.css';

export default function App() {
  const [activePage, setActivePage] = useState(null);

  return (
    <div className="min-h-screen bg-[#0d0a06]">
      <Navbar onLinkClick={setActivePage} />
      
      {activePage ? (
        <SubPage pageName={activePage} onClose={() => setActivePage(null)} />
      ) : (
        <>
          <Hero />
          <Features />
          <Courses />
          <LiveTrading />
          <Instructor />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTABanner />
        </>
      )}

      <Footer onLinkClick={setActivePage} />
    </div>
  );
}
