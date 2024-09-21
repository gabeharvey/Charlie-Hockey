import './App.css';
import { useRef } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlayerBio from './components/PlayerBio';
import HockeyFilm from './components/HockeyFilm';
import Academics from './components/Academics';
import Faith from './components/Faith';

function App() {
  const playerBioRef = useRef(null);
  const hockeyFilmRef = useRef(null); 
  const homeRef = useRef(null); 
  const academicsRef = useRef(null); 
  const faithRef = useRef(null); 

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
        refs={{ playerBioRef, hockeyFilmRef, homeRef, academicsRef, faithRef }} 
      />
      <div ref={playerBioRef}>
        <PlayerBio />
      </div>
      <div ref={hockeyFilmRef}>
        <HockeyFilm />
      </div>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={academicsRef}>
        <Academics />
      </div>
      <div ref={faithRef}>
        <Faith />
      </div>
      <Footer />
    </div>
  );
}

export default App;