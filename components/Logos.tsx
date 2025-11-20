import React from 'react';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ui/ScrollReveal';

const LOGOS = [
  { name: 'Linear', text: 'Linear' },
  { name: 'Notion', src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Airbnb', src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
  { name: 'Stripe', src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Vercel', src: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'Shopify', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'OpenAI', text: 'OpenAI' }
];

export const Logos: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <ScrollReveal>
            <p className="text-sm text-gray-500 mb-8 font-medium">Trusted by builders and leaders at</p>
        </ScrollReveal>
        
        <ScrollStagger className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-opacity hover:opacity-80 duration-500" staggerDelay={0.05}>
        {LOGOS.map((logo, i) => (
            <ScrollStaggerItem key={i} className="h-8 flex items-center justify-center">
                {logo.src ? (
                    <img src={logo.src} alt={logo.name} className="h-full max-w-[100px] object-contain" />
                ) : (
                    <span className="text-xl font-bold text-gray-600 font-sans tracking-tight">{logo.text}</span>
                )}
            </ScrollStaggerItem>
        ))}
        </ScrollStagger>
      </div>
    </section>
  );
};