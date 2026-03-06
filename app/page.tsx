'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Target, 
  MessageCircle, 
  Activity, 
  Zap, 
  Dumbbell, 
  StretchHorizontal, 
  UserCheck, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  Instagram, 
  Mail, 
  MapPin,
  CheckCircle2,
  ImageOff,
  Quote
} from 'lucide-react';

// --- Types ---
interface SectionProps {
  isVisible: boolean;
}

// --- Hooks ---
const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// --- Components ---
const SafeImage = ({ src, alt, fill, className, priority }: { 
  src: string; 
  alt: string; 
  fill?: boolean; 
  className?: string;
  priority?: boolean;
}) => {
  const [error, setError] = useState(false);
  if (!src || error) {
    return (
      <div className={`flex items-center justify-center bg-secondary/50 ${className}`}>
        <ImageOff className="text-white/10" size={48} />
      </div>
    );
  }
  return (
    <Image 
      src={src} 
      alt={alt} 
      fill={fill} 
      className={className} 
      onError={() => setError(true)}
      priority={priority}
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#products" },
    { name: "Why Zenith", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold tracking-tighter text-white">
          ZENITH<span className="text-accent">FITNESS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent text-white px-6 py-2 rounded-none font-bold text-sm uppercase hover:brightness-110 transition-all"
          >
            Start Your Transformation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative ml-auto h-full w-[80%] max-w-sm bg-primary border-l border-white/10 p-10 flex flex-col">
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading font-bold uppercase"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white py-4 text-center font-bold uppercase mt-4"
              >
                Start Transformation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function ZenithWebsite() {
  const brand = {
    name: "Zenith Fitness",
    tagline: "Unleash Your Apex Potential.",
    description: "Elite, personalized fitness and nutrition coaching designed for peak performance and uncompromising results. We don't train, we transform.",
    currency: "$"
  };

  const products = [
    {
      name: "Apex Performance Package",
      description: "12 weeks of hyper-personalized training, bi-weekly nutrition audits, and 24/7 coach access.",
      price: "2499",
      icon: <Zap size={24} />
    },
    {
      name: "Foundational Strength Bloc",
      description: "8-week strength-focused program with weekly form review and standard meal plan template.",
      price: "1299",
      icon: <Dumbbell size={24} />
    },
    {
      name: "One-Time Mobility Check",
      description: "90-minute deep-dive session focusing on movement assessment and corrective exercises.",
      price: "199",
      icon: <StretchHorizontal size={24} />
    }
  ];

  const features = [
    {
      title: "Hyper-Personalized Plans",
      description: "Every set, rep, and macro is tailored to your specific DNA and goals. No cookie-cutter routines.",
      icon: <Target className="text-accent" size={32} />
    },
    {
      title: "24/7 Coach Access",
      description: "Direct line to your dedicated performance coach for real-time adjustments and motivation.",
      icon: <MessageCircle className="text-accent" size={32} />
    },
    {
      title: "Data-Driven Progression",
      description: "Utilizing advanced metrics tracking to ensure measurable, undeniable progress every cycle.",
      icon: <Activity className="text-accent" size={32} />
    }
  ];

  const stats = [
    { number: "150+", label: "Clients Transformed", icon: <UserCheck size={28} /> },
    { number: "10k+", label: "Workouts Completed", icon: <Clock size={28} /> },
    { number: "98%", label: "Client Retention", icon: <TrendingUp size={28} /> }
  ];

  const testimonials = [
    {
      name: "Marcus R.",
      text: "My previous PBs are now my warm-up sets. The intensity calibration is unmatched.",
      role: "CEO, Client Since '22"
    },
    {
      name: "Chloe S.",
      text: "I finally understand nutrition. Lost 15% body fat without feeling depleted. Worth every penny.",
      role: "Marathon Runner"
    }
  ];

  // Section visibility hooks
  const heroReveal = useScrollReveal();
  const featureReveal = useScrollReveal();
  const productReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  return (
    <main className="min-h-screen bg-primary text-white">
      <Navbar />

      {/* HERO SECTION - Pattern HR-B */}
      <section 
        id="home"
        ref={heroReveal.ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/20" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 transform ${
          heroReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-9xl font-heading font-bold leading-none mb-6">
            TRANSFORM <br /> 
            <span className="text-accent">YOUR LIMITS.</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light">
            Zenith Fitness offers elite coaching that cuts through the noise. Achieve the strength and physique you were built for.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-accent text-white px-10 py-5 font-bold uppercase tracking-widest text-lg hover:brightness-110 hover:scale-105 transition-all shadow-2xl animate-glow"
            >
              Start Your Transformation
            </a>
            <a 
              href="#products" 
              className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-5 font-bold uppercase tracking-widest text-lg hover:bg-white/10 transition-all"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION - A6 */}
      <div className="py-8 bg-secondary border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-2xl md:text-3xl font-heading font-black text-white/20 uppercase tracking-tighter">Elite Coaching</span>
              <span className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-2xl md:text-3xl font-heading font-black text-white/20 uppercase tracking-tighter">Peak Performance</span>
              <span className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-2xl md:text-3xl font-heading font-black text-white/20 uppercase tracking-tighter">Data-Driven</span>
              <span className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-2xl md:text-3xl font-heading font-black text-white/20 uppercase tracking-tighter">Zero Excuses</span>
              <span className="w-3 h-3 bg-accent rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section 
        id="features"
        ref={featureReveal.ref}
        className="py-24 px-6 bg-primary"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            featureReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Zenith Difference</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Why settle for average when you can achieve the apex?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`group p-10 bg-secondary/30 border border-white/5 rounded-2xl transition-all duration-700 hover:bg-secondary/50 hover:border-accent/30 ${
                  featureReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section 
        id="products"
        ref={productReveal.ref}
        className="py-24 px-6 bg-secondary/20 relative"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            productReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Select Your Path</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Choose the coaching tier that matches your commitment level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col p-8 md:p-10 bg-black/40 border-t-4 border-accent transition-all duration-700 hover:-translate-y-4 shadow-2xl ${
                  productReveal.isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="text-accent mb-6">{product.icon}</div>
                <h3 className="text-2xl font-heading font-bold mb-4">{product.name}</h3>
                <p className="text-white/50 mb-10 flex-grow text-sm leading-relaxed">{product.description}</p>
                <div className="mb-8">
                  <span className="text-sm text-white/40 uppercase tracking-widest block mb-1">Investment</span>
                  <span className="text-5xl font-heading font-bold text-white">{brand.currency}{product.price}</span>
                </div>
                <a 
                  href="#contact" 
                  className="w-full py-4 text-center font-bold border border-accent text-accent hover:bg-accent hover:text-white transition-all uppercase tracking-widest text-sm"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section 
        id="about"
        ref={aboutReveal.ref}
        className="py-24 px-6 bg-primary overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 ${
            aboutReveal.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">The Zenith Philosophy</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              We believe true fitness is forged through disciplined intensity and relentless precision. Our methods are science-backed and proven by top performers. We push boundaries because you hired us to.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-accent mb-2">{stat.icon}</span>
                  <span className="text-4xl font-heading font-bold">{stat.number}</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative aspect-square transition-all duration-1000 delay-300 ${
            aboutReveal.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="absolute inset-0 border-2 border-accent/20 translate-x-6 translate-y-6 z-0" />
            <div className="relative z-10 w-full h-full bg-secondary flex items-center justify-center p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary opacity-50" />
              <Dumbbell size={180} className="text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="text-center font-heading text-2xl font-bold italic text-white/80 leading-tight">
                  "Peak Performance is not an accident. It is a commitment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section 
        ref={testimonialReveal.ref}
        className="py-24 px-6 bg-secondary/40 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-heading font-bold text-center mb-16 transition-all duration-1000 ${
            testimonialReveal.isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Results Speak Louder
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i}
                className={`p-10 bg-primary/50 border-l-2 border-accent relative transition-all duration-1000 ${
                  testimonialReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <Quote className="text-accent/20 absolute top-6 right-6" size={48} />
                <p className="text-xl italic text-white/80 mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">{t.name}</h4>
                  <p className="text-accent text-sm font-bold mt-1 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - C3 */}
      <section 
        id="contact"
        ref={contactReveal.ref}
        className="py-24 px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            contactReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">Ready to Commit?</h2>
            <p className="text-white/50">Stop making excuses. Start making progress.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-secondary p-12 text-center rounded-2xl border border-accent/20 animate-scaleIn">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-accent" size={48} />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Transmission Received</h3>
              <p className="text-white/60 mb-8">A performance coach will review your profile and reach out within 24 hours. Prepare yourself.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-accent uppercase tracking-widest font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }}
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                contactReveal.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required
                  type="text" 
                  placeholder="FULL NAME" 
                  className="w-full bg-secondary/50 border border-white/10 p-5 focus:border-accent outline-none transition-all placeholder:text-white/20"
                />
                <input 
                  required
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-secondary/50 border border-white/10 p-5 focus:border-accent outline-none transition-all placeholder:text-white/20"
                />
              </div>
              <input 
                required
                type="tel" 
                placeholder="PHONE NUMBER" 
                className="w-full bg-secondary/50 border border-white/10 p-5 focus:border-accent outline-none transition-all placeholder:text-white/20"
              />
              <textarea 
                required
                rows={5} 
                placeholder="YOUR GOALS & EXPERIENCE" 
                className="w-full bg-secondary/50 border border-white/10 p-5 focus:border-accent outline-none transition-all placeholder:text-white/20 resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-accent text-white py-6 font-bold uppercase tracking-[0.3em] text-lg hover:brightness-110 shadow-xl transition-all flex items-center justify-center gap-4"
              >
                Initialize Transformation <ArrowRight size={20} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER - F2 */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <a href="#home" className="text-3xl font-heading font-bold tracking-tighter text-white mb-6 block">
                ZENITH<span className="text-accent">FITNESS</span>
              </a>
              <p className="text-white/40 max-w-sm mb-8">
                The absolute standard in elite performance coaching. Join the 1% and redefine what's possible for your body and mind.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/zenithfit" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-accent transition-colors">Programs</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">Philosophy</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li className="flex items-center gap-3"><Mail size={16} /> info@zenithfitness.com</li>
                <li className="flex items-center gap-3"><MapPin size={16} /> 101 Apex Tower, USA</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs uppercase tracking-widest">
              © {new Date().getFullYear()} Zenith Fitness. All rights reserved.
            </p>
            <p className="text-white/20 text-xs uppercase tracking-widest">
              Built for results. No-brainer.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}