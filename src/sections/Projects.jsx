import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaLock, FaChartLine, FaTruck, FaWeight, FaRobot, FaIndustry, FaBoxes, FaWarehouse, FaUsers, FaClock, FaCheckCircle, FaArrowRight, FaStar, FaFileInvoiceDollar, FaGooglePlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";

import EMSImg from "../assets/projects/ems_app.png";
import TicketingImg from "../assets/projects/ticketing_app.png";
import VisitorImg from "../assets/projects/visitor.png";
import WMSImg from "../assets/projects/wms.png";

const projects = [
  {
    title: "WMS - GNOSIS",
    category: "Enterprise Mobility",
    image: WMSImg,
    desc: "Full-stack WMS Android app deployed across 3 warehouses handling 500+ daily scan operations. Covers inbound, putaway, picking, and shipment workflows with real-time inventory tracking.",
    tech: ["Flutter", "REST API", "Provider", "Barcode Scanner", "Bluetooth Printer", "SQLite", "WebSocket", "Docker"],
    isPrivate: true,
    isFeatured: true,
    featured: "⭐ Flagship Product",
    impact: "3 Warehouses · 500+ Daily Scans · 1000+ Labels/Day",
    stats: [
      { icon: FaChartLine, value: "70%", label: "Reduction in Manual Work", color: "from-emerald-400 to-cyan-400" },
      { icon: FaTruck, value: "20+", label: "Vehicles Dispatched Daily", color: "from-blue-400 to-cyan-400" },
      { icon: FaWeight, value: "10+", label: "Tons of Materials/Day", color: "from-purple-400 to-cyan-400" },
      { icon: FaRobot, value: "99.9%", label: "Scan Accuracy Rate", color: "from-orange-400 to-cyan-400" },
      { icon: FaBoxes, value: "1000+", label: "Labels Printed Daily", color: "from-cyan-400 to-blue-400" },
    ],
    highlights: [
      { icon: FaIndustry, text: "Reduced manual data entry by 70% through intelligent barcode automation" },
      { icon: FaTruck, text: "20+ vehicles dispatched daily with real-time GPS tracking & route optimization" },
      { icon: FaWeight, text: "Handling 10+ tons of material movement per day across warehouses" },
    ],
    timeline: "Q4 2025 - Q1 2026",
    status: "Live",
  },
  {
    title: "Visitor Management System",
    category: "Face Recognition",
    image: VisitorImg,
    desc: "Enterprise visitor entry system with QR code verification, face recognition for contactless check-in, approval workflows, and digital gate pass generation.",
    tech: ["Flutter", "Face Recognition", "REST API", "Camera", "QR Scanner", "Firebase", "ML Kit"],
    isPrivate: true,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.sll.admin.vms",
    impact: "Contactless Check-in · Real-time Approvals",
    stats: [
      { icon: FaClock, value: "60%", label: "Faster Check-in Process", color: "from-green-400 to-emerald-400" },
      { icon: FaUsers, value: "100+", label: "Daily Visitors Processed", color: "from-blue-400 to-indigo-400" },
    ],
    highlights: [
      { icon: FaCheckCircle, text: "Contactless face recognition with 98% accuracy rate" },
      { icon: FaClock, text: "Reduced check-in time from 3 minutes to under 30 seconds" },
    ],
    timeline: "Q1 2025 - Q4 2025",
    status: "Live",
  },
  {
    title: "Expense Management System",
    category: "Internal Tool · Finance",
    image: EMSImg,
    desc: "In-house expense tracking platform with intelligent OCR-powered bill reading using ML. Contributed to UI development, error reduction, and ML integration for automated expense capture from receipts and invoices.",
    tech: ["Java", "Kotlin", "ML Kit", "OCR", "REST API", "Firebase", "Cloud Functions", "SQLite"],
    isPrivate: true,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.ems.expense",
    impact: "In-house · OCR/ML Powered",
    stats: [
      { icon: FaCheckCircle, value: "95%", label: "Error Reduction Rate", color: "from-green-400 to-emerald-400" },
      { icon: FaChartLine, value: "40%", label: "Faster Processing", color: "from-blue-400 to-cyan-400" },
      { icon: FaFileInvoiceDollar, value: "200+", label: "Monthly Expenses", color: "from-purple-400 to-pink-400" },
      { icon: FaRobot, value: "85%", label: "OCR Accuracy Rate", color: "from-orange-400 to-yellow-400" },
    ],
    highlights: [
      { icon: FaRobot, text: "ML-powered OCR extracts bill details automatically with 85%+ accuracy" },
      { icon: FaCheckCircle, text: "Reduced data validation errors by 95% through smart form validation" },
      { icon: FaClock, text: "Redesigned intuitive UI reducing expense submission time by 40%" },
    ],
    timeline: "Q3 2024 - Q4 2025",
    status: "Live",
  },
  {
    title: "SLL Ticketing System",
    category: "Internal Platform",
    image: TicketingImg,
    desc: "Internal IT ticket management platform used by IT-Infra teams across Pan India. Features dashboards, issue tracking, priority management, and workflow automation.",
    tech: ["Flutter", "Provider", "Firebase", "REST API", "Cloud Functions"],
    isPrivate: true,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.seabird.ticketing",
    impact: "Used Pan India · IT-Infra Teams",
    stats: [
      { icon: FaChartLine, value: "40%", label: "Faster Resolution Time", color: "from-pink-400 to-red-400" },
      { icon: FaUsers, value: "100+", label: "Active IT Users", color: "from-purple-400 to-pink-400" },
    ],
    highlights: [
      { icon: FaCheckCircle, text: "Automated ticket routing reducing manual assignment by 80%" },
      { icon: FaClock, text: "Average resolution time decreased from 4hrs to 2.4hrs" },
    ],
    timeline: "Q1 2025 - Q4 2025",
    status: "Live",
  },
];

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    let start = 0;
    const increment = numericValue / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16.67);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{value.replace(/[0-9]/g, '')}</span>;
};

// Tech Stack Badge Component
const TechBadge = ({ tech, index }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: 'rgba(34, 211, 238, 0.15)',
      borderColor: 'rgba(34, 211, 238, 0.4)',
      y: -2
    }}
    className="bg-cyan-400/5 text-cyan-300 text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-cyan-400/10 cursor-default"
  >
    {tech}
  </motion.span>
);

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#111827] text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Animated Background with Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            x: [0, 150, 0], 
            y: [0, -150, 0], 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 150, 0], 
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-gradient-to-bl from-purple-500/20 to-cyan-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-16 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-6"
          >
            <FaStar className="text-cyan-400 text-[10px] sm:text-xs" />
            <span className="text-cyan-400 font-medium tracking-[0.25em] uppercase text-[10px] sm:text-xs md:text-sm">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-400 mt-2 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto md:mx-0"
          >
            Enterprise applications built for real industrial deployments. 
            <span className="text-cyan-400 font-semibold"> Source code is confidential per NDA.</span>
          </motion.p>
        </motion.div>

        {/* Custom Styles */}
        <style>{`
          .stat-card {
            position: relative;
            overflow: hidden;
          }
          
          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
            transition: left 0.5s;
          }
          
          .stat-card:hover::before {
            left: 100%;
          }
          
          .highlight-item {
            transition: all 0.3s ease;
          }
          
          .highlight-item:hover {
            background: rgba(34, 211, 238, 0.05);
            border-color: rgba(34, 211, 238, 0.2);
            transform: translateX(4px);
          }

          .swiper-slide {
            transition: all 0.5s ease;
          }
          
          .swiper-slide-active {
            z-index: 10;
          }
          
          /* Custom scrollbar for project details */
          .project-details::-webkit-scrollbar {
            width: 4px;
          }
          
          .project-details::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .project-details::-webkit-scrollbar-thumb {
            background: rgba(34, 211, 238, 0.3);
            border-radius: 10px;
          }
          
          .project-details::-webkit-scrollbar-thumb:hover {
            background: rgba(34, 211, 238, 0.5);
          }

          /* Custom Navigation Dots Animation */
          .custom-dot {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border: none;
            outline: none;
          }

          .custom-dot:hover {
            background-color: rgba(34, 211, 238, 0.5) !important;
          }

          .custom-dot.active {
            background: linear-gradient(135deg, #22d3ee, #3b82f6) !important;
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.4);
          }

          /* Image auto-fit styles */
          .project-image {
            object-fit: contain !important;
            background-color: #0a0f18;
            width: 100%;
            height: 100%;
            max-height: 100%;
          }
        `}</style>

        {/* Project Carousel */}
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          coverflowEffect={{ 
            rotate: isMobile ? 0 : 10, 
            stretch: isMobile ? 0 : -30, 
            depth: isMobile ? 100 : 400, 
            modifier: isMobile ? 0.5 : 1, 
            slideShadows: !isMobile 
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Autoplay]}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full !pb-10 sm:!pb-12 md:!pb-16"
          breakpoints={{
            320: { 
              slidesPerView: 1, 
              spaceBetween: 10,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
              }
            },
            640: { 
              slidesPerView: 1.1, 
              spaceBetween: 15,
              coverflowEffect: {
                rotate: 5,
                stretch: -10,
                depth: 200,
                modifier: 1,
                slideShadows: false
              }
            },
            768: { 
              slidesPerView: "auto", 
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 10,
                stretch: -30,
                depth: 400,
                modifier: 1,
                slideShadows: true
              }
            },
            1024: { 
              slidesPerView: "auto", 
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 10,
                stretch: -30,
                depth: 400,
                modifier: 1,
                slideShadows: true
              }
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide 
              key={index} 
              className="!flex !justify-center !items-center py-2 sm:py-4"
              style={{ 
                width: 'auto', 
                maxWidth: '95vw',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group bg-gradient-to-br from-[#1a2332]/95 via-[#111827]/98 to-[#0B1120]/95 backdrop-blur-xl border border-gray-800/80 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden hover:border-cyan-400/60 transition-all duration-700 shadow-2xl hover:shadow-[0_0_60px_rgba(34,211,238,0.15)] w-full"
              >
                {/* Landscape Layout Container */}
                <div className="flex flex-col md:flex-row h-full">
                  
                  {/* LEFT SIDE - Image/Mockup */}
                  <div className="relative w-full md:w-[45%] lg:w-[42%] bg-[#0a0f18] overflow-hidden min-h-[200px] sm:min-h-[250px] md:min-h-[450px] lg:min-h-[500px]">
                    {/* Featured Badge */}
                    {project.isFeatured && (
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20 bg-gradient-to-r from-yellow-500 to-amber-500 text-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1"
                      >
                        <FaStar className="text-black text-[10px] sm:text-xs" /> Featured
                      </motion.div>
                    )}

                    {/* Status Indicator */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-1.5">
                      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
                      <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-300">{project.status}</span>
                    </div>

                    {/* Image Container - Auto Fit */}
                    <div className="relative h-full w-full p-4 sm:p-6 md:p-8 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden border border-gray-800/50 shadow-2xl flex items-center justify-center bg-[#0a0f18]"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-700"
                        />
                        
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity duration-700" />
                        
                        {/* Floating Impact Badge */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-md border border-cyan-400/30 rounded-lg px-3 py-2"
                        >
                          <p className="text-cyan-300 text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-center">
                            {project.impact}
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* RIGHT SIDE - Details */}
                  <div className="project-details w-full md:w-[55%] lg:w-[58%] p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col overflow-y-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px]">
                    {/* Category & Timeline */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold w-fit">
                        {project.category}
                      </div>
                      <span className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs">{project.timeline}</span>
                    </div>

                    {/* Title */}
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-all duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 md:line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Stats Grid - 2x2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4"
                    >
                      {project.stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.03, y: -2 }}
                          transition={{ duration: 0.2 }}
                          className={`stat-card bg-gradient-to-br ${stat.color.replace('400', '500')}/10 border border-${stat.color.split('-')[1]}-500/20 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 backdrop-blur-sm cursor-default`}
                        >
                          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-0.5 sm:mb-1">
                            <stat.icon className="text-cyan-400 text-xs sm:text-sm md:text-base flex-shrink-0" />
                            <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                              <AnimatedCounter value={stat.value} />
                            </span>
                          </div>
                          <p className="text-gray-400 text-[8px] sm:text-[9px] md:text-[10px] leading-tight">
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Highlights List */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-3 sm:mb-4"
                    >
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                          className="highlight-item flex items-start gap-1.5 sm:gap-2 p-1 sm:p-1.5 md:p-2 rounded-lg border border-transparent"
                        >
                          <div className="mt-0.5 p-1 md:p-1.5 bg-cyan-400/10 rounded-lg flex-shrink-0">
                            <highlight.icon className="text-cyan-400 text-[8px] sm:text-[10px] md:text-xs" />
                          </div>
                          <span className="text-gray-300 text-[10px] sm:text-[11px] md:text-xs leading-relaxed">{highlight.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-6">
                      {project.tech.slice(0, isMobile ? 4 : 6).map((item, idx) => (
                        <TechBadge key={idx} tech={item} index={idx} />
                      ))}
                      {project.tech.length > (isMobile ? 4 : 6) && (
                        <span className="bg-gray-800 text-gray-400 text-[9px] sm:text-[10px] md:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-gray-700">
                          +{project.tech.length - (isMobile ? 4 : 6)}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-1.5 sm:gap-2 md:gap-3 mt-auto">
                      {project.playStoreLink ? (
                        <motion.a
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold flex justify-center items-center gap-1 sm:gap-1.5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-[11px] sm:text-xs md:text-sm"
                        >
                          <FaGooglePlay size={12} className="sm:text-sm" />
                          <span className="hidden xs:inline">Play Store</span>
                          <span className="xs:hidden">Install</span>
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-400 text-center py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold flex justify-center items-center gap-1 sm:gap-1.5 border border-gray-600 cursor-not-allowed select-none relative overflow-hidden group/btn text-[11px] sm:text-xs md:text-sm"
                        >
                          <FaLock size={10} className="sm:text-xs" />
                          <span className="hidden xs:inline">Live Demo</span>
                          <span className="xs:hidden">Demo</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                        </motion.div>
                      )}
                      
                      <motion.div
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-transparent border border-gray-700 text-gray-400 text-center py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold flex justify-center items-center gap-1 sm:gap-1.5 cursor-not-allowed select-none relative overflow-hidden group/btn text-[11px] sm:text-xs md:text-sm"
                      >
                        <FaGithub size={12} className="sm:text-sm" />
                        <span className="hidden xs:inline">Source Code</span>
                        <span className="xs:hidden">Source</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                      </motion.div>
                    </div>

                    {/* NDA Notice */}
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600 text-center mt-1.5 sm:mt-2 flex items-center justify-center gap-1">
                      <FaLock size={6} className="sm:text-[8px]" /> Protected under NDA
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 -z-10" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Dots - Only One Set */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10">
          {projects.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideTo(idx);
                }
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: activeSlide === idx ? 28 : 8,
                height: activeSlide === idx ? 8 : 8,
                backgroundColor: activeSlide === idx ? '#22d3ee' : '#4b5563',
              }}
              className={`custom-dot rounded-full transition-all duration-500 ${
                activeSlide === idx ? 'active' : ''
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}