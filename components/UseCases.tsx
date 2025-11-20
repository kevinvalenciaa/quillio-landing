import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const UseCaseCard: React.FC<{ title: string; quote: string; output: string; color: string }> = ({ title, quote, output, color }) => (
    <div className="min-w-[320px] md:min-w-[400px] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-6 mx-4 snap-center">
        <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${color}`}>
            {title}
        </div>
        <div>
            <div className="text-sm text-gray-400 mb-2 font-serif italic">" {quote} "</div>
            <div className="text-sm font-medium text-brand-text leading-relaxed pl-4 border-l-2 border-brand-lavender">
                {output}
            </div>
        </div>
    </div>
);

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <ScrollReveal>
            <h2 className="text-3xl font-serif text-brand-text">Clarity for every context.</h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} width="100%">
        <div className="flex overflow-x-auto pb-12 px-6 snap-x scroll-pl-6 no-scrollbar -mx-6 md:mx-auto md:px-0 max-w-7xl">
            <UseCaseCard 
                title="Founder Decisions"
                color="bg-blue-50 text-blue-600"
                quote="I'm paralyzed between two MVP features. I don't know which to ship."
                output="Quillio: You've mentioned 'speed' 9 times this week. Feature A aligns with speed. Feature B is a distraction."
            />
            <UseCaseCard 
                title="Career Pivot"
                color="bg-purple-50 text-purple-600"
                quote="I hate my PM job. I want to be a designer but I'm scared."
                output="Quillio: Let's map a 6-month bridge. You already do design work in your side project. You're closer than you think."
            />
            <UseCaseCard 
                title="Relationships"
                color="bg-rose-50 text-rose-600"
                quote="We keep fighting about the same stupid scheduling issue."
                output="Quillio: This isn't about the schedule. It's about feeling prioritized. You mentioned this pattern 3 weeks ago too."
            />
             <UseCaseCard 
                title="Habit Formation"
                color="bg-green-50 text-green-600"
                quote="I missed the gym again. I'm so lazy."
                output="Quillio: You're not lazy. You only miss the gym on days you have 8am meetings. Let's change the time."
            />
        </div>
      </ScrollReveal>
    </section>
  );
};