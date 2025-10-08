import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qk7pjmg", // Service ID
        "template_e82i4id", // Template ID
        form.current,
        "3wLDpuyTrtTDc1uu5" // Public Key
      )
      .then(
        () => {
          toast.success("Pesan berhasil dikirim!");
          setLoading(false);
          form.current.reset();
        },
        () => {
          toast.error("Gagal mengirim pesan ❌");
          setLoading(false);
        }
      );
  };

  // fungsi buat buka WhatsApp
  const sendWhatsApp = () => {
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    const text = `Halo, saya ${name} (${email}).\n\n${message}`;
    const phoneNumber = "6282314367770"; // ganti dengan nomor WA kamu (pakai kode negara tanpa +)

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <Toaster position="top-right" reverseOrder={false} />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-gray-800"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-10"
        >
          Hubungi saya via email atau langsung ke WhatsApp
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nama"
            className="p-3 rounded-lg border"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 rounded-lg border"
            required
          />
          <textarea
            name="message"
            placeholder="Pesan"
            className="p-3 rounded-lg border"
            rows="5"
            required
          ></textarea>

          {/* dua tombol dengan ikon */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 flex-1 px-6 py-3 rounded-lg text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#B94B64] hover:bg-[#ca3155] cursor-pointer"
              }`}
            >
              <FaEnvelope size={18} />
              {loading ? "Mengirim..." : "Kirim via Email"}
            </button>

            <button
              type="button"
              onClick={sendWhatsApp}
              className="flex items-center justify-center gap-2 flex-1 px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700 transition cursor-pointer"
            >
              <FaWhatsapp size={20} />
              Kirim via WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
