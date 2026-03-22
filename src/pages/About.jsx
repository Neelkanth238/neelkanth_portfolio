import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './About.css';

export default function About() {
  const itemVars = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const drawVars = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 0.3, transition: { duration: 2, ease: "easeInOut" } }
  };

  return (
    <PageTransition>
      <div className="about-monolith container">
        <header className="about-header-v4">
          <span className="section-label">Institutional Profile</span>
          <h1 className="display-1">Beyond the <br /> <span className="font-serif">Systems</span>.</h1>
        </header>

        <div className="bento-grid-wrapper">
          <div className="bento-blob-bg"></div>
          <div className="bento-grid-about glow-grid">
            {/* Section: Identity */}
            <motion.div
              className="bento-item col-span-8 row-span-2 identity-card"
              variants={itemVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="availability-badge">
                <span className="pulsing-dot"></span>
                Available for meaningful work
              </div>
              <h2 className="display-2">Neelkanth <br /> <span className="font-serif">Mayani</span></h2>
              <p className="paragraph-lg">
                I am a Full Stack Developer dedicated to building high-performance digital products that bridge the gap between complex logic and minimalist design.
              </p>
              <p className="paragraph-md" style={{ marginTop: '1.5rem', maxWidth: '85%' }}>
                Based in India, I specialize in architecting scalable backends and crafting immersive, fluid frontends. My approach is rooted in the belief that code should be as elegant as the interface it powers.
              </p>
            </motion.div>

            {/* Section: Image */}
            <motion.div
              className="bento-item col-span-4 row-span-2 no-padding image-card"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="bento-image-wrapper group">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200" alt="Neelkanth" className="grayscale-img" />
                <div className="image-overlay"></div>
              </div>
            </motion.div>

            {/* Section: Education (Moved to Left) */}
            <motion.div
              className="bento-item col-span-5 timeline-card"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className="section-label">Education Timeline</span>
              <div className="timeline-list">
                <div className="timeline-item active">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="info-title">Master in Digital Technologie</span>
                    <p className="info-subtitle">Current Study — Germany</p>
                    <span className="info-meta">Ongoing</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="info-title">Bachelor of Computer Application</span>
                    <p className="info-subtitle">BCA — India</p>
                    <span className="info-meta">Completed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section: Stats (Orange Square Remains) */}
            <motion.div
              className="bento-item col-span-3 accent-cell pattern-bg overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Decorative SVG pattern */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  d="M-20,120 Q50,-20 120,50" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="3"
                  fill="none"
                  variants={drawVars}
                  initial="initial"
                  whileInView="animate"
                />
                <motion.path 
                  d="M0,100 Q80,20 100,100" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="1"
                  fill="none"
                  variants={drawVars}
                  initial="initial"
                  whileInView="animate"
                />
              </svg>
              <div className="relative z-10 flex flex-col justify-end h-full">
                <span className="stat-number">4<motion.span 
                  initial={{ opacity: 0, scale: 0 }} 
                  whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.8, type: 'spring' } }}
                  style={{ display: 'inline-block', color: 'rgba(255,255,255,0.8)' }}>+</motion.span>
                </span>
                <span className="stat-label">Years of <br/>Engineering</span>
              </div>
            </motion.div>

            {/* Section: Languages/Skills (Moved to Right of Orange Square) */}
            <motion.div
              className="bento-item col-span-4 skills-card"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 } }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className="section-label">Technical Inventory</span>
              
              <div className="skills-group mt-4">
                <span className="skills-group-title">Frontend</span>
                <div className="tech-pills">
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">TypeScript</span>
                  <span className="tech-pill">GSAP</span>
                  <span className="tech-pill">WebGL</span>
                </div>
              </div>

              <div className="skills-group mt-4">
                <span className="skills-group-title">Backend</span>
                <div className="tech-pills">
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">Go</span>
                  <span className="tech-pill">Express</span>
                  <span className="tech-pill">Python</span>
                </div>
              </div>

              <div className="skills-group mt-4">
                <span className="skills-group-title">Infrastructure</span>
                <div className="tech-pills">
                  <span className="tech-pill">AWS</span>
                  <span className="tech-pill">Docker</span>
                  <span className="tech-pill">CI/CD</span>
                </div>
              </div>
            </motion.div>

            {/* Section: Certifications */}
            <motion.div
              className="bento-item col-span-12 certifications-card"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 } }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: '2rem' }}>
                <span className="section-label" style={{ marginBottom: 0 }}>Certifications & Credentials</span>
              </div>
              <div className="cert-grid">
                {[
                  { name: 'Advanced React Developer', issuer: 'Meta Open Source' },
                  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services' },
                  { name: 'Google IT Automation', issuer: 'Google Analytics' },
                  { name: 'Docker Certified Associate', issuer: 'Docker Inc.' }
                ].map((cert, index) => (
                  <div key={index} className="cert-box group">
                    <div className="cert-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    </div>
                    <div className="cert-content">
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
