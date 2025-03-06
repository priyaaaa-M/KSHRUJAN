import React from 'react';
import { Download, ExternalLink, Instagram, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Media = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#023D54] text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media</h1>
          <p className="text-xl max-w-2xl mb-8">
            Explore our media resources, press coverage, and stay updated with our latest news and achievements.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
      </div>

      {/* Annual Reports Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Annual Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={report.coverImage} 
                    alt={`${report.year} Annual Report`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{report.year} Annual Report</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{report.summary}</p>
                  <div className="flex justify-between items-center">
                    <a 
                      href={report.downloadLink} 
                      className="flex items-center text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
                    </a>
                    <span className="text-gray-500 text-sm">{report.fileSize}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 bg-[#023D54]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Media Coverage</h2>
          
          {/* Featured Coverage */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[#023D54] text-center">Featured Coverage</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCoverage.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-xl transition-all"
                >
                  <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-6">
                    <img 
                      src={item.logo} 
                      alt={item.source} 
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-[#023D54]">{item.title}</h4>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <a 
                      href={item.link} 
                      className="flex items-center text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Press Releases */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[#023D54] text-center">Press Releases</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {pressReleases.map((release, index) => (
                <div 
                  key={index} 
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    index !== pressReleases.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="text-[#9A6735] text-sm font-medium">{release.date}</span>
                      <h4 className="text-lg font-semibold text-[#023D54] mt-1">{release.title}</h4>
                    </div>
                    <a 
                      href={release.link} 
                      className="flex items-center text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors mt-3 md:mt-0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Release
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Videos */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-[#023D54] text-center">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-[#023D54] ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#023D54] mb-2">{video.title}</h4>
                    <p className="text-gray-700 mb-4">{video.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{video.duration}</span>
                      <a 
                        href={video.link} 
                        className="text-[#023D54] font-medium hover:text-[#94DEA5] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#023D54]">Connect With Us</h2>
          
          {/* Social Media Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {socialMediaPlatforms.map((platform, index) => (
              <a 
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${platform.bgColor}`}>
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#023D54] mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.handle}</p>
              </a>
            ))}
          </div>
          
          {/* Instagram Feed */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[#023D54] text-center">Instagram Feed</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramFeed.map((post, index) => (
                <a 
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img 
                    src={post.image} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#023D54]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://www.instagram.com/kshrujanfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-md hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Follow Us on Instagram
                <Instagram className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Twitter/X Feed */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-[#023D54] text-center">Latest Tweets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {twitterFeed.map((tweet, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                      alt="KSHRujan Foundation" 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#023D54]">KSHRujan Foundation</h4>
                      <p className="text-gray-500 text-sm">@KSHRujanFound</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{tweet.content}</p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>{tweet.date}</span>
                    <a 
                      href={tweet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#023D54] hover:text-[#94DEA5] transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://twitter.com/KSHRujanFound"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1DA1F2] text-white py-3 px-6 rounded-md hover:bg-[#1DA1F2]/90 transition-colors"
              >
                Follow Us on Twitter
                <Twitter className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#023D54]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Stay Updated</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter to receive the latest news, updates, and media releases directly to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#94DEA5]"
                required
              />
              <button 
                type="submit" 
                className="bg-[#94DEA5] text-[#023D54] font-medium py-3 px-6 rounded-md hover:bg-[#94DEA5]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for annual reports
const annualReports = [
  {
    year: "2024",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    summary: "Our 2024 Annual Report highlights the significant progress made in our sustainable agriculture initiatives and the expansion of our women's empowerment programs across East Africa.",
    downloadLink: "#",
    fileSize: "4.2 MB"
  },
  {
    year: "2023",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    summary: "The 2023 Annual Report showcases our achievements in digital literacy training and the successful implementation of clean water projects in rural communities.",
    downloadLink: "#",
    fileSize: "3.8 MB"
  },
  {
    year: "2022",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    summary: "In our 2022 Annual Report, we detail the launch of our youth leadership program and the impact of our health education initiatives on local communities.",
    downloadLink: "#",
    fileSize: "3.5 MB"
  }
];

// Sample data for featured media coverage
const featuredCoverage = [
  {
    source: "The Daily Nation",
    logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "KSHRujan Foundation Transforms Rural Education",
    date: "June 15, 2024",
    excerpt: "The foundation's innovative approach to education is creating new opportunities for rural communities across Kenya.",
    link: "#"
  },
  {
    source: "Business Daily",
    logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Sustainable Agriculture Initiative Boosts Local Economy",
    date: "May 22, 2024",
    excerpt: "KSHRujan's agricultural training programs have led to a 40% increase in crop yields for participating farmers.",
    link: "#"
  }
];

// Sample data for press releases
const pressReleases = [
  {
    title: "KSHRujan Foundation Launches New Digital Literacy Program",
    date: "July 10, 2024",
    link: "#"
  },
  {
    title: "Partnership Announced with Global Clean Water Initiative",
    date: "June 28, 2024",
    link: "#"
  },
  {
    title: "KSHRujan Foundation Receives Award for Community Development",
    date: "May 15, 2024",
    link: "#"
  },
  {
    title: "Annual Fundraising Gala Raises Record Amount for Education Programs",
    date: "April 30, 2024",
    link: "#"
  },
  {
    title: "New Board Members Appointed to KSHRujan Foundation",
    date: "March 12, 2024",
    link: "#"
  }
];

// Sample data for videos
const videos = [
  {
    title: "Our Impact: 10 Years of Community Transformation",
    description: "A documentary showcasing the foundation's journey and impact over the past decade.",
    thumbnail: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: "15:42",
    link: "#"
  },
  {
    title: "Women Entrepreneurs: Success Stories",
    description: "Meet the women who have transformed their lives through our entrepreneurship program.",
    thumbnail: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: "08:27",
    link: "#"
  },
  {
    title: "Clean Water Initiative: Making a Difference",
    description: "See how our clean water projects are improving health and quality of life in rural communities.",
    thumbnail: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    duration: "12:15",
    link: "#"
  }
];

// Sample data for social media platforms
const socialMediaPlatforms = [
  {
    name: "Instagram",
    handle: "@kshrujanfoundation",
    link: "https://www.instagram.com/kshrujanfoundation",
    icon: <Instagram className="w-8 h-8 text-white" />,
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    name: "Facebook",
    handle: "KSHRujan Foundation",
    link: "https://www.facebook.com/kshrujanfoundation",
    icon: <Facebook className="w-8 h-8 text-white" />,
    bgColor: "bg-[#1877F2]"
  },
  {
    name: "Twitter",
    handle: "@KSHRujanFound",
    link: "https://twitter.com/KSHRujanFound",
    icon: <Twitter className="w-8 h-8 text-white" />,
    bgColor: "bg-[#1DA1F2]"
  },
  {
    name: "LinkedIn",
    handle: "KSHRujan Foundation",
    link: "https://www.linkedin.com/company/kshrujanfoundation",
    icon: <Linkedin className="w-8 h-8 text-white" />,
    bgColor: "bg-[#0A66C2]"
  },
  {
    name: "YouTube",
    handle: "KSHRujan Foundation",
    link: "https://www.youtube.com/kshrujanfoundation",
    icon: <Youtube className="w-8 h-8 text-white" />,
    bgColor: "bg-[#FF0000]"
  }
];

// Sample data for Instagram feed
const instagramFeed = [
  {
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "#"
  }
];

// Sample data for Twitter feed
const twitterFeed = [
  {
    content: "Excited to announce our new partnership with @GlobalWaterOrg to bring clean water solutions to 10 more communities in rural Kenya! #CleanWaterForAll #SDGs",
    date: "2 hours ago",
    link: "#"
  },
  {
    content: "Our youth leadership summit was a huge success! Over 200 young leaders from across East Africa came together to share ideas and build networks. The future is bright! #YouthLeaders #EmpoweringCommunities",
    date: "1 day ago",
    link: "#"
  },
  {
    content: "Registration is now open for our annual Train the Trainer program! Apply today to become a certified community educator and help spread sustainable development practices. Link in bio. #Education #SustainableDevelopment",
    date: "3 days ago",
    link: "#"
  }
];

export default Media;