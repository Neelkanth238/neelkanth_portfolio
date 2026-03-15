import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './About.css';

export default function About() {
  const itemVars = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <PageTransition>
      <div className="about-monolith container">
        <header className="about-header-v4">
          <span className="section-label">Institutional Profile</span>
          <h1 className="display-1">Beyond the <br /> <span className="font-serif">Systems</span>.</h1>
        </header>

        <div className="bento-grid-about">
          {/* Section: Identity */}
          <motion.div
            className="bento-item col-span-8 row-span-2"
            variants={itemVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">Identity</span>
            <h2 className="display-2">Neelkanth <br /> <span className="font-serif">Mayani</span></h2>
            <p className="paragraph-lg">
              I am a Full Stack Developer dedicated to building high-performance digital products that bridge the gap between complex logic and minimalist design.
            </p>
            <p className="paragraph-md" style={{ marginTop: '1.5rem' }}>
              Based in India, I specialize in architecting scalable backends and crafting immersive, fluid frontends. My approach is rooted in the belief that code should be as elegant as the interface it powers.
            </p>
          </motion.div>

          {/* Section: Image */}
          <motion.div
            className="bento-item col-span-4 row-span-2 no-padding"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="bento-image-wrapper">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200" alt="Neelkanth" />
            </div>
          </motion.div>

          {/* Section: Experience */}
          <motion.div
            className="bento-item col-span-5"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">Experience</span>
            <div className="info-list">
              <div className="info-row">
                <div>
                  <span className="info-title">Senior Product Engineer</span>
                  <p className="info-subtitle">Product Architecture & System Design</p>
                </div>
                <span className="info-meta">2022 — Now</span>
              </div>
              <div className="info-row">
                <div>
                  <span className="info-title">Full Stack Architect</span>
                  <p className="info-subtitle">End-to-End Development</p>
                </div>
                <span className="info-meta">2020 — 2022</span>
              </div>
              <div className="info-row">
                <div>
                  <span className="info-title">System Developer Intern</span>
                  <p className="info-subtitle">Foundation Engineering</p>
                </div>
                <span className="info-meta">2019 — 2020</span>
              </div>
            </div>
          </motion.div>

          {/* Section: Stats */}
          <motion.div
            className="bento-item col-span-3 accent-cell"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="stat-number">5+</span>
            <span className="stat-label">Years of Engineering</span>
          </motion.div>

          {/* Section: Education */}
          <motion.div
            className="bento-item col-span-4"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">Education</span>
            <div className="info-list">
              <div className="info-row">
                <div>
                  <span className="info-title">B.Tech in Computer Science</span>
                  <p className="info-subtitle">Computer Engineering</p>
                </div>
                <span className="info-meta">Distinction</span>
              </div>
              <div className="info-row">
                <div>
                  <span className="info-title">AWS Solutions Architect</span>
                  <p className="info-subtitle">Cloud Architecture</p>
                </div>
                <span className="info-meta">Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Section: Journey */}
          <motion.div
            className="bento-item col-span-12"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">The Journey</span>
            <p className="paragraph-lg">
              My fascination with systems began with the logic of hardware and evolved into the artistry of software. I view every project as a unique architectural challenge—a puzzle of data structures, user flows, and aesthetic order. From the first line of code to the final pixel, I obsess over the details that make digital experiences feel intentional and alive.
            </p>
          </motion.div>

          {/* Section: Skills */}
          <motion.div
            className="bento-item col-span-12 dark-cell"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label white-text">Technical Inventory</span>
            <div className="skills-grid-bento">
              <div className="skill-cat-box">
                <span className="cat-label">Frontend</span>
                <p>React, Next.js, TypeScript, GSAP, Framer Motion, WebGL</p>
              </div>
              <div className="skill-cat-box">
                <span className="cat-label">Backend</span>
                <p>Node.js, Go, Express, Python, WebSocket, Redis</p>
              </div>
              <div className="skill-cat-box">
                <span className="cat-label">DevOps</span>
                <p>AWS, Docker, Kubernetes, CI/CD, Terraform</p>
              </div>
              <div className="skill-cat-box">
                <span className="cat-label">Core</span>
                <p>System Design, DBMS, UI/UX Strategy, API Architecture</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
