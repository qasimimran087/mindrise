import React, { useState } from 'react';
import { Play, Users, MessageCircle, Mail, ExternalLink, Youtube, ArrowUp, Menu, X, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Mind Rise Contact Form - Message from ${formData.name}`;
    const body = `Hello,

You have received a new message from your Mind Rise website contact form:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from the Mind Rise website contact form.`;

    // Create mailto link
    const mailtoLink = `mailto:qasimimran2954@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client will open with the message ready to send. Thank you for reaching out!');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const featuredVideos = [
    {
      id: 1,
      title: "Transform Your Mindset in 30 Days",
      thumbnail: "https://images.pexels.com/photos/1394810/pexels-photo-1394810.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12:45",
      views: "125K"
    },
    {
      id: 2,
      title: "The Power of Morning Routines",
      thumbnail: "https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8:32",
      views: "89K"
    },
    {
      id: 3,
      title: "Overcoming Self-Doubt Forever",
      thumbnail: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "15:20",
      views: "156K"
    },
    {
      id: 4,
      title: "Building Unstoppable Confidence",
      thumbnail: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "10:15",
      views: "98K"
    },
    {
      id: 5,
      title: "The Art of Mental Resilience",
      thumbnail: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "13:58",
      views: "203K"
    },
    {
      id: 6,
      title: "Success Habits That Changed My Life",
      thumbnail: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "11:30",
      views: "167K"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mind Rise
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('videos')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
              <a
                href="https://www.youtube.com/@MindRise-087"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2"
              >
                <Youtube className="w-4 h-4" />
                <span>Subscribe</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('videos')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
              <a
                href="https://www.youtube.com/@MindRise-087"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 w-fit"
              >
                <Youtube className="w-4 h-4" />
                <span>Subscribe</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Motivational background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Youtube className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mind Rise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Elevate your mindset, transform your life. Join thousands on a journey of personal growth, motivation, and unlimited potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://www.youtube.com/@MindRise-087"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center space-x-3 group"
            >
              <Youtube className="w-6 h-6" />
              <span>Subscribe Now</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <button
              onClick={() => scrollToSection('videos')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-3 backdrop-blur-sm border border-white/20"
            >
              <Play className="w-6 h-6" />
              <span>Watch Videos</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500K+</div>
              <div className="text-gray-400">Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">25K+</div>
              <div className="text-gray-400">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-400">Videos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section id="videos" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Content
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover life-changing insights, practical wisdom, and the motivation you need to unlock your true potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://www.youtube.com/@MindRise-087', '_blank')}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{video.views} views</span>
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/@MindRise-087"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-3"
            >
              <Youtube className="w-6 h-6" />
              <span>View All Videos</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  At Mind Rise, we believe that every individual possesses unlimited potential waiting to be unlocked. Our mission is to provide you with the tools, insights, and motivation needed to transform your mindset and elevate your life.
                </p>
                <p>
                  Through powerful motivational speeches, practical life lessons, and inspiring stories, we help you overcome obstacles, build confidence, and create the life you've always dreamed of.
                </p>
                <p>
                  Join our growing community of like-minded individuals committed to personal growth, success, and making a positive impact in the world.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">25K+</div>
                  <div className="text-gray-400">Lives Changed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Personal growth and transformation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a question, collaboration idea, or just want to share your transformation story? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">YouTube Channel</div>
                    <a
                      href="https://www.youtube.com/@MindRise-087"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      @MindRise-087
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a
                      href="mailto:qasimimran2954@gmail.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      qasimimran2954@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">WhatsApp</div>
                    <a
                      href="https://wa.me/923254321626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-200"
                    >
                      +92 325 432 1626
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Community</div>
                    <div className="text-gray-400">Join our growing community</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mind Rise
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Empowering minds, transforming lives. Join our journey of personal growth and unlimited potential.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.youtube.com/@MindRise-087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 Mind Rise. All rights reserved. Elevate your mindset, transform your life.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;