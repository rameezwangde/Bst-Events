import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';
import { Shield, Target, Heart } from 'lucide-react';
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

        {/* Main Content */}
        <section className="py-16 md:py-24 relative bg-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-16 items-center">
              <div className="space-y-6 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-bst-accent">Events / Exhibition Stands</p>
                <h2 className="text-3xl md:text-4xl font-bold text-bst-dark leading-snug">
                  Corporate Event, an Award Ceremony, A Gala Dinner or a Birthday Celebration.
                </h2>
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Organizing an event requires a high level of professionalism, total dedication and a strong presence.
                    We at BST Events, being a professional conference organizer, understand what it takes to organize a
                    successful conference.
                  </p>
                  <p>
                    Professionally handling all meetings and conference elements starting from blocking the venue and
                    conference space, organizing the facilities, booking accommodation, obtaining all governmental
                    documentation, providing technical equipment and support through to planning all logistics, sending
                    invitations and putting a perfect running order for all involved parties to make sure all areas are well
                    planned to bring perfect execution for your conference. And that’s not all we specialize in.
                  </p>
                  <p>
                    Being a total solution provider for all components of a conference from A to Z, we have become preferred
                    partners to many corporations, forum organizers; making many of them our repeating clients.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
              >
                <img
                  src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/2560x1920_Home-Slider-03.jpg?fit=1536%2C1152&ssl=1"
                  alt="BST premium event showcase"
                  className="w-full h-[24rem] md:h-[32rem] object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Parallax Background Elements - Footer area */}
          <motion.div
            style={{ y: yBackgroundSlow }}
            className="absolute right-0 top-0 w-96 h-96 bg-bst-accent/5 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            style={{ y: yBackgroundFast, x: -100 }}
            className="absolute left-0 bottom-0 w-80 h-80 bg-bst-blue/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-bst-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Target className="w-12 h-12 text-bst-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600 font-light">To be the leading event management company known for innovation and excellence in the region.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-bst-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Heart className="w-12 h-12 text-bst-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600 font-light">To provide comprehensive, integrated solutions that elevate brands and create lasting memories.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-bst-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Shield className="w-12 h-12 text-bst-dark mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Promise</h3>
                <p className="text-gray-600 font-light">Value, savings, ROI, and peace of mind – we guarantee them all for every client we serve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Manager Highlight */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] items-center">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-full border-t border-gray-200" />
                <div className="w-full max-w-sm rounded-2xl border border-gray-200 p-4 shadow-lg shadow-gray-200/60">
                  <img
                    src="https://i0.wp.com/www.bstevent.com/wp-content/uploads/2023/01/akhlesh-1.jpg?fit=300%2C285&ssl=1"
                    alt="Akhilesh Bhadran"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-bst-dark">Akhilesh Bhadran</p>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mt-2">Operations Manager</p>
                </div>
                <div className="w-full border-t border-gray-200" />
                <p className="text-gray-600 leading-relaxed text-lg">
                  “We work hard to make sure that our core values are reflected in every aspect of our business operations.
                  To help create a unified company culture, we base our decisions and actions on our values. We look forward
                  to hearing from you and helping you create the event of your dreams.”
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://wallpaperaccess.com/full/4318144.jpg"
                  alt="Dubai skyline sunset"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;