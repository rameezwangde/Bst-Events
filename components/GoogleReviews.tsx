import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const GoogleReviews = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-sm font-bold text-bst-accent uppercase tracking-widest mb-2">Testimonials</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-bst-dark">What Clients Say</h3>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
                 <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                 </div>
                 <span className="font-bold text-gray-700">4.9/5 on Google</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bst-cream p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-bst-accent"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <div className="flex text-yellow-400">
                     {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={12} />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-bst-blue text-bst-blue font-semibold rounded-full hover:bg-bst-blue hover:text-white transition-colors">
                View All Reviews on Google
            </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
