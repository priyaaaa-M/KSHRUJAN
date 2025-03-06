import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  {
    name: 'Partner 1',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069',
    url: '#'
  },
  {
    name: 'Partner 2',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069',
    url: '#'
  },
  {
    name: 'Partner 3',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069',
    url: '#'
  },
  {
    name: 'Partner 4',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069',
    url: '#'
  },
  {
    name: 'Partner 5',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069',
    url: '#'
  }
];

const PartnersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to create lasting impact
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-32 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;