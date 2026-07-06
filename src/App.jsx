import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [role, setRole] = useState('web'); // 'web' or 'flutter'

  return (
    <div className="bg-bg-base min-h-screen text-text-body font-sans selection:bg-accent-primary/30">
      <Navigation role={role} setRole={setRole} />
      <main>
        <Hero role={role} setRole={setRole} />
        <About />
        <Skills role={role} />
        <Projects role={role} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
