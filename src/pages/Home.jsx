import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import SEO from '../components/SEO';
import styles from './Home.module.css';

export default function Home() {
  const triggerConfetti = (originY = 0.6) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: originY }
    });
  };

  const ctaConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.8 }
    });
  };

  const finalCtaConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target + (target < 100 ? '' : '+');
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current) + (target < 100 ? '' : '+');
        }
      }, 16);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.counter').forEach(counter => {
      counterObserver.observe(counter);
    });

    return () => {
      counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency"
        description="Crelova creative helps businesses grow through comprehensive digital marketing, SEO, PPC, web development, and social media strategies."
        url="/"
      />
      <div className={styles.homeHeroWrapper}>
        <div className="relative overflow-hidden">
          <div className="confetti confetti-blue top-10 left-[10%] rotate-12"></div>
          <div className="confetti confetti-yellow top-24 left-[80%] rotate-45"></div>
          <div className="confetti confetti-green top-60 left-[15%] rotate-[30deg]"></div>
          <div className="confetti confetti-blue bottom-20 left-[70%] -rotate-12"></div>
          <div className="confetti confetti-yellow bottom-10 left-[5%] rotate-12"></div>
          <div className="confetti confetti-green top-1/2 left-[90%] rotate-90"></div>
          
          <div 
            className={styles.homeHero} 
            style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")' }}
          >
            <div className="flex flex-col gap-3 text-left">
              <span className={styles.heroTag}>Transforming Vision into Reality</span>
              <h1 className={styles.heroTitle}>
                Empowering Brands with Cutting-Edge Digital Strategies
              </h1>
              <p className={styles.heroText}>
                We are dedicated to transforming your vision into a successful reality through innovative digital marketing solutions.
              </p>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={() => triggerConfetti()} className={styles.primaryBtn}>
                Work With Us
              </button>
              <Link to="/services" className={styles.outlineBtn}>
                Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Experience</p>
          <p className={`${styles.statValue} counter`} data-target="30">0</p>
          <p className={styles.statDesc}>Projects Delivered</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Retention</p>
          <p className={`${styles.statValue} counter`} data-target="98">0%</p>
          <p className={styles.statDesc}>Client Satisfaction</p>
        </div>
      </div>

      <section className={styles.sectionSurface}>
        <div className="container">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 className={styles.sectionTitle}>Core Services</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionDesc}>Purpose-built digital marketing solutions that stay true to your brand aesthetic.</p>
          </div>
          <div className={styles.serviceList}>
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="50">
              <div className={styles.serviceText}>
                <span className={styles.serviceTag}>Digital Marketing</span>
                <p className={styles.serviceDesc}>Full-spectrum campaigns that build brand awareness, generate qualified leads, and drive revenue across every channel your audience uses.</p>
              </div>
              <div className={styles.serviceIllus}>
                <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="26" width="100" height="88" rx="12" fill="var(--color-bg-light)" stroke="var(--color-accent)" strokeWidth="4"/>
                  <rect x="24" y="42" width="72" height="10" rx="5" fill="var(--color-primary)"/>
                  <rect x="24" y="60" width="56" height="8" rx="4" fill="var(--color-secondary)"/>
                  <rect x="24" y="76" width="40" height="8" rx="4" fill="var(--color-sky)"/>
                  <circle cx="172" cy="54" r="28" fill="rgba(59,130,246,0.12)" stroke="var(--color-accent)" strokeWidth="3"/>
                  <path d="M162 54 L170 44 L180 54 L170 64 Z" fill="var(--color-secondary)"/>
                  <path d="M124 102 Q144 80 162 92 Q178 102 196 84" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <circle cx="124" cy="102" r="4" fill="var(--color-accent)"/>
                  <circle cx="196" cy="84" r="4" fill="var(--color-accent)"/>
                </svg>
              </div>
            </div>

            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="130">
              <div className={styles.serviceText}>
                <span className={styles.serviceTag}>Social Media Marketing</span>
                <p className={styles.serviceDesc}>Campaign planning, content calendars, and community engagement that keep your brand consistent across channels.</p>
              </div>
              <div className={styles.serviceIllus}>
                 <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="20" width="140" height="90" rx="12" fill="var(--color-bg-light)" stroke="var(--color-accent)" strokeWidth="4"/>
                  <rect x="24" y="36" width="112" height="12" rx="6" fill="var(--color-primary)"/>
                  <rect x="24" y="58" width="90" height="10" rx="5" fill="var(--color-secondary)"/>
                  <rect x="24" y="78" width="72" height="10" rx="5" fill="var(--color-sky)"/>
                  <circle cx="170" cy="60" r="22" fill="var(--color-secondary)"/>
                  <path d="M160 62l8 8 14-18" stroke="#313647" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="210">
              <div className={styles.serviceText}>
                <span className={styles.serviceTag}>Pay-Per-Click Advertising</span>
                <p className={styles.serviceDesc}>Precise targeting, budget control, and conversion-focused creative to maximize every click.</p>
              </div>
              <div className={styles.serviceIllus}>
                 <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="18" y="26" width="140" height="88" rx="10" fill="var(--color-bg-light)" stroke="var(--color-accent)" strokeWidth="4"/>
                  <rect x="34" y="44" width="54" height="12" rx="6" fill="var(--color-primary)"/>
                  <rect x="34" y="64" width="90" height="10" rx="5" fill="var(--color-secondary)"/>
                  <rect x="34" y="82" width="60" height="10" rx="5" fill="var(--color-sky)"/>
                  <path d="M150 44h44v52h-44z" fill="var(--color-secondary)" stroke="#313647" strokeWidth="3"/>
                  <path d="M160 74l12 12 16-22" stroke="#313647" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className={styles.serviceCard} data-aos="fade-up" data-aos-delay="290">
              <div className={styles.serviceText}>
                <span className={styles.serviceTag}>Web Design & Development</span>
                <p className={styles.serviceDesc}>Responsive sites built for speed, accessibility, and clear user journeys that convert.</p>
              </div>
              <div className={styles.serviceIllus}>
                <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="14" y="22" width="150" height="96" rx="12" fill="var(--color-bg-light)" stroke="var(--color-accent)" strokeWidth="4"/>
                  <rect x="30" y="40" width="118" height="12" rx="6" fill="var(--color-primary)"/>
                  <rect x="30" y="60" width="96" height="10" rx="5" fill="var(--color-secondary)"/>
                  <rect x="30" y="78" width="70" height="10" rx="5" fill="var(--color-sky)"/>
                  <path d="M176 102h28" stroke="#313647" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M192 82v40" stroke="#313647" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.teamHeader}>
        <div>
          <h2 className={styles.teamTitle}>Our Experts</h2>
          <p className={styles.teamDesc}>Led by industry veterans</p>
        </div>
        <button className={styles.viewAllBtn}>View All</button>
      </div>
      
      <div className={styles.teamGrid}>
        <div className={styles.teamMember}>
          <div className={styles.teamImgWrapper}>
            <img alt="Nkwian Godwill Chia - CEO" src="/assets/1.jpg"/>
          </div>
          <div>
            <h4 className={styles.teamName}>Nkwian Godwill Chia</h4>
            <p className={styles.teamRole}>CEO</p>
            <p className={styles.teamExp}>Facebook & Google Ads • E-Commerce</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.teamImgWrapper}>
            <img alt="Nde Nelly Anne" src="/assets/2.jpg"/>
          </div>
          <div>
            <h4 className={styles.teamName}>Nde Nelly Anne</h4>
            <p className={styles.teamRole}>Marketing Lead</p>
            <p className={styles.teamExp}>Influencer Marketing • PR</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.teamImgWrapper}>
            <img alt="Azinwie Nelly" src="/assets/3.jpg"/>
          </div>
          <div>
            <h4 className={styles.teamName}>Azinwie Nelly</h4>
            <p className={styles.teamRole}>Social Media Manager</p>
            <p className={styles.teamExp}>Content Strategy</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.teamImgWrapper}>
            <img alt="Fouodji N. Steve" src="/assets/4.jpg"/>
          </div>
          <div>
            <h4 className={styles.teamName}>Fouodji N. Steve</h4>
            <p className={styles.teamRole}>Design Lead</p>
            <p className={styles.teamExp}>SEO • SEM</p>
          </div>
        </div>
        <div className={styles.teamMember}>
          <div className={styles.teamImgWrapper}>
            <img alt="Sofie Kedia - Content & Creative Lead" src="/assets/5.jpg"/>
          </div>
          <div>
            <h4 className={styles.teamName}>Sofie Kedia</h4>
            <p className={styles.teamRole}>Content & Creative Lead</p>
            <p className={styles.teamExp}>Graphic Design & UI/UX • Video Editing</p>
          </div>
        </div>
      </div>

      <div className={styles.ctaWrapper} data-aos="fade-up">
        <h2 className={styles.ctaTitle}>Ready to scale your business?</h2>
        <p className={styles.ctaDesc}>Schedule a 30-minute discovery call with our experts today.</p>
        <button onClick={ctaConfetti} className={styles.ctaBtn}>
          Book Discovery Call
        </button>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 className={styles.sectionTitle}>Our Proven Process</h2>
            <p className={styles.sectionDesc}>A systematic approach to digital excellence that has delivered results for over 500 clients worldwide.</p>
          </div>
          <div className={styles.processGrid}>
            <div className="scale-hover" data-aos="fade-up" data-aos-delay="100">
              <div className={`${styles.processCard} card-shine`}>
                <div className={`${styles.processIcon} float-animation`}>
                  <span className={styles.processNum}>01</span>
                </div>
                <h3 className={styles.processTitle}>Discovery</h3>
                <p className={styles.processDesc}>Deep dive into your business goals, target audience, and competitive landscape.</p>
              </div>
            </div>
            <div className="scale-hover" data-aos="fade-up" data-aos-delay="200">
              <div className={`${styles.processCard} card-shine`}>
                <div className={`${styles.processIcon} float-animation-delayed`}>
                  <span className={styles.processNum}>02</span>
                </div>
                <h3 className={styles.processTitle}>Strategy</h3>
                <p className={styles.processDesc}>Craft a data-driven roadmap tailored to your unique challenges and opportunities.</p>
              </div>
            </div>
            <div className="scale-hover" data-aos="fade-up" data-aos-delay="300">
              <div className={`${styles.processCard} card-shine`}>
                <div className={`${styles.processIcon} float-animation`}>
                  <span className={styles.processNum}>03</span>
                </div>
                <h3 className={styles.processTitle}>Execute</h3>
                <p className={styles.processDesc}>Launch campaigns with precision, leveraging cutting-edge tools and techniques.</p>
              </div>
            </div>
            <div className="scale-hover" data-aos="fade-up" data-aos-delay="400">
              <div className={`${styles.processCard} card-shine`}>
                <div className={`${styles.processIcon} float-animation-delayed`}>
                  <span className={styles.processNum}>04</span>
                </div>
                <h3 className={styles.processTitle}>Optimize</h3>
                <p className={styles.processDesc}>Continuous testing and refinement to maximize ROI and scale performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionSurface} relative overflow-hidden`}>
        <div className="container">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 className={styles.sectionTitle}>Powered by Cutting-Edge Technology</h2>
            <p className={styles.sectionDesc}>Trusted platforms that keep campaigns measurable, repeatable, and ready to scale.</p>
          </div>
          <div className={styles.techGrid}>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="60">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleanalytics.svg" alt="Google Analytics" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>Google Analytics</h4>
              <p className={styles.techCategory}>Insight dashboards</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="120">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/semrush.svg" alt="SEMrush" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>SEMrush</h4>
              <p className={styles.techCategory}>SEO research</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="180">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg" alt="HubSpot" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>HubSpot</h4>
              <p className={styles.techCategory}>CRM & automation</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="240">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mailchimp.svg" alt="Mailchimp" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>Mailchimp</h4>
              <p className={styles.techCategory}>Email journeys</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="300">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" alt="Zapier" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>Zapier</h4>
              <p className={styles.techCategory}>Workflow ops</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="360">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg" alt="Shopify" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>Shopify</h4>
              <p className={styles.techCategory}>Ecommerce</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="420">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hootsuite.svg" alt="Hootsuite" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>Hootsuite</h4>
              <p className={styles.techCategory}>Social scheduling</p>
            </div>
            <div className={styles.techCard} data-aos="fade-up" data-aos-delay="480">
              <div className={styles.techIcon}>
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" alt="Notion" loading="lazy"/>
              </div>
              <h4 className={styles.techName}>Notion</h4>
              <p className={styles.techCategory}>Content ops</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionSurface}>
        <div className="container">
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 className={styles.sectionTitle}>Why Choose Crelova creative</h2>
            <p className={styles.sectionDesc}>We're not just another agency. We're your strategic growth partner committed to your success.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className="scale-hover" data-aos="flip-left" data-aos-delay="100">
              <div className={`${styles.featureCard} card-shine`}>
                <div className={`${styles.featureIcon} float-animation`}>
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h3 className={styles.processTitle}>Expertise and Experience</h3>
                <p className={styles.processDesc}>Our team brings years of industry knowledge to deliver exceptional results.</p>
              </div>
            </div>
            <div className="scale-hover" data-aos="flip-left" data-aos-delay="200">
              <div className={`${styles.featureCard} card-shine`}>
                <div className={`${styles.featureIcon} float-animation-delayed`}>
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3 className={styles.processTitle}>Results-Driven Approach</h3>
                <p className={styles.processDesc}>We focus on measurable outcomes that directly impact your business growth.</p>
              </div>
            </div>
            <div className="scale-hover" data-aos="flip-left" data-aos-delay="300">
              <div className={`${styles.featureCard} card-shine`}>
                <div className={`${styles.featureIcon} float-animation`}>
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
                <h3 className={styles.processTitle}>Customized Strategies</h3>
                <p className={styles.processDesc}>Tailored solutions designed specifically for your unique business goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionDesc}>Got questions? We've got answers.</p>
          </div>
          <div className={styles.faqSpace}>
            <div className={`${styles.featureCard} card-shine`} data-aos="fade-right">
              <h3 className={styles.processTitle}>How long does it take to see results?</h3>
              <p className={styles.processDesc}>Most clients start seeing measurable improvements within 30-60 days. However, significant ROI typically manifests within 3-6 months as campaigns mature and optimization takes effect.</p>
            </div>
            <div className={`${styles.featureCard} card-shine`} data-aos="fade-left">
              <h3 className={styles.processTitle}>What industries do you specialize in?</h3>
              <p className={styles.processDesc}>We've worked across diverse industries including e-commerce, SaaS, fintech, healthcare, and B2B services. Our data-driven approach adapts to any market sector.</p>
            </div>
            <div className={`${styles.featureCard} card-shine`} data-aos="fade-right">
              <h3 className={styles.processTitle}>Do you offer custom packages?</h3>
              <p className={styles.processDesc}>Absolutely! Every business is unique. We create tailored strategies and packages that align with your specific goals, budget, and growth objectives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} data-aos="zoom-in">
        <div className={styles.finalCtaInner}>
          <div className={`${styles.finalIcon} rotate-slow`}>
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <h2 className={styles.finalTitle}>Let's Build Something Amazing Together</h2>
          <p className={styles.finalDesc}>Join hundreds of satisfied clients who have transformed their digital presence with Crelova creative.</p>
          <div className={styles.finalBtns}>
            <Link to="/contact" onClick={finalCtaConfetti} className={styles.finalPrimaryBtn}>
              Get Started Today
            </Link>
            <Link to="/services" className={styles.finalOutlineBtn}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
