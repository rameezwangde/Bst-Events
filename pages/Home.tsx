import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, ArrowUpRight, Play, Sparkles, ShieldCheck, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import LaptopIntro from '../components/LaptopIntro';
import Stats from '../components/Stats';
import GoogleReviews from '../components/GoogleReviews';
import { SERVICES, PROJECTS } from '../constants';
import Layout from '../components/Layout';

const Home = () => {
  // State to manage whether the 3D intro is active
  const [showIntro, setShowIntro] = useState(() => {
    const introShown = sessionStorage.getItem('bst_intro_shown');
    return introShown !== 'true';
  });
  const [introFading, setIntroFading] = useState(false);

  // Parallax Refs
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);

  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  const yAbout1 = useTransform(aboutScroll, [0, 1], [100, -100]);
  const yAbout2 = useTransform(aboutScroll, [0, 1], [-50, 50]);
  const yCtaBg = useTransform(ctaScroll, [0, 1], ["0%", "20%"]);

  const heroHighlights = [
    'Single-team delivery from strategy to staging',
    'Hospitality-grade guest journeys and show-calls',
    'Dubai-built, globally ready production network'
  ];

  const heroStats = [
    { label: 'Projects delivered', value: '300+' },
    { label: 'Cities covered', value: '12' },
    { label: 'Client retention', value: '99%' }
  ];

  const galleryHighlight = PROJECTS[0];
  const supportingProjects = PROJECTS.slice(1, 4);

  const handleIntroComplete = () => {
    sessionStorage.setItem('bst_intro_shown', 'true');
    setIntroFading(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 1000); // Wait for fade out transition
  };

  return (
    <>
      {/* 3D Intro Layer */}
      {showIntro && (
        <div className={`fixed inset-0 z-[60] transition-opacity duration-1000 ease-in-out ${introFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <LaptopIntro onIntroComplete={handleIntroComplete} />
        </div>
      )}

      {/* Main Website Content */}
      <Layout isIntroActive={showIntro && !introFading}>
        {/* Hero Section - refreshed layout */}
        <section className="relative min-h-screen flex items-center pt-24 pb-24 md:pb-40 overflow-hidden bg-[#040915]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#0b1a3d] to-[#050915] opacity-95"></div>
            <div className="absolute -left-32 top-10 w-[480px] h-[480px] bg-bst-accent/20 blur-[140px] rounded-full"></div>
            <div className="absolute right-0 -bottom-20 w-[600px] h-[600px] bg-bst-blue/25 blur-[160px] rounded-full"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_45%)]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-14 items-end">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: showIntro ? 0 : 0.2 }}
                className="space-y-7"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                    <Sparkles size={14} className="text-bst-accent" />
                    Dubai | GCC | Global
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">Award-winning production</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.12]">
                  Experiences engineered <br className="hidden md:block" /> to feel effortless.
                </h1>

                <p className="text-lg text-gray-200 max-w-2xl leading-relaxed font-light">
                  Corporate summits, launch moments, gala dinners, and immersive exhibitions handled end-to-end by one team. We combine strategy, creative, and operations so your brand shows up with authority.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {heroHighlights.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-white flex gap-3 items-start"
                    >
                      <div className="mt-1">
                        <CheckCircle size={18} className="text-bst-accent" />
                      </div>
                      <span className="text-sm leading-relaxed text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 flex items-center gap-2 border border-white/10">
                    Plan Your Event <ArrowRight size={20} />
                  </Link>
                  <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-white text-bst-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={14} fill="currentColor" />
                    </div>
                    <span>Watch reel</span>
                  </button>
                  <span className="text-white/60 text-sm">Response within one business day.</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
                      <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="absolute -inset-6 bg-gradient-to-br from-bst-blue/40 via-transparent to-bst-accent/30 blur-3xl rounded-[40px]"></div>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <img src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/2560x1920_Home-Slider_01_Op-01.jpg?fit=2560%2C1920&ssl=1" alt="Event Hero" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/10 to-transparent"></div>
                  <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live production window: 28 days
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div>
                      <p className="text-sm text-white/70 mb-1">Flagship delivery</p>
                      <p className="text-white font-bold text-2xl">Tech Summit 2024 - Dubai</p>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/80"></div>)}
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Wave Separator at bottom */}
          <div className="absolute bottom-0 left-0 w-full leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
            </svg>
          </div>
        </section>

        {/* Google Reviews */}
        <div className="bg-gray-50 relative z-10 pt-10">
          <GoogleReviews />
        </div>

        {/* Services Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="container mx-auto px-6 md:px-10 relative">
            <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start mb-12">
              <div className="space-y-4">
                <span className="text-bst-accent font-bold tracking-widest uppercase text-sm">What we do</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark leading-tight">
                  Three verticals. One accountable team.
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                  We remove the friction between creative, fabrication, and operations. Whether it's a boardroom reveal or a city-scale festival, your stakeholders speak to one team that owns the outcomes.
                </p>
                <div className="bg-bst-dark text-white rounded-2xl p-6 md:p-7 flex flex-col gap-4 shadow-xl shadow-bst-dark/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <p className="text-sm uppercase tracking-wider text-white/70">Operational sweet spots</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm md:text-base">
                    {['Dubai | GCC', 'KSA', 'Africa', 'Europe'].map((place) => (
                      <div key={place} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white/90 text-center">
                        {place}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Bespoke supplier bench, safety-first builds, and multilingual show-calls aligned to your brand standards.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SERVICES.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2, delay: 0 } }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="group bg-white p-6 md:p-8 rounded-[1.75rem] shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-bst-blue/10 transition-all duration-300 relative overflow-hidden border border-gray-100"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bst-blue to-bst-accent opacity-60"></div>

                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-bst-blue mb-6 group-hover:bg-bst-blue group-hover:text-white transition-all duration-300 group-hover:-rotate-3">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-bst-blue transition-colors">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8 font-light">{service.description}</p>

                    <Link to="/about" className="inline-flex items-center text-bst-dark font-bold hover:text-bst-blue transition-colors group-hover:translate-x-2 duration-300">
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* About Preview */}
        <section ref={aboutRef} className="py-20 md:py-32 bg-bst-dark text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-bst-blue rounded-full blur-[100px] opacity-20"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                  Your Competitive <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bst-accent to-bst-light">Advantage.</span>
                </h2>
                <p className="text-gray-400 mb-8 text-xl leading-relaxed font-light">
                  What makes BST Events & Exhibition different? We don't just manage logistics; we engineer experiences. Our clients trust us for integrated brand marketing solutions that deliver measurable ROI.
                </p>
                <div className="space-y-6 mb-10">
                  {['Integrated brand solutions', 'Cost-effective strategies', 'High degree of personalization'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-bst-blue/20 flex items-center justify-center text-bst-light">
                        <CheckCircle size={14} />
                      </div>
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="px-10 py-4 border border-white/30 text-white rounded-full hover:bg-white hover:text-bst-dark transition-all font-bold inline-block">
                  Read Our Story
                </Link>
              </div>
              <div className="lg:w-1/2 relative h-[500px] md:h-auto">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <motion.div style={{ y: yAbout1 }} className="relative">
                    <img
                      src="https://picsum.photos/seed/team1/400/500"
                      alt="Team"
                      className="rounded-2xl shadow-2xl border border-white/10 w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div style={{ y: yAbout2 }} className="relative mt-12 md:mt-0">
                    <img
                      src="https://picsum.photos/seed/team2/400/500"
                      alt="Event"
                      className="rounded-2xl shadow-2xl border border-white/10 w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-bst-blue font-bold tracking-widest uppercase text-sm mb-2 block">Our work</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark">Signature deliveries</h2>
              </div>
              <Link to="/gallery" className="hidden md:flex items-center gap-2 text-bst-dark font-bold hover:text-bst-blue transition-colors border-b-2 border-bst-dark pb-1 hover:border-bst-blue">
                View full gallery <ArrowUpRight size={20} />
              </Link>
            </div>

            {galleryHighlight && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-2 relative overflow-hidden rounded-3xl group shadow-xl"
                >
                  <img src={galleryHighlight.image} alt={galleryHighlight.title} className="w-full h-full object-cover min-h-[360px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bst-dark/90 via-bst-dark/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-white/80">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-wide">{galleryHighlight.category}</span>
                      <span className="text-white/60 text-sm">High-traffic build with immersive lighting</span>
                    </div>
                    <h3 className="text-white text-3xl font-bold">{galleryHighlight.title}</h3>
                    <Link to="/gallery" className="inline-flex items-center gap-2 text-white font-semibold group-hover:translate-x-1 transition-transform">
                      Explore the process <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {supportingProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative rounded-2xl overflow-hidden group shadow-lg border border-white"
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover min-h-[200px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-bst-dark/85 via-bst-dark/25 to-transparent"></div>
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-bst-accent font-semibold">{project.category}</p>
                        <h4 className="text-white text-xl font-semibold">{project.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center md:hidden">
              <Link to="/gallery" className="px-8 py-4 bg-bst-dark text-white rounded-full font-bold">View Full Gallery</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-bst-blue to-bst-grape"></div>
          <motion.div
            style={{ y: yCtaBg }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
          ></motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-12 text-white shadow-2xl backdrop-blur-xl">
                <p className="uppercase tracking-[0.18em] text-white/70 text-xs mb-4">Rapid response desk</p>
                <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to create something unforgettable?</h2>
                <p className="text-white/85 text-lg mb-8 max-w-3xl font-light">
                  Tell us about the venue, the audience, and the stakes. We will return with a structured plan, budgets, and a first look deck in 72 hours.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-bst-dark font-bold px-8 py-4 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Talk to production <ArrowRight size={18} />
                  </Link>
                  <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                    View credentials <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <PhoneCall size={18} className="text-bst-light" />
                    <div>
                      <p className="text-white font-semibold">+971 55 9662626</p>
                      <p className="text-white/60">Direct line</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-bst-light" />
                    <div>
                      <p className="text-white font-semibold">Dubai, UAE</p>
                      <p className="text-white/60">Available on-site</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-bst-light" />
                    <div>
                      <p className="text-white font-semibold">Certified partners</p>
                      <p className="text-white/60">Safety-first builds</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">How we land fast</p>
                <h3 className="text-2xl font-bold text-bst-dark mb-6">Production sprint outline</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Discovery huddle', detail: 'Brand guardrails, audience map, timeline pressures.' },
                    { title: 'Design + build pack', detail: 'Moodboards, stage and stand renders, lighting concepts.' },
                    { title: 'Run-of-show', detail: 'Show-calls, crew routing, redundancies, guest services.' },
                    { title: 'Post-event wrap', detail: 'Engagement recaps, media handover, and lessons learned.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-2xl bg-bst-blue/10 text-bst-blue flex items-center justify-center font-bold">{idx + 1}</div>
                      <div>
                        <p className="font-semibold text-bst-dark">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 rounded-2xl bg-bst-dark text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">Lead time</p>
                    <p className="text-xl font-semibold">We mobilize in as little as 48 hours.</p>
                  </div>
                  <ArrowRight size={20} className="hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
