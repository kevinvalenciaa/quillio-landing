import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const UseCaseCard: React.FC<{ title: string; quote: string; output: string; color: string; borderColor: string }> = ({ title, quote, output, color, borderColor }) => (
    <div className="min-w-[320px] md:min-w-[400px] bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col gap-6 mx-4 snap-center backdrop-blur-sm">
        <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${color}`}>
            {title}
        </div>
        <div>
            <div className="text-sm text-white/40 mb-2 font-serif italic">" {quote} "</div>
            <div className={`text-sm font-medium text-blue-100/90 leading-relaxed pl-4 border-l-2 ${borderColor}`}>
                {output}
            </div>
        </div>
    </div>
);

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <ScrollReveal>
            <h2 className="text-3xl font-serif text-white">Clarity for every context.</h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} width="100%">
        <div className="flex overflow-x-auto pb-12 px-6 snap-x scroll-pl-6 no-scrollbar -mx-6 md:mx-auto md:px-0 max-w-7xl">
            <UseCaseCard 
                title="Founder Decisions"
                color="bg-blue-500/10 text-blue-400 border border-blue-500/20"
                borderColor="border-blue-500"
                quote="I'm paralyzed between two MVP features. I don't know which to ship."
                output="Quillio: You've mentioned 'speed' 9 times this week. Feature A aligns with speed. Feature B is a distraction."
            />
            <UseCaseCard 
                title="Career Pivot"
                color="bg-purple-500/10 text-purple-400 border border-purple-500/20"
                borderColor="border-purple-500"
                quote="I hate my PM job. I want to be a designer but I'm scared."
                output="Quillio: Let's map a 6-month bridge. You already do design work in your side project. You're closer than you think."
            />
            <UseCaseCard 
                title="Relationships"
                color="bg-rose-500/10 text-rose-400 border border-rose-500/20"
                borderColor="border-rose-500"
                quote="We keep fighting about the same stupid scheduling issue."
                output="Quillio: This isn't about the schedule. It's about feeling prioritized. You mentioned this pattern 3 weeks ago too."
            />
             <UseCaseCard 
                title="Habit Formation"
                color="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                borderColor="border-emerald-500"
                quote="I missed the gym again. I'm so lazy."
                output="Quillio: You're not lazy. You only miss the gym on days you have 8am meetings. Let's change the time."
            />
        </div>
      </ScrollReveal>
    </section>
  );
};
