import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">SELAMAT DATANG</p>
          <h1>
            Halo saya <span className="accent-text">Alvin</span>
            <br />
            Saya sedang belajar web development
          </h1>
          <p className="hero-description">
            Saya mahasiswa Teknik Informasi yang sedang mempelajari cara membangun website menggunakan HTML, CSS, dan Javascript
          </p>

          <div className="button-group d-flex flex-wrap gap-3">
            <Link className="btn btn-primary button-primary" to="/projects">
              Lihat Proyek
            </Link>
            <Link className="btn btn-outline-primary button-secondary" to="/contact">
              Hubungi Saya
            </Link>
          </div>

          <div className="skill-summary d-flex flex-wrap gap-2">
            <span className="skill-chip">HTML</span>
            <span className="skill-chip">CSS</span>
            <span className="skill-chip">JavaScript</span>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="row align-items-center g-4 split-section">
            <div className="col-lg-6">
              <p className="eyebrow">SEDIKIT TENTANG SAYA</p>
              <h2>Membangun kemampuan, satu proyek dalam satu waktu</h2>
            </div>
            <div className="col-lg-6">
              <p className="muted-text">
                Saya percaya cara terbaik untuk belajar pemrograman adalah dengan membuat sesuatu, mencoba sendiri, lalu memperbaiki kesalahan yang ditemukan.
              </p>
              <Link className="text-link" to="/about">
                Kenali saya lebih lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
