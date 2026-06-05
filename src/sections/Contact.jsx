import { motion } from "framer-motion";
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

// ─────────────────────────────────────────────────────────────────────────────
// SETUP INSTRUCTIONS (one-time, ~5 minutes):
//
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail works) → copy the Service ID
// 3. Create an Email Template with variables:
//      {{from_name}}  {{from_email}}  {{message}}
//    → copy the Template ID
// 4. Go to Account → API Keys → copy your Public Key
// 5. Replace the three placeholder strings below with your real values
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKLmno"

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contacts"
      className="relative bg-[#111827] text-white py-24 px-6 md:px-20 overflow-hidden"
    >
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Looking for an enterprise Android or Flutter developer? I'm open to new opportunities
            in logistics, warehouse automation, and enterprise mobility.
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
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">
                      vinaytiwari7011@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-cyan-400/10 text-cyan-400 rounded-full flex items-center justify-center text-2xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg font-medium">Gurugram, India · Open to Relocation</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-800">
                <h4 className="text-lg font-semibold text-gray-300 mb-6">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/VinayTiwari023/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vinay-kumar-android/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1iGW8NnjIOMn6yezGkMHvKwgBVuONWqDa/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#111827] border border-gray-700 rounded-full flex items-center justify-center text-xl hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
                  >
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
            <div ref={formRef} className="bg-[#1F2937] p-8 lg:p-10 rounded-3xl border border-gray-800 shadow-xl space-y-6">
              <h3 className="text-3xl font-bold mb-8">Send me a message</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <FaCheckCircle className="text-cyan-400 text-6xl" />
                  <h4 className="text-2xl font-bold">Message Sent!</h4>
                  <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 border border-cyan-400 text-cyan-400 px-6 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role or project..."
                      className="w-full bg-[#111827] border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please email me directly at vinaytiwari7011@gmail.com
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending" || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-cyan-400 text-black font-bold text-lg px-6 py-4 rounded-xl flex items-center justify-center gap-3 mt-4 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <FaPaperPlane />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
