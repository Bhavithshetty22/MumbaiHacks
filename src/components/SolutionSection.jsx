import React from 'react';
import { Brain, Zap, Shield, Target } from "lucide-react";
import './SolutionSection.css';

const SolutionSection = () => {
  return (
    <section className="solution-section">
      {/* Background gradient orbs */}
      <div className="gradient-orb orb-blue"></div>
      <div className="gradient-orb orb-purple-left"></div>
      <div className="gradient-orb orb-orange-center"></div>

      <div className="container2">
        <div className="section-header">
          <h2 className="section-title">
            Meet Your <span className="highlight-text">Advanced Trading Platform</span>
          </h2>
          <p className="section-description">
            A comprehensive trading ecosystem that provides simulated capital, real-time market access, 
            and professional-grade tools to accelerate your trading career.
          </p>
        </div>

        <div className="content-grid">
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon icon-blue">
                <Brain className="icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Smart Capital Allocation</h3>
                <p className="feature-description">
                  Advanced algorithms assess your trading performance and progressively increase your 
                  simulated capital allocation up to $600K based on proven results.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-purple">
                <Zap className="icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Real-Time Execution</h3>
                <p className="feature-description">
                  Lightning-fast order execution with direct market access, ensuring you never miss 
                  profitable opportunities in volatile market conditions.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-green">
                <Shield className="icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Risk Management Tools</h3>
                <p className="feature-description">
                  Built-in risk controls and drawdown protection keep your account safe while allowing 
                  maximum profit potential within defined parameters.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon icon-orange">
                <Target className="icon" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Performance Analytics</h3>
                <p className="feature-description">
                  Comprehensive trading analytics track your progress, identify improvement areas, 
                  and optimize your strategy for consistent profitability.
                </p>
              </div>
            </div>
          </div>

          <div className="dashboard-preview">
            <div className="dashboard-card">
              <div className="dashboard-content">
                <div className="dashboard-header">
                  <span className="dashboard-label">Account Performance</span>
                  <span className="dashboard-value profit">+$24,750</span>
                </div>

                <div className="metric-item">
                  <div className="metric-info">
                    <span className="metric-label">Current Capital</span>
                    <span className="metric-status status-active">✓ Active</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill progress-green" style={{width: '85%'}}></div>
                  </div>
                  <span className="metric-amount">$150,000 / $600,000</span>
                </div>

                <div className="metric-item">
                  <div className="metric-info">
                    <span className="metric-label">Profit Target</span>
                    <span className="metric-status status-progress">↗ In Progress</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill progress-blue" style={{width: '68%'}}></div>
                  </div>
                  <span className="metric-amount">$10,200 / $15,000</span>
                </div>

                <div className="metric-item">
                  <div className="metric-info">
                    <span className="metric-label">Max Drawdown</span>
                    <span className="metric-status status-safe">Safe</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill progress-orange" style={{width: '25%'}}></div>
                  </div>
                  <span className="metric-amount">-$2,500 / -$10,000</span>
                </div>

                <div className="ai-notification">
                  <div className="notification-header">
                    <div className="pulse-dot"></div>
                    <span className="notification-label">Platform Update</span>
                  </div>
                  <p className="notification-text">
                    Capital increased to $150K based on consistent performance over 30 trading days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;