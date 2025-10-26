import React, { useEffect, useRef } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
  const featureRefs = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          // Remove class when element leaves viewport to allow re-animation
          entry.target.classList.remove('animated');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all refs
    const elementsToObserve = [
      titleRef.current,
      subtitleRef.current,
      ...featureRefs.current
    ].filter(Boolean);

    elementsToObserve.forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Streamline Your Beauty Business</h1>
            <p className="hero-subtitle">
              The ultimate appointment management platform for beauticians, stylists, nail artists, and barbers. 
              Grow your business with effortless scheduling.
            </p>
            
            <div className="hero-cta">
              <button className="primary-btn">Start Free Trial</button>
              <button className="secondary-btn">Watch Demo</button>
            </div>
            
            <p style={{opacity: 0.8, fontSize: '0.9rem'}}>
              ✨ No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2 ref={titleRef} className="section-title animate-on-scroll">Everything You Need to Succeed</h2>
          <p ref={subtitleRef} className="section-subtitle animate-on-scroll">
            Powerful tools designed specifically for beauty professionals to manage appointments, 
            clients, and grow their business.
          </p>
          
          <div className="features-grid">
            <div ref={el => featureRefs.current[0] = el} className="feature-card animate-on-scroll">
              <div className="feature-icon">📅</div>
              <h3>Smart Scheduling</h3>
              <p>Intelligent appointment booking with automated confirmations, reminders, and rescheduling. Your calendar works for you 24/7.</p>
            </div>
            
            <div ref={el => featureRefs.current[1] = el} className="feature-card animate-on-scroll">
              <div className="feature-icon">👥</div>
              <h3>Client Management</h3>
              <p>Comprehensive client profiles with service history, preferences, and notes. Build stronger relationships and deliver personalized experiences.</p>
            </div>
            
            <div ref={el => featureRefs.current[2] = el} className="feature-card animate-on-scroll">
              <div className="feature-icon">💳</div>
              <h3>Integrated Payments(Coming soon..)</h3>
              <p>Accept payments seamlessly with built-in processing. Send invoices, track payments, and manage your finances all in one place.</p>
            </div>
            
            <div ref={el => featureRefs.current[3] = el} className="feature-card animate-on-scroll">
              <div className="feature-icon">📱</div>
              <h3>Mobile First(Coming soon..)</h3>
              <p>Native mobile apps for iOS and Android. Manage your business on-the-go with full functionality in your pocket.</p>
            </div>
            
            <div ref={el => featureRefs.current[4] = el} className="feature-card animate-on-scroll">
              <div className="feature-icon">📊</div>
              <h3>Business Analytics</h3>
              <p>Detailed insights into your performance, revenue trends, and client behavior. Make data-driven decisions to grow your business.</p>
            </div>
            
            <div ref={el => featureRefs.current[5] = el} className="feature-card animate-on-scroll">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security with automatic backups. Your data is protected with bank-level encryption and 99.9% uptime.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join thousands of beauty professionals who trust KRASA to manage their appointments and grow their business.</p>
          <button className="primary-btn" style={{background: 'white', color: '#D6A77A'}}>
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      <section id="contact" className="section-contact">
        <div className="container">
          <h2>Contact us</h2>
          <ul className="contact-list">
            <li><strong>Email:</strong> <a href="mailto:support@krasa.app">support@krasa.app</a></li>
            <li><strong>Instagram:</strong> @krasa.app</li>
            <li><strong>Telegram:</strong> @example_tg</li>
            <li><strong>WhatsApp:</strong> @example_whatsapp</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
