import { useState, useEffect } from "react";
import { 
  Calendar, 
  Briefcase, 
  MapPin, 
  ChevronRight, 
  Code, 
  Users, 
  Zap,
  Bot,
  Shield,
  Star,
  ArrowUpRight
} from "lucide-react";

import ieee from '../assets/ieee.png'
import robotics from '../assets/robotics.png'
import tpcodl from '../assets/tpcodl.png'

import vibrancevit from '../assets/vibrancevit.png'


export default function ExperienceSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'experience') {
              setIsLoaded(true);
            } else {
              const index = entry.target.getAttribute('data-index');
              if (index) {
                setVisibleItems(prev => new Set([...prev, parseInt(index)]));
              }
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    setTimeout(() => {
      document.querySelectorAll('[data-index]').forEach(el => {
        observer.observe(el);
      });
      setTimeout(() => {
        setVisibleItems(new Set([0, 1, 2, 3]));
      }, 500);
    }, 100);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Summer Intern",
      company: "Tata Power Central Odisha Distribution Limited",
      duration: "May 2025 - Jul 2025",
      type: "Internship",
      location: "Bhubaneswar, India",
      description: "Developed cutting-edge Android applications with ML integration",
      highlights: [
        "Built Spot Billing system reducing manual errors by 65%",
        "Created Threat Detection app using YOLOv8 with 92% accuracy",
        "Implemented API integration using Kotlin"
      ],
      icon: tpcodl,
      color: "from-cyan-400 to-blue-500",
      accentColor: "cyan-400",
      bgColor: "bg-cyan-400/20"
    },
    {
      role: "Vice Chairperson",
      company: "IEEE Photonics Society",
      duration: "Mar 2024 - Present",
      type: "Leadership",
      location: "Chennai, India",
      description: "Leading technical initiatives in photonics and emerging tech",
      highlights: [
        "Led technical webinars for 200+ attendees",
        "Coordinated discussions on AI, IoT, quantum computing",
        "Fostered knowledge exchange with industry professionals"
      ],
      icon: ieee,
      color: "from-purple-400 to-pink-500",
      accentColor: "purple-400",
      bgColor: "bg-purple-400/20"
    },
    {
      role: "Stall Committee Member",
      company: "Vibrance 2025",
      duration: "Jan 2025 – Mar 2025",
      type: "Event Management",
      location: "Chennai, India",
      description: "Managed stall operations for cultural fest execution",
      highlights: [
        "Coordinated logistics for multiple stalls",
        "Handled 100+ inquiries smoothly",
        "Managed vendor relationships efficiently"
      ],
      icon: vibrancevit,
      color: "from-emerald-400 to-teal-500",
      accentColor: "emerald-400",
      bgColor: "bg-emerald-400/20"
    },
    {
      role: "Web Developer",
      company: "Robotics Club",
      duration: "Jan 2025 - Present",
      type: "Technical",
      location: "VIT Chennai",
      description: "Built responsive website for robotics community outreach",
      highlights: [
        "Created responsive event website",
        "Implemented real-time updates and forms",
        "Enhanced digital visibility of events"
      ],
      icon: robotics,
      color: "from-orange-400 to-red-500",
      accentColor: "orange-400",
      bgColor: "bg-orange-400/20"
    }
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen py-16 px-4 bg-gray-900 overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Compact Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey through innovation and leadership
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative transform transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated border */}
                <div className="absolute inset-0 bg-gray-800 rounded-2xl"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="absolute inset-[2px] bg-gray-900 rounded-2xl"></div>
                
                {/* Main content */}
                <div className="relative p-6 h-full">
                  {/* Header with icon and role */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-r  rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                        <img 
                          src={exp.icon} 
                          alt={`${exp.company} logo`}
                          className="w-20 h-20 object-contain rounded"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 font-medium text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 text-${exp.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Info pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-lg">
                      <Calendar className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-lg">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">{exp.location}</span>
                    </div>
                    <div className={`${exp.bgColor} px-2 py-1 rounded-lg border border-${exp.accentColor}/30`}>
                      <span className={`text-xs text-${exp.accentColor} font-medium`}>{exp.type}</span>
                    </div>
                  </div>

                  {/* Compact highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className={`w-3 h-3 text-${exp.accentColor}`} />
                      <span className="text-xs text-gray-400 font-medium">Key Achievements</span>
                    </div>
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2">
                        <div className={`w-1 h-1 bg-${exp.accentColor} rounded-full mt-2 flex-shrink-0`}></div>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-4">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-medium">Let's collaborate</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .delay-1000 { 
          animation-delay: 1000ms; 
        }
        .delay-500 { 
          animation-delay: 500ms; 
        }
      `}</style>
    </section>
  );
}