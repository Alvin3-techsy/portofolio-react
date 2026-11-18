import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({
    type: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setNotification({
      type: "",
      message: ""
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    const nameValue = formData.name.trim();
    const emailValue = formData.email.trim();
    const messageValue = formData.message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameValue === "") {
      newErrors.name = "Nama tidak boleh kosong.";
    }

    if (emailValue === "") {
      newErrors.email = "Email tidak boleh kosong.";
    } else if (!emailPattern.test(emailValue)) {
      newErrors.email = "Format email salah.";
    }

    if (messageValue === "") {
      newErrors.message = "Pesan tidak boleh kosong.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setNotification({
        type: "error",
        message: "Pastikan data sudah sesuai."
      });
      return;
    }

    setNotification({
      type: "success",
      message: "Simulasi berhasil!"
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <main className="container page-content">
      <section className="page-heading">
        <p className="eyebrow">MARI TERHUBUNG</p>
        <h1>Hubungi Saya</h1>
        <p className="page-intro">Punya pertanyaan atau saran? Silakan gunakan formulir berikut.</p>
      </section>

      <div className="contact-layout row g-4">
        <aside className="contact-info content-card card shadow-sm col-lg-5">
          <h2>Informasi Kontak</h2>
          <div className="contact-detail">
            <span className="detail-icon">✉</span>
            <div><strong>Email</strong><p>tester@email.com</p></div>
          </div>
          <div className="contact-detail">
            <span className="detail-icon">⌖</span>
            <div><strong>Lokasi</strong><p>Indonesia</p></div>
          </div>
          <p className="small-text"><b>DISCLAIMER</b></p>
          <p className="small-text">Form ini hanya simulasi saja dan tidak mengirim email sungguhan.</p>
        </aside>

        <section className="content-card card shadow-sm col-lg-7">
          <h2>Kirim Pesan</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-field mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan nama"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby="name-error"
              />
              <small className="field-error" id="name-error">{errors.name}</small>
            </div>

            <div className="form-field mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="nama@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby="email-error"
              />
              <small className="field-error" id="email-error">{errors.email}</small>
            </div>

            <div className="form-field mb-3">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Tuliskan pesan..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby="message-error"
              ></textarea>
              <small className="field-error" id="message-error">{errors.message}</small>
            </div>

            {notification.message && (
              <div className={`form-notification ${notification.type}`} role="status" aria-live="polite">
                {notification.message}
              </div>
            )}

            <button className="btn btn-primary w-100 button-full" type="submit">Kirim Pesan</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
