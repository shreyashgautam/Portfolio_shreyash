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
  Award,
  Shield,
  Eye,
  BookOpen,
  KeyRound,
  Puzzle,
} from 'lucide-react';
import intel from '../assets/intel.png'
import threat from '../assets/threat.png'
import vmnent from '../assets/vment.png'
import eco from '../assets/eco.png'
import cryp from '../assets/cryp.png'

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
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    // Observe project cards with a delay to ensure DOM is ready
    const observeCards = () => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
    };

    // Use a longer timeout to ensure all cards are rendered
    setTimeout(observeCards, 500);

    return () => observer.disconnect();
  }, []);

const projects = [
  {
  id: 'threatshield',
  title: 'ThreatShield',
  subtitle: 'AI-Powered Insider Threat Detection System',
  description:
    'Developed an enterprise-grade AI and blockchain-powered insider threat detection system with 98.7% accuracy, real-time monitoring, and immutable audit trails for cybersecurity intelligence.',
  duration: 'Jul 2025 – Present',
  technologies: ['React.js', 'Django', 'XGBoost', 'Blockchain', 'LSTM', 'Kotlin'],
  github: 'https://github.com/team-fanatics/threatshield',
  liveUrl: 'https://dataquestfinal-33.vercel.app',
  image: threat,
  category: 'AI Security System',
  icon: Shield,
  gradient: 'from-purple-600 to-blue-500',
  achievements: [
    { label: 'Model Accuracy', value: '98.7%', icon: Award },
    { label: 'SOC Efficiency', value: '↑ 3x', icon: TrendingUp },
    { label: 'Response Time', value: '<120ms', icon: Clock }
  ],
  features: [
    'AI ensemble using XGBoost, LSTM & Isolation Forest',
    'Blockchain-based immutable audit trail',
    'Real-time dashboard with multi-channel alerts'
  ]
},

  {
    id: 'intellilib',
    title: 'IntelliLib',
    subtitle: 'Smart Library Management System',
    description:
      'Engineered a cross-platform Library Management System (web and mobile), reducing book addition time by 50% and automating email alerts to improve user access by 30%.',
    duration: 'Feb 2025',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/shreyashgautam/Library_management_system',
    liveUrl: 'https://github.com/shreyashgautam/Library_management_system',
    image: intel,
    category: 'Full Stack',
    icon: Database,
    gradient: 'from-blue-500 to-teal-500',
    achievements: [
      { label: 'Time Reduction', value: '50%', icon: Clock },
      { label: 'Checkout Speed', value: '40%↑', icon: Zap },
      { label: 'User Access', value: '30%↑', icon: TrendingUp }
    ],
    features: [
      'Cross-platform web and mobile apps',
      'Barcode-based book tracking',
      'Automated email alert system'
    ]
  },
  {
    id: 'eventops',
    title: 'EventOps Platform',
    subtitle: 'Complete Event Management Solution',
    description:
      'Built a comprehensive event management platform with Razorpay integration, reducing transaction failures by 40% and boosting user satisfaction in event registrations.',
    duration: 'Sep 2024',
    technologies: ['Express.js', 'JWT', 'MongoDB', 'Node.js'],
    github: 'https://github.com/shreyashgautam/V_event',
    liveUrl: "https://v-event-phi.vercel.app/auth/register",
    image: vmnent,
    category: 'Web Platform',
    icon: Globe,
    gradient: 'from-blue-500 to-teal-500',
    achievements: [
      { label: 'Transaction Success', value: '40%↑', icon: CheckCircle },
      { label: 'Wait Time', value: '50%↓', icon: Clock },
      { label: 'User Satisfaction', value: '↑', icon: Users }
    ],
    features: [
      'Razorpay payment gateway integration',
      'Real-time admin monitoring dashboard',
      'Automated ticket validation system'
    ]
  },
  {
    id: 'nptel-convo-econ',
    title: 'NPTEL Conversation Economics',
    subtitle: 'NPTEL Quiz Practice Platform',
    description:
      'Designed for practicing and revising questions from the NPTEL "Conversation Economics" course. Supports weekly quiz tracking and user-friendly interaction.',
    duration: 'Mar 2025',
    technologies: ['React.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/shreyashgautam/Nptel_conversation_economics',
    liveUrl: 'https://conversation-economics-nptel.vercel.app/',
    image: eco,
    category: 'Web App',
    icon: BookOpen,
    gradient: 'from-orange-500 to-yellow-500',
    achievements: [
      { label: 'Quiz Tracker', value: '8 Weeks', icon: Calendar },
      { label: 'Student Usage', value: '100+', icon: Users },
      { label: 'Practice Mode', value: 'Enabled', icon: Zap }
    ],
    features: [
      'Weekly NPTEL quiz practice',
      'Interactive question-based interface',
      'Deployed on Vercel with clean UI'
    ]
  },
  {
    id: 'cryptoclash',
    title: 'CryptoClash',
    subtitle: 'CTF Event for Cybersecurity Enthusiasts',
    description:
      'CryptoClash is a thrilling CTF event hosted by VIT Chennai combining cryptography, ethical hacking, and logical puzzles to promote cybersecurity awareness.',
    duration: 'Apr 2025',
    technologies: ['React.js', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    github: 'https://github.com/shreyashgautam/cryptoclash',
    liveUrl: 'https://github.com/shreyashgautam/cryptoclash',
    image: cryp,
    category: 'CTF / Frontend',
    icon: KeyRound,
    gradient: 'from-indigo-500 to-purple-500',
    achievements: [
      { label: 'CTF Tracks', value: '4 Domains', icon: Puzzle },
      { label: 'Participants', value: '200+', icon: Users },
      { label: 'Frontend', value: 'Live & Ready', icon: Globe }
    ],
    features: [
      'Capture The Flag challenge platform',
      'Cryptography, Reverse Engineering, Forensics & Web Exploitation',
      'Fully responsive UI with interactive timeline & leaderboard-ready'
    ]
  }
];


  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-teal-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-blue-500/20 blur-2xl rounded-3xl"></div>
            <div className="relative flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-2xl">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing expertise in{" "}
            <span className="text-blue-400 font-semibold">mobile development</span>,{" "}
            <span className="text-teal-400 font-semibold">full-stack applications</span>, and{" "}
            <span className="text-blue-400 font-semibold">scalable platforms</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Container */}
                <div className="relative h-full">
                  {/* Animated Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-600/40 overflow-hidden group-hover:border-gray-500/60 group-hover:shadow-2xl group-hover:shadow-blue-900/20 transition-all duration-500 h-full flex flex-col">
                    
                    {/* Project Image - Taller for better visibility */}
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
                        <span className="px-3 py-1 bg-gray-900/70 backdrop-blur-sm text-gray-200 text-sm font-semibold rounded-full border border-gray-600/40">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Project Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm border border-gray-600/40 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-gray-700/80 transition-all duration-300">
                          <Icon className="w-5 h-5 text-gray-300" />
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute bottom-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-gray-900/70 backdrop-blur-sm rounded-full text-gray-200 text-sm border border-gray-600/40">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                      </div>
                    </div>

                    {/* Card Content - Better spacing */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className={`text-base font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-5">
                        <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 text-sm font-medium rounded-lg bg-gray-700/60 border border-gray-600/40 text-blue-300 hover:bg-gray-600/60 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-5">
                        <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-3">Achievements</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {project.achievements.map((achievement, achIndex) => {
                            const AchIcon = achievement.icon;
                            return (
                              <div key={achIndex} className="text-center">
                                <div className="w-8 h-8 mx-auto mb-2 bg-gray-700/60 border border-gray-600/40 rounded-lg flex items-center justify-center">
                                  <AchIcon className="w-4 h-4 text-blue-400" />
                                </div>
                                <div className="font-bold text-sm text-blue-300">{achievement.value}</div>
                                <div className="text-gray-400 text-xs">{achievement.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {project.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
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
                          className="flex-1"
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:scale-105 shadow-lg">
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </div>
                        </a>
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:scale-105 shadow-lg">
                            <Eye className="w-4 h-4" />
                            <span>Live Preview</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-2xl rounded-3xl"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Want to see more of my work?</h3>
              <p className="text-gray-400 mb-4 text-sm">Check out my GitHub for more projects and contributions</p>
              <a
                href="https://github.com/shreyashgautam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <Github className="w-4 h-4" />
                <span>View All Projects</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;