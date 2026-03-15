import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projects as archive } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="container">
        <div className="projects-split-layout">
          
          {/* Left Column: Interactive List */}
          <div className="projects-left-column">
            <motion.div 
              className="projects-header"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Selected Works</span>
              <h1 className="display-1">The <br /> <span className="font-serif">Archive</span>.</h1>
            </motion.div>

            <div className="projects-interactive-list">
              {archive.map((project, index) => {
                const parts = project.title.split(' / ');
                const mainTitle = parts[0];
                const subTitle = parts[1] ? `/ ${parts[1]}` : '';

                return (
                  <motion.div 
                    key={project.id}
                    className={`project-list-row ${index === hoveredIndex ? 'is-active' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    style={{ cursor: 'pointer' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="project-row-content">
                      <div className="project-row-title-wrap">
                        <span className="project-row-number">{(index + 1).toString().padStart(2, '0')}</span>
                        <h2 className="project-row-title">{mainTitle}</h2>
                        {subTitle && <span className="project-row-subtitle">{subTitle}</span>}
                      </div>
                      
                      <div className="project-row-details">
                        <div className="project-details-inner">
                          <p className="project-row-desc">{project.desc}</p>
                          <div className="project-tags">
                            {project.tags.map(tag => (
                              <span key={tag} className="project-tag">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Image */}
          <div className="projects-right-column">
            <div className="projects-image-wrapper">
              {archive.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`projects-image-container ${index === hoveredIndex ? 'is-active' : ''}`}
                >
                  <img src={project.image} alt={project.title} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
