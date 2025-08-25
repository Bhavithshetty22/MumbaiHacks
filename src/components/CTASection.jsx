import { ArrowRight, CheckCircle, Star } from "lucide-react"
import "./CTASection.css"

export default function CTASection() {
  return (
    <section className="cta-section">
      {/* Background gradient orbs */}
      <div className="background-orb"></div>

      <div className="container5">
        <div className="testimonial-section">
          <div className="stars-container">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="star" />
            ))}
          </div>
          <p className="testimonial">
            "This AI agent completely transformed how I manage my finances. I've saved $3,000 more this year!"
            <span className="testimonial-author"> - Sarah K., Marketing Manager</span>
          </p>
        </div>

        <h2 className="main-heading">
          Take Control of Your <span className="highlight">Financial Future</span>
        </h2>

        <p className="sub-heading">
          Stop letting financial stress hold you back. Join thousands who have already transformed their money
          management with intelligent AI assistance.
        </p>

        <div className="buttons-container">
          <button className="btn-primary">
            Start Your Free Trial
            <ArrowRight className="arrow-icon" />
          </button>
          <button className="btn-secondary">
            Schedule Demo
          </button>
        </div>

        <div className="features1-grid">
          <div className="feature-item">
            <CheckCircle className="check-icon" />
            <span>14-day free trial</span>
          </div>
          <div className="feature-item">
            <CheckCircle className="check-icon" />
            <span>No credit card required</span>
          </div>
          <div className="feature-item">
            <CheckCircle className="check-icon" />
            <span>Cancel anytime</span>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number stat-blue">10,000+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number stat-green">$2.5M+</div>
              <div className="stat-label">Money Saved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number stat-purple">4.9/5</div>
              <div className="stat-label">User Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number stat-orange">24/7</div>
              <div className="stat-label">AI Monitoring</div>
            </div>
          </div>
        </div>

        <div className="trust-message">
          <p>Trusted by young professionals and small business owners worldwide</p>
        </div>
      </div>
    </section>
  )
}