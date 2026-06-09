import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaReply,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setToast({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => setToast(null), 5000);
        },
        (error) => {
          console.error(error);
          setToast({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
          setIsSubmitting(false);
          setTimeout(() => setToast(null), 5000);
        }
      );
  };

  return (
    <section id="contacts" className="relative bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#0F172A] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className={`fixed top-6 left-1/2 z-50 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-3 min-w-[320px] max-w-[90vw] sm:max-w-lg ${
              toast.type === 'success' 
                ? 'bg-green-500/20 border-green-400/40 text-green-300' 
                : 'bg-red-500/20 border-red-400/40 text-red-300'
            }`}
          >
            {toast.type === 'success' ? (
              <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
            ) : (
              <FaCheckCircle className="text-red-400 text-xl flex-shrink-0" />
            )}
            <span className="text-sm sm:text-base font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[10%] right-[20%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
          >
            <FaEnvelope className="text-cyan-400 text-[10px] sm:text-xs" />
            <span className="text-cyan-400 font-medium tracking-[0.25em] uppercase text-[10px] sm:text-xs md:text-sm">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent mb-3 sm:mb-4"
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            I'm open to <span className="text-cyan-400 font-semibold">Android</span>, <span className="text-cyan-400 font-semibold">Flutter</span>, and <span className="text-cyan-400 font-semibold">Mobile Software Engineering</span> opportunities.
            Let's build reliable, scalable, and impactful mobile applications together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-gradient-to-br from-[#1F2937]/90 via-[#1F2937]/95 to-[#111827]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-800/60 hover:border-cyan-400/40 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] group">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
                Contact Information
              </h3>
              
              <div className="space-y-6 sm:space-y-8">
                {/* Email */}
                <motion.a 
                  href="mailto:vinaytiwari7011@gmail.com" 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 sm:gap-5 group/item"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center text-lg sm:text-2xl group-hover/item:bg-cyan-400 group-hover/item:text-black transition-all duration-300 flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Email Me</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium group-hover/item:text-cyan-400 transition-colors truncate">vinaytiwari7011@gmail.com</p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 sm:gap-5 group/item"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center text-lg sm:text-2xl group-hover/item:bg-cyan-400 group-hover/item:text-black transition-all duration-300 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Location</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium group-hover/item:text-cyan-400 transition-colors">Gurgaon, Haryana, India</p>
                  </div>
                </motion.div>

                {/* Response Time */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 sm:gap-5 group/item"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center text-lg sm:text-2xl group-hover/item:bg-cyan-400 group-hover/item:text-black transition-all duration-300 flex-shrink-0">
                    <FaClock />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">Response Time</p>
                    <p className="text-sm sm:text-base md:text-lg font-medium group-hover/item:text-cyan-400 transition-colors">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800/80">
                <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-4 sm:mb-6 flex items-center gap-2">
                  <FaReply className="text-cyan-400 text-sm" />
                  Connect with me
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  {/* GitHub */}
                  <motion.a 
                    href="https://github.com/VinayTiwari023/" 
                    target="_blank"
                    title="View on GitHub" 
                    rel="noopener noreferrer" 
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-lg sm:text-xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <FaGithub />
                  </motion.a>
                  
                  {/* LinkedIn */}
                  <motion.a 
                    href="https://www.linkedin.com/in/vinay-kumar-android/" 
                    target="_blank" 
                    title="Connect on LinkedIn" 
                    rel="noopener noreferrer" 
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-lg sm:text-xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <FaLinkedin />
                  </motion.a>
                  
                  {/* Resume */}
                  <motion.a 
                    href="https://drive.google.com/file/d/1iGW8NnjIOMn6yezGkMHvKwgBVuONWqDa/view?usp=drive_link" 
                    target="_blank"
                    title="Download Resume" 
                    rel="noopener noreferrer" 
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-lg sm:text-xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <FaDownload />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-gradient-to-br from-[#1F2937]/90 via-[#1F2937]/95 to-[#111827]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-800/60 hover:border-cyan-400/40 transition-all duration-500 shadow-xl space-y-5 sm:space-y-6 group"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
                Send me a message
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm text-gray-400 font-medium flex items-center gap-1">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name" 
                    className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm text-gray-400 font-medium flex items-center gap-1">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com" 
                    className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-medium flex items-center gap-1">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea  
                  name="message" 
                  rows="5" 
                  required
                  placeholder="Tell me about your project or opportunity..." 
                  className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300 resize-none hover:border-gray-600"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full font-bold text-base sm:text-lg px-6 py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-black hover:from-cyan-300 hover:to-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-lg" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}