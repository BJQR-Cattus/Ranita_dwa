import React, { useState } from "react";
import "../styles/contact.css";


const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    institucion: "",
    motivo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, telefono, motivo, mensaje } = formData;

    if (!nombre || !email || !telefono || !motivo || !mensaje) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("El correo debe ser una cuenta Gmail válida.");
      return;
    }

    // Simulación de envío
    const enviado = Math.random() > 0.2; // 80% éxito
    if (enviado) {
      alert("¡Formulario enviado correctamente! Gracias por contactarnos.");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        institucion: "",
        motivo: "",
        mensaje: "",
      });
    } else {
      alert("Error al enviar el formulario. Intente nuevamente.");
    }
  };

  return (
    <>
      {/* Aquí irá tu <Header /> */}
      <main className="contact-hub">
        <div className="form-wrapper">
          <h1>Contacto DRAH y Consultas</h1>
          <p className="subtitle">
            Si tiene algún problema, déjenos sus datos y nos pondremos en contacto.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombres y Apellidos</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Brayan"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: goku@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 987654321"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="institucion">Sector/Institución</label>
                <input
                  type="text"
                  id="institucion"
                  name="institucion"
                  value={formData.institucion}
                  onChange={handleChange}
                  placeholder="Ej: Comunidad ABC... (Opcional)"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="motivo">Motivo de Consulta</label>
              <select
                id="motivo"
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Seleccione una opción
                </option>
                <option value="consulta">Consulta General</option>
                <option value="problema">Problema o Queja</option>
                <option value="informacion">Información Específica</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="mensaje">Mensaje y/o Descripción</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Describa el motivo de su requerimiento con detalle..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Enviar Solicitud
              <span className="btn-shine"></span>
            </button>
          </form>
        </div>

        <aside className="info-wrapper">
          <h2>Visítanos</h2>

          <article className="info-card">
            <h3>Dirección</h3>
            <p>Av. Augusto B. Leguía N°171</p>
            <p className="highlight">Huancavelica, Perú</p>
          </article>

          <article className="info-card">
            <h3>Línea Directa</h3>
            <p className="highlight">067 - 451373</p>
          </article>

          <article className="info-card">
            <h3>Correo</h3>
            <p className="highlight">drahuancavelicaoficial@gmail.com</p>
          </article>

          <article className="info-card">
            <h3>Horario de Atención</h3>
            <p>
              <time>Lun - Vie | 08:00 AM - 5:30 PM</time>
            </p>
            <p className="muted">UTC-5</p>
          </article>
        </aside>
      </main>
      {/* Aquí irá tu <Footer /> */}
    </>
  );
};

export default Form;
