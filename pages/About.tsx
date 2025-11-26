import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import { Shield, Target, Heart, CheckCircle, MapPin, Clock3 } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const About = () => {
  const containerRef = useRef(null);
  // Track the scroll progress of the page container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create parallax values: elements move at different speeds relative to scroll
  const yBackgroundSlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yBackgroundFast = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotateSlow = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <Layout>
      <div ref={containerRef} className="relative overflow-hidden">
        {/* About Hero */}
        <section className="bg-bst-dark text-white py-32 relative overflow-hidden min-h-[60vh] flex items-center">
          {/* 3D Background */}
          <ThreeBackground />

          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-extrabold mb-6"
            >
              About BST Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light"
            >
              Integrated solutions. Cost-effective execution. Personalized experiences.
            </motion.p>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-16 md:py-24 relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bst-cream via-white to-white"></div>
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-bst-blue/10 blur-3xl rounded-full"></div>
          <div className="absolute -left-24 bottom-0 w-80 h-80 bg-bst-accent/10 blur-3xl rounded-full"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-16 items-center">
              <div className="space-y-6 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bst-accent">Events / Exhibition Stands</p>
                <h2 className="text-3xl md:text-4xl font-bold text-bst-dark leading-snug">
                  Corporate summits, award ceremonies, and immersive builds with one accountable team.
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    We orchestrate strategy, creative, fabrication, and show-calling under one roof so stakeholders get a single version of the truth. Every project is built to your brand guardrails with safety-first builds and multilingual crews.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Supplier and venue lock-in within 48 hours',
                      'Production-ready decks and renders in 72 hours',
                      '24/7 on-ground crew and client services'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-2xl border border-blue-100/70 bg-blue-50/60 px-4 py-3 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-bst-blue mt-1" />
                        <span className="text-base text-bst-dark/90">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-bst-blue/10 border border-bst-blue/20 text-bst-dark"><MapPin size={16} />Dubai | GCC | Global</span>
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-bst-accent/10 border border-bst-accent/20 text-bst-dark"><Clock3 size={16} />Rapid mobilization</span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[2.25rem] overflow-hidden shadow-2xl border border-gray-100 bg-bst-dark"
              >
                <img
                  src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/2560x1920_Home-Slider-03.jpg?fit=1536%2C1152&ssl=1"
                  alt="BST premium event showcase"
                  className="w-full h-[24rem] md:h-[32rem] object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Flagship builds</p>
                    <p className="text-2xl font-semibold">Launch moments and city-scale experiences</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we run */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <motion.div
            style={{ y: yBackgroundSlow }}
            className="absolute right-0 top-0 w-96 h-96 bg-bst-accent/5 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            style={{ y: yBackgroundFast, x: -100 }}
            className="absolute left-0 bottom-0 w-80 h-80 bg-bst-blue/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="container mx-auto px-6 relative z-10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bst-accent">Capabilities</p>
                <h3 className="text-3xl md:text-4xl font-bold text-bst-dark">What we run end-to-end</h3>
              </div>
              <p className="text-gray-600 max-w-2xl">
                From CXO councils to festival-scale builds, we plan, design, fabricate, and operate every layer with clear accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-10 h-10 text-bst-blue" />,
                  title: 'Corporate & leadership',
                  text: 'AGMs, board summits, awards, offsites, investor and partner moments with broadcast-ready show-calls.'
                },
                { 
                  icon: <Heart className="w-10 h-10 text-bst-accent" />, 
                  title: 'Exhibitions & stands', 
                  text: 'Concept to fabrication for stands, product theaters, and interactive demos with safety-first builds.' 
                },
                { 
                  icon: <Shield className="w-10 h-10 text-bst-dark" />, 
                  title: 'Public & cultural', 
                  text: 'Gala dinners, city festivals, and community programs with multi-language crews and hospitality-grade guest flow.' 
                }
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-bst-cream/60 via-white to-white opacity-90"></div>
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-bst-accent/10 blur-2xl rounded-full"></div>
                  <div className="absolute -left-10 -bottom-10 w-28 h-28 bg-bst-blue/10 blur-2xl rounded-full"></div>
                  <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-bst-dark mb-3">{card.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* How we operate */}
        <section className="bg-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-bst-cream"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bst-accent">Process</p>
                <h3 className="text-3xl md:text-4xl font-bold text-bst-dark">How we get you from brief to applause</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A structured PMO with fast decisions, transparent budgets, and crews that stay aligned from render to show-day.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Discovery sprint', detail: 'Audience, objectives, risks, and non-negotiables in one working session.' },
                  { label: 'Design + build kit', detail: 'Moodboards, renders, AV/light plots, safety plans, and logistics mapped.' },
                  { label: 'Run-of-show', detail: 'Show-calls, stage management, guest services, and vendor routing locked.' },
                  { label: 'Post-event wrap', detail: 'Media handover, engagement recap, and improvement log for next cycle.' }
                ].map((step, idx) => (
                  <div key={step.label} className="flex gap-4 items-start rounded-2xl border border-gray-100 p-4 shadow-sm bg-white/80">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bst-blue/10 to-bst-accent/15 text-bst-blue flex items-center justify-center font-bold">{idx + 1}</div>
                    <div>
                      <p className="text-lg font-semibold text-bst-dark">{step.label}</p>
                      <p className="text-gray-600">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership highlight */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/akhlesh-1.jpg?fit=300%2C285&ssl=1"
                  alt="Akhilesh Bhadran"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-bst-accent">Leadership</p>
                <h4 className="text-2xl md:text-3xl font-bold text-bst-dark">Akhilesh Bhadran - Operations Manager</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  "We build experiences that feel effortless because every contingency is planned. Our crews, partners, and clients work from one transparent playbook so show day is calm, precise, and on-brand."
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="px-3 py-2 rounded-full bg-white border border-gray-200">Value & ROI</span>
                  <span className="px-3 py-2 rounded-full bg-white border border-gray-200">Safety-first builds</span>
                  <span className="px-3 py-2 rounded-full bg-white border border-gray-200">Client-first PMO</span>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <img
                    src="https://wallpaperaccess.com/full/4318144.jpg"
                    alt="Dubai skyline at dusk"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default About;
