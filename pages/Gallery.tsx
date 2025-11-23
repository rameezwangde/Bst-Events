import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['All', 'Events', 'Exhibitions', 'Brandings'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <Layout>
      <section className="bg-bst-dark text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto font-light text-lg"
          >
            Explore our portfolio of successful events, exhibitions, and branding projects.
          </motion.p>
        </div>
      </section>

      <section className="py-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
             {CATEGORIES.map((cat, i) => (
               <motion.button
                 key={cat}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 onClick={() => setFilter(cat)}
                 className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 tracking-wide ${
                   filter === cat 
                     ? 'bg-bst-blue text-white shadow-lg shadow-blue-500/30 scale-105 ring-2 ring-offset-2 ring-bst-blue' 
                     : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-bst-dark shadow-sm'
                 }`}
               >
                 {cat}
               </motion.button>
             ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer aspect-[3/4] md:aspect-[4/5] bg-bst-dark"
                >
                  {/* Image with Zoom Effect */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90" 
                  />
                  
                  {/* Premium Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Content Reveal */}
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 h-full">
                     <div className="mt-auto">
                         {/* Category - Slides in */}
                         <span className="inline-block text-bst-accent text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                           {project.category}
                         </span>
                         
                         {/* Title - Color change */}
                         <h3 className="text-white text-2xl font-extrabold mb-3 group-hover:text-bst-light transition-colors duration-300 leading-tight">
                           {project.title}
                         </h3>
                         
                         {/* Description - Fade/Slide Up */}
                         <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-[max-height] duration-500 ease-in-out">
                             <p className="text-gray-300 text-sm font-light leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                               {project.description}
                             </p>
                         </div>
                         
                         {/* CTA Line */}
                         <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-4 group-hover:translate-y-0">
                            View Project <ArrowUpRight size={16} className="text-bst-accent" />
                         </div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
              <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-400 py-20"
              >
                  <p className="text-xl font-light">No projects found in this category.</p>
                  <button onClick={() => setFilter('All')} className="mt-4 text-bst-blue font-bold hover:underline">View All Projects</button>
              </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;