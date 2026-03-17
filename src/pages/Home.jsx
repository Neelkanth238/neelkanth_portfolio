import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import FloatingLines from '../components/FloatingLines';

import { useTheme } from '../lib/ThemeContext';

import './Home.css';

export default function Home() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const lineColors = isDark 
    ? ["#ffffff", "#e07a5f", "#ffffff"] 
    : ["#0d0d0d", "#c45d3e", "#0d0d0d"];
    
  const itemVars = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <PageTransition>
      <motion.section
        className="home-bento-hero-full"
        variants={itemVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="hero-background">
          <FloatingLines
            linesGradient={["#0d0d0d", "#c45d3e", "#0d0d0d"]}
            lineCount={8}
            lineDistance={15}
            animationSpeed={0.4}
            interactive={true}
            mixBlendMode="multiply"
          />
        </div>
        
        <div className="hero-main-typography">
          <h1 className="display-1">
            Neelkanth <br />
            <span className="font-serif">Mayani</span>
          </h1>
          <h2 className="display-2" style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
            Full Stack <span className="font-serif">Developer</span>
          </h2>
        </div>

        <div className="hero-sub-row">
          <div className="line-accent"></div>
          <p className="paragraph-lg">
            Engineering robust systems where <span className="font-serif">performant</span> logic
            meets exceptional design. Bridging the gap between the server and the screen.
          </p>
        </div>
      </motion.section>

      <div className="container">
        <div className="home-bento-grid">
          {/* ─── System Status Cell ─── */}
          <motion.div
            className="home-bento-info"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">System Status</span>
            <div>
              <p className="display-3" style={{ marginBottom: '1.25rem' }}>
                <span className="status-dot"></span>Active.
              </p>
              <p className="paragraph-md">
                Currently accepting select architectural challenges and high-performance product developments.
              </p>
            </div>
          </motion.div>

          {/* ─── Core Philosophy Cell ─── */}
          <motion.div
            className="home-bento-statement"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label" style={{ color: 'inherit', opacity: 0.35 }}>Core Philosophy</span>
            <h2 className="display-2">Unified <br /> <span className="font-serif">Logic</span>.</h2>
            <p>
              A digital product is a singular entity. I don't see frontends or backends — I see integrated systems where data flow and user interaction are one and the same.
            </p>
          </motion.div>

          {/* ─── Call to Action Cell ─── */}
          <motion.div
            className="home-bento-cta"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">Quick Links</span>
            <NavLink to="/projects" className="btn-monolith" style={{ width: '100%', justifyContent: 'center' }}>
              Explore The Archive
            </NavLink>
            <NavLink to="/contact" className="btn-monolith-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Initiate Dialogue
            </NavLink>
            <NavLink to="/about" className="btn-monolith-outline" style={{ width: '100%', justifyContent: 'center' }}>
              About Me
            </NavLink>
          </motion.div>

          {/* ─── Featured Projects Cell ─── */}
          <motion.div
            className="home-bento-projects"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">Featured Systems</span>
            <div className="mini-project-list">
              <div className="mini-project-row">
                <div>
                  <h3 className="mini-project-title">MRS / Metro Rail System</h3>
                  <p className="mini-project-role">Full Stack &amp; Android Development</p>
                </div>
                <span className="mini-project-year">2024</span>
              </div>
              <div className="mini-project-row">
                <div>
                  <h3 className="mini-project-title">IMS / Inventory Management</h3>
                  <p className="mini-project-role">Full Stack Development</p>
                </div>
                <span className="mini-project-year">2023</span>
              </div>
              <div className="mini-project-row">
                <div>
                  <h3 className="mini-project-title">CRS / Car Rental System</h3>
                  <p className="mini-project-role">Full Stack Development</p>
                </div>
                <span className="mini-project-year">2023</span>
              </div>
              <div className="mini-project-row">
                <div>
                  <h3 className="mini-project-title">Budget Bloom / Money Management</h3>
                  <p className="mini-project-role">Frontend Development</p>
                </div>
                <span className="mini-project-year">2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
