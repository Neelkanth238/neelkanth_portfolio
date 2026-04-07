import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

import { ReactLenis } from 'lenis/react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <ReactLenis root>
      <div className="page-wrapper modernist-archive">
        <Navbar />
        
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
