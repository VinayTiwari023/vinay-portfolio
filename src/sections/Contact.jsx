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
  FaExclamationCircle
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setToast({
        type: "error",
        message: "Email configuration is not set. Please reach out directly via vinaytiwari7011@gmail.com."
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setToast({
            type: "success",
            message: "Message dispatched successfully! I will respond promptly."
          });
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => setToast(null), 6000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setToast({
            type: "error",
            message: "Failed to send message via form. Please email directly at vinaytiwari7011@gmail.com."
          });
          setIsSubmitting(false);
          setTimeout(() => setToast(null), 6000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#090d17] via-[#0d1424] to-[#070b14] text-white py-20 md:py-28 px-6 md:px-20 overflow-hidden border-t border-gray-800/80"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -40, x: "-50%" }}
            className={`fixed top-8 left-1/2 z-50 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl border flex items-center gap-3 min-w-[300px] max-w-[90vw] sm:max-w-lg ${
              toast.type === "success"
                ? "bg-emerald-950/90 border-emerald-400/50 text-emerald-200"
                : "bg-red-950/90 border-red-400/50 text-red-200"
            }`}
          >
            {toast.type === "success" ? (
              <FaCheckCircle className="text-emerald-400 text-lg flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="text-red-400 text-lg flex-shrink-0" />
            )}
            <span className="text-xs sm:text-sm font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <FaEnvelope className="text-cyan-400 text-xs" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Let's build something that works in the real world.
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
            Open for <strong className="text-white">Enterprise Mobile Projects</strong>,{" "}
            <strong className="text-white">Flutter & Android Engineering</strong>,{" "}
            <strong className="text-white">Industrial Hardware Applications</strong>, and{" "}
            <strong className="text-white">Applied AI/ML Integrations</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0f1626] border border-gray-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Direct Contact</span>
              </h3>

              {/* Email */}
              <a
                href="mailto:vinaytiwari7011@gmail.com"
                className="flex items-start gap-4 group p-3 rounded-xl hover:bg-gray-800/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                    vinaytiwari7011@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium text-white">Gurgaon, Haryana, India</p>
                </div>
              </div>

              {/* Social / Professional Links */}
              <div className="pt-4 border-t border-gray-800/80">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                  Professional Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/VinayTiwari023/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="w-10 h-10 rounded-xl bg-[#131b2d] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all text-base"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vinay-kumar-android/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-[#131b2d] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all text-base"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="/Vinay_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Download Resume"
                    className="w-10 h-10 rounded-xl bg-[#131b2d] border border-gray-700 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all text-base"
                  >
                    <FaDownload />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Working Form */}
          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-7 sm:p-9 rounded-2xl bg-[#0f1626] border border-gray-800 space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>Send a Message</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="user-name" className="text-xs font-mono text-gray-400">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#090e1a] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-email" className="text-xs font-mono text-gray-400">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#090e1a] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="user-message" className="text-xs font-mono text-gray-400">
                  Project or Opportunity Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="user-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Outline your enterprise mobile requirements, Flutter/Android opportunity, or hardware integration..."
                  className="w-full bg-[#090e1a] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  isSubmitting
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-sm" />
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}