import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Project Saya
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Project 1"
            description="Deskripsi singkat project pertama."
            link="https://github.com/"
          />
          <ProjectCard
            title="Project 2"
            description="Deskripsi singkat project kedua."
            link="https://github.com/"
          />
          <ProjectCard
            title="Project 3"
            description="Deskripsi singkat project ketiga."
            link="https://github.com/"
          />
        </div>
      </div>
    </section>
  );
}
