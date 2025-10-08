import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Project Saya
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // tablet: 2 card per view
            1024: { slidesPerView: 3 }, // desktop: 3 card per view
          }}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ProjectCard
              image="/project-karyahub.JPG"
              title="Manajemen Karyawan"
              description="Aplikasi manajemen karyawan berbasis web dengan fitur autentikasi dan pengelolaan data karyawan, dibuat menggunakan <strong>Laravel Breeze dan Tailwind CSS.</strong>"
              link="https://abimanyus123.rf.gd/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              image="/project-dashboard.JPG"
              title="Dashboard Admin"
              description="Dashboard modern untuk mengelola data karyawan, dilengkapi fitur CRUD dan chart interaktif. Dibangun menggunakan <strong>React JS dan Tailwind CSS.</strong>"
              link="https://abimanyusatyadji.github.io/dashboard-admin"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              image="/project-electroshop.JPG"
              title="Electro Shop"
              description="E-commerce sederhana yang dibangun menggunakan <strong>React JS dan Tailwind CSS.</strong> Memiliki fitur tambah keranjang, checkout pesanan, dan riwayat pesanan."
              link="https://abimanyusatyadji.github.io/electroshop"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              image="/project-catalog-odnistore.JPG"
              title="Web Catalog"
              description="Web katalog produk sederhana, tersedia opsi pembelian langsung ke Shopee atau WhatsApp. Dibangun dengan <strong>HTML, CSS, dan JavaScript</strong> (Tanpa framework)."
              link="https://abimanyusatyadji.github.io/catalog-odnistore/"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
