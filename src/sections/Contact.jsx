import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacts" className="relative bg-[#111827] text-white py-24 px-6 md:px-20 overflow-hidden">
      
      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I build scalable Android and Flutter applications focused on enterprise mobility,
            warehouse systems, HHT integrations, and real-time operational workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[#1F2937] p-8 lg:p-10 rounded-3xl border border-gray-800 hover:border-cyan-400/50 transition-colors shadow-xl">
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <a href="mailto:vinaytiwari7011@gmail.com" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center text-2xl group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Me</p>
                    <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">vinaytiwari7011@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center text-2xl group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-800">
                <h4 className="text-lg font-semibold text-gray-300 mb-6">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/VinayTiwari023/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/vinay-kumar-android/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <FaLinkedin />
                  </a>
                  <a href="https://drive.google.com/file/d/1iGW8NnjIOMn6yezGkMHvKwgBVuONWqDa/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                    <FaDownload />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-[#1F2937] p-8 lg:p-10 rounded-3xl border border-gray-800 shadow-xl space-y-6">
              <h3 className="text-3xl font-bold mb-8">Send me a message</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message</label>
                <textarea rows="5" placeholder="How can I help you?" className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"></textarea>
              </div>

              <button type="button" onClick={() => alert("Form integration pending. Please email directly!")} className="w-full bg-cyan-400 text-black font-bold text-lg px-6 py-4 rounded-xl flex items-center justify-center gap-3 mt-4 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}