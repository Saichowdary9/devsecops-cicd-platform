import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import WhatIBuild from './sections/WhatIBuild';
import Security from './sections/Security';
import GitHubActivity from './sections/GitHubActivity';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <WhatIBuild />
        <Security />
        <GitHubActivity />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
