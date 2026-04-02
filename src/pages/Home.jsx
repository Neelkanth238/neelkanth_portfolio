import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import FloatingLines from '../components/FloatingLines';

import { useTheme } from '../lib/ThemeContext';

import { Layers, Database, Cpu, Github, Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react';
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
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } }
        }}
      >
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
              Crafting <span className="font-serif">precise</span> digital experiences through thoughtful engineering.
              I build systems that balance technical complexity with intuitive simplicity.
            </p>
          </div>
        </motion.section>


        <div className="container">
          <div className="home-bento-grid">
            {/* ─── System Status Cell ─── */}
            <motion.div
              className="home-bento-info"
              variants={itemVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className="section-label">Availability</span>
              <div>
                <p className="display-3" style={{ marginBottom: '1.25rem' }}>
                  <span className="status-dot"></span>Available.
                </p>
                <p className="paragraph-md">
                  Currently focused on architecting scalable full-stack ecosystems and optimizing high-performance applications.
                </p>
              </div>
            </motion.div>

            {/* ─── Core Philosophy Cell ─── */}
            <motion.div
              className="home-bento-statement"
              variants={itemVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className="section-label" style={{ color: 'inherit', opacity: 0.35 }}>Engineering Ethos</span>
              <h2 className="display-2">Digital <br /> <span className="font-serif">Architecture</span>.</h2>
              <p>
                I believe that exceptional software is born at the intersection of robust logic and human-centric design. My approach is to build integrated systems where performance is a feature, not an afterthought.
              </p>
            </motion.div>

            {/* ─── Connect Cell ─── */}
            <motion.div
              className="home-bento-connect-box"
              variants={itemVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              style={{ gridColumn: 'span 12' }}
            >
              <div className="connect-card-gradient"></div>
              
              <div className="connect-content">
                <div className="connect-text-side">
                  <span className="section-label" style={{ color: '#fff', opacity: 0.5 }}>Availability</span>
                  <h2 className="connect-headline">
                    Let's <span className="font-serif">Connect</span>
                  </h2>
                  <p className="connect-subtext">
                    I'm currently open to new collaborations and strategic opportunities.
                    Whether you have a specific project in mind or just want to say hello—reach out.
                  </p>
                  
                  <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:hello@example.com" className="social-icon">
                      <Mail size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>

                <div className="connect-action-side">
                  <NavLink to="/contact" className="premium-connect-btn">
                    <span>Start a Project</span>
                    <ArrowRight size={20} className="btn-arrow" />
                  </NavLink>
                </div>
              </div>

              <div className="connect-visual-element">
                {/* A subtle abstract shape or glow */}
                <div className="abstract-glow"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </PageTransition>
  );
}
