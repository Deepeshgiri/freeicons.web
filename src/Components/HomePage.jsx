import React from 'react';
import './HomePage.css';
import { FiStar, FiCode, FiPackage } from 'react-icons/fi';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to FreeIcons</h1>
        <p>Your go-to source for customizable SVG icons!</p>
        <a href="/icons" className="button-primary">Explore Icons</a>
      </header>
      <section className="features">
        <div className="feature">
          <FiStar className="feature-icon" />
          <h2>Easy to Use</h2>
          <p>Quickly integrate icons into your project with simple imports and customization options.</p>
        </div>
        <div className="feature">
          <FiCode className="feature-icon" />
          <h2>Fully Customizable</h2>
          <p>Modify and style the icons to fit your needs, or contribute your own designs to the library.</p>
        </div>
        <div className="feature">
          <FiPackage className="feature-icon" />
          <h2>Ready to Use</h2>
          <p>Install with npm and start using the icons immediately. Our package is designed for ease of integration.</p>
        </div>
      </section>
      <section className="cta">
        <h2>Get Started Today</h2>
        <p>Check out our <a href="/usage">Usage Instructions</a> to learn how to integrate FreeIcons into your project.</p>
        <a href="https://github.com/your-repo/freeicons" target="_blank" rel="noopener noreferrer" className="button-primary">View on GitHub</a>
      </section>
    </div>
  );
};

export default HomePage;
