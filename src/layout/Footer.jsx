import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.maxW}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brandFlex}>
              <img src="/assets/logo.jpg" alt="Crelova creative Logo" />
              <h3>Crelova creative</h3>
            </div>
            <p className={styles.desc}>Transforming vision into reality through innovative digital marketing solutions.</p>
          </div>
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Web Development & Digital Solutions</Link></li>
              <li><Link to="/services">Graphic Design & Content Creation</Link></li>
              <li><Link to="/services">Search Engine Optimization (SEO) & SEM</Link></li>
              <li><Link to="/services">Email Marketing</Link></li>
              <li><Link to="/services">Social Media Marketing & Management</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Connect</h4>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/company/creative.catalyst/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.tiktok.com/@crelovacreative?_r=1&_t=ZS-95XNUBhxxyR" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61581113821223" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/crelovacreative?igsh=emo2cmFvMTZkOTh6" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Crelova creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
