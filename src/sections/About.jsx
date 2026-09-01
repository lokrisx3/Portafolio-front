import { useState } from 'react'
import coffeeMug from '../assets/pixel-coffee-mug.png'
import laptop from '../assets/pixel-laptop-profile.png'
import realProfile from '../assets/foto-perfil-cut.png'
import pixelProfile from '../assets/foto-perfil-pixel.png'
import nightSpaceStudio from '../assets/night-space-studio.png'

function PixelLaptop() {
  const [imageMode, setImageMode] = useState('generative')

  return <div className="desk-scene" aria-label="Notebook con foto de perfil de Cristian">
    <img className="pixel-mug" src={coffeeMug} alt="Taza de café pixel art" />
    <div className="generated-notebook">
      <img className="pixel-laptop" src={laptop} alt="Notebook pixel art" />
      <img
        className="real-profile-on-screen"
        src={imageMode === 'real' ? realProfile : pixelProfile}
        alt={imageMode === 'real' ? 'Foto real de Cristian Fritz Sepúlveda' : 'Retrato pixel art de Cristian Fritz Sepúlveda'}
      />
      <button className="screen-arrow screen-arrow-left" type="button" onClick={() => setImageMode('real')} aria-label="Mostrar foto real" aria-pressed={imageMode === 'real'}>‹</button>
      <button className="screen-arrow screen-arrow-right" type="button" onClick={() => setImageMode('generative')} aria-label="Mostrar retrato generativo" aria-pressed={imageMode === 'generative'}>›</button>
    </div>
  </div>
}

function About() {
  return (
    <section className="about-section" aria-labelledby="about-title" style={{ '--studio-scene': `url(${nightSpaceStudio})` }}>
      <div className="about-copy">
        <p className="section-label">HOLA, SOY</p>
        <h1 id="about-title">CRISTIAN FRITZ<br />SEPÚLVEDA<span className="cursor" /></h1>
        <p className="about-role">DESARROLLADOR FULL STACK<br /><span>ANALISTA PROGRAMADOR</span></p>
        <p className="about-description">
          Más de 5 años de experiencia en desarrollo de software,<br />automatización, QA y soluciones web eficientes.<br />Apasionado por crear productos que generan impacto real.
        </p>

        <div className="about-actions">
          <a className="primary-action" href="#proyectos">
            › VER PROYECTOS
          </a>
          <a className="secondary-action" href="#contacto">
            › CONTACTAR
          </a>
        </div>
      </div>

      <PixelLaptop />
      <div className="section-rgb-divider" aria-hidden="true" />
    </section>
  )
}

export default About
