import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Personal Portofolio",
    description: "Website multi-halaman untuk memperkenalkan profil, keterampilan, proyek, dan kontak.",
    category: "html-css",
    categoryLabel: "HTML/CSS",
    tags: ["HTML", "CSS"],
    visualClass: "project-visual-one"
  },
  {
    id: 2,
    number: "02",
    title: "ToDo List App",
    description: "Aplikasi atau web yang digunakan untuk menambah, menyelesaikan, memfilter tugas.",
    category: "javascript",
    categoryLabel: "JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    visualClass: "project-visual-two"
  },
  {
    id: 3,
    number: "03",
    title: "Movie JS",
    description: "Latihan membuat website untuk melihat deskripsi sebuah Film.",
    category: "javascript",
    categoryLabel: "JavaScript",
    tags: ["HTML", "JavaScript"],
    visualClass: "project-visual-three"
  }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter((project) => {
    return selectedCategory === "all" || project.category === selectedCategory;
  });

  function handleFilterChange(category) {
    setSelectedCategory(category);
  }

  let filterMessage = "Menampilkan semua proyek.";
  if (selectedCategory === "html-css") {
    filterMessage = "Menampilkan proyek kategori HTML/CSS.";
  } else if (selectedCategory === "javascript") {
    filterMessage = "Menampilkan proyek kategori JavaScript.";
  }

  return (
    <main className="container page-content">
      <section className="page-heading">
        <p className="eyebrow">HASIL LATIHAN SAYA</p>
        <h1>Proyek Pilihan</h1>
        <p className="page-intro">Beberapa contoh proyek latihan.</p>
      </section>

      <section aria-label="Filter kategori proyek">
        <div className="filter-bar btn-group flex-wrap" role="group" aria-label="Pilih kategori proyek">
          <button
            className={`btn btn-outline-primary filter-button ${selectedCategory === "all" ? "active" : ""}`}
            type="button"
            aria-pressed={selectedCategory === "all"}
            onClick={() => handleFilterChange("all")}
          >
            Semua
          </button>
          <button
            className={`btn btn-outline-primary filter-button ${selectedCategory === "html-css" ? "active" : ""}`}
            type="button"
            aria-pressed={selectedCategory === "html-css"}
            onClick={() => handleFilterChange("html-css")}
          >
            HTML/CSS
          </button>
          <button
            className={`btn btn-outline-primary filter-button ${selectedCategory === "javascript" ? "active" : ""}`}
            type="button"
            aria-pressed={selectedCategory === "javascript"}
            onClick={() => handleFilterChange("javascript")}
          >
            JavaScript
          </button>
        </div>
        <p className="small-text" aria-live="polite">{filterMessage}</p>
      </section>

      <section className="project-grid row g-4" aria-label="Daftar Proyek">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
