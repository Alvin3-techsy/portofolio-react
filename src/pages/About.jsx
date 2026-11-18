function About() {
  return (
    <main className="container page-content">
      <section className="page-heading">
        <h1>Tentang Saya</h1>
        <p className="page-intro">Perjalanan belajar, minat, dan kemampuan yang sedang saya kembangkan.</p>
      </section>

      <section className="content-card about-intro card shadow-sm">
        <h2>Profil Singkat</h2>
        <p>
          Saya adalah mahasiswa Teknik Informasi yang tertarik dengan pengembangan website dan perangkat keras komputer.
          Saat ini saya sedang membangun dasar pemrograman dan berlatih menerapkan materi melalui proyek kecil yang bisa dijalankan langsung di browser.
        </p>
      </section>

      <div className="two-column-grid row g-4">
        <section className="col-md-6">
          <div className="content-card card shadow-sm h-100">
            <h2>Riwayat Pendidikan</h2>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <h3>Perguruan Tinggi</h3>
                <p className="muted-text">Program Studi Teknik Informasi</p>
                <p className="small-text">Universitas Bina Sarana Informatika (UBSI) 2023 - Sekarang</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <h3>Sekolah Menengah Atas (SMA)</h3>
                <p className="muted-text">Pendidikan menengah kelas IPA</p>
                <p className="small-text">SMA Hutama 20.. - 20...</p>
              </div>
            </div>
          </div>
        </section>

        <section className="col-md-6">
          <div className="content-card card shadow-sm h-100">
            <h2>Minat Teknologi</h2>
            <p>Saya tertarik mempelajari bagaimana website dibuat dan perakitan komputer.</p>
            <ul className="check-list">
              <li>Front-end web development</li>
              <li>Logika pemrograman</li>
              <li>Perangkat dan peralatan komputer</li>
              <li>Pengembangan proyek berbasis web</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="content-card card shadow-sm">
        <h2>Keterampilan yang Sedang Dipelajari</h2>
        <div className="skill-list">
          <div className="skill-row"><span>HTML</span><span className="skill-level">Struktur Halaman</span></div>
          <div className="skill-row"><span>CSS</span><span className="skill-level">Tampilan</span></div>
          <div className="skill-row"><span>JavaScript</span><span className="skill-level">DOM &amp; event handling</span></div>
        </div>
      </section>
    </main>
  );
}

export default About;
