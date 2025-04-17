import React, { useState, useEffect } from 'react';
import { RiTelegramLine } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import Arya from "./sp/Arya.png";
import Cipher from "./sp/cipher.jpg";
import Dev from "./sp/DEV.png";
import Gfg from "./sp/GFG.png";
import Hack from "./sp/hack.jpg";
import Lincom from "./sp/lincom.jpg";
import movie from "./sp/movie.jpg";
import photo from "./sp/photographyclub.jpg";
import wem from "./sp/wem.jpg";
import AIC from "./sp/AIC logo.svg";
import IIC from "./sp/iic.png";
import cup from './sp/UP.png';
import GDG from './sp/18.jpg'
import { FaLinkedin } from "react-icons/fa";

import valorantBg from './assets/valorant-bg.jpg';
import hlogo from './assets/logo.png';
import {
  Gem,
  Crown,
  Award,
  Star,
  Brain,
  Shield,
  Globe2,
  Cloud,
  Blocks,
  Newspaper,
  Gamepad2,
  Cpu,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Share2,
  ChevronDown,
  ExternalLink,
  Eye,
  Lightbulb,
  Instagram,
  Linkedin,
  Twitter,
  Handshake,
  Map,
  Sword,
  Zap,
  Target,
  Crosshair,
  Menu,
  X,
  Phone,
  Clock,
  Calendar,
  UserCheck,
  Users,
  Coffee,
  BookOpen,
  Award as Trophy,
  Codesandbox,
  Utensils,
  Soup,
  Skull,
  Gavel,
  Mic, // Fixed import for Mic
  Upload, // Fixed import for Upload
  Music, // Fixed import for Music
  AlertTriangle,
  Laptop,
} from 'lucide-react';

// Loader component
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f1923]">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Valorant-inspired loader animation */}
          <div className="absolute inset-0 border-4 border-[#ff4655] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-[#0f1923] border-b-transparent rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-8 border-4 border-[#ff4655] border-l-transparent rounded-full animate-spin animation-delay-300"></div>
        </div>
        <h2 className="text-2xl font-bold text-[#ff4655] mb-2">LOADING MISSION DATA</h2>
        <p className="text-gray-400">Initializing tactical systems...</p>
      </div>
    </div>
  );
};

// Valorant agent roles for theme categories
const agentRoles = {
  DUELIST: 'Duelist',
  SENTINEL: 'Sentinel',
  INITIATOR: 'Initiator',
  CONTROLLER: 'Controller'
};

// Timeline Data with Valorant theme
// Timeline Data with Valorant theme - Updated Schedule
// Timeline Data with Valorant theme - Precise Timing
const day1Data = [
  {
    time: "12:00",
    event: "Agent Check-In & Briefing",
    icon: UserCheck,
    duration: "12:00 - 15:30 (3h 30m)"
  },
  {
    time: "16:00",
    event: "Opening Intel Drop & Theme Decryption",
    icon: Mic,
    duration: "16:00 - 17:00 (1h)"
  },
  {
    time: "17:00",
    event: "Snacks Break",
    icon: Utensils,
    duration: "17:00 - 17:30 (30m)"
  },
  {
    time: "17:30",
    event: "Match Start - Code Lock In",
    icon: Codesandbox,
    duration: "17:30 - Ongoing"
  },
  {
    time: "20:00",
    event: "Dinner Break",
    icon: Utensils,
    duration: "20:00 - 22:00 (2h)"
  },
  {
    time: "22:00",
    event: "Fun Zone",
    icon: Music,
    duration: "22:00 - 23:00 (1h)"
  },
  {
    time: "23:00",
    event: "Mentoring Round 1",
    icon: Shield,
    duration: "23:00 - Ongoing"
  },
  {
    time: "01:00",
    event: "Midnight Ration Drop",
    icon: Coffee,
    duration: "01:00 - Ongoing"
  }
];

const day2Data = [
  {
    time: "08:00",
    event: "Respawn & Recap",
    icon: Coffee,
    duration: "08:00 - 09:00 (1h)"
  },
  {
    time: "09:00",
    event: "Mentoring Round 2",
    icon: Shield,
    duration: "09:00 - 11:00 (2h)"
  },
  {
    time: "12:00",
    event: "Lunch & Lounge",
    icon: Utensils,
    duration: "11:00 - 12:00 (1h)"
  },
  {
    time: "12:00",
    event: "Final Development",
    icon: Codesandbox,
    duration: "12:00 - 14:00 (2h)"
  },
  {
    time: "14:00",
    event: "Code Upload & Prep",
    icon: Upload,
    duration: "14:00 - 15:00 (1h)"
  },
  {
    time: "15:00",
    event: "Victory Ceremony",
    icon: MessageSquare,
    duration: "15:00 - 16:00 (1h)"
  },
  
];

// FAQs Data
const faqsData = {
  general: [
    {
      question: "Who can participate in Hack Arya Verse?",
      answer: "The hackathon is open to all undergraduate and graduate students from any recognized institution. Professionals and high school students may also participate but will be judged separately."
    },
    {
      question: "What is the team size?",
      answer: "Teams can consist of 1-4 members. You can register as a team or individually and we'll help you find teammates during our team formation session."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, Hack Arya Verse is completely free to participate in. We'll provide meals, snacks, and a place to work throughout the event."
    }
  ],
  technical: [
    {
      question: "What technologies can we use?",
      answer: "You can use any programming language, framework, or tool you're comfortable with. The only requirement is that your project must be built during the hackathon."
    },
    {
      question: "Can we work on pre-existing projects?",
      answer: "No, all projects must be started from scratch at the hackathon. However, you're encouraged to come with ideas and familiarize yourself with any technologies you plan to use."
    },
    {
      question: "What if we don't have experience with certain technologies?",
      answer: "That's perfectly fine! Hackathons are great learning experiences. We'll have mentors available to help you with technical challenges throughout the event."
    }
  ],
  logistics: [
    {
      question: "Will there be travel reimbursements?",
      answer: "No, we are unable to provide travel reimbursements for participants."
    },
    {
      question: "What should we bring?",
      answer: "Bring your laptop, charger,extension board,any hardware you plan to use, and a valid student ID. We recommend bringing a change of clothes and any personal items you might need."
    },
    {
      question: "Will there be food provided?",
      answer: "Yes! We'll provide all meals, snacks, and plenty of coffee to keep you going throughout the hackathon."
    }
  ]
};

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-26T00:00:00+05:30'); // IST timezone offset

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 text-white justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-2xl sm:text-4xl font-bold valorant-glow bg-[#1f2f3f] p-2 sm:p-4 rounded-none valorant-clip">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
}

const themes = [
  { 
    icon: Sword, 
    title: 'AI & Machine Learning', 
    role: agentRoles.DUELIST, 
    description: 'Intelligent solutions using AI models & Open Innovation.' 
  },
  { 
    icon: Shield, 
    title: 'Cybersecurity', 
    role: agentRoles.SENTINEL, 
    description: 'Strengthening digital defenses with AI-driven threat detection and blockchain security.' 
  },
  { 
    icon: Blocks, 
    title: 'Web 3.0 & Blockchain', 
    role: agentRoles.SENTINEL, 
    description: 'Building a secure, decentralized, and transparent digital world with blockchain.' 
  },
  { 
    icon: Target, 
    title: 'Web & App Development', 
    role: agentRoles.INITIATOR, 
    description: 'Innovative and functional applications & Open Innovation.' 
  },
  { 
    icon: Gamepad2, 
    title: 'Game Development', 
    role: agentRoles.DUELIST, 
    description: 'Game development is the process of designing, creating, and programming interactive digital games.' 
  },
  { 
    icon: Eye, 
    title: 'AR/VR', 
    role: agentRoles.INITIATOR, 
    description: 'AR/VR blends the real and virtual worlds to create immersive, interactive experiences.' 
  },
  { 
    icon: Cpu, 
    title: 'IoT & Smart Devices', 
    role: agentRoles.CONTROLLER, 
    description: 'Tech solutions for social good & Open Innovation.' 
  },
  { 
    icon: Cloud, 
    title: 'Cloud & DevOps', 
    role: agentRoles.CONTROLLER, 
    description: 'Cloud and DevOps streamline app delivery through automation, scalability, and continuous deployment.' 
  },
  { 
    icon: Lightbulb, 
    title: 'Open Innovation', 
    role: agentRoles.DUELIST, 
    description: 'Open innovation encourages collaboration and idea-sharing across diverse teams to develop creative, real-world solutions.' 
  }
];

const mentors = [
  {
    name: 'Agent Phoenix',
    role: 'AI Research Lead',
    image: '/images/valorant-phoenix.png'
  },
  {
    name: 'Agent Cypher',
    role: 'Cybersecurity Expert',
    image: '/images/valorant-cypher.png'
  },
  {
    name: 'Agent Sage',
    role: 'Web3 Developer',
    image: '/images/valorant-sage.png'
  }
];

const sponsors = [
  {
    tier: "Radianite Sponsors",
    icon: Gem,
    sponsors: [
      { name: "Arya College of Engineering & I.T.", logo: `${Arya}` },
      { name: "Arya Incubation Center", logo: `${AIC}` },
      { name: "IIC", logo: `${IIC}` },
      { name: "Arya Cipher Club", logo: `${Cipher}` },
      { name: "Arya Hackathon Club", logo: `${Hack}` },
      { name: "Arya Lincom Club", logo: `${Lincom}` },
      {name :"GDG ACEIT",logo:`${GDG}`}
    ]
  },
  {
    tier: "Kingdom Credits",
    icon: Crown,
    sponsors: [
      { name: 'Geeks For Geeks', logo: `${Gfg}` },
      { name: "CodeUp", logo: `${cup}` },
      {name: "Devfolio",logo:`${Dev}`}
   
    ]
  },
  {
    tier: "Media Partners",
    icon: Newspaper,
    sponsors: [
      { name: "We Ad Media", logo: `${wem}` },
      { name: "Arya Movie Club", logo: `${movie}` },
      { name: "Arya Photography Club", logo: `${photo}` }
    ]
  }
];


function JudgesSection() {
  const judges = [
    {
      name: "Agent Jett",
      designation: "CTO at Radiant Security",
      description: "Expert in cybersecurity with 15+ years experience in threat intelligence and network defense.",
      linkedin: "https://linkedin.com",
      image: `${GDG}`
    },
    {
      name: "Agent Sage",
      designation: "AI Research Lead at Kingdom Labs",
      description: "Pioneer in machine learning applications for healthcare and biotechnology.",
      linkedin: "https://linkedin.com",
      image: `${GDG}`
    },
    {
      name: "Agent Brimstone",
      designation: "Director of Engineering at Valorant Inc.",
      description: "Specializes in scalable cloud architectures and DevOps transformations.",
      linkedin: "https://linkedin.com",
      image: `${GDG}`
    },
    {
      name: "Agent Viper",
      designation: "Head of Product at Venom Tech",
      description: "Product strategist with expertise in blockchain and decentralized applications.",
      linkedin: "https://linkedin.com",
      image: `${GDG}`
    },
    {
      name: "Agent Phoenix",
      designation: "Lead Game Developer at Riot Forge",
      description: "Creative director with multiple award-winning game titles under his belt.",
      linkedin: "https://linkedin.com",
      image: `${GDG}`
    }
  ];
  
  const duplicatedJudges = [...judges, ...judges];

  return (
    <section id="judges" className="py-20 px-4 valorant-section overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Mission Commanders</h2>
        
        <div className="relative">
          {/* Slider Container */}
          <div className="relative h-[400px] sm:h-[450px] w-full overflow-hidden">
            {/* Infinite Loop Slider */}
            <div className="absolute top-0 left-0 flex h-full items-center animate-infinite-scroll hover:pause">
              {duplicatedJudges.map((judge, index) => (
                <div 
                  key={`${judge.name}-${index}`} 
                  className="flex-shrink-0 w-[280px] sm:w-[320px] mx-2 sm:mx-4"
                >
                  <JudgeCard judge={judge} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f1923b8] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f1923ba] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

function JudgeCard({ judge }: { judge: { name: string; designation: string; description: string; linkedin: string; image: string } }) {
  return (
    <div className="theme-card valorant-card-hover flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]">
      {/* Square Image Container - Fixed size */}
      <div className="relative w-full pt-[100%] overflow-hidden group">
        <img 
          src={judge.image} 
          alt={judge.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-105"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.9) contrast(1.1)'
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://via.placeholder.com/400x400?text=Judge+Photo';
            target.className = 'absolute top-0 left-0 w-full h-full object-contain bg-[#1a242d] p-4';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/90 via-[#0f1923]/30 to-transparent"></div>
      </div>
      
      {/* Text Content - Fixed height with overflow control */}
      <div className="p-4 flex flex-col" style={{ height: 'calc(100% - 100%)' }}>
        <h3 className="text-lg sm:text-xl font-bold valorant-text-gradient mb-1 line-clamp-1">{judge.name}</h3>
        <p className="text-xs sm:text-sm text-[#ff4655] mb-2 font-medium line-clamp-1">{judge.designation}</p>
        <p className="text-xs sm:text-sm text-gray-400 flex-1 mb-3 line-clamp-3 overflow-hidden">
          {judge.description}
        </p>
        
        {/* LinkedIn Button - Centered */}
        <div className="mt-auto w-full flex justify-center">
          <a 
            href={judge.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 bg-[#0077b5] hover:bg-[#005f91] text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label={`Connect with ${judge.name} on LinkedIn`}
          >
            <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-64 bg-[#0f1923] valorant-clip transform transition-transform duration-300">
        <div className="p-4">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-[#ff4655]">
            <X className="w-6 h-6" />
          </button>
          <div className="mt-12 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>About</a>
            <a href="#timeline" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>Timeline</a>
            <a href="#tracks" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>Tracks</a>
            <a href="#faqs" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>FAQs</a>
            <a href="#belongings" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>Belongings</a>
            <a href="#contact" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQsSection() {
  const [visibleCategory, setVisibleCategory] = useState<keyof typeof faqsData>("general");
  const [showAll, setShowAll] = useState(false);
  
  const allFaqs = Object.values(faqsData).flat();
  const displayedFaqs = showAll ? allFaqs : faqsData[visibleCategory];

  return (
    <section id="faqs" className="py-20 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Intel Database</h2>
        
        {/* Category Selector */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {Object.keys(faqsData).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border border-[#ff4655] text-sm rounded-none transition-all duration-300 hover:bg-[#ff4655] hover:text-white ${
                visibleCategory === category && !showAll ? 'bg-[#ff4655]' : 'bg-transparent'
              }`}
              onClick={() => {
                setVisibleCategory(category as keyof typeof faqsData);
                setShowAll(false);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
          <button
            className={`px-4 py-2 border border-[#ff4655] text-sm rounded-none transition-all duration-300 hover:bg-[#ff4655] hover:text-white ${
              showAll ? 'bg-[#ff4655]' : 'bg-transparent'
            }`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Categories' : 'Show All'}
          </button>
        </div>
        
        {/* FAQs List */}
        <div className="space-y-6">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="theme-card valorant-card-hover group">
              <h3 className="text-xl font-bold mb-2 valorant-text-gradient">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeData = activeDay === 1 ? day1Data : day2Data;

  return (
    <section id="timeline" className="py-20 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Mission Timeline</h2>

        {/* Day Selector Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveDay(1)}
            className={`valorant-button ${activeDay === 1 ? 'bg-[#ff4655]' : 'bg-transparent'}`}
          >
            <span>Day 1: Mission Launch</span>
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`valorant-button ${activeDay === 2 ? 'bg-[#ff4655]' : 'bg-transparent'}`}
          >
            <span>Day 2: Final Push</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#ff4655] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {activeData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative pl-12 md:pl-0 md:flex ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } transition-all duration-500 ${activeIndex === index ? 'scale-105' : 'scale-100'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-[#ff4655] rounded-full transform -translate-x-1/2 z-10"></div>

                  {/* Timeline Card */}
                  <div
                    className={`theme-card valorant-card-hover group w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Icon className="w-6 h-6 text-[#ff4655] valorant-pulse" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-400">{item.time}</span>
                          </div>
                          {item.duration && (
                            <span className="text-xs bg-[#ff4655]/10 text-[#ff4655] px-2 py-1 rounded">
                              {item.duration}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-1 valorant-text-gradient">{item.event}</h3>
                        {/* Add description here if available in your data */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BelongingsSection() {
  return (
    <section id="belongings" className="py-10 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center text-lg sm:text-2xl">Agent Essentials</h2>
        
        <div className="theme-card valorant-card-hover p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 valorant-text-gradient">Required Mission Gear</h3>
          
          {/* Student ID Card - Highlighted Item */}
          <div className="group relative p-4 sm:p-6 mb-4 sm:mb-6 bg-[#1a242d] border border-[#ff4655]/30 hover:border-[#ff4655] transition-all rounded-lg valorant-pulse">
            <div className="flex items-start flex-wrap">
              <div className="bg-[#ff4655] p-2 rounded-full mr-4">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm sm:text-base w-full">
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 flex items-center">
                  Student College ID Card
                  <span className="ml-2 px-2 py-1 text-xs bg-[#ff4655] rounded-full">MANDATORY</span>
                </h4>
                <p className="text-gray-300">
                  Original physical ID card issued by your educational institution with:
                </p>
                <ul className="mt-2 space-y-1 text-gray-400 pl-5 list-disc">
                  <li>Clear photo identification</li>
                  <li>Valid academic year (2024-25)</li>
                  <li>Institution seal/stamp</li>
                  <li>No photocopies/digital versions accepted</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-[#0f1923] border border-[#ff4655]/20 rounded-sm">
              <p className="text-xs sm:text-sm text-gray-300 flex items-start">
                <Shield className="w-4 h-4 text-[#ff4655] mt-1 mr-2 flex-shrink-0" />
                <span>Without this ID, you <span className="text-[#ff4655] font-medium">will not</span> be granted access to the venue or allowed to participate.</span>
              </p>
            </div>
          </div>

          {/* Other Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Food Coupons</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Provided at registration - required for all meals</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Event ID Badge</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Must be visibly worn at all times</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <X className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Prohibited Items</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">No sharp objects, weapons, or hazardous materials</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#1a242d] hover:bg-[#22303d] transition-all rounded-lg border border-[#2a3a4d]">
              <div className="flex items-start">
                <div className="bg-[#ff4655] p-1 rounded-full mr-3 mt-1">
                  <Laptop className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-lg font-medium text-white">Laptop , Charger & Extension Board</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Essential for hacking (no lab computers provided)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 p-4 bg-[#1a242d] border-l-4 border-[#ff4655]">
            <p className="text-xs sm:text-sm text-gray-300 flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff4655] mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <span className="font-bold">Security Protocol:</span> All items subject to security screening. 
                Counterfeit IDs will result in immediate disqualification and removal from premises.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading all resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time as needed

    // You can also use this for actual image loading:
    const imageUrls = [
      valorantBg, 
      hlogo,
      Arya,
      Cipher,
      Dev,
      Gfg,
      Hack,
      Lincom,
      movie,
      photo,
      wem,
      AIC,
      IIC,
      cup
    ];

    const loadImages = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Continue even if some images fail
      });
    });

    Promise.all(loadImages).then(() => {
      setIsLoading(false);
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-valorant-gradient text-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1923] bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold valorant-glow flex items-center">
              <img src={hlogo} alt="" className='w-16' />
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#about" className="text-gray-300 hover:text-[#ff4655] transition-colors">About</a>
              <a href="#timeline" className="text-gray-300 hover:text-[#ff4655] transition-colors">Timeline</a>
              <a href="#tracks" className="text-gray-300 hover:text-[#ff4655] transition-colors">Tracks</a>
              <a href="#faqs" className="text-gray-300 hover:text-[#ff4655] transition-colors">FAQs</a>
              <a href="#belongings" className="text-gray-300 hover:text-[#ff4655] transition-colors">Belongings</a>
              <a href="#contact" className="text-gray-300 hover:text-[#ff4655] transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="valorant-button text-sm group"
                onClick={() => window.location.href = 'https://lu.ma/dv6q75cg'}
              >
                <Zap className="w-4 h-4 inline-block mr-2 group-hover:valorant-glitch" />
                <span className="group-hover:valorant-glitch">Register Now</span>
              </button>
              <button 
                className="md:hidden text-gray-300 hover:text-[#ff4655] transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0f1923] mt-12 lg:mt-20 mb-12 lg:mb-20"
        style={{
          backgroundImage: `url(${valorantBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[600px]">
          <div className="mb-6 lg:mb-8 w-[90%] sm:w-[40%] lg:w-[50%] valorant-reveal">
            <img src={hlogo} alt="Hack Arya Verse Logo" className="mx-auto mb-4" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold valorant-glow mb-4 lg:mb-6 valorant-reveal leading-tight">
            HACK ARYA VERSE
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 valorant-text-gradient valorant-reveal leading-relaxed">
          Plant Ideas, Diffuse Limits
          </p>
          <div className="valorant-reveal mb-6 lg:mb-8">
            <CountdownTimer />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center valorant-reveal">
            <button 
              className="valorant-button group"
              onClick={() => window.location.href = 'https://lu.ma/dv6q75cg'}
            >
              <span className="group-hover:valorant-glitch">Register Now</span>
            </button>
            <button 
              className="valorant-button bg-transparent group"
              onClick={() => window.location.href = 'https://linktr.ee/hack_arya_verse'}
            >
              <span className="group-hover:valorant-glitch">Know More</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Mission Briefing</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="theme-card valorant-card-hover group">
              <h3 className="text-2xl font-bold mb-4 valorant-text-gradient">The Protocol</h3>
              <p className="text-gray-300">
                Hack Arya Verse is not just a hackathon; it's a tactical operation
                where the brightest agents unite to tackle real-world challenges
                through technology and innovation.
              </p>
            </div>
            <div className="theme-card valorant-card-hover group">
              <h3 className="text-2xl font-bold mb-4 valorant-text-gradient">The Objective</h3>
              <p className="text-gray-300">
                Join forces with elite agents, mentors, and fellow innovators
                to deploy solutions that will reshape the future of technology
                and secure a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* FAQs Section */}
      <FAQsSection />

      {/* Themes Section */}
      <section id="tracks" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Combat Tracks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <div 
                  key={index} 
                  className={`theme-card valorant-card-hover group valorant-agent-select ${
                    selectedTrack === index ? 'valorant-ability' : ''
                  }`}
                  onClick={() => setSelectedTrack(index)}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className={`w-12 h-12 text-[#ff4655] ${
                      selectedTrack === index ? 'valorant-ultimate' : ''
                    }`} />
                    <span className="ml-2 text-sm text-[#ff4655]">{theme.role}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 valorant-text-gradient">{theme.title}</h3>
                  <p className="text-gray-400">{theme.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Belongings Section */}
      <BelongingsSection />

      {/* Night Market Section */}
      <section className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Night Market</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((tier) => (
              <div key={tier} className="theme-card valorant-card-hover relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="w-12 h-12 text-[#ff4655] group-hover:opacity-100 transition-opacity valorant-spike" />
                </div>
                <div className="opacity-0 group-hover:opacity-0 transition-opacity">
                  <h3 className="text-2xl font-bold mb-4 valorant-text-gradient">Radianite Tier {tier}</h3>
                  <ul className="text-gray-300">
                    <li className="valorant-reveal">₹{tier * 50000} Bounty</li>
                    <li className="valorant-reveal">Premium Agent Kit</li>
                    <li className="valorant-reveal">Direct Contract Opportunities</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Judges Section */}
       {/* <JudgesSection />  */}
      

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Our Allies</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We're grateful for the support of our strategic partners who make this operation possible.
          </p>
          
          <div className="space-y-16">
            {sponsors.map((sponsorTier, index) => {
              const Icon = sponsorTier.icon;
              return (
                <div key={index} className="theme-card valorant-card-hover p-8">
                  <div className="flex items-center justify-center mb-8">
                    <Icon className="w-10 h-10 text-[#ff4655] mr-3" />
                    <h3 className="text-2xl font-bold valorant-text-gradient">
                      {sponsorTier.tier}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sponsorTier.sponsors.map((sponsor, i) => (
                      <div 
                        key={i} 
                        className="flex flex-col items-center justify-center p-4 bg-[#1a242d] rounded-sm hover:bg-[#2a3a4d] transition-colors"
                      >
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-h-20 bg-white rounded-tl-lg rounded-br-lg border-[#ff4655] border-2 max-w-full object-contain mb-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://via.placeholder.com/150?text=Sponsor+Logo';
                          }}
                        />
                        <p className="text-gray-300 text-sm text-center">{sponsor.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold valorant-text-gradient mb-6">Want to join our forces?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1l3awUAQYiHaUPOJDdF_gBJ-dehXOZH2R/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="valorant-button group flex items-center justify-center"
              >
                <ExternalLink className="inline-block w-4 h-4 mr-2" />
                <span>Sponsorship Deck</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Command Center</h2>
          <div className="theme-card valorant-card-hover p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Base Location</h4>
                  <p className=" font-mono font-semibold text-gray-400">Arya College of Engineering & IT, Jaipur</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h1 className="text-base sm:text-lg font-medium text-white">Secure Email</h1>
                  <p className="font-mono font-semibold text-gray-400 break-all text-xs sm:text-sm">
                    aryastudentclubs@aryacollege.in
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Secure Contacts</h4>
                  <p className="text-gray-400 font-semibold font-mono">+91 9653926918 Lalit Punjabi</p>
                  <p className="text-gray-400 font-semibold font-mono">+91 9256954320 Amit Kumar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Social Channels</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.instagram.com/hackaryaverse?igsh=Ync2YWM2MDV0anV5" className="text-gray-400 hover:text-[#ff4655] transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/hackaryaverse?s=11" className="text-gray-400 hover:text-[#ff4655] transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/hack-arya-verse" className="text-gray-400 hover:text-[#ff4655] transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://t.me/hackaryaverse" className="hover:text-[#ff4655] transition-colors">
                      <RiTelegramLine className="w-6 h-6" />
                    </a>
                    <a href="https://discord.gg/J6e8ZRpb" className='text-gray-400 hover:text-[#ff4655] transition-colors'>
                      <AiOutlineDiscord className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1923] text-gray-400 w-full py-12 px-5 relative">
        <div className="md:w-[80%] w-full mx-auto px-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 valorant-text-gradient">HAV Protocol</h3>
              <p>Where innovation meets tactical brilliance.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 valorant-text-gradient">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-[#ff4655] transition-colors">About</a></li>
                <li><a href="#tracks" className="hover:text-[#ff4655] transition-colors">Tracks</a></li>
                <li><a href="#faqs" className="hover:text-[#ff4655] transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 valorant-text-gradient">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hackaryaverse?igsh=Ync2YWM2MDV0anV5" className="hover:text-[#ff4655] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://x.com/hackaryaverse?s=11" className="hover:text-[#ff4655] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/hack-arya-verse" className="hover:text-[#ff4655] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://t.me/hackaryaverse" className="hover:text-[#ff4655] transition-colors">
                  <RiTelegramLine className="w-6 h-6" />
                </a>
                <a href="https://discord.gg/J6e8ZRpb" className='text-gray-400 hover:text-[#ff4655] transition-colors'>
                  <AiOutlineDiscord className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="col-span-full mt-8 flex justify-center">
              <div className="relative w-full h-0 pb-[56.25%] md:w-[75%] md:pb-[40%] lg:w-[50%] lg:pb-[30%]">
                <iframe
                  title="College Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.0091768445336!2d75.89098077479052!3d27.029875955046872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf9e6f4d2f3b%3A0x5b28af6fe5c60627!2sArya%20College%20of%20Engineering%20%26%20IT!5e0!3m2!1sen!2sin!4v1743687727628!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Hack Arya Verse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;