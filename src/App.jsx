import logo from "./logo.svg";
import "./App.css";
import "./styles/footer.css";

function App() {
  return (
    <>
      <div className="background-logo"></div>
      <header className="header">
        <div className="logo-container">
          {/* RUTAinicio */}
          <img src="/img_index/logodrah.png" alt="Logo DRA Huancavelica" />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                <i className="fas fa-home"></i>Inicio
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                <i className="fas fa-building"></i>Nuestra Institución{" "}
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="downxd">
                  <a href="quienessomos.html">Quiénes somos</a>
                </li>
                <li className="downxd">
                  <a href="#">Directorio</a>
                </li>
                <li className="downxd">
                  <a href="#">Organigrama</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                <i className="fas fa-map-marked-alt"></i>Oficinas{" "}
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="downxd">
                  <a href="#">Dirección</a>
                </li>
                <li className="downxd">
                  <a href="#">Asesoría Jurídica</a>
                </li>
                <li className="downxd">
                  <a href="#">Administración</a>
                </li>
                <li className="downxd">
                  <a href="#">Planificación</a>
                </li>
                <li className="downxd">
                  <a href="#">Estadística Informática</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                <i className="fas fa-globe-americas"></i>Direcciones{" "}
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="downxd">
                  <a href="#">Competitividad Agraria</a>
                </li>
                <li className="downxd">
                  <a href="#">Recursos Hídricos</a>
                </li>
                <li className="downxd">
                  <a href="#">Cultivos Nativos</a>
                </li>
                <li className="downxd">
                  <a href="#">Forestal y Fauna</a>
                </li>
                <li className="downxd">
                  <a href="#">Saneamiento Físico</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                <i className="fas fa-map-pin"></i>Agencias{" "}
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="downxd">
                  <a href="#">Acobamba</a>
                </li>
                <li className="downxd">
                  <a href="#">Angaraes</a>
                </li>
                <li className="downxd">
                  <a href="#">Castrovirreyna</a>
                </li>
                <li className="downxd">
                  <a href="#">Churcampa</a>
                </li>
                <li className="downxd">
                  <a href="#">Huancavelica</a>
                </li>
                <li className="downxd">
                  <a href="#">Huaytará</a>
                </li>
                <li className="downxd">
                  <a href="#">Tayacaja</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="nav-link">
                <i className="fas fa-chart-bar"></i>CMN{" "}
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li className="downxd">
                  <a href="#">Ver CMN 2024</a>
                </li>
                <li className="downxd">
                  <a href="#">Ver CMN 2025</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./assets/forms.jsx" className="nav-link">
                <i className="fas fa-phone"></i>Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>
      </header>

      {/*RUTAbanner*/}
      <section className="banner-carousel">
        <div className="carousel-container">
          <div className="carousel-slide welcome-slide active">
            <div className="welcome-content">
              <img
                src="/img_index/directora.png"
                alt="directora"
                className="directorio-img"
              />
              <div className="text-content">
                <div className="typewriter">
                  <h2>
                    Ing. YURI FUENTES MEZA <br /> DIRECTORA DE LA DIRECCIÓN
                    REGIONAL DE AGRICULTURA HUANCAVELICA
                  </h2>
                </div>
                <p className="fade-in">
                  Impulsando el desarrollo agrario de nuestra región
                </p>
              </div>
            </div>
          </div>

          <div
            className="carousel-slide slide-1"
            style={{ backgroundImage: "url('/img_index/fund2.jpg')" }}
          >
            <div className="banner-overlay"></div>
            <div className="slide-content">
              <img
                src="/img_index/banner1.png"
                alt="DRA Huancavelica"
                className="banner-mapa-img"
              />
              <div className="banner-text">
                <h3>DRA Huancavelica, Juntos por el Agro.</h3>
                <p>
                  Impulsamos el desarrollo agrícola y ganadero de nuestra
                  región, promoviendo la sostenibilidad y el bienestar de las
                  familias productoras.
                </p>
              </div>
            </div>
          </div>

          <div
            className="carousel-slide slide-2"
            style={{ backgroundImage: "url('/img_index/fund3.jpg')" }}
          >
            <div className="banner-overlay"></div>
            <div className="slide-content">
              <img
                src="/img_index/banner2.png"
                alt="Innovación para el Campo"
                className="banner-vector-img"
              />
              <div className="banner-text">
                <h3>Innovación para el Campo.</h3>
                <p>
                  Ofrecemos asistencia técnica y capacitación a los agricultores
                  para mejorar la productividad, el uso del agua y la calidad de
                  sus cultivos.
                </p>
              </div>
            </div>
          </div>

          <div
            className="carousel-slide slide-3"
            style={{ backgroundImage: "url('/img_index/fund4.jpg')" }}
          >
            <div className="banner-overlay"></div>
            <div className="slide-content">
              <div className="banner-text">
                <h3>Cultivando el Futuro de Huancavelica.</h3>
                <p>
                  Trabajamos para asegurar la seguridad alimentaria y construir
                  una región próspera, donde la agricultura sea el motor de
                  nuestro desarrollo.
                </p>
              </div>
              <img
                src="/img_index/banner3.jpg"
                alt="Cosecha"
                className="banner-vector-img"
              />
            </div>
          </div>
        </div>
        <div className="carousel-nav">
          <button className="prev-btn">❮</button>
          <button className="next-btn">❯</button>
        </div>
        <div className="carousel-dots"></div>
      </section>
      {/*RUTAverTramites */}
      <section className="docs-section">
        <h2>Documentos y Trámites</h2>
        <div className="docs-grid">
          <a href="#" className="doc-item" title="CONVOCATORIAS">
            <lord-icon
              src="https://cdn.lordicon.com/ifyskbjd.json"
              trigger="hover"
              colors="primary:#8930e8,secondary:#16c72e"
              style={{ width: "100px", height: "80px" }}
            ></lord-icon>
            <span>CONVOCATORIAS</span>
          </a>
          <a href="#" className="doc-item" title="CORREO INSTITUCIONAL">
            <lord-icon
              src="https://cdn.lordicon.com/ozlkyfxg.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#109121,secondary:#5c0e0a"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <span>CORREO INSTITUCIONAL</span>
          </a>
          <a href="#" className="doc-item" title="NORMATIVA INSTITUCIONAL">
            <lord-icon
              src="https://cdn.lordicon.com/fikcyfpp.json"
              trigger="hover"
              colors="primary:#0a5c15,secondary:#5c0e0a"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <span>NORMATIVA INSTITUCIONAL</span>
          </a>
          <a href="#" className="doc-item" title="DOCUMENTOS DE GESTION">
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger="hover"
              colors="primary:#0a5c15,secondary:#5c0e0a"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <span>DOCUMENTOS DE GESTION</span>
          </a>
          <a href="#" className="doc-item" title="PORTAL DE TRANSPARENCIA">
            <lord-icon
              src="https://cdn.lordicon.com/wjyqkiew.json"
              trigger="hover"
              colors="primary:#5c0e0a,secondary:#16c72e"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <span>PORTAL DE TRANSPARENCIA</span>
          </a>
          <a href="#" className="doc-item" title="CONTROL INTERNO">
            <lord-icon
              src="https://cdn.lordicon.com/fsstjlds.json"
              trigger="hover"
              colors="primary:#0a5c15"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <span>CONTROL INTERNO</span>
          </a>
          <a href="#" className="doc-item" title="SIGA REGIONAL">
            <lord-icon
              src="https://cdn.lordicon.com/ntfaoelc.json"
              trigger="hover"
              colors="primary:#5c0e0a,secondary:#16c72e"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <span>SIGA REGIONAL</span>
          </a>
          <a href="#" className="doc-item" title="SISGEDO">
            <lord-icon
              src="https://cdn.lordicon.com/zcpmxjfa.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#5c0e0a,secondary:#16c72e"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
            <span>SISGEDO</span>
          </a>
          <a href="#" className="doc-item" title="DATOS ESTADISTICOS">
            <lord-icon
              src="https://cdn.lordicon.com/lbcxnxti.json"
              trigger="hover"
              colors="primary:#0a5c15,secondary:#5c0e0a"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
            <span>DATOS ESTADISTICOS</span>
          </a>
          <a href="#" className="doc-item" title="HUANCAVELICA">
            <lord-icon
              src="https://cdn.lordicon.com/rpviwvwn.json"
              trigger="hover"
              stroke="bold"
              state="hover-rotate-up-to-down"
              colors="primary:#109121,secondary:#5c230a"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
            <span>HUANCAVELICA</span>
          </a>
          <a href="#" className="doc-item" title="RESOLUCIONES">
            <lord-icon
              src="https://cdn.lordicon.com/ifyskbjd.json"
              trigger="hover"
              state="hover-unfold"
              colors="primary:#109121,secondary:#5c0e0a"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
            <span>RESOLUCIONES</span>
          </a>
          <a href="#" className="doc-item" title="SEGURO AGRARIO">
            <lord-icon
              src="https://cdn.lordicon.com/iiudwewg.json"
              trigger="hover"
              colors="primary:#5c0e0a,secondary:#16c72e"
              style={{ width: "87px", height: "87px" }}
            ></lord-icon>
            <span>SEGURO AGRARIO</span>
          </a>
          <a
            href="#"
            className="doc-item"
            title="CONSULTA AQUI SI ESTA EMPADRONADO"
          >
            <lord-icon
              src="https://cdn.lordicon.com/noncoqhc.json"
              trigger="hover"
              state="hover-squeeze"
              colors="primary:#0a5c15,secondary:#5c0e0a"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
            <span>CONSULTA AQUI SI ESTA EMPADRONADO</span>
          </a>
          <a href="#" className="doc-item" title="BOLETIN ESTADISTICO OEI">
            <lord-icon
              src="https://cdn.lordicon.com/sqqsmbzs.json"
              trigger="hover"
              stroke="bold"
              state="loop-all"
              colors="primary:#109121,secondary:#5c0e0a"
              style={{ width: "90px", height: "90px" }}
            ></lord-icon>
            <span>BOLETIN ESTADISTICO OEI</span>
          </a>
          <a href="#" className="doc-item" title="LIBRO DE RECLAMACIONES">
            <lord-icon
              src="https://cdn.lordicon.com/rrbmabsx.json"
              trigger="hover"
              stroke="bold"
              state="morph-open"
              colors="primary:#5c0e0a,secondary:#109121"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <span>LIBRO DE RECLAMACIONES</span>
          </a>
          <a
            href="#"
            className="doc-item"
            title="SANEAMIENTO FISICO LEGAL DE LA PROPIEDAD AGRARIA"
          >
            <lord-icon
              src="https://cdn.lordicon.com/rpvomrgr.json"
              trigger="morph"
              stroke="bold"
              state="morph-mantion"
              colors="primary:#5c0e0a,secondary:#16c72e"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <span>SANEAMIENTO FISICO LEGAL DE LA PROPIEDAD AGRARIA</span>
          </a>
        </div>
      </section>

      {/* RUTAannouncements */}
      <section className="news-section">
        <div className="news-card">
          <div
            className="front_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <div className="notice_overlay">
              <h2>Título 1</h2>
            </div>
          </div>
          <div
            className="back_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <h2>Título 1</h2>
            <p>Contenido completo de la noticia 1.</p>
            <a href="#">Leer más</a>
          </div>
        </div>

        <div className="news-card">
          <div
            className="front_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <div className="notice_overlay">
              <h2>Título 2</h2>
            </div>
          </div>
          <div
            className="back_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <h2>Título 2</h2>
            <p>Contenido completo de la noticia 2.</p>
            <a href="#">Leer más</a>
          </div>
        </div>

        <div className="news-card">
          <div
            className="front_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <div className="notice_overlay">
              <h2>Título 3</h2>
            </div>
          </div>
          <div
            className="back_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <h2>Título 3</h2>
            <p>Contenido completo de la noticia 3.</p>
            <a href="#">Leer más</a>
          </div>
        </div>

        <div className="news-card">
          <div
            className="front_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <div className="notice_overlay">
              <h2>Título 4</h2>
            </div>
          </div>
          <div
            className="back_notice"
            style={{ backgroundImage: "url('/img_index/xxdd.jpg')" }}
          >
            <h2>Título 4</h2>
            <p>Contenido completo de la noticia 1.</p>
            <a href="#">Leer más</a>
          </div>
        </div>
        <div className="view-previous-news">
          <a href="/noticias-anteriores" className="previous-news-link">
            Ver noticias anteriores
          </a>
        </div>
      </section>
      <section className="map-section">
        <h2>Ubícanos</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.710174477696!2d-74.97771755186442!3d-12.788855564767642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e0a7c9f3967d5%3A0xa581e127dbade843!2sDirecci%C3%B3n%20Regional%20Agraria%20Huancavelica!5e0!3m2!1ses-419!2spe!4v1761166568605!5m2!1ses-419!2spe"
            width="1200"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </section>

      {/* RUTAaliados */}
      <section className="partners-section">
        <h2>Nuestros Aliados Estratégicos</h2>
        <div className="partners-carousel-container">
          <div className="partners-carousel">
            <img src="/img_aliados/partner1.png" alt="Partner 1" />
            <img src="/img_aliados/partner2.png" alt="Partner 2" />
            <img src="/img_aliados/partner3.png" alt="Partner 3" />
            <img src="/img_aliados/partner4.png" alt="Partner 4" />
            <img src="/img_aliados/partner5.png" alt="Partner 5" />
            <img src="/img_aliados/partner6.png" alt="Partner 6" />
            <img src="/img_aliados/partner7.png" alt="Partner 7" />
            <img src="/img_aliados/partner8.png" alt="Partner 8" />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-left">
            <img src="/img_index/logodrah.png" alt="Logo DRAH" />
            <p>Impulsando el desarrollo agrario</p>
          </div>
          <div className="footer-separator"></div>
          <div className="footer-right">
            <h4 className="visitanos-text">
              Visítanos en:
            </h4>
            <div className="footer-visit-icons lordicon-container">
              {/* FACEBOOK */}
              <a href="#" aria-label="Facebook Link">
                <lord-icon
                    src="https://cdn.lordicon.com/oemjpisw.json"
                    trigger="hover"
                    state="hover-roll"
                    colors="primary:#ebe6ef,secondary:#0f6bff"
                    style={{ width: '50px', height: '50px'}}>
                </lord-icon>
              </a>

              {/* GOOGLE */}
              <a href="#" aria-label="Google Link">
                <lord-icon
                src="https://cdn.lordicon.com/dznelzdk.json"
                trigger="hover"
                colors="primary:#30e8bd,secondary:#0a5c15,tertiary:#c76f16,quaternary:#000000,quinary:#848484,senary:#e4e4e4"
                style={{width:'50px', height:'50px'}}>
                </lord-icon>
              </a>

              {/* YOUTUBE */}
              <a href="#" aria-label="YouTube Link">
                <lord-icon
                  src="https://cdn.lordicon.com/dbcganmh.json"
                  trigger="hover"
                  target=".lordicon-container a"
                  colors="primary:#ffffff,secondary:#ff0000"
                  style={{ width: '50px', height: '50px' }}
                ></lord-icon>
              </a>

              {/* GMAIL */}
              <a
                href="mailto:drahuancavelicaoficial@gmail.com"
                aria-label="Gmail Link"
              >
                <lord-icon
                    src="https://cdn.lordicon.com/ipyszerf.json"
                    trigger="hover"
                    colors="primary:#16c72e,secondary:#3a3347,tertiary:#ebe6ef"
                    style={{width:'50px', height:'50px'}}>
                </lord-icon>
              </a>

              {/* WHATSAPP */}
              <a href="#" aria-label="WhatsApp Link">
                <lord-icon
                    src="https://cdn.lordicon.com/edecmgef.json"
                    trigger="hover"
                    state="hover-draw"
                    colors="primary:#30e849,secondary:#848484"
                    style={{width:'50px', height:'50px'}}>
                </lord-icon>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>© 2025 Dirección Regional de Agricultura Huancavelica. Todos los derechos reservados.</p>
          <p>Desarrollado por Brayan JQR</p>
        </div>
      </footer>
    </>
  );
}

export default App;