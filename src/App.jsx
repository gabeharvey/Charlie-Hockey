import './App.css';
import { useRef } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null); 
  const myExperienceRef = useRef(null); 
  const myEducationRef = useRef(null); 
  const resumeRef = useRef(null); 
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Ref is not defined or current is null.');
    }
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ aboutRef, projectsRef, myExperienceRef, myEducationRef, contactRef, resumeRef }} 
      />
      <div ref={projectsRef}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;