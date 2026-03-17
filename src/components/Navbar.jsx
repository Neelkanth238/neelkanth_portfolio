import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const closeMenu = () => setIsMenuOpen(false);

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1
  };

  const menuItems = [
    { name: 'Archive', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' }
  ];

  // Logic to determine which pill should be showing
  const currentPath = location.pathname;
  const activeIndex = menuItems.findIndex(item => item.path === currentPath);
  const displayIndex = hoveredLink !== null ? hoveredLink : (activeIndex !== -1 ? activeIndex : null);

  return (
    <>
      <header className={`nav-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
        <motion.div 
          layout
          transition={transition}
          className={`nav-container ${isScrolled ? 'is-scrolled' : ''}`}
          style={{
            maxWidth: isScrolled ? 'fit-content' : '1400px',
            borderRadius: isScrolled ? '100px' : '0px',
            padding: isScrolled ? '6px 10px' : '8px',
            gap: isScrolled ? '8px' : '0px',
            justifyContent: isScrolled ? 'center' : 'space-between'
          }}
        >
          {/* Logo Section */}
          <motion.div 
            layout 
            transition={transition} 
            className="nav-left"
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/" className="logo-block" onClick={closeMenu} style={{ 
              borderRadius: isScrolled ? '100px' : '12px',
              width: isScrolled ? '36px' : '44px',
              height: isScrolled ? '36px' : '44px'
            }}>
              <motion.span 
                layout 
                transition={transition} 
                className="logo-text"
                style={{ fontSize: isScrolled ? '12px' : '18px' }}
                variants={{
                  hover: { scale: 1.1, letterSpacing: "0.05em" },
                  tap: { scale: 0.9 }
                }}
              >
                NM
              </motion.span>
            </Link>
          </motion.div>

          {/* Centered Pill */}
          <motion.nav 
            layout 
            transition={transition} 
            className="nav-center"
            style={{ 
              flex: isScrolled ? '0 1 auto' : '1 1 auto',
            }}
          >
            <motion.div layout transition={transition} className="nav-pill">
              <div className="nav-links" onMouseLeave={() => setHoveredLink(null)}>
                {menuItems.map((item, idx) => (
                  <NavLink 
                    key={item.name}
                    to={item.path} 
                    className={({ isActive }) => 
                      `nav-a ${isActive ? 'active' : ''} ${displayIndex === idx ? 'has-pill' : ''}`
                    }
                    onMouseEnter={() => setHoveredLink(idx)}
                  >
                    {displayIndex === idx && (
                      <motion.div
                        layoutId="nav-pill-bg"
                        className="nav-pill-bg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="nav-label">{item.name}</span>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </motion.nav>

          {/* Right Section */}
          <motion.div layout transition={transition} className="nav-right" style={{ gap: isScrolled ? '4px' : '12px' }}>
            {!isMenuOpen && (
              <motion.div 
                layout 
                transition={transition}
                whileHover="hover"
                whileTap="tap"
              >
                <Link to="/contact" className="nav-cta" onClick={closeMenu} style={{
                  height: isScrolled ? '36px' : '44px',
                  borderRadius: isScrolled ? '100px' : '10px',
                  padding: isScrolled ? '0 15px' : '0 24px'
                }}>
                  <motion.span 
                    layout 
                    transition={transition} 
                    className="cta-text" 
                    style={{ fontSize: isScrolled ? '12px' : '14px' }}
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                  >
                    Get in touch
                  </motion.span>
                  <div className="cta-dot-wrapper">
                    <motion.div 
                      layout 
                      className="cta-dot"
                      variants={{
                        hover: { scale: 1.5 }
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </div>
                </Link>
              </motion.div>
            )}

            <ThemeToggle />
            
            <motion.button 
              layout
              transition={transition}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className={`mobile-menu-trigger ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="bento-grid">
                <span></span><span></span>
                <span></span><span></span>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {menuItems.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path} 
              className={({ isActive }) => isActive ? "mobile-nav-a active" : "mobile-nav-a"}
              onClick={closeMenu}
            >
              <span className="mobile-nav-text">{item.name}</span>
            </NavLink>
          ))}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "mobile-nav-a active" : "mobile-nav-a"} 
            onClick={closeMenu}
          >
            <span className="mobile-nav-text">Contact</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}
