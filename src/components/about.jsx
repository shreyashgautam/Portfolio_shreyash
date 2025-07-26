import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  MapPin, 
  Calendar,
  GraduationCap
} from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      institution: 'Vellore Institute Of Technology',
      degree: 'B.Tech CSE',
      duration: '2023 - 2027',
      score: 'CGPA: 9.46',
      location: 'Chennai',
      icon: GraduationCap,
      color: 'from-blue-500 to-teal-500'
    },
    {
      institution: 'Delhi Public School Patna',
      degree: 'Class 12th',
      duration: '2021 - 2023',
      score: 'Percentage: 96%',
      location: 'Patna',
      icon: BookOpen,
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 40% 40%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)`,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-green-500/20 blur-lg rounded-2xl"></div>
            <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-12 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* About Section */}
          <div className="h-full">
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-green-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-3 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  About Me
                </h3>
                <div className="flex-1">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Hi, I'm <span className="text-blue-400 font-bold">Shreyash Gautam</span>, a passionate{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-bold">Full Stack Developer</span>{" "}
                    with a strong background in web and mobile app development. I'm currently pursuing a Bachelor's degree in{" "}
                    <span className="text-teal-400 font-bold">Computer Science and Engineering</span> at VIT Chennai.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Over the years, I've honed my skills in{" "}
                    <span className="text-green-400 font-bold">JavaScript</span>,{" "}
                    <span className="text-blue-400 font-bold">React.js</span>,{" "}
                    <span className="text-teal-400 font-bold">Node.js</span>, and many other frameworks to create{" "}
                    <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent font-bold">
                      dynamic, responsive, and interactive applications
                    </span>.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Apart from my technical expertise, I enjoy exploring new technologies, taking part in{" "}
                    <span className="text-blue-400 font-bold">hackathons</span>, and learning from the tech community. I aim to{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent font-bold">
                      solve complex problems with creative solutions
                    </span>{" "}
                    and build applications that make an impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="h-full">
            <div className="relative h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-green-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg mr-3 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  Education
                </h3>
                <div className="flex-1 space-y-6">
                  {education.map((edu, index) => {
                    const Icon = edu.icon;
                    return (
                      <div 
                        key={index}
                        className="group relative"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative bg-gray-700/40 backdrop-blur p-6 rounded-2xl border border-gray-600/50 group-hover:border-teal-500/50 transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col mb-3">
                                <h4 className="text-lg font-bold text-white mb-2">
                                  {edu.institution}
                                </h4>
                                <div className="flex flex-col space-y-1">
                                  <span className="text-teal-400 font-medium flex items-center text-sm">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {edu.duration}
                                  </span>
                                  <span className="text-green-400 font-medium flex items-center text-sm">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {edu.location}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-300 mb-2">{edu.degree}</p>
                              <div className="inline-block bg-gradient-to-r from-blue-500/20 to-teal-500/20 px-3 py-1 rounded-lg border border-blue-500/30">
                                <span className="text-blue-300 font-bold text-sm">{edu.score}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;