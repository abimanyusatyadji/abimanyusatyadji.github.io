import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  // Generate thumbnail pakai Thum.io (gratis & tanpa API key)
  const thumbnail = `https://image.thum.io/get/${link}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow overflow-hidden cursor-pointer"
    >
      {/* Thumbnail otomatis */}
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#B94B64] hover:underline"
        >
          Lihat Project →
        </a>
      </div>
    </motion.div>
  );
}
