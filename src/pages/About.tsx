import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Award, Users } from 'lucide-react';
import Footer from '../components/Footer';

const objectives = [
  {
    icon: Target,
    title: 'Quality Education',
    description: 'Provide high-quality education to underprivileged children across the country.'
  },
  {
    icon: Rocket,
    title: 'Skill Development',
    description: 'Empower youth with practical skills for better employment opportunities.'
  },
  {
    icon: Award,
    title: 'Community Impact',
    description: 'Create sustainable development and positive change in communities.'
  },
  {
    icon: Users,
    title: 'Inclusive Growth',
    description: 'Ensure no child is left behind in their educational journey.'
  }
];

const teamLeaders = [
  {
    name: ' Priyanka Mandal',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076',
    description: 'With over 15 years of experience in education, Dr. Sharma leads our strategic initiatives.'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Program Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    description: 'Rajesh oversees the implementation of our educational programs across regions.'
  },
  {
    name: 'Sarah Williams',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061',
    description: 'Sarah ensures smooth functioning of our day-to-day operations and resource management.'
  },
  {
    name: 'Amit Patel',
    role: 'Community Relations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2069',
    description: 'Amit builds and maintains strong relationships with our community partners.'
  }
];

const About = () => {
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [objectivesRef, objectivesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[46vh] min-h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-white/90">Building a better future through education and empowerment</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "To create a world where every child has access to quality education and the opportunity to reach their full potential, regardless of their socio-economic background."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
                alt="Children learning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to providing comprehensive educational support and skill development
                programs that empower underprivileged children and youth. Through innovative teaching
                methods and dedicated mentorship, we aim to break the cycle of poverty and create
                lasting positive change in communities across the nation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines academic excellence with practical skills training, ensuring
                that our beneficiaries are well-equipped for future success in their chosen paths.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section ref={objectivesRef} className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={objectivesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Objectives</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by our vision and mission, we focus on these key objectives to create lasting impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                animate={objectivesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#94DEA5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <objective.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leaders Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who drive our mission forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamLeaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-[#94DEA5] font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;