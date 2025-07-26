import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FolderOpen, Mail, Award, Star, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['home', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, id: 'projects' },
    { name: 'Skills', href: '#skills', icon: Star, id: 'skills' },
    { name: 'Achievements', href: '#achievements', icon: Award, id: 'achievements' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href, id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Backdrop blur effect */}
      <div className={`fixed top-0 left-0 right-0 h-20 z-40 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl' : ''
      }`} />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/80 shadow-2xl shadow-teal-500/10 border-b border-teal-500/20' 
          : 'bg-transparent'
      }`}>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo with modern effect */}
            <a
              href="#home"
              className="flex items-center group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home', 'home');
              }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition-all duration-300 group-hover:scale-110" />
                <div className="relative bg-gradient-to-br from-blue-500 to-teal-600 p-3 rounded-xl border border-blue-400/30">
                  <span className="text-2xl font-black text-white drop-shadow-lg">SG</span>
                </div>
              </div>
              <div className="ml-4 hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                   Shreyash Gautam
                </h1>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-100" />
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200" />
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-gray-800/60 backdrop-blur-md rounded-2xl p-2 border border-gray-700/50 shadow-lg">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.id);
                      }}
                      className={`relative flex items-center justify-center px-4 py-2 mx-1 rounded-xl transition-all duration-300 group ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg shadow-blue-500/30 text-white' 
                          : 'hover:bg-gray-700/50 text-gray-300 hover:text-teal-400'
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`} />
                      <span className="ml-2 font-medium text-sm">{item.name}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-3 rounded-xl bg-gray-800/60 backdrop-blur border border-gray-700/50 text-gray-300 hover:text-teal-400 transition-all duration-300 hover:bg-gray-700/60"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute left-4 right-4 top-24 transition-all duration-500 origin-top ${
          isOpen 
            ? 'opacity-100 scale-100 visible' 
            : 'opacity-0 scale-95 invisible'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-teal-500/5 to-green-500/5" />
            <div className="relative p-6 space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30'
                        : 'hover:bg-gray-800/50 border border-transparent hover:border-gray-700/30'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg shadow-blue-500/30' 
                        : 'bg-gray-800/60 group-hover:bg-teal-500/20'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-teal-400'
                      }`} />
                    </div>
                    <span className={`text-lg font-medium ${
                      isActive 
                        ? 'text-teal-300' 
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <div className="ml-auto flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100" />
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
          <div className="absolute left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-blue-500/80 animate-pulse" 
               style={{ 
                 animation: 'slideBlue 4s ease-in-out infinite',
                 animationDelay: '0s'
               }} />
          <div className="absolute right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-green-500/80 animate-pulse" 
               style={{ 
                 animation: 'slideGreen 4s ease-in-out infinite reverse',
                 animationDelay: '2s'
               }} />
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideBlue {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0%); opacity: 1; }
        }
        @keyframes slideGreen {
          0%, 100% { transform: translateX(100%); opacity: 0; }
          50% { transform: translateX(0%); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navbar