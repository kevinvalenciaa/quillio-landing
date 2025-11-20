import React from 'react';
import { AreaChart, Area, ResponsiveContainer, LineChart, Line } from 'recharts';
import { PenLine, Mic, Sparkles, Move, Brain, Fingerprint, Lock, CloudOff, ChevronRight } from 'lucide-react';

// --- Stream Mode Widget ---
export const StreamWidget = () => (
  <div className="bg-slate-900 p-5 rounded-2xl shadow-2xl border border-white/10 w-full max-w-[300px] flex flex-col gap-5 relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 to-transparent opacity-50"></div>
    
    <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Today's Stream</span>
        <div className="flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 animate-pulse"></span>
             <span className="text-[9px] text-rose-500/80 font-medium uppercase tracking-wider">Live</span>
        </div>
    </div>
    
    {/* Timeline spine */}
    <div className="absolute left-[26px] top-[50px] bottom-[30px] w-px bg-white/5"></div>

    {/* Entry 1: Handwriting */}
    <div className="flex gap-4 relative z-10">
        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/40 shadow-sm">
            <PenLine size={12} strokeWidth={1.5} />
        </div>
        <div className="flex-1 pt-1">
            <div className="text-[9px] text-white/30 mb-1 font-medium tracking-wide">07:00 AM</div>
            <div className="text-[13px] text-blue-100/80 font-serif leading-relaxed italic opacity-90">
                "I need to ship the login feature. Perfectionism is slowing me down again."
            </div>
        </div>
    </div>

    {/* Entry 2: AI Insight */}
    <div className="flex gap-4 relative z-10">
         <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400 shadow-sm">
            <Sparkles size={12} strokeWidth={1.5} />
        </div>
        <div className="flex-1 pt-1">
             <div className="text-[9px] text-blue-400 mb-1 font-bold tracking-wide">QUILLIO</div>
             <div className="text-[11px] text-blue-200/70 p-3 rounded-xl bg-white/5 border border-white/10 leading-relaxed shadow-sm">
                "Fear of 'not good enough' has blocked shipping <span className="font-semibold text-white">4 times</span> this month. What is the smallest version of 'good enough'?"
            </div>
        </div>
    </div>
  </div>
);

// --- Canvas Widget ---
export const CanvasWidget = () => (
  <div className="bg-slate-900 rounded-3xl shadow-2xl shadow-black/20 border border-white/10 w-[280px] h-[240px] relative overflow-hidden group ring-1 ring-white/5">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]"></div>
      
      {/* Node 1 */}
      <div className="absolute top-8 left-6 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl p-2.5 shadow-sm w-24 z-10 group-hover:-translate-y-1 transition-transform duration-700 ease-out">
          <div className="text-[7px] text-white/40 uppercase tracking-widest mb-1 font-bold">Constraint</div>
          <div className="text-[10px] font-medium text-white font-serif">Current Salary</div>
      </div>

      {/* Node 2 */}
      <div className="absolute bottom-10 right-6 bg-slate-800/90 backdrop-blur-sm border-l-2 border-l-blue-500 border-y border-r border-white/10 rounded-xl p-2.5 shadow-sm w-28 z-10 group-hover:translate-y-1 transition-transform duration-700 ease-out delay-100">
           <div className="text-[7px] text-blue-400 uppercase tracking-widest mb-1 font-bold">Opportunity</div>
          <div className="text-[10px] font-medium text-white font-serif">Consulting Lead</div>
      </div>

      {/* Node 3 - Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 border border-white/20 rounded-full w-14 h-14 shadow-xl z-20 flex items-center justify-center">
          <Brain size={20} className="text-white opacity-90" strokeWidth={1.5} />
      </div>

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
            </marker>
          </defs>
          <path d="M 70 50 Q 140 120 140 120" stroke="#334155" strokeWidth="1.5" fill="none"/>
          <path d="M 140 120 Q 210 190 210 190" stroke="#334155" strokeWidth="1.5" fill="none" />
          {/* Animated ink flow */}
          <circle cx="0" cy="0" r="2" fill="#60A5FA" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <animateMotion dur="3s" repeatCount="indefinite" path="M 70 50 Q 140 120 140 120" />
          </circle>
      </svg>
  </div>
);

// --- Insight/Memory Widget ---
const insightData = [
  { name: 'W1', value: 30, value2: 20 },
  { name: 'W2', value: 45, value2: 25 },
  { name: 'W3', value: 35, value2: 40 },
  { name: 'W4', value: 60, value2: 55 },
  { name: 'W5', value: 55, value2: 80 },
];

export const InsightWidget = () => (
  <div className="bg-slate-900 p-5 rounded-2xl shadow-2xl border border-white/10 w-full max-w-[280px] group hover:border-blue-500/30 transition-colors duration-500">
    <div className="flex justify-between items-start mb-5">
        <div>
            <p className="text-[8px] text-white/30 font-bold uppercase tracking-widest">Pattern Detected</p>
            <h3 className="text-xs font-bold text-white mt-1 font-serif tracking-wide">Focus vs. Sleep Quality</h3>
        </div>
        <div className="bg-emerald-500/10 text-emerald-400 p-1 rounded-md">
            <Move size={10} className="rotate-45" strokeWidth={2.5}/>
        </div>
    </div>
    
    <div className="h-20 w-full relative mb-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={insightData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="value" stroke="#60A5FA" strokeWidth={2} fill="url(#colorValue)" />
          <Line type="monotone" dataKey="value2" stroke="#475569" strokeWidth={1.5} strokeDasharray="3 3" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
    <div className="text-[10px] text-blue-100/60 leading-relaxed flex gap-2 items-start bg-white/5 p-2 rounded-lg border border-white/5">
        <Sparkles size={12} className="text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
        <span>"On days you sleep 7h+, your creative output scores are <span className="text-white font-bold">2.4x higher</span>."</span>
    </div>
  </div>
);

// --- Privacy Widget (Apple Style) ---
export const PrivacyWidget = () => (
    <div className="grid grid-cols-1 gap-3 w-[240px]">
        <div className="bg-slate-900 p-3 rounded-xl shadow-sm border border-white/10 flex items-center justify-between group hover:border-white/20 transition-colors cursor-default">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                    <CloudOff size={14} strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left">
                     <span className="text-xs font-semibold text-white">On-Device</span>
                     <span className="text-[9px] text-white/40 font-medium">Local Processing</span>
                </div>
            </div>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 relative overflow-hidden group text-left">
             <div className="flex items-center gap-2 mb-2">
                 <div className="p-1 bg-slate-900 rounded-md text-white">
                    <Lock size={10} strokeWidth={2.5} />
                 </div>
                 <span className="text-xs font-bold text-slate-900 tracking-wide">Zero Knowledge</span>
             </div>
             <div className="text-[9px] text-slate-500 leading-relaxed font-medium">
                Encryption keys stored only on your device. We cannot read your data.
             </div>
             
             {/* Shine effect */}
             <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
        </div>
    </div>
);
