import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/assets/logo.jpg" alt="Crelova creative Logo" className={styles.logoImage}/>
          <Link to="/" className={styles.brandName}>Crelova creative</Link>
        </div>
        
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`${styles.navLink} ${location.pathname === link.path ? styles.navLinkActive : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className={styles.actionsContainer}>
          <Link to="/contact" className={styles.getStartedBtn}>
            Get Started
          </Link>
          
          <button 
            onClick={toggleMenu} 
            className={styles.hamburgerBtn} 
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open1 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open2 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open3 : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.logoContainer}>
              <img src="/assets/logo.jpg" alt="Crelova creative Logo" className={styles.logoImage}/>
              <span className={styles.brandName}>Crelova creative</span>
            </div>
            <button onClick={toggleMenu} aria-label="Close menu">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={toggleMenu}
                className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.mobileNavLinkActive : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={toggleMenu}
              className={styles.mobileGetStarted}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
