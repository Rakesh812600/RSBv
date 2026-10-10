import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ResearchInterests from './components/ResearchInterests';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Collaboration from './components/Collaboration';
import OpenSource from './components/OpenSource';
import ResearchNotesSection from './components/ResearchNotes';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-navy-950 transition-colors">
      <Navigation />
      <main>
        <Hero />
        <ResearchInterests />
        <Publications />
        <Projects />
        <Collaboration />
        <OpenSource />
        <ResearchNotesSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
