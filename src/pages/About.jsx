import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn more about Crelova creative, our mission, vision, and the expert team driving results for businesses."
        url="/about"
      />
      <div className={styles.aboutHeroWrapper}>
        <div 
          className={styles.aboutHero} 
          style={{ backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.2) 0%, rgba(16, 22, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-qWHmG4nOYPFPJVqW_cDr953KfsUYaE87GOFGwLY7i6HYE33NSlSEtyc8IrBQfuz8Xt4UX28FGquljohbt9E1mqdOmVWMe09-q5AZt-pz4Hc0uh5R-fDs0sSgxn87USA--AWVomzgrpG5Bwb4U83J7kPnBtgCTZzwn6ZM3suzcWbD_GkxP2Y7AkzY12QQmBOMaPZaXv-kixPEshjxTnL8ezkBGKnaYWQs8-INo6dQWzixoTk1QTc-ZCn_wuxhnsiSf-E7ppUY1xPO")' }}
        >
          <div className="flex flex-col gap-3 text-left">
            <div>
               <span className={styles.heroTag}>Transforming Vision into Reality</span>
            </div>
            <h1 className={styles.heroTitle}>
              About Crelova creative
            </h1>
            <h2 className={styles.heroText}>
              We are dedicated to transforming your vision into a successful reality through innovative digital marketing solutions.
            </h2>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.storyText}>
          Crelova creative is your partner in navigating the ever-evolving digital landscape. We specialize in delivering innovative marketing solutions that drive results and help businesses thrive in the digital age.
        </p>
        <p className={styles.storyText}>
          Our team of experts combines creativity with data-driven strategies to craft campaigns that resonate with your audience and deliver measurable impact. We're committed to helping you achieve your business goals through cutting-edge digital marketing.
        </p>
      </section>

      <section className={styles.sectionSurface}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <span className="material-symbols-outlined">flag</span>
              </div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionDesc}>
                Our mission is to empower businesses to achieve their full potential through innovative and results-driven digital marketing strategies.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionDesc}>
                We envision a world where every business, regardless of size, can leverage the power of digital marketing to transform their visions into successful realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionSurface}>
        <div className="container">
          <div className={styles.teamHeader}>
            <h2 className={styles.sectionTitle} style={{ paddingBottom: 0 }}>Meet the Experts</h2>
            <span className={styles.joinBtn}>Join the team</span>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.teamImgWrapper}>
                <img alt="Nkwian Godwill Chia - CEO" src="/assets/1.jpg"/>
              </div>
              <div>
                <h4 className={styles.teamName}>Nkwian Godwill Chia</h4>
                <p className={styles.teamRole}>Founder & CEO</p>
                <p className={styles.teamDescription}>Digital Marketing Strategist with expertise in brand positioning, growth marketing, content strategy, adn web-based digital solutions</p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.teamImgWrapper}>
                <img alt="Nde Nelly Anne - Marketing Manager" src="/assets/2.jpg"/>
              </div>
              <div>
                <h4 className={styles.teamName}>Nde Nelly Anne</h4>
                <p className={styles.teamRole}>Marketing Manager</p>
                <p className={styles.teamDescription}>Marketing, Virtual Assistant, Graphic designing, Public speaking, Content creation</p>

              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.teamImgWrapper}>
                <img alt="Azinwie Nelly - Social Media Manager" src="/assets/3.jpg"/>
              </div>
              <div>
                <h4 className={styles.teamName}>Azinwie Nelly</h4>
                <p className={styles.teamRole}>Social Media Manager</p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.teamImgWrapper}>
                <img alt="Fouodji N. Steve - SEO Specialist" src="/assets/4.jpg"/>
              </div>
              <div>
                <h4 className={styles.teamName}>Fouodji N. Steve</h4>
                <p className={styles.teamRole}>Design Lead Specialist</p>
                <p className={styles.teamDescription}>A digital marketer with a strong focus on visual design and brand identity. As Design Lead, oversee the creative direction of projects, ensuring every design is clear, modern, and aligned with each client’s goals. Enjoy turning ideas into visuals that communicate effectively and leave a lasting impression.</p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.teamImgWrapper}>
                <img alt="Sofie Kedia - Content & Creative Lead" src="/assets/5.jpg"/>
              </div>
              <div>
                <h4 className={styles.teamName}>Sofie Kedia</h4>
                <p className={styles.teamRole}>Content & Creative Lead</p>
                <p className={styles.teamDescription}>Specializes in graphic design and UI/UX, creating clear and engaging visual experiences. Works across video editing and social media to ensure every piece of content is consistent, impactful, and aligned with the brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.successSection}>
        <div className={styles.successCard}>
          <div className={`${styles.confettiDot} ${styles.bgSky} ${styles.c1} ${styles.op40}`}></div>
          <div className={`${styles.confettiDot} ${styles.bgWhite} ${styles.c2} ${styles.op30}`}></div>
          <div className={`${styles.confettiSquare} ${styles.bgWhite} ${styles.c3} ${styles.op20}`}></div>
          <div className={`${styles.confettiDot} ${styles.bgSky} ${styles.c4} ${styles.op40}`}></div>
          <div className={`${styles.confettiSquare} ${styles.bgDark} ${styles.c5} ${styles.op10}`}></div>
          <div className={`${styles.confettiDot} ${styles.bgWhite} ${styles.c6} ${styles.op30}`}></div>
          
          <span className={`material-symbols-outlined ${styles.successIcon}`}>military_tech</span>
          <h3 className={styles.successTitle}>500+ Projects Delivered</h3>
          <p className={styles.successDesc}>
            Join our roster of successful global brands and take your digital presence to the next level.
          </p>
          <Link to="/contact" className={styles.successBtn}>
            Start a Success Story
          </Link>
        </div>
      </section>
    </>
  );
}
