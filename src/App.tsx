import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Photos from './components/Pages/Photos/Photos';
import Projects from './components/Pages/Projects/Projects';
import { useState, useEffect } from 'react';

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Photos />
      </div>
    </div>
  );
}

export default App;
