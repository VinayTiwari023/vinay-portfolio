import { motion } from "framer-motion";

import {
  FaCertificate,
} from "react-icons/fa";

export default function Certifications() {

  const certifications = [

  {
    title: "Android Studio Essential Training 2020",
    issuer: "LinkedIn Learning",
    year: "2024",
    link: "https://www.linkedin.com/learning/certificates/5a09a1e10e604c766c4aa9a90050d6f895532a7a2762dbcf3bce197c64b29cc1",
  },

  {
    title: "Android Development",
    issuer: "Pratinik Infotech",
    year: "2024",
    link: "https://drive.google.com/file/d/16-IljKdW-Xj4oCkR6HPeSorPOi6jLpRU/view?usp=drivesdk",
  },

  {
    title: "C++ Programming Essentials Bootcamp",
    issuer: "LetsUpgrade",
    year: "2023",
    link: "https://verify.letsupgrade.in/certificate/LUECPPJAN123388",
  },

  {
  title: "Developer Program",
  issuer: "Accenture Forage",
  year: "2022",
  link: "https://drive.google.com/file/d/1uE-kqIK6nMTIgnAxqhdfctoT2iOjATAg/view",
},

{
  title: "Solutions Architect Virtual Experience Program",
  issuer: "AWS Forage",
  year: "2021",
  link: "https://drive.google.com/file/d/1fBHhnnKDR8xot2bZbp_qQOegR9QEvXnu/view",
},

  {
    title: "Java: Data Structures",
    issuer: "LinkedIn Learning",
    year: "2022",
    link: "https://www.linkedin.com/learning/certificates/59a2a9e738607aa86e94208704b73ca969e0255dc0d231bd05f0cb3d08765f8b",
  },

  {
    title: "Advanced Java Programming",
    issuer: "LinkedIn Learning",
    year: "2022",
    link: "https://www.linkedin.com/learning/certificates/4aa640ec2915e7e567172e2bfa944705282c9b7ea1e1956166fc120711ddb5f9",
  },

  {
    title: "Object-Oriented Programming with Java",
    issuer: "LinkedIn Learning",
    year: "2022",
    link: "https://www.linkedin.com/learning/certificates/958492196c8182f951be138d0d84d5ee4604ab5b0be03946e395b31b0ece662d",
  },

];

const getIssuerColor = (issuer) => {

    if (issuer.includes("AWS"))
      return "text-orange-400";

    if (issuer.includes("Accenture"))
      return "text-violet-400";

    if (issuer.includes("LinkedIn"))
      return "text-blue-400";

    if (issuer.includes("LetsUpgrade"))
      return "text-orange-400";

    return "text-cyan-400";
  };

  return (

    <section
      id="certifications"
      className="relative bg-[#111827] text-white py-24 px-6 md:px-20 overflow-hidden"
    >

      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 60, 0], scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0B0F19]/80 backdrop-blur-md border border-gray-800/80 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-start gap-5">

                <div className="bg-cyan-400/10 p-4 rounded-2xl text-cyan-400 text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <FaCertificate />
                </div>

                <div>

                  <h3 className="text-2xl font-bold mb-2">
                    {cert.title}
                  </h3>

                  <p className={`${getIssuerColor(cert.issuer)} mt-1`}>
  {cert.issuer}
</p>

                  <p className="text-cyan-400 mt-3">
                    {cert.year}
                  </p>
                  <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-5 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition"
>
  View Certificate
</a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}