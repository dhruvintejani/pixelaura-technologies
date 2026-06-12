import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MarqueeBanner from './components/MarqueeBanner';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
