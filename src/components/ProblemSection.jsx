import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";
import './ProblemSection.css';

const ProblemSection = () => {
  return (
    <section className="problem-section">
      {/* Background gradient orbs */}
      <div className="gradient-orb orb-red"></div>
      <div className="gradient-orb orb-orange"></div>
      <div className="gradient-orb orb-purple"></div>

      <div className="container1">
        <div className="section-header">
          <h2 className="section-title">
            The Trading Challenge <span className="highlight-text">Problem</span>
          </h2>
          <p className="section-description">
            Aspiring traders and experienced professionals struggle with inadequate funding, 
            restrictive rules, and platforms that don't support their growth potential.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon icon-red">
              <TrendingDown className="icon" />
            </div>
            <h3 className="problem-title">Limited Capital</h3>
            <p className="problem-text">
              Personal trading accounts restrict potential profits due to limited capital availability
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon icon-orange">
              <AlertTriangle className="icon" />
            </div>
            <h3 className="problem-title">High Risk</h3>
            <p className="problem-text">
              Trading with personal funds puts your financial security at risk with every position
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon icon-yellow">
              <Clock className="icon" />
            </div>
            <h3 className="problem-title">Slow Growth</h3>
            <p className="problem-text">
              Traditional funding methods take years to accumulate significant trading capital
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon icon-purple">
              <DollarSign className="icon" />
            </div>
            <h3 className="problem-title">Profit Limitations</h3>
            <p className="problem-text">
              Small accounts mean small profits, making it difficult to scale your trading career
            </p>
          </div>
        </div>

        <div className="stats-banner">
          <div className="stats-content">
            <AlertTriangle className="stats-icon" />
            <span className="stats-text">
              <span className="stats-number">85%</span> of traders struggle with insufficient capital
              to reach their full potential
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;