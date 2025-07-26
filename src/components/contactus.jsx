import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Heart,
  Coffee
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/shreyash-gautam",
      gradient: "from-blue-600 via-blue-500 to-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Professional Network"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/shreyashgautam",
      gradient: "from-gray-700 via-gray-600 to-gray-500",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      description: "Code Repository"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/btw.shreyash_gautam",
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      description: "Daily Updates"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/yourusername",
      gradient: "from-sky-500 via-blue-500 to-cyan-500",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/30",
      description: "Thoughts & Ideas"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shreyashgautam2007@gmail.com",
      href: "mailto:shreyashgautam2007@gmail.com",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description: "Drop me a line"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 79036 32892",
      href: "tel:+917903632892",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "Let's talk directly"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Where I'm based"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden" 
    id="contact">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        {/* Mouse-following gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div 
            className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-2xl transition-all duration-500 ease-out"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-random opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              <div className={`w-2 h-2 bg-gradient-to-r ${i % 3 === 0 ? 'from-cyan-400 to-blue-400' : i % 3 === 1 ? 'from-purple-400 to-pink-400' : 'from-green-400 to-teal-400'} rounded-full blur-sm`} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative inline-block mb-8">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Connect</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                With Me
                </span>
              </h2>
              
              
              {/* Decorative sparkles */}
              <div className="absolute -top-4 -right-8 opacity-60">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-8 opacity-60">
                <Heart className="w-6 h-6 text-pink-400 animate-pulse" style={{animationDelay: '1s'}} />
              </div>
            </div>
            
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to turn ideas into reality? Let's create something 
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold"> amazing </span>
              together!
            </p>

            {/* Fun tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              <Coffee className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Always up for a coffee chat!</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Contact Info Cards */}
            <div className={`xl:col-span-1 space-y-4 transform transition-all duration-1000 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h2 className="text-2xl font-bold text-white mb-6 text-center xl:text-left">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group block p-6 bg-gray-900/60 backdrop-blur-xl border ${info.borderColor} rounded-2xl hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:-translate-y-1 ${info.bgColor}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{info.label}</h3>
                      <p className="text-gray-300 text-sm mb-1">{info.value}</p>
                      <p className="text-gray-400 text-xs">{info.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className={`xl:col-span-2 transform transition-all duration-1000 delay-400 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-gray-600/70 transition-all duration-500">
                
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="relative mb-8">
                      <CheckCircle className="w-20 h-20 text-green-400 mx-auto animate-bounce" />
                      <div className="absolute inset-0 w-20 h-20 bg-green-400/20 rounded-full mx-auto animate-ping"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        Message Sent Successfully!
                      </span>
                    </h3>
                    <p className="text-gray-300 text-lg">Thanks for reaching out! I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          Send Me a Message
                        </span>
                      </h2>
                      <p className="text-gray-400">I'd love to hear about your project or just have a chat!</p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 text-sm font-semibold mb-3">
                            <User className="inline w-4 h-4 mr-2" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`w-full bg-gray-800/50 border ${focusedField === 'name' ? 'border-cyan-500/50' : 'border-gray-600/50'} rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300`}
                            placeholder="Your awesome name"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-300 text-sm font-semibold mb-3">
                            <Mail className="inline w-4 h-4 mr-2" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`w-full bg-gray-800/50 border ${focusedField === 'email' ? 'border-cyan-500/50' : 'border-gray-600/50'} rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-semibold mb-3">
                          <MessageSquare className="inline w-4 h-4 mr-2" />
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className={`w-full bg-gray-800/50 border ${focusedField === 'message' ? 'border-cyan-500/50' : 'border-gray-600/50'} rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 resize-none`}
                          placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group relative w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden ${
                          isSubmitting 
                            ? 'opacity-70 cursor-not-allowed' 
                            : 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1'
                        }`}
                      >
                        <div className="relative z-10 flex items-center gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="text-lg">Sending your message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                              <span className="text-lg">Send Message</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className={`mt-12 lg:mt-16 transform transition-all duration-1000 delay-600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Follow My Journey
                </span>
              </h2>
              <p className="text-gray-400">Stay connected and see what I'm working on</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 bg-gray-900/60 backdrop-blur-xl border ${social.borderColor} rounded-2xl hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${social.bgColor}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {social.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{social.name}</h3>
                    <p className="text-gray-400 text-sm">{social.description}</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Fun Footer */}
          <div className={`mt-16 text-center transform transition-all duration-1000 delay-800 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-full border border-gray-700/30">
              <span className="text-gray-300">Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-gray-300">and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float-random {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 0.3; 
          }
          25% { 
            transform: translate(10px, -15px) rotate(90deg); 
            opacity: 0.8; 
          }
          50% { 
            transform: translate(-5px, -25px) rotate(180deg); 
            opacity: 1; 
          }
          75% { 
            transform: translate(-15px, -10px) rotate(270deg); 
            opacity: 0.6; 
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}