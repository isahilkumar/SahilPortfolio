import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen text-text selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-50 w-14 h-14 rounded-2xl glass border-white/10 text-primary hover:bg-primary/10 transition-all shadow-2xl flex items-center justify-center group"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
