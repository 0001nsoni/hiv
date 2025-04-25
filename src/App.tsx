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
import manktine from './sp/marktine_new_logo2.png';
import grass from './sp/grass.jpg';
import cloudy from './sp/2.png';
import wavvy from './sp/wavvyy.jpg';
import nature from './sp/1.png';
import softserv from './sp/softserv.jpg';
import origin from './sp/65537c8bbad723130b5e7dcd_origin-logo-1200x630.png';
import rightpoint from './sp/rightpoint_logo.jpg';
import wisflux from './sp/wisflux_logo.jpg';
import techlab from './sp/1631309984557.jpg';
import microsoft from './sp/microsoft_logo.jpg'
import azure from './sp/Azure.png';
import reskill from './sp/reskill.jpg';
import valorantBg from './assets/valorant-bg.jpg';
import hlogo from './assets/logo.png';
import devesh from './mentors/deveshbirla.jpg';
import ajay from './mentors/ajayshram.jpg';
import ajeet from './mentors/ajeetchaudhry.jpg';
import akhil from './mentors/akhilashtrivadi.jpg';
import aman from './mentors/amanpandey.jpg';
import ashutosh from './mentors/ashutosh.jpg';
import ayush from './mentors/ayush.jpg';
import bhuvnash from './mentors/bhuvnashwar.jpg';
import jaghmohan from './mentors/jagmohan.jpg';
import manish from './mentors/manish.jpg';
import nitin from './mentors/nitinShulkla.jpg';
import puneet from './mentors/puneet jain.jpg';
import rahul from './mentors/rahulvyas.jpg';
import rajat from './mentors/rajatgoyal.jpg';
import sarwan from './mentors/sarwan.jpg';
import sunil from './mentors/sunilkumar.jpg'
import satyam from './mentors/satyamgupta.jpg';
import tapendra from './mentors/tapendra.jpg';
import umashankar from './mentors/umashanker.jpg';
import alok from './mentors/AS.png';
import ripu from './mentors/1516978229053.jpeg';
import NA from './mentors/image.jpg';
import HT from './sp/ht.png';
import celabal from './sp/celebal.png';
import varta from './sp/Vaarta.png';
import vriti from './sp/Vriti.png';
import meta  from './sp/metacube_logo.jpg';
import bharat from './mentors/bharat.jpg';
import rajesh from './mentors/rajesh.jpg';
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
import { section } from 'framer-motion/client';

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
    time: "13:00",
    event: "Registration & Check in of Participants",
    icon: UserCheck,
    duration: "13:00 - 15:45 (2h 45m)"
  },
  {
    time: "16:00",
    event: "Inauguration Ceremony & Introductory Session, Problem Statements Revealed",
    icon: Mic,
    duration: "16:00 - 17:30 (1h 30m)"
  },
  {
    time: "17:30",
    event: "Participants start the coding",
    icon: Codesandbox,
    duration: "17:30 - Ongoing"
  },
  {
    time: "18:30",
    event: "Session by any partner / sponsor",
    icon: Users,
    duration: "18:30 - 19:30 (1h)"
  },
  {
    time: "19:30",
    event: "Participants continue with their projects",
    icon: Codesandbox,
    duration: "19:30 - 20:30 (1h)"
  },
  {
    time: "20:30",
    event: "Dinner Begins (Continued in slots)",
    icon: Utensils,
    duration: "20:30 - 22:00 (1h 30m)"
  },
  {
    time: "22:00",
    event: "Mentor Round 1",
    icon: Shield,
    duration: "22:00 - 23:00 (1h)"
  },
  {
    time: "23:00",
    event: "Fun Networking sessions for participants",
    icon: Music,
    duration: "23:00 - 00:00 (1h)"
  }
];

const day2Data = [
  {
    time: "00:00",
    event: "FUN Zone Begins & participants continue to code",
    icon: Music,
    duration: "00:00 - 01:30 (1h 30m)"
  },
  {
    time: "01:30",
    event: "Mid-night snacks time",
    icon: Coffee,
    duration: "01:30 - 02:30 (1h)"
  },
  {
    time: "02:30",
    event: "Sponsor / Partner Session",
    icon: Users,
    duration: "02:30 - 03:00 (30m)"
  },
  {
    time: "03:00",
    event: "Participants continue",
    icon: Codesandbox,
    duration: "03:00 - 08:00 (5h)"
  },
  {
    time: "08:00",
    event: "Breakfast (Slots)",
    icon: Utensils,
    duration: "08:00 - 09:30 (1h 30m)"
  },
  {
    time: "09:30",
    event: "Session by Partners / Sponsors",
    icon: Users,
    duration: "09:30 - 10:00 (30m)"
  },
  {
    time: "10:00",
    event: "Mentor Round 2",
    icon: Shield,
    duration: "10:00 - 12:00 (2h)"
  },
  {
    time: "12:00",
    event: "Lunch (Slots)",
    icon: Utensils,
    duration: "12:00 - 13:30 (1h 30m)"
  },
  {
    time: "13:30",
    event: "Judging Round",
    icon: Award,
    duration: "13:30 - 15:00 (1h 30m)"
  },
  {
    time: "15:00",
    event: "Project Submission",
    icon: Upload,
    duration: "15:00 - 16:00 (1h)"
  },
  {
    time: "16:00",
    event: "Valedictory Sessions / Closing Session",
    icon: MessageSquare,
    duration: "16:00 - 17:00 (1h)"
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
    const targetDate = new Date('2025-04-26T12:00:00+05:30'); // IST timezone offset

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
    tier: "Powered by",
    icon: Gem,
    sponsors: [
     
      {name: "Microsoft", logo: `${microsoft}`},
      {name: "Azure Developer Community", logo: `${azure}`},
      {name: "Reskill", logo: `${reskill}`}

    ]
  },
  {
    tier: "Principal Sponsor",  // New principal sponsor tier
    icon: Trophy,  // Using Trophy icon for principal sponsor
    sponsors: [
      { name: "Marktine", logo: `${manktine}` },
      { name : "vaarta.ai",logo:`${varta}`,color:"bg-black" },
      { name : "vriti.ai",logo:`${vriti}`,color:"bg-black" },  // Assuming you'll add the manktime logo import
        // Assuming you'll add the manktime logo import
    ]
  },
  
  {
    tier: "In association with",
    icon: Crown,
    sponsors: [
      { name: 'Geeks For Geeks', logo: `${Gfg}` },
      { name: 'GRRAS Solutions', logo: `${grass}` },
      { name: 'SOFTSERV INC', logo: `${softserv}` },
      { name: 'ORIGIN Digital', logo: `${origin}` },
      { name: 'Right point', logo: `${rightpoint}` },
      { name: 'wisflux', logo: `${wisflux}` },
      { name: 'natural', logo: `${nature}` },
      { name: 'wavvyy', logo: `${wavvy}` },
      { name: 'Cloudy coders', logo: `${cloudy}` },
      {name: "Celebal", logo: `${celabal}`},
      {name: "metacube", logo: `${meta}`},
      {name: "hysn technologies", logo: `${HT}`},


      { name: 'Tech labs ', logo: `${techlab}` },
      { name: "Arya College of Engineering & I.T.", logo: `${Arya}` },
      { name: "Arya Incubation Center", logo: `${AIC}` },
      { name: "IIC", logo: `${IIC}` },
      { name: "Arya Cipher Club", logo: `${Cipher}` },
      { name: "Arya Hackathon Club", logo: `${Hack}` },
      { name: "Arya Lincom Club", logo: `${Lincom}` },
     

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
      name: "Mr. Devesh Birla",
      designation: "Senior Consultant - Microsoft",
      linkedin: "https://www.linkedin.com/in/devesh-birla-80106344/",
      image: `${devesh}`
    },
    {
      name: "Mr. Satyam Gupta",
      designation: "Data Engineer - Microsoft",
      linkedin: "https://www.linkedin.com/in/satyam-gupta-ab869663/",
      image: `${satyam}`
    },
    {
      name: "Mr. Aman Pandey",
      designation: "Data Engineer - Microsoft",
      linkedin: "https://www.linkedin.com/in/amanpandey112/",
      image: `${aman}`
    },
    {
      name: "Mr. Ajeet Choudhary",
      designation: "Senior Technical Consultant - Microsoft",
      linkedin: "https://www.linkedin.com/in/ajeetchoudhary/",
      image: `${ajeet}`
    },
    {
      name: "Mr. Punit Jain",
      designation: "Co-Founder - Reskill",
      linkedin: "https://www.linkedin.com/in/puntijainfarhom/",
      image: `${puneet}`
    },
    {
      name: "Mr. Akhilesh Trivedi",
      designation: "Vice President - TechForce Services",
      linkedin: "https://www.linkedin.com/in/akhilesh-trivedi-globalmentor-startupsentrepnruship/",
      image: `${akhil}`
    },
    {
      name: "Mr. Ashutosh Vyas",
      designation: "CTO - SoftServ",
      linkedin: "https://www.linkedin.com/in/ashutoshyas/",
      image: `${ashutosh}`
    },
    {
      name: "Mr. Rahul Vyas",
      designation: "Founder - Startup Saarthi",
      linkedin: "https://www.linkedin.com/in/vyasrahul/",
      image: `${rahul}`
    },
    {
      name: "Mr. Nitinn Shukla",
      designation: "Assistant Vice President - Genpact",
      linkedin: "https://www.linkedin.com/in/nitinn-shukla-a9431411/",
      image: `${nitin}`
    },
    {
      name: "Mr. Uma Shankar Arora",
      designation: "Managing Director & Co-Founder - SevenX Consulting Pvt. Ltd.",
      linkedin: "https://www.linkedin.com/in/usarora/",
      image: `${umashankar}`
    },
    {
      name: "Mr. Tapendra Singh Ranawat",
      designation: "Associate Project lead - MetaCube Software Pvt. Ltd.",
      linkedin: "https://www.linkedin.com/in/tapendraranawat/",
      image: `${tapendra}`
    },
    {
      name: "Mr. Ayush Badhera",
      designation: "Assistant Vice President - Celebal Technologies",
      linkedin: "https://www.linkedin.com/in/ayushbadhera/",
      image: `${ayush}`
    },
    {
      name: "Mr. Jagmohan Singh Rathore",
      designation: "Managing Director - ORIGIN",
      linkedin: "https://www.linkedin.com/in/jagmohansinghrathore/",
      image: `${jaghmohan}`
    },
    {
      name: "Mr. Ajay Sharma",
      designation: "Data & AI Architect - ORIGIN",
      linkedin: "https://www.linkedin.com/in/me-ajay-sharma/",
      image: `${ajay}`
    },
    {
      name: "Mr. Bhuvaneshwar Solanki",
      designation: "Solutions Architect - ORIGIN",
      linkedin: "https://www.linkedin.com/in/bhuvaneshwar-solanki-4259542a/",
      image: `${bhuvnash}`
    },
    {
      name: "Dr. Srawan Nath",
      designation: "Project Manager - Xebia",
      linkedin: "https://www.linkedin.com/in/dr-srawan-nath-73016b29/",
      image: `${sarwan}`
    },
    {
      name: "Dr. Sunil Kumar Jangir",
      designation: "Senior Manager - Wisflux Tech Labs",
      linkedin: "https://www.linkedin.com/in/dr-sunil-kumar-jangir/",
      image: `${sunil}`
    },
    {
      name: "Mr. Ripudaman Magon",
      designation: "Director and CEO - Natural Group",
      linkedin: "https://www.linkedin.com/in/ripudaman-magon-37265822/",
      image: `${ripu}`
    },
    {
      name: "Mr. Rajat Goyal",
      designation: "Director - Grras Solutions",
      linkedin: "https://www.linkedin.com/in/rajat-goyal-0a045021/",
      image: `${rajat}`
    },
    {
      name: "Mr. Alok Sharma",
      designation: "Co-Founder - MarkTine Technology Solutions",
      linkedin: "https://www.linkedin.com/in/marketeraloksharma/",
      image: `${alok}`
    },
    {
      name: "Mr. Manish Namdev",
      designation: "Co-Founder - MarkTine Technology Solutions",
      linkedin: "https://www.linkedin.com/in/manish-namdev-244ab93/",
      image: `${manish}`
    },
    {
      name: "Mr. Rajesh Panchal",
      designation: "Senior Consultant - Microsoft",
      linkedin: "https://www.linkedin.com/in/rajesh-panchal-199bb124/",
      image: `${rajesh}`
    },
    {
      name: "Mr. Bharat Tiwari",
      designation: "Cloud Architect at Google",
      linkedin: "https://www.linkedin.com/in/bharat-tiwari-4213a664/",
      image: `${bharat}`
    }
  ];

  // Create a duplicated array for seamless infinite scrolling
  const duplicatedJudges = [...judges, ...judges, ...judges];

  return (
    <section id="judges" className="py-20 px-4 valorant-section">
      <div className="w-full mx-auto overflow-x-hidden">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-8 text-center">
          Mentors & Judges
        </h2>

        <div className="relative">
          {/* Slider Container */}
          <div className="relative w-full py-8 overflow-hidden">
            {/* Infinite Loop Slider */}
            <div className="animate-infinite-scroll hover:pause">
              {duplicatedJudges.map((judge, index) => (
                <div
                  key={`${judge.name}-${index}`}
                  className="flex-shrink-0 px-3"
                >
                  <JudgeCard judge={judge} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f1923]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f1923]/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

function JudgeCard({ judge }: { judge: { name: string; designation: string; linkedin: string; image: string } }) {
  return (
    <div className="theme-card max-h-[450px] valorant-card-hover flex flex-col h-full w-[280px] sm:w-[320px] overflow-hidden transition-transform duration-500 hover:scale-105">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden group">
        <img
          src={judge.image || 'https://via.placeholder.com/400x400?text=No+Image'}
          alt={judge.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://via.placeholder.com/400x400?text=No+Image';
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/90 via-[#0f1923]/30 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold valorant-text-gradient mb-2 text-center line-clamp-2">
          {judge.name}
        </h3>
        <p className="text-sm text-[#ff4655] mb-4 text-center font-semibold line-clamp-2">
          {judge.designation}
        </p>

        {/* LinkedIn Button */}
        <div className="mt-auto flex justify-center">
          <a
            href={judge.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 bg-[#0077b5] hover:bg-[#005f91] text-white rounded-full transition-transform duration-300 transform hover:scale-110 shadow-lg"
            aria-label={`Connect with ${judge.name} on LinkedIn`}
          >
            <FaLinkedin className="h-5 w-5" />
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
            <a href="#problem-statement" className="block text-gray-300 hover:text-[#ff4655] transition-colors" onClick={onClose}>Problem Statement</a>
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
              <a href="#problem-statement" className="text-gray-300 hover:text-[#ff4655] transition-colors">Problem Statement</a>
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

      {/* Problem Statement Section */}
      <ProblemStatementSection />

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
      {/* Night Market Section */}
     {/* Prize Pool Section - Valorant Theme */}
<section className="py-20 px-4 bg-[#0f1923 valorant-section">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4655] via-[#fd9a00] to-[#ff4655] animate-text-shine">
        RADIANITE REWARDS
      </span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    { 
      tier: 1, 
      price: 15000, 
      color: "from-[#ff4655] to-white",
      glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
      crown: true,
      title: "VIPER'S PRIZE",
      features: ["Golden Radianite Trophy", "Direct Contract Offers", "Premium Skin Bundle", "Exclusive Title"],
      order: "md:order-2" // Middle on desktop
    },
    { 
      tier: 2, 
      price: 11000, 
      color: "from-[#ff4655] to-[#fd9a00]",
      glow: "hover:shadow-[0_0_25px_rgba(253,154,0,0.3)]",
      title: "PHOENIX AWARD",
      features: ["Silver Radianite Medal", "VIP Queue Access", "Exclusive Player Card"],
      order: "md:order-1" // Left on desktop
    },
    { 
      tier: 3, 
      price: 7500, 
      color: "from-[#ff4655] to-[#fd9a00]",
      glow: "hover:shadow-[0_0_20px_rgba(255,70,85,0.3)]",
      title: "SAGE'S BOUNTY",
      features: ["Bronze Radianite Medal", "Battlepass Boost", "Daily Bonus Radianite"],
      order: "md:order-3" // Right on desktop
    }
  ].map((item) => (
    <div 
      key={item.tier} 
      className={`relative group cursor-pointer bg-[#1a242d] p-8 rounded-lg border-2 border-[#ff4655]/30 transition-all duration-300 hover:border-[#ff4655] ${item.glow} ${item.order} ${
        item.tier === 1 
          ? "md:scale-110 md:-translate-y-6 z-10 bg-gradient-to-b from-[#1a242d] to-[#0f1923] shadow-lg shadow-[#ff4655]/20"
          : "md:scale-95 hover:scale-100"
      }`}
    >
      {/* Valorant-style crown for 1st prize */}
      {item.crown && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[#ff4655] animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2l4 6h6l-2 8H2L0 8h6l4-6zm0 6a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      {/* Valorant-style background pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMjUgNTBjMC0xMy44IDExLjItMjUgMjUtMjVzMjUgMTEuMiAyNSA1MC0xMS4yIDI1LTI1IDI1UzI1IDYzLjggMjUgNTB6IiBzdHJva2U9IiNmZjQ2NTUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] bg-center"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h3 className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
          {item.title}
        </h3>
        
        <div className={`text-4xl font-black mb-6 ${
          item.tier === 1 
            ? "text-white bg-clip-text text-transparent bg-gradient-to-b from-[#ff4655] to-[#fd9a00]"
            : "text-gray-300"
        }`}>
          ₹{item.price.toLocaleString()}
        </div>
        
        {/* Valorant-style feature list */}
        {/* <ul className="w-full space-y-3 mb-6">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-[#ff4655] rounded-full mr-3"></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul> */}
        
        {/* Valorant-style divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff4655] to-transparent my-4"></div>
        
        {/* Tier indicator */}
        <div className="text-xs uppercase tracking-widest text-[#ff4655] font-bold">
          RADIANITE TIER {item.tier}
        </div>
      </div>
    </div>
  ))}
</div>
    
    {/* Additional note in Valorant style */}
    <div className="mt-16 text-center">
      <p className="text-gray-400 inline-block px-4 py-2 border border-[#ff4655]/30 bg-[#1a242d]/50">
        <span className="text-[#ff4655] font-bold">+</span> Additional rewards from our sponsors including weapon skins, player cards, and radianite points
      </p>
    </div>
  </div>
</section>
       {/* Judges Section */}
       <JudgesSection /> 
      

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 valorant-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Sponsors</h2>
          
          
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
        
        <div className="flex justify-center items-center flex-wrap gap-8">
          {sponsorTier.sponsors.map((sponsor, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center justify-center p-4 rounded-sm hover:bg-[#2a3a4d] transition-colors w-48 h-48`} // Conditional background color
            >
              <div className={`w-32 h-32  ${
                sponsor.color ? sponsor.color : 'bg-white'
              } flex items-center justify-center mb-2`}> {/* Fixed logo container size */}
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-full object-contain p-2 rounded-tl-lg rounded-br-lg border-[#ff4655] border-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/150?text=Sponsor+Logo';
                  }}
                />
              </div>
              <p className="text-gray-300 text-sm text-center">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>
          
          {/* <div className="mt-16 text-center">
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
          </div> */}
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

function ProblemStatementSection() {
  return (
    <section id="problem-statement" className="py-20 px-4 valorant-section">
      <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Problem Statement</h2>
        <h3 className="text-2xl font-bold mb-6 valorant-text-gradient">Build for Bharat – AI Solutions that Serve Every Citizen</h3>
        
        <div className="theme-card valorant-card-hover p-8 mb-8">
          <h4 className="text-xl font-bold mb-4 text-[#ff4655]">Challenge Overview</h4>
          <p className="text-gray-300 mb-6">
            Address key societal challenges in India using the power of next-generation AI models. 
            Build solutions that are inclusive, impactful, and accessible — especially for underserved 
            communities, small businesses, rural populations, and non-English speakers.
          </p>
          <p className="text-gray-300">
            The goal is to use AI not just for innovation, but for real-world impact that bridges 
            India's digital, economic, and linguistic divides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Theme 1 */}
          <div className="theme-card valorant-card-hover p-6">
            <div className="flex items-center mb-4">
              <Sword className="w-6 h-6 text-[#ff4655] mr-3" />
              <h4 className="text-lg font-bold">Economic Development</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Tools for small businesses and artisans</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>AI-based job-matching for gig workers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Productivity solutions for micro-entrepreneurs</span>
              </li>
            </ul>
          </div>

          {/* Theme 2 */}
          <div className="theme-card valorant-card-hover p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-[#ff4655] mr-3" />
              <h4 className="text-lg font-bold">Science & Sustainability</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Climate resilience systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>AI-driven health checkers in local languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Voice-based crop advisory for farmers</span>
              </li>
            </ul>
          </div>

          {/* Theme 3 */}
          <div className="theme-card valorant-card-hover p-6">
            <div className="flex items-center mb-4">
              <Blocks className="w-6 h-6 text-[#ff4655] mr-3" />
              <h4 className="text-lg font-bold">Public Services</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Making government services more accessible</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>AI tools for local panchayats</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Multilingual tools for migrants</span>
              </li>
            </ul>
          </div>

          {/* Theme 4 */}
          <div className="theme-card valorant-card-hover p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-[#ff4655] mr-3" />
              <h4 className="text-lg font-bold">Education & Inclusion</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>AI-powered learning in regional languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Tools that work natively in Indian languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4655] mr-2">•</span>
                <span>Solutions for low-bandwidth environments</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 theme-card valorant-card-hover p-8">
          <h4 className="text-xl font-bold mb-4 text-[#ff4655]">Contextual Video Generation Challenge</h4>
          <p className="text-gray-300 mb-6">
            Design an AI system that generates contextually accurate videos from input text, 
            capturing tone, emotion, and background setting to produce relevant output.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold mb-2">Example Input:</h5>
              <p className="text-gray-400 italic">"A lonely boy walks through a stormy night looking for his dog."</p>
            </div>
            <div>
              <h5 className="font-bold mb-2">Expected Output:</h5>
              <p className="text-gray-400">Dark visuals, rain effects, sad background music, emotional expressions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;