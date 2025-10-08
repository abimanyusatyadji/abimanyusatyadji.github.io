import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "React JS", icon: <FaReact className="text-sky-400 text-3xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600 text-3xl" />,
    },
    { name: "Laravel", icon: <FaLaravel className="text-red-500 text-3xl" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-gray-800"
        >
          About Me
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Saya <strong>Abimanyu Satyadji</strong>, lulusan{" "}
          <strong>Telkom University — S1 Teknologi Informasi</strong> yang
          berfokus sebagai <strong>Frontend Developer</strong>. Saya menguasai{" "}
          <strong>
            HTML, CSS, JavaScript, React JS, Bootstrap, dan Tailwind
          </strong>
          , serta memiliki dasar dalam <strong>Laravel</strong> untuk kebutuhan
          full-stack ringan. Saya menyukai tampilan yang <em>clean</em>,
          interaktif, dan responsif.
        </motion.p>

        {/* Skill Cards */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow p-5 w-36 flex flex-col items-center justify-center cursor-default hover:shadow-lg transition-shadow"
            >
              {skill.icon}
              <h3 className="font-semibold text-gray-800 mt-3">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
