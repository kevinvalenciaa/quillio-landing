import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { StreamWidget, CanvasWidget, InsightWidget, PrivacyWidget } from './ui/DashboardWidgets';

interface FeatureBlockProps {
  title: string;
  description: string;
  widget: React.ReactNode;
  bgImage: string;
  reverse?: boolean;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description, widget, bgImage, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center py-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Text Side */}
      <div className={`order-2 ${reverse ? 'md:order-2' : 'md:order-1'} max-w-md ${reverse ? 'ml-auto' : ''}`}>
        <ScrollReveal>
            <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </ScrollReveal>
      </div>

      {/* Visual Side */}
      <div className={`order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <ScrollReveal delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 group border border-gray-100">
                {/* Background Art */}
                <img src={bgImage} alt="Feature Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                
                {/* Floating Widget Container */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                     <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                        {widget}
                     </div>
                </div>

                {/* Decorative floating UI elements */}
                <div className="absolute top-6 left-6 w-24 h-4 bg-white/60 rounded-full blur-[1px]"></div>
                <div className="absolute bottom-6 right-6 w-32 h-24 bg-white/30 rounded-lg border border-white/40 backdrop-blur-md"></div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-24">
            <ScrollReveal>
                <div className="inline-block bg-indigo-50 rounded-full px-3 py-1 text-xs font-medium text-brand-orange mb-4">
                    The Vision
                </div>
                <h2 className="text-4xl font-medium text-gray-900 mb-4">
                    A complete ecosystem <br/> for your mind.
                </h2>
                <p className="text-gray-500 text-sm">
                    Quillio recognizes that all thinking is connected—from your morning doubts to your career strategy.
                </p>
            </ScrollReveal>
        </div>

        <div className="space-y-12">
            {/* Feature 1: Stream Mode */}
            <FeatureBlock 
                title="Stream Mode: Capture the flow."
                description="A low-friction interface for daily reflection. Mix handwriting, voice, and text seamlessly. Quillio analyzes your entries in real-time to ask the right questions."
                widget={<StreamWidget />}
                bgImage="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop"
            />
            
            {/* Feature 2: Canvas Mode */}
            <FeatureBlock 
                reverse
                title="Canvas Mode: Deep spatial thinking."
                description="When daily reflection isn't enough, open a canvas. Map out complex decisions, strategy, and life pivots with an infinite whiteboard. Quillio acts as your partner, spotting contradictions and connecting dots."
                widget={<CanvasWidget />}
                bgImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop"
            />

            {/* Feature 3: Insights */}
            <FeatureBlock 
                title="Insights: Patterns, not just pages."
                description="See the patterns invisible to the naked eye. Quillio tracks your mood, topics, and goals over months, turning your history into a map for future growth."
                widget={<InsightWidget />}
                bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
            />

            {/* Feature 4: Privacy */}
            <FeatureBlock 
                reverse
                title="Privacy: Your mind, encrypted."
                description="Your thoughts are yours alone. With zero-knowledge encryption and optional on-device processing, even we can't read your journals."
                widget={<PrivacyWidget />}
                bgImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop"
            />
        </div>

      </div>
    </section>
  );
};