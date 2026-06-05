  import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import dashboardImg from "../assets/projects/wms-dashboard.png";

export default function Projects() {

 const projects = [
  {
    title: "Warehouse Management System",
    category: "Enterprise Mobility",
    image: dashboardImg,
    desc: "Warehouse automation platform with barcode scanning, inventory management, putaway, picking and shipment workflows.",
    tech: [
      "Flutter",
      "REST API",
      "Provider",
      "Barcode Scanner",
      "Bluetooth Printer",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "Visitor Management System",
    category: "Face Recognition",
    image: dashboardImg,
    desc: "Visitor entry system with QR code verification, face recognition, approvals and gate pass generation.",
    tech: [
      "Flutter",
      "Face Recognition",
      "REST API",
      "Camera",
      "QR Scanner",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "HHT Sticker Printing App",
    category: "Android",
    image: dashboardImg,
    desc: "Enterprise application for Zebra and CipherLab devices supporting barcode scanning and Bluetooth sticker printing.",
    tech: [
      "Java",
      "EMDK",
      "DataWedge",
      "Bluetooth",
      "ESC/POS",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "Seabird Ticketing System",
    category: "Flutter",
    image: dashboardImg,
    desc: "Internal ticket management platform with dashboards, issue tracking and workflow management.",
    tech: [
      "Flutter",
      "Provider",
      "Firebase",
      "REST API",
    ],
    live: "#",
    github: "#",
  },
];

  return (

    <section id="projects" className="relative bg-linear-to-b from-[#0B1120] to-[#111827] text-white py-28 px-6 md:px-16 overflow-hidden">

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >

          <p className="text-cyan-400 font-medium tracking-[0.25em] uppercase mb-4">
            Portfolio
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              tracking-tight
              leading-tight
            "
          >
            Featured Projects
          </h2>

        </motion.div>

        {/* Swiper Custom Styles */}
        <style>
          {`
            .swiper-pagination-bullet { background: #4b5563; opacity: 1; }
            .swiper-pagination-bullet-active { background: #22d3ee; width: 24px; border-radius: 8px; transition: all 0.3s; }
          `}
        </style>

        {/* Projects Carousel */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full !pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] h-auto">
              <div className="relative group bg-[#111827]/80 backdrop-blur-md border border-gray-800/80 rounded-[2rem] overflow-hidden hover:border-cyan-400/60 transition-all duration-500 shadow-xl hover:shadow-cyan-500/20 flex flex-col h-full">
                
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden bg-[#0a0f18]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/20 to-transparent" />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-md border border-cyan-400/20 text-cyan-300 text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-semibold shadow-lg">
                    {project.category}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 4).map((item, idx) => (
                      <span key={idx} className="bg-cyan-400/5 text-cyan-300 text-xs px-3 py-1.5 rounded-lg border border-cyan-400/10">
                        {item}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-lg border border-gray-700">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-auto">
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 bg-cyan-400 text-black text-center py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-1">
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 bg-transparent border border-gray-600 text-white text-center py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/5">
                      <FaGithub size={16} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>

  );

}