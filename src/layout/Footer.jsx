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
              <span className="material-symbols-outlined">public</span>
              <span className="material-symbols-outlined">alternate_email</span>
              <span className="material-symbols-outlined">share</span>
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
