const strengths = [
  ['01', 'DESARROLLO FULL STACK', 'Construyo soluciones web de punta a punta, desde la interfaz hasta la lógica y la integración de servicios.'],
  ['02', 'AUTOMATIZACIÓN Y QA', 'Me enfoco en flujos confiables, validación de calidad y mejoras que reduzcan trabajo repetitivo.'],
  ['03', 'PRODUCTOS CON IMPACTO', 'Transformo necesidades de negocio en experiencias digitales claras, eficientes y mantenibles.'],
]

const experience = [
  ['+5 AÑOS', 'EXPERIENCIA EN SOFTWARE', 'Desarrollo de aplicaciones y soluciones orientadas a resolver problemas reales.'],
  ['ENFOQUE', 'CALIDAD Y EFICIENCIA', 'Automatización, QA y mejora continua como parte del proceso de entrega.'],
  ['PERFIL', 'ANALISTA PROGRAMADOR', 'Visión técnica y funcional para acompañar un producto desde la idea hasta su evolución.'],
]

function ProfessionalAbout() {
  return (
    <section className="professional-section" id="sobre-mi" aria-labelledby="professional-title">
      <div className="professional-intro">
        <p className="terminal-kicker">[02] PERFIL PROFESIONAL</p>
        <h2 id="professional-title">SOBRE MÍ<span className="title-dot">.</span></h2>
        <p>
          Soy desarrollador Full Stack y Analista Programador. Combino experiencia técnica,
          criterio de calidad y una mirada práctica para crear software útil, robusto y fácil de mantener.
        </p>
      </div>

      <div className="strength-grid">
        {strengths.map(([number, title, description]) => (
          <article className="strength-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="experience-panel" aria-label="Resumen de experiencia laboral">
        <div className="experience-heading">
          <p className="terminal-kicker">// TRAYECTORIA</p>
          <h3>EXPERIENCIA LABORAL</h3>
        </div>
        <ol className="experience-list">
          {experience.map(([meta, title, description]) => (
            <li key={title}>
              <span>{meta}</span>
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProfessionalAbout
