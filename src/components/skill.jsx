import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Sparkles,
  Star,
  Zap,
  Target,
  Trophy,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeOrbit, setActiveOrbit] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate orbits
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setActiveOrbit(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const skillsData = [
    {
      category: "Frontend Magic",
      shortName: "Frontend",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      skills: [
        { name: "React.js", level: 95, description: "Building dynamic UIs" },
        { name: "Next.js", level: 90, description: "Full-stack React framework" },
        { name: "JavaScript", level: 94, description: "Modern ES6+ development" },
        { name: "HTML5", level: 98, description: "Semantic markup" },
        { name: "CSS3", level: 92, description: "Responsive styling" },
        { name: "Tailwind", level: 88, description: "Utility-first CSS" }
      ]
    },
    {
      category: "Backend Power",
      shortName: "Backend",
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      skills: [
        { name: "Node.js", level: 90, description: "Server-side JavaScript" },
        { name: "Express.js", level: 87, description: "Web framework" },
        { name: "MongoDB", level: 85, description: "NoSQL database" },
        { name: "MySQL", level: 82, description: "Relational database" },
        { name: "REST APIs", level: 92, description: "API development" },
        { name: "Firebase", level: 88, description: "Backend as a Service" }
      ]
    },
    {
      category: "Mobile Universe",
      shortName: "Mobile",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      skills: [
        { name: "Kotlin", level: 89, description: "Android development" },
        { name: "Flutter", level: 85, description: "Cross-platform apps" },
        { name: "Android SDK", level: 87, description: "Native Android" },
        { name: "Firebase", level: 90, description: "Mobile backend" },
        { name: "Supabase", level: 84, description: "Open source backend" }
      ]
    },
    {
      category: "Core Arsenal",
      shortName: "Core",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      skills: [
        { name: "Java", level: 91, description: "Enterprise development" },
        { name: "C++", level: 88, description: "System programming" },
        { name: "Python", level: 85, description: "Versatile scripting" },
        { name: "Git", level: 93, description: "Version control" },
      ]
    }
  ];

  const currentSkillSet = skillsData[activeOrbit];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic floating orbs */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Large gradient blurs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-2xl rounded-3xl"></div>
            <div className="relative flex items-center justify-center gap-5">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Tech</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Arsenal
                </span>
              </h2>
            </div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            A powerful collection of modern technologies and frameworks I've mastered
          </p>
        </div>

        {/* Main Skills Display */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Orbital Navigation */}
          <div className="flex justify-center mb-14">
            <div className="relative">
             

              {/* Orbital rings */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border-2 border-gray-600 flex items-center justify-center shadow-2xl">
                  <Sparkles className="w-6 h-6 text-blue-400 animate-spin-slow" />
                </div>

                {/* Skill category orbits */}
                {skillsData.map((category, index) => {
                  const angle = (index * 90) - 90; // Start from top
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveOrbit(index)}
                      className={`absolute w-20 h-20 rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-105 ${
                        activeOrbit === index
                          ? `bg-gradient-to-r ${category.color} shadow-2xl scale-105 animate-pulse`
                          : 'bg-gray-800/70 hover:bg-gray-700/70 shadow-lg'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 40px)`,
                      }}
                    >
                      <span className={`text-xs font-bold text-white text-center leading-tight ${
                        activeOrbit === index ? 'animate-pulse' : ''
                      }`}>
                        {category.shortName}
                      </span>
                      
                      {/* Connection line to center */}
                      <div 
                        className={`absolute w-0.5 bg-gradient-to-r ${category.color} opacity-25 transform origin-bottom ${
                          activeOrbit === index ? 'opacity-50' : ''
                        }`}
                        style={{
                          height: `${radius}px`,
                          transform: `rotate(${angle + 90}deg)`,
                          bottom: '40px',
                          left: '50%',
                          marginLeft: '-1px'
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Category Display */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Category Info */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className={`absolute -inset-3 bg-gradient-to-r ${currentSkillSet.bgGradient} blur-2xl rounded-3xl opacity-40`}></div>
                <div className="relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/40">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${currentSkillSet.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Code2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentSkillSet.category}</h3>
                      <p className="text-gray-400 text-sm">Technologies I've mastered</p>
                    </div>
                  </div>

                  {/* Skills Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                      <div className={`text-xl font-bold bg-gradient-to-r ${currentSkillSet.color} bg-clip-text text-transparent`}>
                        {currentSkillSet.skills.length}
                      </div>
                      <div className="text-gray-400 text-xs">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                      <div className={`text-xl font-bold bg-gradient-to-r ${currentSkillSet.color} bg-clip-text text-transparent`}>
                        {Math.round(currentSkillSet.skills.reduce((acc, skill) => acc + skill.level, 0) / currentSkillSet.skills.length)}%
                      </div>
                      <div className="text-gray-400 text-xs">Avg Mastery</div>
                    </div>
                  </div>

                  {/* Top Skills Preview */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-4">Featured Skills</h4>
                    {currentSkillSet.skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/25 rounded-lg">
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1.5 bg-gray-600 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${currentSkillSet.color} rounded-full transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-gray-400 text-xs w-7">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                {currentSkillSet.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Skill Card */}
                    <div className={`relative bg-gray-800/50 backdrop-blur-xl p-5 rounded-xl border border-gray-700/40 transition-all duration-300 hover:scale-105 hover:border-gray-600/50 h-full ${
                      hoveredSkill === skill.name ? 'shadow-xl' : 'shadow-lg'
                    }`}>
                      
                      {/* Hover glow effect */}
                      {hoveredSkill === skill.name && (
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${currentSkillSet.color} opacity-15 blur-lg rounded-xl`}></div>
                      )}

                      <div className="relative z-10">
                        {/* Skill Header */}
                        <div className="mb-4">
                          <h4 className="text-white font-bold text-sm">{skill.name}</h4>
                          <p className="text-gray-400 text-xs mt-1">{skill.description}</p>
                        </div>

                        {/* Skill Level */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-xs">Mastery</span>
                            <span className={`text-sm font-bold bg-gradient-to-r ${currentSkillSet.color} bg-clip-text text-transparent`}>
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${currentSkillSet.color} rounded-full transition-all duration-1000 ${
                                hoveredSkill === skill.name ? 'animate-pulse' : ''
                              }`}
                              style={{ width: `${skill.level}%` }}
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                          </div>

                          {/* Skill Rating Stars */}
                          <div className="flex items-center gap-0.5 mt-2">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className={`w-2.5 h-2.5 ${
                                  starIndex < Math.floor(skill.level / 20)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation Dots */}
        <div className={`flex justify-center mt-12 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex gap-2 bg-gray-800/50 backdrop-blur-xl rounded-full p-2 border border-gray-700/40">
            {skillsData.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveOrbit(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeOrbit === index
                    ? `bg-gradient-to-r ${category.color} scale-125`
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;