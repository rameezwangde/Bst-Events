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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-bst-dark mb-6">Our strengths – your competitive advantage.</h2>
                 <p className="text-gray-600 leading-loose mb-6 text-lg font-light">
                   What makes BST Events & Exhibition different? Our clients trust us for our ability to offer integrated brand marketing solutions all under one roof. We provide the depth and breadth clients seek, cost-effectively with a high degree of personalization.
                 </p>
                 <p className="text-gray-600 leading-loose text-lg font-light">
                   We don't just manage events; we engineer experiences that drive ROI and provide peace of mind.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="https://picsum.photos/seed/about1/400/400" alt="Planning" className="rounded-2xl shadow-lg mt-8 w-full h-auto" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img src="https://picsum.photos/seed/about2/400/400" alt="Execution" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                </motion.div>
              </div>
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
      </div>
    </Layout>
  );
};

export default About;