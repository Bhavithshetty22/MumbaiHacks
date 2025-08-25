import React from 'react';
import { UserPlus, Brain, Zap, TrendingUp } from "lucide-react";
import './HowItWorksSection.css';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      {/* Background gradient orbs */}
      <div className="gradient-orb orb-violet"></div>
      <div className="gradient-orb orb-pink"></div>
      <div className="gradient-orb orb-blue-center"></div>

      <div className="container4">
        <div className="section-header">
          <h2 className="section-title">
            How It <span className="highlight-text">Works</span>
          </h2>
          <p className="section-description">
            Get funded in just 4 simple steps and start trading with up to $600K 
            simulated capital while keeping 100% of your profits.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-item">
            <div className="step-icon-wrapper">
              <div className="step-icon icon-violet">
                <UserPlus className="icon" />
              </div>
              <div className="step-number number-violet">1</div>
            </div>
            <h3 className="step-title">Choose Your Challenge</h3>
            <p className="step-description">
              Select your preferred account size and challenge parameters. 
              Start with as little as $10K or go big with $200K starting capital.
            </p>
          </div>

          <div className="step-item">
            <div className="step-icon-wrapper">
              <div className="step-icon icon-blue">
                <Brain className="icon" />
              </div>
              <div className="step-number number-blue">2</div>
            </div>
            <h3 className="step-title">Prove Your Skills</h3>
            <p className="step-description">
              Demonstrate consistent profitability by meeting the profit target 
              while staying within risk parameters during the evaluation period.
            </p>
          </div>

          <div className="step-item">
            <div className="step-icon-wrapper">
              <div className="step-icon icon-green">
                <Zap className="icon" />
              </div>
              <div className="step-number number-green">3</div>
            </div>
            <h3 className="step-title">Get Funded Instantly</h3>
            <p className="step-description">
              Pass the challenge and receive your funded account immediately. 
              Start trading with real simulated capital and professional tools.
            </p>
          </div>

          <div className="step-item">
            <div className="step-icon-wrapper">
              <div className="step-icon icon-orange">
                <TrendingUp className="icon" />
              </div>
              <div className="step-number number-orange">4</div>
            </div>
            <h3 className="step-title">Scale Your Capital</h3>
            <p className="step-description">
              Keep 100% of profits and scale up to $600K through our progressive 
              capital allocation system based on consistent performance.
            </p>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">
                Ready to become a <span className="cta-highlight">funded trader?</span>
              </h3>
              <p className="cta-description">
                Join over 10,000+ traders who have already started their journey to financial freedom. 
                Get access to professional trading tools and capital without risking your own money.
              </p>
              <div className="cta-buttons">
                <button className="cta-primary">
                  Start Challenge →
                </button>
                <button className="cta-secondary">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="cta-dashboard">
              <div className="dashboard-widget">
                <div className="widget-header">
                  <span className="widget-label">Challenge Progress</span>
                  <span className="widget-status">Day 15/30</span>
                </div>
                <div className="progress-items">
                  <div className="progress-item">
                    <div className="progress-info">
                      <span className="progress-label">Profit Target</span>
                      <span className="progress-value">$8,250 / $10,000</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill fill-green" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-info">
                      <span className="progress-label">Max Drawdown</span>
                      <span className="progress-value">-$1,200 / -$5,000</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill fill-orange" style={{width: '24%'}}></div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <div className="progress-info">
                      <span className="progress-label">Win Rate</span>
                      <span className="progress-value success">78%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill fill-blue" style={{width: '78%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;