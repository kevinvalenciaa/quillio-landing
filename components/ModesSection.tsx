import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { StreamWidget, CanvasWidget, InsightWidget } from './ui/DashboardWidgets';

const ModeCard: React.FC<{
    title: string;
    subtitle: string;
    description: string;
    widget: React.ReactNode;
    delay: number;
}> = ({ title, subtitle, description, widget, delay }) => (
    <div className="flex-1 bg-white/5 rounded-3xl p-2 shadow-lg border border-white/5 hover:shadow-xl hover:border-white/10 transition-all duration-500 group flex flex-col h-full">
        <div className="bg-white/5 rounded-2xl p-8 flex items-center justify-center h-[300px] overflow-hidden relative group-hover:bg-white/10 transition-colors">
             {/* Widget Wrapper with hover lift */}
             <div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                {widget}
             </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
            <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">{subtitle}</div>
            <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
            <p className="text-sm text-blue-100/60 leading-relaxed mb-6">{description}</p>
        </div>
    </div>
);

export const ModesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <ScrollReveal>
                <h2 className="text-4xl font-serif text-white mb-4">A complete ecosystem for your mind.</h2>
                <p className="text-blue-100/60">Different thoughts need different shapes. Quillio adapts to you.</p>
            </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0} className="h-full">
                <ModeCard 
                    title="Stream Mode"
                    subtitle="Daily Flow"
                    description="Low-friction daily reflection. Capture thoughts via voice or ink, and let the AI quietly connect the dots."
                    widget={<StreamWidget />}
                    delay={0}
                />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="h-full">
                <ModeCard 
                    title="Canvas Mode"
                    subtitle="Deep Strategy"
                    description="Infinite spatial board for complex decisions. Map out career pivots or product strategy with an AI partner."
                    widget={<CanvasWidget />}
                    delay={0.1}
                />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="h-full">
                <ModeCard 
                    title="Insights Mode"
                    subtitle="Long-term Memory"
                    description="See the patterns invisible to the naked eye. Track how your confidence and clarity evolve over months."
                    widget={<InsightWidget />}
                    delay={0.2}
                />
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
