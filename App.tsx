import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSection } from './components/ProblemSection';
import { GuardianSection } from './components/GuardianSection';
import { ModesSection } from './components/ModesSection';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { PrivacySection } from './components/PrivacySection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent/20 selection:text-brand-text font-sans antialiased">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <GuardianSection />
      <ModesSection />
      <HowItWorks />
      <UseCases />
      <PrivacySection />
      <Footer />
    </div>
  );
}

export default App;