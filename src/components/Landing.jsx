import React from 'react';
import { Play } from 'lucide-react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="container">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-icon">🏁</span>
            <span className="logo-text">QNTUM</span>
            <span className="logo-subtitle">Finance</span>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Plans</a>
            <a href="#" className="nav-link">How It Works</a>
            <a href="#" className="nav-link">Affiliates</a>
            <a href="#" className="nav-link">FAQ</a>
          </div>
        </div>
        <div className="nav-right">
          <button className="discord-btn">
            <span className="discord-icon">💬</span>
            Discord
          </button>
          <button className="login-btn">Login</button>
          <button className="get-funded-btn">Get Funded →</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-left">
          <div className="trading-program">
            <span className="program-badge">Trading Program</span>
            <span className="learn-text">Learn How It Works →</span>
          </div>
          
          <h1 className="main-heading">
            Manage<br />
            simulated capital<br />
            up to <span className="highlight">$600K</span>
          </h1>
          
          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Profit split</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Challenge step</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>

        <div className="content-right">
         
          
          <div className="description">
            <p>
              Demonstrate your trading prowess, complete<br />
              the challenge, and receive allocated simulated<br />
              capital up to $600K to trade with. Manage<br />
              futures market without risking your own capital.
            </p>
          </div>
          
          <div className="action-buttons">
            <button className="get-funded-main">Get Funded →</button>
            <button className="join-discord">Join our Discord</button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </main>
    </div>
  );
};

export default Landing;