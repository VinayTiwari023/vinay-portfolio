import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "Android Studio Essential Training",
      issuer: "LinkedIn Learning",
      year: "2024",
      link: "https://www.linkedin.com/learning/certificates/5a09a1e10e604c766c4aa9a90050d6f895532a7a2762dbcf3bce197c64b29cc1"
    },
    {
      title: "Android Development",
      issuer: "Pratinik Infotech",
      year: "2024",
      link: "https://drive.google.com/file/d/16-IljKdW-Xj4oCkR6HPeSorPOi6jLpRU/view?usp=drivesdk"
    },
    {
      title: "Advanced Java Programming",
      issuer: "LinkedIn Learning",
      year: "2022",
      link: "https://www.linkedin.com/learning/certificates/4aa640ec2915e7e567172e2bfa944705282c9b7ea1e1956166fc120711ddb5f9"
    },
    {
      title: "Java: Data Structures",
      issuer: "LinkedIn Learning",
      year: "2022",
      link: "https://www.linkedin.com/learning/certificates/59a2a9e738607aa86e94208704b73ca969e0255dc0d231bd05f0cb3d08765f8b"
    },
    {
      title: "Solutions Architect Virtual Experience",
      issuer: "AWS Forage",
      year: "2021",
      link: "https://drive.google.com/file/d/1fBHhnnKDR8xot2bZbp_qQOegR9QEvXnu/view"
    },
    {
      title: "Developer Program",
      issuer: "Accenture Forage",
      year: "2022",
      link: "https://drive.google.com/file/d/1uE-kqIK6nMTIgnAxqhdfctoT2iOjATAg/view"
    }
  ];

  return (
    <section
      id="certifications"
      className="relative bg-slate-100/70 dark:bg-[#090e1a] text-slate-900 dark:text-white py-16 md:py-20 px-6 md:px-20 border-t border-slate-200 dark:border-gray-800/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-cyan-700 dark:text-cyan-400 uppercase tracking-[0.25em] text-xs font-mono font-semibold mb-2">
              Continuous Learning
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              Certifications & Credentials
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-500 dark:text-gray-400">
            Supporting Credibility • Production Work &gt; Certifications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-5 rounded-xl bg-white dark:bg-[#0f1626] border border-slate-200 dark:border-gray-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-700 dark:text-cyan-400 text-lg">
                    <FaCertificate />
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-gray-500">{cert.year}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-mono mb-4">{cert.issuer}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-200 transition-colors pt-2 border-t border-slate-100 dark:border-gray-800/60 font-semibold"
              >
                <span>Verify Credential</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}