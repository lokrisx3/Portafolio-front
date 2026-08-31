import Header from './components/Header.jsx'
import About from './sections/About.jsx'

function App() {
  return (
    <>
      <Header />

      <main>
        <About />

        <section id="experiencia">
          <h2>Experiencia</h2>
        </section>

        <section id="proyectos">
          <h2>Proyectos</h2>
        </section>

        <section id="habilidades">
          <h2>Habilidades</h2>
        </section>

        <section id="certificaciones">
          <h2>Certificaciones</h2>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
        </section>
      </main>
    </>
  );
}

export default App;
