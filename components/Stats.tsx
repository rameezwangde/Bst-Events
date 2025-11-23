import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { STATS } from '../constants';

const StatCounter = ({ value, suffix }: { value: string, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-bst-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-bst-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-extrabold mb-2 text-bst-accent font-sans">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-lg md:text-xl text-blue-100 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;