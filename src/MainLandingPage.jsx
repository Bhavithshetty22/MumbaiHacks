import React from 'react'
import CTASection from './components/CtaSection'
import FeaturesSection from './components/FeatureSection'
import HowItWorksSection from './components/HowItWorksSection'
import Landing from './components/landing'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'

const MainLandingPage = () => {
  return (
    <div>
        <Landing />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
    </div>

  )
}

export default MainLandingPage