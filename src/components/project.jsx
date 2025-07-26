import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Code2,
  Smartphone,
  Globe,
  Database,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Award,Shield
} from 'lucide-react';
import intel from '../assets/intel.png'

import threat from '../assets/threat.png'
import vment from '../assets/vment.png'

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'projects') {
              setIsVisible(true);
            } else {
              const index = entry.target.getAttribute('data-index');
              if (index) {
                setVisibleCards(prev => new Set([...prev, parseInt(index)]));
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    // Observe project cards
    setTimeout(() => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);



const projects = [
  {
    id: 'threatsnap',
    title: 'ThreatSnap',
    subtitle: 'Real-Time Threat Detection App',
    description:
      'Developed a real-time Android threat detection app using YOLOv8 and TensorFlow Lite, achieving 92% detection accuracy and reducing false positives by 38% in offline field testing. Implemented low-latency on-device inference using CameraX and Room DB, deployed at Tata Power for low-connectivity surveillance.',
    duration: 'Jun 2025',
    technologies: ['Kotlin', 'TensorFlow Lite', 'YOLOv8', 'Room DB', 'Firebase', 'CameraX', 'ML Kit'],
    github: 'https://github.com/shreyashgautam/ThreatDetection',
    image: threat, // Placeholder for threatsnap.png
    category: 'AI Mobile App',
    icon: Shield,
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    achievements: [
      { label: 'Detection Accuracy', value: '92%', icon: Award },
      { label: 'Latency', value: '<120ms', icon: Clock },
      { label: 'False Positives', value: '↓ 38%', icon: TrendingUp }
    ],
    features: [
      'On-device real-time object detection',
      'YOLOv8 + TensorFlow Lite integration',
      'Offline support using Room DB',
      'CameraX-based image pipeline',
      'Deployed at Tata Power for field testing'
    ]
  },
  {
    id: 'intellilib',
    title: 'IntelliLib',
    subtitle: 'Smart Library Management System',
    description:
      'Engineered a cross-platform Library Management System (web and mobile), reducing book addition time by 50% and automating email alerts to improve user access by 30%. Created a barcode-based book tracking system, cutting checkout time by 40% and improving inventory management.',
    duration: 'Feb 2025',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flutter', 'Supabase'],
    github: 'https://github.com/shreyashgautam/Library_management_system',
    image: intel,
    category: 'Full Stack',
    icon: Database,
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-500/10 to-emerald-500/10',
    achievements: [
      { label: 'Time Reduction', value: '50%', icon: Clock },
      { label: 'Checkout Speed', value: '40%↑', icon: Zap },
      { label: 'User Access', value: '30%↑', icon: TrendingUp }
    ],
    features: [
      'Cross-platform web and mobile apps',
      'Barcode-based book tracking',
      'Automated email alert system',
      'Real-time inventory management',
      'Personalized PDF generation'
    ]
  },
  {
    id: 'eventops',
    title: 'EventOps Platform',
    subtitle: 'Complete Event Management Solution',
    description:
      'Built a comprehensive event management platform with Razorpay integration, reducing transaction failures by 40% and boosting user satisfaction in event registrations and merchandise sales. Incorporated real-time admin monitoring, analytics, and automated ticket validation system.',
    duration: 'Sep 2024',
    technologies: ['Express.js', 'JWT', 'MongoDB', 'Node.js', 'Razorpay'],
    github: 'https://github.com/shreyashgautam/V_event',
    image: vment,
    category: 'Web Platform',
    icon: Globe,
    gradient: 'from-emerald-500 to-cyan-500',
    bgGradient: 'from-emerald-500/10 to-cyan-500/10',
    achievements: [
      { label: 'Transaction Success', value: '40%↑', icon: CheckCircle },
      { label: 'Wait Time', value: '50%↓', icon: Clock },
      { label: 'User Satisfaction', value: '↑', icon: Users }
    ],
    features: [
      'Razorpay payment gateway integration',
      'Real-time admin monitoring dashboard',
      'Automated ticket validation system',
      'Advanced analytics and reporting',
      'Event registration & merchandise sales'
    ]
  }
];



  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)`,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-emerald-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing expertise in{" "}
            <span className="text-blue-400 font-semibold">mobile development</span>,{" "}
            <span className="text-teal-400 font-semibold">full-stack applications</span>, and{" "}
            <span className="text-emerald-400 font-semibold">scalable platforms</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-index={index}
                className={`group relative transform transition-all duration-1000 ${
                  visibleCards.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Card Container */}
                <div className="relative h-full">
                  {/* Animated Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/40 overflow-hidden group-hover:border-gray-500/60 group-hover:shadow-2xl group-hover:shadow-gray-900/50 transition-all duration-500 h-full flex flex-col">
                    
                                          {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-black/20"></div>
                      
                      {/* Subtle animated overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gray-900/70 backdrop-blur-sm text-gray-200 text-sm font-semibold rounded-full border border-gray-600/40 shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Project Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600/40 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-gray-700/80 transition-all duration-300">
                          <Icon className="w-6 h-6 text-gray-300" />
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-gray-200 text-sm border border-gray-600/40">
                          <Calendar className="w-3 h-3" />
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className={`text-lg font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 bg-gray-700/60 border border-gray-600/40 hover:bg-gray-600/60 hover:border-gray-500/60 ${
                                techIndex % 3 === 0 
                                  ? 'text-blue-300 hover:text-blue-200' 
                                  : techIndex % 3 === 1 
                                  ? 'text-teal-300 hover:text-teal-200'
                                  : 'text-emerald-300 hover:text-emerald-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-3">Key Achievements</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {project.achievements.map((achievement, achIndex) => {
                            const AchIcon = achievement.icon;
                            return (
                              <div key={achIndex} className="text-center group/achievement">
                                <div className="w-8 h-8 mx-auto mb-1 bg-gray-700/60 border border-gray-600/40 rounded-lg flex items-center justify-center group-hover/achievement:bg-gray-600/60 transition-all duration-300">
                                  <AchIcon className={`w-4 h-4 ${
                                    achIndex % 3 === 0 ? 'text-blue-400' : 
                                    achIndex % 3 === 1 ? 'text-teal-400' : 'text-emerald-400'
                                  }`} />
                                </div>
                                <div className={`font-bold text-sm ${
                                  achIndex % 3 === 0 ? 'text-blue-300' : 
                                  achIndex % 3 === 1 ? 'text-teal-300' : 'text-emerald-300'
                                }`}>{achievement.value}</div>
                                <div className="text-gray-400 text-xs">{achievement.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {project.features.slice(0, 3).map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-2">
                              <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                fIndex % 3 === 0 ? 'text-blue-400' : 
                                fIndex % 3 === 1 ? 'text-teal-400' : 'text-emerald-400'
                              }`} />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="relative bg-gray-700/60 backdrop-blur-sm text-white px-4 py-3 rounded-xl hover:bg-gray-600/80 transition-all duration-300 flex items-center justify-center gap-2 font-medium border border-gray-600/50 hover:border-gray-500/70 hover:shadow-lg group-hover/btn:text-blue-300">
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </div>
                        </a>
                        <button className="group/btn relative overflow-hidden">
                          <div className="relative bg-white/10 hover:bg-white/20 text-white hover:text-teal-300 px-4 py-3 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500/70">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-emerald-500/10 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more of my work?</h3>
              <p className="text-gray-400 mb-6">Check out my GitHub for more projects and contributions</p>
              <a
                href="https://github.com/shreyashgautam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-teal-500/25"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;