import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, ArrowUpRight, Play } from 'lucide-react';
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
        {/* Hero Section - Updated to match the Blue/Orange theme */}
        <section className="relative min-h-screen flex items-center pt-20 pb-24 md:pb-40 overflow-hidden bg-bst-dark">
          {/* Background Gradients - Deep Blue */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#1e3a8a] to-[#020617] z-0"></div>

          {/* Decorative Ambient Glows */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bst-blue/20 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bst-accent/10 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>

          <div className="container mx-auto px-6 relative z-10 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: showIntro ? 0 : 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-bst-light bg-white/5 backdrop-blur-md">
                    Premium Event Management
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                  Create Moments That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Inspire</span>
                </h1>

                <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
                  Corporate Events, Award Ceremonies, Gala Dinners & Celebrations. We bring your vision to life with world-class precision and creativity.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 flex items-center gap-2 border border-white/10">
                    Plan Your Event <ArrowRight size={20} />
                  </Link>
                  <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-white text-bst-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={14} fill="currentColor" />
                    </div>
                    <span>Watch Reel</span>
                  </button>
                </div>

                {/* Mini Stats in Hero */}
                <div className="mt-12 flex gap-8 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold text-white">300</p>
                    <p className="text-gray-400 text-sm">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">12</p>
                    <p className="text-gray-400 text-sm">Industries</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">99%</p>
                    <p className="text-gray-400 text-sm">Engagement Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                {/* Abstract composition */}
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-bst-blue to-bst-accent blur-2xl opacity-30 transform rotate-12"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/2560x1920_Home-Slider_01_Op-01.jpg?fit=2560%2C1920&ssl=1" alt="Event Hero" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bst-dark/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-bold text-lg">Tech Summit 2024</p>
                      <div className="flex text-yellow-400 gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-current"></div>)}
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative card */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-xl w-48"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-white font-bold text-sm">Verified Partner</span>
                    </div>
                    <p className="text-gray-300 text-xs">Trusted by top brands in UAE</p>
                  </motion.div>
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
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 md:px-10">
            <div className="text-center mb-20">
              <span className="text-bst-accent font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark mb-6">Our Core Services</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-bst-blue to-bst-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2, delay: 0 } }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="group bg-white p-6 md:p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-bst-blue/10 transition-shadow duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bst-blue to-bst-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-bst-blue mb-8 group-hover:bg-bst-blue group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-bst-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 font-light">{service.description}</p>

                  <Link to="/about" className="inline-flex items-center text-bst-dark font-bold hover:text-bst-blue transition-colors group-hover:translate-x-2 duration-300">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              ))}
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
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-bst-blue font-bold tracking-widest uppercase text-sm mb-2 block">Our Work</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-bst-dark">Featured Projects</h2>
              </div>
              <Link to="/gallery" className="hidden md:flex items-center gap-2 text-bst-dark font-bold hover:text-bst-blue transition-colors border-b-2 border-bst-dark pb-1 hover:border-bst-blue">
                View Full Gallery <ArrowUpRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer shadow-lg"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bst-dark/90 via-bst-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                    <span className="text-bst-accent text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="text-white font-bold text-2xl">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
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

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to create <br />something amazing?</h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-light">Tell us about your event and we'll take care of the rest.</p>
            <Link to="/contact" className="inline-block bg-white text-bst-dark text-lg font-bold px-12 py-5 rounded-full shadow-2xl shadow-black/20 hover:bg-bst-dark hover:text-white hover:scale-105 transition-all duration-300">
              Let's Talk: +971 55 9662626
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;