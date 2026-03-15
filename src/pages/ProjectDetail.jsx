import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === id) || projects.find(p => p.id.toString() === id);
  const currentIndex = projects.findIndex(p => p.slug === id || p.id.toString() === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <PageTransition>
        <div className="pd-v6-empty">
          <span className="section-label">Archive / Error</span>
          <h2 className="display-2">Not Found.</h2>
          <button onClick={() => navigate('/projects')} className="btn-monolith">Return to list</button>
        </div>
      </PageTransition>
    );
  }

  const parts = project.title.split(' / ');
  const mainTitle = parts[0];
  const subTitle = parts[1] ? `/ ${parts[1]}` : '';

  return (
    <PageTransition>
      <div className="container">
        <div className="pd-v6-layout">
          
          {/* Left Column: Content */}
          <div className="pd-v6-left">
            <motion.div 
              className="pd-v6-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button className="pd-v6-back" onClick={() => navigate('/projects')}>
                <ArrowLeft size={14} /> Back
              </button>
              <span className="pd-v6-index">{(currentIndex + 1).toString().padStart(2, '0')}</span>
            </motion.div>

            <motion.div 
              className="pd-v6-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="pd-v6-title">
                {mainTitle} <span className="pd-v6-subtitle">{subTitle}</span>
              </h1>
              
              <div className="pd-v6-meta">
                <div className="pd-v6-meta-item">
                  <span className="pd-v6-label">Category</span>
                  <span className="pd-v6-val">{project.role}</span>
                </div>
                <div className="pd-v6-meta-item">
                  <span className="pd-v6-label">Timeline</span>
                  <span className="pd-v6-val">{project.year}</span>
                </div>
              </div>

              <div className="pd-v6-body">
                <p className="pd-v6-desc">{project.overview}</p>
                
                <div className="pd-v6-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="pd-v6-tag">{tag}</span>
                  ))}
                </div>

                <div className="pd-v6-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="pd-v6-link">
                      Live Experience <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="pd-v6-link">
                      Source Code <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {nextProject && (
              <motion.div 
                className="pd-v6-next"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
              >
                <div className="pd-v6-next-line"></div>
                <span className="pd-v6-label">Continue to next</span>
                <h3 className="pd-v6-next-title">
                  {nextProject.title.split(' / ')[0]} <span className="font-serif">/ {nextProject.title.split(' / ')[1]}</span>
                </h3>
              </motion.div>
            )}
          </div>

          {/* Right Column: Sticky Image */}
          <div className="pd-v6-right">
            <motion.div 
              className="pd-v6-image-wrapper"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
