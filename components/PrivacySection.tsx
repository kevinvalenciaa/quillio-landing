import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Lock, CloudOff, EyeOff } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100" id="privacy">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <ScrollReveal>
            <h2 className="text-3xl font-serif text-brand-text mb-12">
                Therapy-level privacy. <br/> Journal-grade security.
            </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0} className="h-full">
                <div className="bg-brand-bg rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center border border-transparent hover:border-gray-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600 mb-4">
                        <CloudOff size={18} />
                    </div>
                    <h3 className="font-semibold text-brand-text text-sm mb-2">On-Device Options</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Run AI models locally on your device. Data never leaves your hands.</p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="h-full">
                <div className="bg-brand-bg rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center border border-transparent hover:border-gray-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600 mb-4">
                        <Lock size={18} />
                    </div>
                    <h3 className="font-semibold text-brand-text text-sm mb-2">Zero-Knowledge</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">We can't read your journals even if we wanted to. Encryption keys are yours.</p>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
                <div className="bg-brand-bg rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center border border-transparent hover:border-gray-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-600 mb-4">
                        <EyeOff size={18} />
                    </div>
                    <h3 className="font-semibold text-brand-text text-sm mb-2">No Training</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">Your personal thoughts are never used to train public AI models.</p>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};