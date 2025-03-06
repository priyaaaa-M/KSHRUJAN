import React from 'react';
import { Calendar, Users, BookOpen, Award, Heart, Clock, Zap } from 'lucide-react';

const OurWork = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#023D54] text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-2xl mb-8">
            Empowering communities through sustainable development and education initiatives.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
      </div>

      {/* Programme Aims */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Programme Aims</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-105 border-t-4 border-[#94DEA5]">
              <div className="bg-[#94DEA5]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#023D54]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#023D54]">Community Empowerment</h3>
              <p className="text-gray-700">Building self-reliant communities through participatory approaches and local leadership development.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-105 border-t-4 border-[#9A6735]">
              <div className="bg-[#9A6735]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-[#023D54]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#023D54]">Educational Excellence</h3>
              <p className="text-gray-700">Providing quality education and training to create opportunities for sustainable livelihoods.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-105 border-t-4 border-[#94DEA5]">
              <div className="bg-[#94DEA5]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#023D54]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#023D54]">Sustainable Development</h3>
              <p className="text-gray-700">Implementing environmentally conscious programs that promote long-term economic and social growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Model */}
      <section className="py-16 bg-[#023D54]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Our Training Model</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Training session" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#023D54]">Holistic Approach to Learning</h3>
              <p className="text-gray-700 mb-6">
                Our training model combines theoretical knowledge with practical application, ensuring participants develop comprehensive skills that are immediately applicable in real-world scenarios.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023D54]">Needs Assessment</h4>
                    <p className="text-gray-600">Identifying specific community needs to tailor our training programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023D54]">Skills Development</h4>
                    <p className="text-gray-600">Focused training on practical skills with hands-on workshops</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023D54]">Mentorship & Support</h4>
                    <p className="text-gray-600">Ongoing guidance from experienced professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] rounded-full p-1 mr-4 mt-1">
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#023D54]">Community Implementation</h4>
                    <p className="text-gray-600">Applying learned skills to address local challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Train The Trainer */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Train The Trainer</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-6 text-[#023D54]">Building Local Capacity</h3>
              <p className="text-gray-700 mb-6">
                Our Train the Trainer program develops local leaders who can sustain and expand our initiatives within their communities, creating a multiplier effect for our impact.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#9A6735] mb-6">
                <h4 className="font-semibold text-[#023D54] mb-2">Program Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#9A6735] mr-2">•</span>
                    <span>Intensive 6-week certification program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9A6735] mr-2">•</span>
                    <span>Advanced facilitation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9A6735] mr-2">•</span>
                    <span>Curriculum development workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9A6735] mr-2">•</span>
                    <span>Community engagement strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9A6735] mr-2">•</span>
                    <span>Ongoing professional development</span>
                  </li>
                </ul>
              </div>
              <button className="bg-[#023D54] text-white py-3 px-6 rounded-md hover:bg-[#023D54]/90 transition-colors">
                Apply for Trainer Program
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Train the trainer session" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Programmes */}
      <section className="py-16 bg-[#023D54]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Our Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#023D54]">{program.title}</h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <button className="text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Impact */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Stories of Impact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {stories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full md:w-40 h-40 object-cover rounded-lg"
                />
                <div>
                  <div className="text-[#94DEA5] mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">{story.quote}</p>
                  <div>
                    <h4 className="font-semibold text-[#023D54]">{story.name}</h4>
                    <p className="text-gray-600 text-sm">{story.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#9A6735] text-white py-3 px-6 rounded-md hover:bg-[#9A6735]/90 transition-colors">
              Read More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#023D54]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-[#023D54] text-white p-4 flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold">{event.date.day}</span>
                    <span className="ml-2">{event.date.month}</span>
                  </div>
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#023D54]">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#9A6735] font-medium">{event.location}</span>
                    <button className="bg-[#94DEA5] text-[#023D54] py-2 px-4 rounded-md hover:bg-[#94DEA5]/90 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-[#023D54] text-[#023D54] py-3 px-6 rounded-md hover:bg-[#023D54] hover:text-white transition-colors">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Current Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Current Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {currentEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-3">
                    <Zap className="w-5 h-5 text-[#94DEA5] mr-2" />
                    <span className="text-[#94DEA5] font-medium">Ongoing</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#023D54]">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#9A6735]">{event.location}</span>
                    <button className="text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors flex items-center">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for programmes
const programmes = [
  {
    title: "Sustainable Agriculture",
    description: "Training farmers in sustainable agricultural practices to improve crop yields while preserving the environment.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Women's Empowerment",
    description: "Providing women with skills training, financial literacy, and entrepreneurship opportunities.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Youth Leadership",
    description: "Developing the next generation of community leaders through mentorship and practical leadership training.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Clean Water Initiative",
    description: "Implementing sustainable water solutions and educating communities on water conservation and hygiene.",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Digital Literacy",
    description: "Bridging the digital divide by providing technology training and access to digital resources.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Health Education",
    description: "Promoting preventive healthcare and wellness through community-based education programs.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

// Sample data for stories
const stories = [
  {
    name: "Amina Patel",
    location: "Nairobi, Kenya",
    quote: "The agricultural training program changed my life. I've been able to triple my crop yield and now I'm teaching other farmers in my village the same techniques.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "James Ochieng",
    location: "Kisumu, Kenya",
    quote: "After completing the youth leadership program, I started a community recycling initiative that now employs 15 young people from my neighborhood.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Sarah Mwangi",
    location: "Mombasa, Kenya",
    quote: "The women's empowerment program gave me the confidence and skills to start my own business. Now I can provide for my family and send my children to school.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
  },
  {
    name: "Daniel Kimani",
    location: "Nakuru, Kenya",
    quote: "Thanks to the digital literacy program, I now work remotely as a virtual assistant. The training opened doors I never knew existed.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: "Agricultural Innovation Workshop",
    date: { day: "15", month: "Aug" },
    time: "9:00 AM - 4:00 PM",
    location: "Nairobi Community Center",
    description: "Learn about the latest sustainable farming techniques and technologies to improve crop yields."
  },
  {
    title: "Women Entrepreneurs Forum",
    date: { day: "22", month: "Aug" },
    time: "10:00 AM - 3:00 PM",
    location: "Kisumu Business Hub",
    description: "Networking event for women entrepreneurs to share experiences and learn from successful business owners."
  },
  {
    title: "Youth Leadership Summit",
    date: { day: "05", month: "Sep" },
    time: "8:30 AM - 5:00 PM",
    location: "Mombasa Conference Center",
    description: "A day of workshops, speakers, and activities focused on developing leadership skills in young people."
  }
];

// Sample data for current events
const currentEvents = [
  {
    title: "Clean Water Project - Phase 2",
    description: "Ongoing installation of water filtration systems in rural communities, combined with education on water conservation and hygiene practices.",
    location: "Multiple locations in Western Kenya",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Digital Skills Training Program",
    description: "A 12-week course teaching essential computer skills, internet literacy, and basic programming to community members of all ages.",
    location: "Nairobi Tech Hub",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export default OurWork;