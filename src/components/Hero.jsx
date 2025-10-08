import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // ganti dengan path foto kamu

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-100"
    >
      {/* Foto Profil */}
      <motion.img
        src={profilePic}
        alt="Foto Profil Abimanyu"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover object-[50%_25%] border-2 border-[#B94B64]"
      />

      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800"
      >
        Halo, Saya Abimanyu.
      </motion.h1>

      {/* Subjudul */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-xl text-gray-600"
      >
        Frontend Web Developer
      </motion.p>

      {/* Tombol */}
      {/* <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-6 px-6 py-3 bg-[#B94B64] text-white rounded-lg shadow hover:bg-[#ca3155]"
      >
        Lihat Project
      </motion.a> */}
    </section>
  );
}
