import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>Let's grow your brand.</h1>
      </div>

      <div className={styles.bodyContainer}>
        <p className={styles.bodyText}>Our team of experts is ready to help you scale your digital presence. Fill out the form below and we'll be in touch within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>
            <p className={styles.labelText}>Full Name</p>
            <input className={styles.inputField} placeholder="John Doe" type="text" required />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>
            <p className={styles.labelText}>Business Email</p>
            <input className={styles.inputField} placeholder="email@company.com" type="email" required />
          </label>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>
            <p className={styles.labelText}>How can we help?</p>
            <textarea className={`${styles.inputField} ${styles.textareaField}`} placeholder="Tell us about your goals..." required></textarea>
          </label>
        </div>
        <div className={styles.submitContainer}>
          <button className={styles.submitBtn} type="submit">
            <span>Send Message</span>
            <span className={`material-symbols-outlined ${styles.submitBtnIcon}`}>send</span>
          </button>
        </div>
      </form>

      <div className={styles.confettiWrapper}>
        <div className={styles.confettiInner}>
          <div className={styles.c1}></div>
          <div className={styles.c2}></div>
          <div className={styles.c3}></div>
          <div className={styles.c4}></div>
          <div className={styles.c5}></div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.locationContainer}>
        <h3 className={styles.locationTitle}>Our Location</h3>
        <div className={styles.mapWrapper}>
          <img className={styles.mapImg} alt="Minimalist top down city map with blue accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrf1HLg2eabLrjx1RToPhwB9l8EMJxkFPZSyH0zT0nWl8n_880eTdrF1aRJ2KfkdM0ocN4mH4GEMUdTuBTVqI7nsh5EEFE8HODY7_opzhSay2yGCrdRVPu_4OGhGmNuHBCC2hUlPaXDub2TqujRY21F-3EeRb0xFZs8gD4-0FO06oX9WGn81cH0hWH5TF4lUeMDH1qpQpiZPTMWSfnZjBr2shNTTds0d0HjklbxpXf-iHkbpqrxGtGYfQRStHtmSiWMguaCdsmtqaE"/>
          <div className={styles.mapOverlay}>
            <div className={styles.mapPin}>
              <span className="material-symbols-outlined">location_on</span>
            </div>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.infoRow}>
            <span className={`material-symbols-outlined ${styles.infoIcon}`}>pin_drop</span>
            <div>
              <p className={styles.infoText}>Bambili Bamenda</p>
              <p className={styles.infoSubtext}>Cameroon</p>
            </div>
          </div>
          <div className={styles.infoRow} style={{ marginTop: '0.5rem' }}>
            <span className={`material-symbols-outlined ${styles.infoIcon}`}>call</span>
            <p className={styles.infoText}>+237672431353</p>
          </div>
          <div className={styles.infoRow} style={{ marginTop: '0.5rem' }}>
            <span className={`material-symbols-outlined ${styles.infoIcon}`}>alternate_email</span>
            <p className={styles.infoText}>crelovacreative@gmail.com</p>
          </div>
          <div className={styles.directionsWrapper}>
            <button className={styles.directionsBtn}>
              Get Directions
              <span className={`material-symbols-outlined ${styles.directionsIcon}`}>north_east</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
