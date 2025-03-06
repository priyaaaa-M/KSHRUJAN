import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gray-900/20 z-10 flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white p-4 rounded-full transition-all transform hover:scale-110">
                <svg
                  className="w-8 h-8 text-[#94DEA5]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              alt="Children learning"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              KSHRujan Foundation is dedicated to empowering youth through education and skill development. 
              We believe in creating opportunities that enable young minds to reach their full potential 
              and contribute meaningfully to society.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our innovative programs and dedicated team of educators work tirelessly to provide quality 
              education and mentorship to underprivileged children across the country.
            </p>
            <button className="bg-[#94DEA5] text-gray-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#7BC98E] transition-all transform hover:scale-105">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;