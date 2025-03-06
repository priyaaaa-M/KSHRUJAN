import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const programs = [
  {
    title: 'Education First',
    description: 'Providing quality education to underprivileged children through our network of schools and learning centers.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2069'
  },
  {
    title: 'Skill Development',
    description: 'Empowering youth with practical skills and vocational training for better employment opportunities.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071'
  },
  {
    title: 'Community Outreach',
    description: 'Engaging with communities to create sustainable development and positive social change.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070'
  }
];

const ProgramsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're making a difference through our various initiatives
            designed to empower and educate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {program.description}
                  </p>
                  <button className="mt-4 bg-[#94DEA5] text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#7BC98E] transition-all transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;