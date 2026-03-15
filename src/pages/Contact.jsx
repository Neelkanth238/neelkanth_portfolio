import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './Contact.css';

export default function Contact() {
  const itemVars = {
    initial: { opacity: 0, y: 40, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <PageTransition>
      <div className="container">
        <div className="contact-bento-grid">
          {/* Header Cell */}
          <motion.div 
            className="contact-bento-header" 
            variants={itemVars} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true, amount: 0.1 }}
          >
            <span className="section-label">Collaboration</span>
            <h1 className="display-1">Initiate <br /> <span className="font-serif">Dialogue</span>.</h1>
          </motion.div>

          {/* Contact Info Cell */}
          <motion.div 
            className="contact-bento-info" 
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="contact-status-box">
               <span className="section-label">Availability</span>
               <p className="paragraph-lg">
                  Currently available for full-stack architecture, engineered product developments, and technical consulting.
               </p>
            </div>
            
            <div className="bento-contact-links">
               <div className="bento-method">
                  <span className="bento-method-label">Direct Line</span>
                  <a href="mailto:hello@neelkanth.com" className="bento-method-value">hello@neelkanth.com</a>
               </div>
               <div className="bento-method">
                  <span className="bento-method-label">Pulse</span>
                  <div className="bento-method-socials">
                     <a href="https://linkedin.com/in/neelkanthmayani" target="_blank" rel="noreferrer">LinkedIn</a>
                     <a href="https://github.com/neelkanth" target="_blank" rel="noreferrer">GitHub</a>
                     <a href="https://read.cv/neelkanth" target="_blank" rel="noreferrer">Read.cv</a>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form Cell */}
          <motion.div 
            className="contact-bento-form" 
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }}
            viewport={{ once: true, amount: 0.1 }}
          >
             <span className="section-label">Encrypted Terminal</span>
             <form className="bento-form" onSubmit={(e) => e.preventDefault()}>
                <div className="bento-form-field">
                   <label>Identity</label>
                   <input type="text" placeholder="Your name or organization" />
                </div>
                <div className="bento-form-field">
                   <label>Channel</label>
                   <input type="email" placeholder="email@example.com" />
                </div>
                <div className="bento-form-field">
                   <label>Message Content</label>
                   <textarea rows={6} placeholder="The objective of your query"></textarea>
                </div>
                <button className="btn-monolith bento-w-full">Establish Connection</button>
             </form>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
