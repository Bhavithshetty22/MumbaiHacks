import React from 'react';
import { BarChart3, Bell, Smartphone, Lock, TrendingUp, Users } from "lucide-react";
import './FeatureSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Background gradient orbs */}
      <div className="gradient-orb orb-indigo"></div>
      <div className="gradient-orb orb-cyan"></div>
      <div className="gradient-orb orb-purple-center"></div>

      <div className="container3">
        <div className="section-header">
          <h2 className="section-title">
            Advanced Tools for <span className="highlight-text">Professional Trading</span>
          </h2>
          <p className="section-description">
            Everything you need to succeed as a funded trader, with cutting-edge technology 
            and professional-grade tools working around the clock.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card card-indigo">
            <div className="feature-icon icon-indigo">
              <BarChart3 className="icon" />
            </div>
            <h3 className="feature-title">Advanced Analytics</h3>
            <p className="feature-description">
              Comprehensive trading analytics with performance metrics, risk analysis, 
              and detailed insights to optimize your trading strategy.
            </p>
          </div>

          <div className="feature-card card-purple">
            <div className="feature-icon icon-purple">
              <Bell className="icon" />
            </div>
            <h3 className="feature-title">Smart Alerts</h3>
            <p className="feature-description">
              Real-time notifications for market opportunities, risk management alerts, 
              and account status updates to keep you informed.
            </p>
          </div>

          <div className="feature-card card-cyan">
            <div className="feature-icon icon-cyan">
              <Smartphone className="icon" />
            </div>
            <h3 className="feature-title">Mobile Trading</h3>
            <p className="feature-description">
              Trade anywhere with our responsive mobile platform, featuring full 
              functionality and seamless synchronization across devices.
            </p>
          </div>

          <div className="feature-card card-green">
            <div className="feature-icon icon-green">
              <Lock className="icon" />
            </div>
            <h3 className="feature-title">Secure Platform</h3>
            <p className="feature-description">
              Enterprise-grade security with encrypted connections, secure data storage, 
              and compliance with industry financial standards.
            </p>
          </div>

          <div className="feature-card card-orange">
            <div className="feature-icon icon-orange">
              <TrendingUp className="icon" />
            </div>
            <h3 className="feature-title">Profit Optimization</h3>
            <p className="feature-description">
              AI-powered trading insights and profit maximization tools to help you 
              achieve consistent returns and scale your capital.
            </p>
          </div>

          <div className="feature-card card-blue">
            <div className="feature-icon icon-blue">
              <Users className="icon" />
            </div>
            <h3 className="feature-title">Community & Support</h3>
            <p className="feature-description">
              Join a community of funded traders with 24/7 support, educational resources, 
              and mentorship opportunities.
            </p>
          </div>
        </div>

        <div className="stats-banner">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-value stat-indigo">24/7</div>
              <div className="stat-label">Market Access</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value stat-purple">Real-time</div>
              <div className="stat-label">Execution</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value stat-cyan">$600K</div>
              <div className="stat-label">Max Capital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;