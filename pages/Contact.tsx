import React from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';

const Contact = () => {
  return (
    <Layout>
      <section className="bg-bst-dark text-white py-32 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* 3D Background */}
        <ThreeBackground />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 font-light"
          >
            We would love to consult with you. Let's talk!
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Contact Info */}
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-bst-dark mb-8">Let's start a conversation</h2>
                <p className="text-gray-600 mb-12 text-lg leading-relaxed font-light">
                   Tell us about your event and we’ll take care of the rest. From planning to execution, we are here to help you create something extraordinary.
                </p>

                <div className="space-y-8">
                   <motion.div 
                     whileHover={{ x: 5 }}
                     className="flex items-start gap-4"
                   >
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-bst-blue shrink-0 border border-blue-100">
                         <Phone />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900">Phone</h3>
                         <p className="text-gray-600 font-light">+971 55 9662626</p>
                      </div>
                   </motion.div>

                   <motion.div 
                     whileHover={{ x: 5 }}
                     className="flex items-start gap-4"
                   >
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-bst-blue shrink-0 border border-blue-100">
                         <Mail />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900">Email</h3>
                         <p className="text-gray-600 font-light">info@bstevent.com</p>
                      </div>
                   </motion.div>

                   <motion.div 
                     whileHover={{ x: 5 }}
                     className="flex items-start gap-4"
                   >
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-bst-blue shrink-0 border border-blue-100">
                         <MapPin />
                      </div>
                      <div>
                         <h3 className="font-bold text-gray-900">Location</h3>
                         <p className="text-gray-600 font-light">Dubai, United Arab Emirates</p>
                      </div>
                   </motion.div>
                </div>
             </div>

             {/* Form */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-6 md:p-8 lg:p-10 rounded-[2rem] shadow-2xl border border-gray-100"
             >
                <form className="space-y-6">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bst-blue focus:ring-2 focus:ring-bst-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bst-blue focus:ring-2 focus:ring-bst-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bst-blue focus:ring-2 focus:ring-bst-blue/20 outline-none transition-all bg-gray-50 focus:bg-white">
                         <option>General Inquiry</option>
                         <option>Event Planning</option>
                         <option>Exhibition Stand</option>
                         <option>Branding</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bst-blue focus:ring-2 focus:ring-bst-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Tell us about your project..."></textarea>
                   </div>
                   <button type="submit" className="w-full bg-gradient-to-r from-bst-blue to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                      Send Message <Send size={18} />
                   </button>
                </form>
             </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;