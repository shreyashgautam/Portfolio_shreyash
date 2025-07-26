import { useState, useEffect } from "react";
import { 
  Trophy, 
  Award, 
  Briefcase,
  Shield,
  Code,
  Medal,
  Star,
  Crown,
  ExternalLink,
  Calendar,
  MapPin,
  ShieldCheck,
  Zap,
  Target,
  ArrowUpRight
} from "lucide-react";

export default function AchievementsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setVisibleItems(new Set([0, 1, 2, 3, 4, 5, 6, 7]));
      }, 300);
    }, 100);
  }, []);

  const allItems = [
    {
      id: 0,
      title: "TechnoVIT 2024 - Full Stack Hackathon Winner",
      organization: "VIT University",
      description: "Won the prestigious full-stack hackathon competing among 100+ teams from VIT and other colleges with a team of three members, showcasing exceptional development skills.",
      date: "2024",
      icon: <Trophy className="w-7 h-7" />,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      shadowColor: "shadow-blue-500/20",
      type: "Winner",
      category: "Hackathon",
      link: ""
    },
    {
      id: 1,
      title: "Best Idea at Web Works'24",
      organization: "Android Club",
      description: "Recognized for the most innovative idea in the Web Works'24 competition organized by Android Club, demonstrating creative problem-solving abilities.",
      date: "2024",
      icon: <Star className="w-7 h-7" />,
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      shadowColor: "shadow-emerald-500/20",
      type: "Best Idea",
      category: "Competition",
      link: "https://drive.google.com/file/d/1wnmT1ozuEN0MJ66IAnTeCjgsrfbmk27J/view?usp=drive_link"
    },
    {
      id: 2,
      title: "CRTFHQ First 60 Fellowship",
      organization: "CRTFHQ",
      description: "Selected among the first 60 fellows for the prestigious CRTFHQ Fellowship program, recognizing outstanding potential in technology and leadership.",
      date: "2024",
      icon: <Crown className="w-7 h-7" />,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      shadowColor: "shadow-cyan-500/20",
      type: "Fellowship",
      category: "Program",
      link: "https://drive.google.com/file/d/1TCCVhAEVf8ezy6MlrIdRqMqIL7ACC2KG/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Summer Internship",
      organization: "Tata Power Central Odisha Distribution Limited",
      description: "Successfully completed summer internship at Tata Power Central Odisha Distribution Limited, gaining valuable industry experience in power distribution systems.",
      date: "Summer 2024",
      icon: <Briefcase className="w-7 h-7" />,
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/30",
      shadowColor: "shadow-teal-500/20",
      type: "Internship",
      category: "Experience",
      link: "https://drive.google.com/file/d/1MEOiVNlnooCgg3DN2FrRgCnwolKqnS17/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Top 12 in Branch - AI & ML",
      organization: "VIT Chennai",
      description: "Achieved top 12 ranking in Artificial Intelligence and Machine Learning branch at VIT Chennai, demonstrating academic excellence and technical proficiency.",
      date: "Academic Year",
      icon: <Target className="w-7 h-7" />,
      gradient: "from-blue-600 via-indigo-500 to-purple-500",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/30",
      shadowColor: "shadow-blue-600/20",
      type: "Academic",
      category: "Achievement",
      link: ""
    },
    {
      id: 5,
      title: "The Complete Web Development Bootcamp",
      organization: "Angela Yu - Udemy",
      description: "Comprehensive full-stack web development certification covering HTML, CSS, JavaScript, Node.js, React, and databases with hands-on projects.",
      date: "2024",
      icon: <Code className="w-7 h-7" />,
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      shadowColor: "shadow-green-500/20",
      type: "Certification",
      category: "Course",
      link: ""
    },
    {
      id: 6,
      title: "Food Stall Committee Member",
      organization: "Vibrance 2025 - VIT Chennai",
      description: "Managed food stall operations and logistics during Vibrance 2025, ensuring seamless service delivery and enhancing experience for 3,000+ participants.",
      date: "Jan 2025 – Mar 2025",
      icon: <ShieldCheck className="w-7 h-7" />,
      gradient: "from-emerald-600 via-teal-500 to-green-500",
      bgColor: "bg-emerald-600/10",
      borderColor: "border-emerald-600/30",
      shadowColor: "shadow-emerald-600/20",
      type: "Leadership",
      category: "Event",
      link: ""
    },
    {
      id: 7,
      title: "Multiple Hackathon Participations",
      organization: "Various Competitions",
      description: "Multiple hackathon participation certificates showcasing consistent involvement in competitive programming events and continuous skill development.",
      date: "2024",
      icon: <Medal className="w-7 h-7" />,
      gradient: "from-cyan-600 via-blue-500 to-teal-500",
      bgColor: "bg-cyan-600/10",
      borderColor: "border-cyan-600/30",
      shadowColor: "shadow-cyan-600/20",
      type: "Participation",
      category: "Multiple",
      link: ""
    }
  ];

  const handleViewDetails = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden"
    id="achievements" >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Achievement
                </span>
              </h2>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
            </div>
            
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              A collection of milestones that showcase my journey through 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold"> competitive programming</span>, 
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold"> professional growth</span>, and 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold"> continuous learning</span>.
            </p>
          </div>

          {/* Achievement Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {allItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative transform transition-all duration-700 ${
                  visibleItems.has(item.id) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                } hover:scale-105 hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className={`relative bg-gray-900/80 backdrop-blur-xl border ${item.borderColor} rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:border-opacity-60 ${item.shadowColor} hover:shadow-2xl h-full flex flex-col`}>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>
                  
                  {/* Top Section */}
                  <div className={`relative p-4 sm:p-6 ${item.bgColor} backdrop-blur-sm border-b border-gray-800/50`}>
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon */}
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                        hoveredCard === item.id ? 'scale-110 rotate-12' : ''
                      }`}>
                        {item.icon}
                        <div className={`absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 ${
                          hoveredCard === item.id ? 'opacity-100' : ''
                        }`}></div>
                      </div>
                      
                      {/* Category & Date */}
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full mb-1`}>
                          {item.type}
                        </span>
                        <div className="text-gray-400 text-xs sm:text-sm">{item.date}</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-white font-bold text-lg sm:text-xl leading-tight mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    {/* Organization */}
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{item.organization}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 flex-1">
                      {item.description}
                    </p>

                    {/* Action Button */}
                    <div className="mt-auto">
                      {item.link ? (
                        <button 
                          onClick={() => handleViewDetails(item.link)}
                          className={`group/btn relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden`}
                        >
                          <span className="relative z-10">View Certificate</span>
                          <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                        </button>
                      ) : (
                        <div className={`w-full inline-flex items-center justify-center gap-2 bg-gray-700/50 text-gray-400 text-sm font-semibold py-3 px-4 rounded-xl cursor-not-allowed`}>
                          <span>Certificate Pending</span>
                          <Zap className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover Border Animation */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-300 ${
                    hoveredCard === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${item.gradient} opacity-20 animate-pulse`}></div>
                  </div>
                </div>
              </div>
            ))}
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
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}