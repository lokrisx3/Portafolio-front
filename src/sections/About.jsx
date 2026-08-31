import heroImage from '../assets/hero.png'

function About() {
  return (
    <section className="about-section" id="sobre-mi" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="section-label">Sobre mí</p>
        <h1 id="about-title">Cristian Fritz Sepúlveda</h1>
        <p className="about-role">Desarrollador Full Stack · Analista Programador</p>
        <p className="about-description">
          Desarrollo soluciones web con una mirada práctica, cuidando tanto la experiencia de uso como
          la calidad de la implementación.
        </p>

        <div className="about-actions">
          <a className="primary-action" href="#proyectos">
            Ver proyectos
          </a>
          <a className="secondary-action" href="#contacto">
            Contactar
          </a>
        </div>
      </div>

      <div className="about-visual" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>
    </section>
  )
}

export default About
