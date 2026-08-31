const navigation = [
  { label: 'Inicio', target: 'inicio' },
  { label: 'Sobre mí', target: 'sobre-mi' },
  { label: 'Proyectos', target: 'proyectos' },
  { label: 'Contacto', target: 'contacto' },
]

function Header() {
  const handleNavigation = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header" id="inicio">
      <a className="site-brand" href="#inicio" aria-label="Ir al inicio">
        CFS
      </a>

      <nav aria-label="Navegación principal">
        {navigation.map(({ label, target }) => (
          <button key={target} type="button" onClick={() => handleNavigation(target)}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
