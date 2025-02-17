import Home from './pages/home/Home';
import Services from './pages/Services/Services';
import Header from './components/header/Header';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/contacts/Contact';
import Footer from './components/footer/Footer';
import Skills from './pages/skills/Skills';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;