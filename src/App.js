import './css/index.css';
import Header from './components/Header';
import Subtitle from './components/Subtitle';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Client from './components/Client';
import Contacto from './components/Contacto';
import ThemeToggle from './components/ThemeToggle';

function App() {

  return (
    <div className="App">
      <Header />
      <Subtitle
        subtitle='Mis'
        subtitleSpan='Servicios'  
      />
      <Services />
      <Subtitle
        subtitle='Sobre'
        subtitleSpan='Mi'  
      />
      <About />
      <Subtitle
        subtitle='Mis'
        subtitleSpan='Proyectos'  
      />
      <Projects />
      <Subtitle
        subtitle='Mis'
        subtitleSpan='Clientes'  
      />
      <Client />
      <Subtitle
        subtitle='Contáctate '
        subtitleSpan='Conmigo'  
      />
      <Contacto />
      <ThemeToggle />
    </div>
  );
}

export default App;
