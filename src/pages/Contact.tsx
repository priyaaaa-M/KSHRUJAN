import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg md:text-xl">We'd love to hear from you</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.01]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#023D54] mb-6">Send Us a Message</h2>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#94DEA5] focus:border-transparent transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#94DEA5] focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#94DEA5] focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#94DEA5] hover:bg-[#7bc78e] text-[#023D54] font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#023D54]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Submit <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 transform transition-transform duration-300 hover:scale-[1.01]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#023D54] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#023D54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Charity Lane, Andheri East, Mumbai, Maharashtra 400069, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#023D54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#94DEA5] p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#023D54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                    <p className="text-gray-600">info@kshrujanfoundation.org</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#023D54] hover:bg-[#035275] p-3 rounded-full text-white transition-colors duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#023D54] hover:bg-[#035275] p-3 rounded-full text-white transition-colors duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#023D54] hover:bg-[#035275] p-3 rounded-full text-white transition-colors duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#023D54] hover:bg-[#035275] p-3 rounded-full text-white transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#023D54] hover:bg-[#035275] p-3 rounded-full text-white transition-colors duration-300">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.01]">
              <h2 className="text-2xl font-bold text-[#023D54] mb-4">Find Us</h2>
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60341.43632404523!2d72.8259983!3d19.1170576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83e7d192d31%3A0x2da1d504bce8c5f!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KSHRujan Foundation Location"
                ></iframe>
                     

                    


              </div>
            </div>
          </div>
        </div>
      </main>

 {/* Footer */}
 <footer className="bg-[#023D54] text-white py-12">
                             <div className="container mx-auto px-4 md:px-6">
                               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                 <div>
                                   <h3 className="text-xl font-bold mb-4">KSHRujan Foundation</h3>
                                   <p className="text-gray-300 mb-4">Empowering communities through education, healthcare, and sustainable development.</p>
                                   <div className="flex space-x-4">
                                     <a href="#" className="text-gray-300 hover:text-[#94DEA5]">
                                       <Instagram className="h-5 w-5" />
                                     </a>
                                     <a href="#" className="text-gray-300 hover:text-[#94DEA5]">
                                       <Facebook className="h-5 w-5" />
                                     </a>
                                     <a href="#" className="text-gray-300 hover:text-[#94DEA5]">
                                       <Twitter className="h-5 w-5" />
                                     </a>
                                     <a href="#" className="text-gray-300 hover:text-[#94DEA5]">
                                       <Linkedin className="h-5 w-5" />
                                     </a>
                                     <a href="#" className="text-gray-300 hover:text-[#94DEA5]">
                                       <Youtube className="h-5 w-5" />
                                     </a>
                                   </div>
                                 </div>
                                 
                                 <div>
                                   <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                   <ul className="space-y-2">
                                     <li><a href="#" className="text-gray-300 hover:text-[#94DEA5] transition-colors">Home</a></li>
                                     <li><a href="#" className="text-gray-300 hover:text-[#94DEA5] transition-colors">About Us</a></li>
                                     <li><a href="#" className="text-gray-300 hover:text-[#94DEA5] transition-colors">Our Programs</a></li>
                                     <li><a href="#" className="text-gray-300 hover:text-[#94DEA5] transition-colors">Gallery</a></li>
                                     <li><a href="#" className="text-gray-300 hover:text-[#94DEA5] transition-colors">Contact</a></li>
                                   </ul>
                                 </div>
                                 
                                 <div>
                                   <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                                   <ul className="space-y-2">
                                     <li className="flex items-start">
                                       <MapPin className="h-5 w-5 mr-2 text-[#94DEA5]" />
                                       <span className="text-gray-300">123 Charity Lane, Andheri East, Mumbai, Maharashtra 400069, India</span>
                                     </li>
                                     <li className="flex items-center">
                                       <Phone className="h-5 w-5 mr-2 text-[#94DEA5]" />
                                       <span className="text-gray-300">+91 98765 43210</span>
                                     </li>
                                     <li className="flex items-center">
                                       <Mail className="h-5 w-5 mr-2 text-[#94DEA5]" />
                                       <span className="text-gray-300">info@kshrujanfoundation.org</span>
                                     </li>
                                   </ul>
                                 </div>
                               </div>
                               
                               <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                                 <p>&copy; {new Date().getFullYear()} KSHRujan Foundation. All rights reserved.</p>
                               </div>
                             </div>
                           </footer>



    </>
  );
}

export default Contact;