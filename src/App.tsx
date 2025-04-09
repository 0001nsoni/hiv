import React, { useState, useEffect } from 'react';
import { RiTelegramLine } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import Arya from "./sp/Arya.png";
import Cipher from "./sp/cipher.jpg";
import Dev from "./sp/DEV.png";
import Gfg from "./sp/GFG.png";
import Hack from "./sp/hack.png";
import Lincom from "./sp/lincom.jpg";
import movie from "./sp/movie.jpg";
import photo from "./sp/photographyclub.jpg"
import wem from "./sp/wem.jpg";
import AIC from "./sp/AIC logo.svg";
import IIC from "./sp/iic.png"
import cup from './sp/UP.png';

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
  Gavel
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
const timelineData = [
  {
    time: "12:00 PM",
    event: "Agent Check-In",
    icon: UserCheck,
    description: "All operatives must check in at the command center"
  },
  {
    time: "04:00 PM",
    event: "Team Formation",
    icon: Users,
    description: "Squad assignment and tactical briefing"
  },
  {
    time: "05:30 PM",
    event: "Radianite Refuel",
    icon: Coffee,
    description: "Energy replenishment for all agents"
  },
  {
    time: "08:00 PM",
    event: "Dinner Briefing",
    icon: Utensils,
    description: "Team dinner with key takeaways from the day and relaxed planning for tomorrow"
  },
  {
    time: "09:30 PM",
    event: "First Tactical Session",
    icon: Shield,
    description: "Initial combat training and strategy workshop"
  },
  {
    time: "07:30 AM",
    event: "Tactical Fuel-Up",
    icon: Coffee,
    description: "Mission-critical breakfast briefing: carbs for endurance, caffeine for focus"
  },
  {
    time: "08:00 AM",
    event: "Second Tactical Session",
    icon: Sword,
    description: "Advanced combat techniques and final preparations"
  },
  {
    time: "12:00 PM",
    event: "Viper's Elimination",
    icon: Skull,
    description: "Only the strong survive - bottom performers face immediate consequences"
  },
  {
    time: "12:30 PM",
    event: "Combat Rations Refuel",
    icon: Soup,
    description: "Field resupply - hot chow before afternoon maneuvers"
  },
  {
    time: "01:30 PM",
    event: "Viper's Final Decree",
    icon: Gavel,
    description: "No more warnings - underperformers are permanently cut from the operation"
  },
  {
    time: "12:30 PM",
    event: "Final Briefing",
    icon: Crosshair,
    description: "Last-minute strategy before the final mission"
  },
  {
    time: "04:00 PM",
    event: "Extraction",
    icon: Codesandbox,
    description: "Mission complete - all agents return to base"
  }
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
      answer: "Teams can consist of 2-4 members. You can register as a team or individually and we'll help you find teammates during our team formation session."
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
      answer: "We may provide limited travel reimbursements on a case-by-case basis. Please contact us for more information."
    },
    {
      question: "What should we bring?",
      answer: "Bring your laptop, charger, any hardware you plan to use, and a valid student ID. We recommend bringing a change of clothes and any personal items you might need."
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
      { name: "Arya Hackthone Club", logo: `${Hack}` },
      { name: "Arya Lincom Club", logo: `${Lincom}` }
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Mission Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#ff4655] transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`relative pl-12 md:pl-0 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} transition-all duration-500 ${activeIndex === index ? 'scale-105' : 'scale-100'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-[#ff4655] rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  <div className={`theme-card valorant-card-hover group w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <Icon className="w-6 h-6 text-[#ff4655] valorant-pulse" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-400">{item.time}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1 valorant-text-gradient">{item.event}</h3>
                        <p className="text-gray-400">{item.description}</p>
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
              <a href="#about" className="text-gray-300 hover:text-[#ff4655] transition-colors valorant-hover-effect">About</a>
              <a href="#timeline" className="text-gray-300 hover:text-[#ff4655] transition-colors valorant-hover-effect">Timeline</a>
              <a href="#tracks" className="text-gray-300 hover:text-[#ff4655] transition-colors valorant-hover-effect">Tracks</a>
              <a href="#faqs" className="text-gray-300 hover:text-[#ff4655] transition-colors valorant-hover-effect">FAQs</a>
              <a href="#contact" className="text-gray-300 hover:text-[#ff4655] transition-colors valorant-hover-effect">Contact</a>
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
          <div className="mb-6 lg:mb-8 w-[70%] sm:w-[40%] lg:w-[30%] valorant-reveal">
            <img src={hlogo} alt="Hack Arya Verse Logo" className="mx-auto mb-4" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold valorant-glow mb-4 lg:mb-6 valorant-reveal leading-tight">
            HACK ARYA VERSE
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 valorant-text-gradient valorant-reveal leading-relaxed">
            Where Innovation Meets Tactical Brilliance
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
              <button className="valorant-button group">
                <a 
                  href="https://drive.google.com/file/d/your-sponsorship-pdf-id/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:valorant-glitch"
                >
                  <ExternalLink className="inline-block w-4 h-4 mr-2" />
                  Sponsorship Deck
                </a>
              </button>
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
                  <p className="text-gray-400">Arya College of Engineering & IT, Jaipur</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h1 className="text-base sm:text-lg font-medium text-white">Secure Email</h1>
                  <p className="text-gray-400 break-all text-xs sm:text-sm">
                    aryastudentclubs@aryacollege.in
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="flex-shrink-0 w-6 h-6 text-[#ff4655] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Secure Contacts</h4>
                  <p className="text-gray-400">+91 9653926918 Lalit Punjabi</p>
                  <p className="text-gray-400">+91 9256954320 Amit Kumar</p>
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
                    <a href="https://t.me/hackaryaverse" className='text-gray-400 hover:text-[#ff4655] transition-colors'>
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