import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import styles from './Services.module.css';

export default function Services() {
  return (
    <>
      <SEO 
        title="Our Services"
        description="Explore our range of digital marketing services including SEO, PPC, social media management, content creation, and web development."
        url="/services"
      />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h2 className={styles.heroTitle}>
            Innovative Digital Marketing <br/>
            <span className={styles.heroAccent}>Solutions.</span>
          </h2>
          <p className={styles.heroDesc}>
            Transforming your vision into reality with comprehensive digital marketing strategies tailored to your business needs.
          </p>
        </section>

        <div className={styles.geometricDivider}>
          <div className={styles.geoDot}></div>
          <div className={styles.geoSquare1}></div>
          <div className={styles.geoLine}></div>
          <div className={styles.geoDot}></div>
          <div className={styles.geoSquare2}></div>
        </div>

        <section className={styles.whatWeDoSection}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.sectionDesc}>
            We provide end-to-end digital solutions designed to align creativity with business objectives:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              {/* <span className={`material-icons ${styles.listIcon}`}>check_circle</span> */}
              <i class="fa-solid fa-circle-check"></i>
              <span className={styles.listText}>Digital Marketing</span>
            </li>
            <li className={styles.listItem}>
              {/* <span className={`material-icons ${styles.listIcon}`}>check_circle</span> */}
              <i class="fa-solid fa-circle-check"></i>
              <span className={styles.listText}>Web Development & Digital Solutions</span>
            </li>
            <li className={styles.listItem}>
              {/* <span className={`material-icons ${styles.listIcon}`}>check_circle</span> */}
              <i class="fa-solid fa-circle-check"></i>
              <span className={styles.listText}>Graphic Design & Content Creation</span>
            </li>
            <li className={styles.listItem}>
              {/* <span className={`material-icons ${styles.listIcon}`}>check_circle</span> */}
              <i class="fa-solid fa-circle-check"></i>
              <span className={styles.listText}>Search Engine Optimization (SEO) & SEM</span>
            </li>
            <li className={styles.listItem}>
              {/* <span className={`material-icons ${styles.listIcon}`}>check_circle</span> */}
              <i class="fa-solid fa-circle-check"></i>
              <span className={styles.listText}>Email Marketing</span>
            </li>
            <li className={styles.listItem}>
              {/* <span className={`material-icons ${styles.listIcon}`}>check_circle</span> */}
              <i class="fa-solid fa-circle-check"></i>
              <span className={styles.listText}>Social Media Marketing & Management</span>
            </li>
          </ul>
        </section>

        <section className={styles.servicesGrid}>
          <div className={`${styles.card} ${styles.cardStandard}`}>
            <div className={`${styles.cardIconWrapper} ${styles.cardIconStandard}`}>
                <span className="material-symbols-outlined">search</span>
            </div>
            <h3 className={styles.cardTitle}>Search Engine Optimization</h3>
            <p className={styles.cardDesc}>Dominate search rankings and drive organic traffic with high-intent keyword strategies.</p>
            <div className={styles.cardLink}>
              Learn More
              <span className={`material-symbols-outlined ${styles.cardLinkIcon}`}>chevron_right</span>
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.featuredHeader}>
              <div className={`${styles.cardIconWrapper} ${styles.cardIconFeatured}`} style={{ marginBottom: 0 }}>
                <span className="material-symbols-outlined">ads_click</span>
              </div>
              <span className={styles.featuredBadge}>Popular</span>
            </div>
            <h3 className={styles.cardTitle}>Paid Advertising (PPC)</h3>
            <p className={styles.cardDesc}>Instant visibility and lead generation through targeted Google and Meta ad campaigns.</p>
            <div className={styles.cardLink}>
              Learn More
              <span className={`material-symbols-outlined ${styles.cardLinkIcon}`}>chevron_right</span>
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.cardStandard}`}>
            <div className={`${styles.cardIconWrapper} ${styles.cardIconStandard}`}>
                <span className="material-symbols-outlined">share</span>
            </div>
            <h3 className={styles.cardTitle}>Social Media Marketing</h3>
            <p className={styles.cardDesc}>Building communities and brand loyalty through strategic content and engagement.</p>
            <div className={styles.cardLink}>
              Learn More
              <span className={`material-symbols-outlined ${styles.cardLinkIcon}`}>chevron_right</span>
            </div>
          </div>
        </section>

        <div className={styles.dividerWrapper}>
          <div className={styles.divider}></div>
        </div>

        <section>
          <div className={styles.teamHeader}>
            <h2 className={styles.teamTitle}>Meet the Experts</h2>
            <p className={styles.teamSubtitle}>Specialists dedicated to your brand's growth.</p>
          </div>
          <div className={`${styles.teamScroll} no-scrollbar`}>
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <img alt="Nkwian Godwill Chia - CEO" src="/assets/1.jpg"/>
              </div>
              <h4 className={styles.teamName}>Nkwian Godwill Chia</h4>
              <p className={styles.teamRole}>CEO</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <img alt="Nde Nelly Anne - Marketing Manager" src="/assets/2.jpg"/>
              </div>
              <h4 className={styles.teamName}>Nde Nelly Anne</h4>
              <p className={styles.teamRole}>Marketing Lead</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <img alt="Azinwie Nelly - Social Media Manager" src="/assets/3.jpg"/>
              </div>
              <h4 className={styles.teamName}>Azinwie Nelly</h4>
              <p className={styles.teamRole}>Social Media Manager</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <img alt="Fouodji N. Steve - SEO Specialist" src="/assets/4.jpg"/>
              </div>
              <h4 className={styles.teamName}>Fouodji N. Steve</h4>
              <p className={styles.teamRole}>Design Lead</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImgWrapper}>
                <img alt="Sofie Kedia - Content & Creative Lead" src="/assets/5.jpg"/>
              </div>
              <h4 className={styles.teamName}>Sofie Kedia</h4>
              <p className={styles.teamRole}>Content & Creative Lead</p>
            </div>
          </div>
        </section>

        <div className={styles.dividerWrapper}>
          <div className={styles.divider}></div>
        </div>

        <section className={styles.caseStudiesSection}>
          <div className={styles.caseStudiesHeader}>
            <h2 className={styles.sectionTitle}>Case Studies</h2>
            <p className={styles.sectionDesc}>
              Real projects. Real results. See how we turn bold ideas into impactful digital experiences that move the needle.
            </p>
          </div>
          <div className={styles.caseStudiesList}>
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyImgWrapper}>
                <img src="/assets/case_studies/1.jpg" alt="AI-Powered Creative Assistant for Artists" className={styles.caseStudyImg} />
                <div className={styles.caseStudyBadge}>Hackathon · 48 hrs</div>
              </div>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>AI-Powered Creative Assistant for Artists</h3>
                <p className={styles.caseStudyDesc}>
                  Built during the CIMFest Hackathon in just 48 hours, this platform was designed to supercharge the creative workflow for independent artists. It brings together three core pillars — music creation, content production, and personal branding — all in one seamless experience. Artists can generate and refine lyrics using AI, receive intelligent feedback to improve their sound, and automatically produce platform-optimized captions, hashtags, and visual branding assets. Whether releasing a single or growing a fanbase, the assistant keeps your creative voice consistent while scaling your reach effortlessly.
                </p>
                <div className={styles.caseStudyTags}>
                  <span className={styles.tag}>AI Integration</span>
                  <span className={styles.tag}>Music & Content</span>
                  <span className={styles.tag}>Personal Branding</span>
                </div>
                <p className={styles.caseStudyTagline}>Create smarter. Brand better. Stay consistent.</p>
              </div>
            </div>

            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyImgWrapper}>
                <img src="/assets/case_studies/2.jpg" alt="Structured Digital Marketplace Platform" className={styles.caseStudyImg} />
                <div className={`${styles.caseStudyBadge} ${styles.caseStudyBadgeAlt}`}>Digital Commerce</div>
              </div>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>Structured Digital Marketplace Platform</h3>
                <p className={styles.caseStudyDesc}>
                  A purpose-built digital marketplace designed to bridge the gap between opportunity and execution. The platform connects buyers and sellers through a thoughtfully structured ecosystem, while equipping individuals with the tools, systems, and guided processes needed to launch and grow sustainable online businesses. From storefront setup and inventory management to sales funnel optimization and business analytics, every feature is engineered to reduce friction and accelerate growth — empowering entrepreneurs at every stage to move with confidence and scale with clarity.
                </p>
                <div className={styles.caseStudyTags}>
                  <span className={styles.tag}>E-Commerce</span>
                  <span className={styles.tag}>Business Systems</span>
                  <span className={styles.tag}>Growth Strategy</span>
                </div>
                <p className={styles.caseStudyTagline}>Connect. Build. Scale.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaAccent1}></div>
            <div className={styles.ctaAccent2}></div>
            <h3 className={styles.ctaTitle}>Ready to scale?</h3>
            <p className={styles.ctaDesc}>Let's build a custom roadmap for your digital success.</p>
            <Link to="/contact" className={styles.ctaLink}>
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
