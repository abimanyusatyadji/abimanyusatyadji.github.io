import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-gray-800"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Saya Abimanyu, Frontend Developer yang berfokus pada React dan
          Tailwind CSS. Saya suka membangun UI yang clean, interaktif, dan
          responsive.
        </motion.p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {["React", "Tailwind CSS", "JavaScript"].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow p-4 w-40"
            >
              <h3 className="font-semibold text-gray-800">{skill}</h3>
              <p className="text-gray-600 mt-2">
                {skill === "React" || skill === "Tailwind CSS"
                  ? "Expert"
                  : "Intermediate"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
