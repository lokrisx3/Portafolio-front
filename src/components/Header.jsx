const navigation = [
  { label: 'INICIO', target: 'inicio' },
  { label: 'SOBRE MÍ', target: 'sobre-mi' },
  { label: 'PROYECTOS', target: 'proyectos' },
  { label: 'HABILIDADES', target: 'habilidades' },
  { label: 'CONTACTO', target: 'contacto' },
]

function Header() {
  return (
    <header className="site-header" id="inicio">
      <a className="site-brand" href="#inicio" aria-label="Ir al inicio">
        <span>&gt;_</span><i />
      </a>

      <nav aria-label="Navegación principal">
        {navigation.map(({ label, target }, index) => (
          <a className={index === 0 ? 'active' : ''} href={`#${target}`} key={target}>
            <b>[0{index + 1}]</b> {label}
          </a>
        ))}
      </nav>
      <button className="theme-toggle" type="button" aria-label="Cambiar tema">☼</button>
    </header>
  )
}

export default Header
