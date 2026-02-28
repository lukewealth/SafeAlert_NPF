import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Shield, 
  AlertCircle, 
  Map as MapIcon, 
  Lock, 
  ChevronRight, 
  ChevronLeft, 
  Phone, 
  Activity,
  Users,
  Search as SearchIcon, 
  Zap,
  ArrowRight,
  Eye,
  Menu,
  X,
  BarChart3,
  Award,
  TrendingUp,
  ShieldCheck,
  Radar,
  Navigation,
  Signal,
  Fingerprint,
  Terminal,
  Grid,
  Settings,
  Linkedin,
  Twitter,
  Globe2,
  Search,
  CheckCircle2,
  Clock,
  Mic,
  FileText,
  Server,
  Database,
  Cpu,
  Scale,
  Globe,
  Download,
  Smartphone,
  ChevronDown,
  Building2,
  UserCheck
} from 'lucide-react';

// --- Reusable UI Elements ---

const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none"
    >
      <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-blue-500/30 rounded-full flex justify-center p-1">
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 md:w-1.5 h-1 md:h-1.5 bg-blue-50 rounded-full"
        />
      </div>
      <span className="text-[7px] md:text-[9px] font-black text-blue-500/50 uppercase tracking-[0.4em] whitespace-nowrap">Scroll for Details</span>
    </motion.div>
  );
};

const SectionDivider = ({ title, id }: { title: string, id?: string }) => (
  <div id={id} className="flex items-center gap-4 md:gap-8 py-12 md:py-24 section-anchor" data-label={title}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200"></div>
    <h3 className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap">{title}</h3>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200"></div>
  </div>
);

const GlobalFooter = () => (
  <footer className="w-full bg-slate-900 text-white p-8 md:p-16 lg:p-24 border-t border-white/5 relative z-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center gap-4">
          <img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-8 md:h-10 w-auto bg-white rounded-lg p-1" />
          <span className="font-black tracking-tighter text-lg md:text-xl uppercase">SafeAlert</span>
        </div>
        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-xs">
          National Surveillance & Vigilance Ecosystem. Built for the modern Nigeria Police Force.
        </p>
        <div className="flex gap-4">
          {[Linkedin, Twitter, Globe2].map((Icon, i) => (
            <button key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5"><Icon size={16} /></button>
          ))}
        </div>
      </div>
      
      <div className="space-y-6 md:space-y-8">
        <h4 className="text-blue-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Business Partnerships</h4>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5 shrink-0"><Building2 size={18} /></div>
            <div>
              <p className="font-black text-xs md:text-sm uppercase tracking-tight text-white/90">CRYTOFY DIGITAL SERVICES LTD</p>
              <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1">RC: 7019763 / Tech Partner</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5 shrink-0"><Globe size={18} /></div>
            <div>
              <p className="font-black text-xs md:text-sm uppercase tracking-tight text-white/90">Global Geospatial Network</p>
              <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1">Intelligence Framework</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 md:space-y-8 md:col-span-2 lg:col-span-1">
        <h4 className="text-blue-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Nigerian Senior Officers</h4>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5 shrink-0"><UserCheck size={18} /></div>
            <div>
              <p className="font-black text-xs md:text-sm uppercase tracking-tight text-white/90">Director, PGIS Department</p>
              <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1">DIG/CP-level Oversight</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5 shrink-0"><Shield size={18} /></div>
            <div>
              <p className="font-black text-xs md:text-sm uppercase tracking-tight text-white/90">Authorized Deployment</p>
              <p className="text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest mt-1">National Command Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      <p className="text-slate-500 font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[9px] text-center md:text-left">TRICODE PRO LTD &copy; 2026 / AUTHORIZED DEPLOYMENT STRATEGY</p>
      <div className="flex gap-8 md:gap-12">
        <span className="text-slate-500 font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px] cursor-pointer hover:text-white transition-colors">NDPA 2023 Compliance</span>
        <span className="text-slate-500 font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px] cursor-pointer hover:text-white transition-colors">GDPR Standards</span>
      </div>
    </div>
  </footer>
);

const MicroScrollNav = () => {
  const [sections, setSections] = useState<{id: string, label: string}[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('.section-anchor'));
    setSections(anchors.map(el => ({ 
      id: el.id, 
      label: el.getAttribute('data-label') || el.id.replace(/-/g, ' ') 
    })));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      anchors.forEach((el, i) => {
        if (el instanceof HTMLElement && scrollPos >= el.offsetTop) {
          setActive(i);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (sections.length === 0) return null;

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[100] hidden sm:flex flex-col gap-4 md:gap-6">
      {sections.map((section, i) => (
        <button 
          key={section.id}
          onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center justify-end gap-3 md:gap-4"
        >
          <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${active === i ? 'text-blue-500 translate-x-0' : 'text-slate-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
            {section.label}
          </span>
          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center font-black text-[8px] md:text-[10px] transition-all border ${active === i ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20 scale-110' : 'bg-white/10 border-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white'}`}>
            {i + 1}
          </div>
        </button>
      ))}
      <button 
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        className="group flex items-center justify-end gap-4 mt-4"
      >
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-xl">
          <ChevronDown size={12} className="group-hover:translate-y-0.5 transition-transform" />
        </div>
      </button>
    </div>
  );
};

const MobileMockup = ({ src, children, label }: { src?: string, children?: React.ReactNode, label: string }) => (
  <div className="relative group mx-auto shrink-0">
    <div className="relative w-[240px] xs:w-[260px] md:w-[280px] lg:w-[310px] h-[500px] xs:h-[540px] md:h-[580px] lg:h-[640px] bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:scale-[1.01] transition-all duration-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 md:h-7 bg-slate-800 rounded-b-xl md:rounded-b-2xl z-20"></div>
      <div className="w-full h-full bg-slate-50 relative flex flex-col">
        {src ? (
          <img src={src} alt={label} className="w-full h-full object-cover" onError={(e) => (e.target as HTMLImageElement).src = `https://placehold.co/400x800/f8fafc/64748b?text=${encodeURIComponent(label)}`} />
        ) : (
          children
        )}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-600/10 rounded-full blur-[60px] md:blur-[80px] -z-10 group-hover:bg-blue-600/20 transition-all"></div>
  </div>
);

const PhoneSOSContent = () => (
  <div className="flex flex-col h-full bg-white font-sans overflow-hidden">
    {/* Status Bar */}
    <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-slate-50/50">
      <span className="text-[8px] md:text-[10px] font-black text-slate-900">9:41</span>
      <div className="flex gap-1.5 items-center">
        <Signal size={8} className="md:w-2.5 md:h-2.5 text-slate-900" />
        <div className="w-3 md:w-4 h-1.5 md:h-2 rounded-[1px] md:rounded-[2px] border border-slate-400 relative">
          <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-slate-900 m-[0.5px] md:m-[1px] rounded-[0.5px] md:rounded-[1px]"></div>
        </div>
      </div>
    </div>
    
    {/* App Bar */}
    <div className="flex items-center justify-between px-4 md:px-5 py-2 md:py-3 border-b border-slate-100">
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-blue-600 flex items-center justify-center text-white text-[8px] md:text-[10px] font-black shadow-lg shadow-blue-500/20">NPF</div>
      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">SafeAlert</span>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100"><Settings size={12} className="md:w-3.5 md:h-3.5 text-slate-400" /></div>
    </div>

    {/* SOS Button Area */}
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 bg-slate-50/30">
      <div className="relative mb-8 md:mb-12">
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-red-600 rounded-full blur-xl md:blur-2xl"
        />
        <motion.button
          whileTap={{ scale: 0.92 }}
          className="relative w-28 h-28 md:w-36 md:h-36 bg-red-600 rounded-full shadow-2xl flex flex-col items-center justify-center border-[4px] md:border-[6px] border-white/20 active:bg-red-700 transition-all group"
        >
          <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-[spin_4s_linear_infinite]"></div>
          <AlertCircle size={28} className="md:w-10 md:h-10 text-white mb-1 md:mb-2" />
          <span className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase">SOS</span>
          <span className="text-white/60 text-[6px] md:text-[7px] font-black uppercase tracking-[0.2em] mt-1 md:mt-1.5">Hold to trigger</span>
        </motion.button>
      </div>
      
      <div className="w-full p-3 md:p-4 bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm mb-3 md:mb-4">
        <div className="flex items-center justify-between mb-1.5 md:mb-2">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[7px] md:text-[8px] font-black text-emerald-600 uppercase tracking-widest">NIN Verified</span>
          </div>
          <span className="text-[7px] md:text-[8px] font-black text-slate-300 uppercase">ID: SA-9921</span>
        </div>
        <p className="text-[9px] md:text-[10px] font-bold text-slate-700">Police Unit 04-B / Lagos HQ</p>
        <p className="text-[8px] md:text-[9px] text-slate-400 font-medium">ETA: 4-6 Minutes</p>
      </div>
    </div>

    {/* Quick Grid */}
    <div className="p-3 md:p-4 grid grid-cols-2 gap-2.5 md:gap-3 bg-white border-t border-slate-100">
      {[
        { t: "Road Alert", i: <Zap /> },
        { t: "Report Crime", i: <Shield /> },
        { t: "Missing", i: <Users /> },
        { t: "Suspicious", i: <SearchIcon /> }
      ].map((item, i) => (
        <div key={i} className="bg-slate-50 p-2.5 md:p-3.5 rounded-xl md:rounded-2xl flex flex-col items-center gap-1.5 md:gap-2 border border-slate-100 group hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
          <div className="text-blue-600 group-hover:text-white transition-colors">{React.cloneElement(item.i as React.ReactElement, { size: 12, className: "md:w-3.5 md:h-3.5" })}</div>
          <span className="text-[6px] md:text-[7px] font-black text-slate-500 group-hover:text-white uppercase tracking-wider transition-colors">{item.t}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Slide Components ---

const Slide_Intro = () => (
  <div className="relative">
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent)] pointer-events-none"></div>
      <div className="flex-1 p-6 md:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800 relative z-10">
        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
            <img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-10 md:h-16 w-auto bg-white rounded-xl md:rounded-2xl p-1.5 md:p-2.5 shadow-2xl shadow-blue-500/20" />
            <div className="h-8 md:h-12 w-px bg-slate-700"></div>
            <span className="text-lg md:text-2xl font-bold tracking-tight uppercase">TRICODE PRO LTD</span>
          </div>
          <p className="text-blue-400 text-[9px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-10">National Security Infrastructure</p>
        </div>
        <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-[9rem] font-black mb-6 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter">
          NPF <span className="text-blue-500 underline decoration-blue-500/10">SafeAlert</span>
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-5xl font-light text-slate-300 mb-8 md:mb-12 italic opacity-90 leading-tight">Surveillance & Vigilance <br className="hidden md:block"/>System (NPF-SVS)</h2>
        <p className="text-base md:text-xl lg:text-3xl text-slate-400 max-w-2xl leading-relaxed font-medium">
          Nationwide emergency response and citizen safety platform designed for the Nigeria Police Force.
        </p>
        <div className="lg:hidden mt-12 flex justify-center">
           <MobileMockup src="/Assests/splash_screen_1/screen.png" label="SafeAlert App" />
        </div>
        <ScrollIndicator />
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center p-16 bg-white">
        <MobileMockup src="/Assests/splash_screen_1/screen.png" label="SafeAlert App" />
      </div>
    </div>

    <div className="p-6 md:p-12 lg:p-32 bg-white">
      <SectionDivider title="Product Vision" id="vision" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Mission <span className="text-blue-600">Statement</span></h3>
          <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-bold italic">“To make every Nigerian’s safety just one tap away — connecting citizens and police through trust, speed, and technology.”</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {[
              { t: "AI-Driven Triage", d: "Automated classification of urgency.", i: <Activity /> },
              { t: "NIN & Passport", d: "Cross-verified digital identity.", i: <ShieldCheck /> },
              { t: "Live Geofencing", d: "Address-to-alert location verification.", i: <MapIcon /> },
              { t: "Multilingual Support", d: "Support for major Nigerian languages.", i: <Globe2 /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 p-5 md:p-7 bg-slate-50 rounded-2xl md:rounded-[2rem] border border-slate-100 group">
                <div className="w-9 h-9 md:w-11 md:h-11 bg-blue-600 text-white rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  {React.cloneElement(item.i as React.ReactElement, { size: 18, className: "md:w-5 md:h-5" })}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm md:text-lg">{item.t}</h4>
                  <p className="text-slate-500 font-medium text-xs">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center order-1 lg:order-2">
          <MobileMockup label="Structured SOS Content">
            <PhoneSOSContent />
          </MobileMockup>
        </div>
      </div>
    </div>
    <GlobalFooter />
  </div>
);

const Slide_BusinessGoals = () => (
  <div className="relative">
    <div className="min-h-screen p-6 md:p-12 lg:p-32 flex flex-col justify-center bg-slate-50">
      <SectionDivider title="Strategic KPIs" id="kpis" />
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-24 gap-6 md:gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-slate-900 mb-4 md:mb-6 tracking-tighter leading-none uppercase">Business Goals</h2>
          <div className="h-1.5 md:h-2 w-24 md:w-32 bg-blue-600 rounded-full"></div>
        </div>
        <div className="text-left lg:text-right">
          <p className="text-blue-400 text-[9px] md:text-xs font-black uppercase tracking-[0.4em] mb-3 md:mb-4">Performance Targets (Year 1)</p>
          <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2 md:py-3 bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm">
            <BarChart3 size={18} className="md:w-5 md:h-5 text-blue-600 shrink-0" />
            <span className="text-sm md:text-lg font-black text-slate-900 whitespace-nowrap">1.5M Verified Users</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {[
          { t: "Urban Response", s: "< 5 Minutes", d: "Dispatch target for state capitals.", icon: <Zap />, color: "amber" },
          { t: "Rural Response", s: "< 10 Minutes", d: "Optimized coordination for rural areas.", icon: <Navigation />, color: "blue" },
          { t: "False Alarm Rate", s: "< 2.0%", d: "Strict NIN-linked strike system.", icon: <AlertCircle />, color: "emerald" },
          { t: "Operational Units", s: "37 Commands", d: "Coverage across all 36 states + FCT.", icon: <Grid />, color: "indigo" }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="p-6 md:p-10 bg-white rounded-2xl md:rounded-[2.5rem] border border-slate-200 shadow-sm transition-all group">
            <div className={`w-12 h-12 md:w-16 md:h-16 bg-${item.color}-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-${item.color}-600 group-hover:bg-${item.color}-600 group-hover:text-white transition-all`}>
              {React.cloneElement(item.icon as React.ReactElement, { size: 24, className: "md:w-7 md:h-7" })}
            </div>
            <h3 className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 md:mb-2">{item.s}</h3>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 tracking-tighter uppercase">{item.t}</h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </div>
      <ScrollIndicator />
    </div>

    <div className="p-6 md:p-12 lg:p-32 bg-white">
      <SectionDivider title="Analytics & AI Layer" id="ai-layer" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="space-y-12">
          <div className="p-8 md:p-12 bg-slate-900 rounded-3xl md:rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 md:p-12 text-blue-500/10 pointer-events-none"><Activity size={120} className="md:w-[180px] md:h-[180px]" /></div>
            <h4 className="text-2xl md:text-4xl font-black mb-8 md:mb-10 tracking-tighter uppercase">AI Capabilities</h4>
            <div className="space-y-6 md:space-y-8 relative z-10">
              {[
                "Behavioral AI: False alarm detection via NIN mapping.",
                "Predictive Mapping: Geospatial hotspot identification.",
                "Leaderboards: Unit performance tracking systems.",
                "Automated Sanctions: Penalty fees linked to verified identity."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 font-black text-xs md:text-sm shrink-0">0{i+1}</div>
                  <span className="text-sm md:text-lg font-bold tracking-tight text-slate-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { l: 'User Satisfaction', v: '90%+', d: 'Target positive feedback score.' },
            { l: 'Data Accuracy', v: '99.9%', d: 'Verified NIN and Passport registration.' }
          ].map((stat, i) => (
            <div key={i} className="p-8 md:p-10 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100 flex flex-col justify-center text-center">
              <p className="text-4xl md:text-5xl font-black text-blue-600 mb-2 md:mb-3">{stat.v}</p>
              <p className="text-sm md:text-base font-black text-slate-900 mb-1 md:mb-2 uppercase tracking-tight">{stat.l}</p>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight">{stat.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <GlobalFooter />
  </div>
);

const Slide_UIGallery = () => {
  const [activeTab, setActiveTab] = useState('Citizen');
  const categories = {
    'Citizen': [
      { url: "/Assests/home_dashboard_sos_control_1/screen.png", t: "SOS Interface", d: "One-tap panic trigger." },
      { url: "/Assests/citizen_dashboard_improved_ux/screen.png", t: "SafeAlert Dashboard", d: "Citizen command center." },
      { url: "/Assests/citizen_report_incident_improved_ux/screen.png", t: "Incident Report", d: "Evidence-backed reporting." },
      { url: "/Assests/live_response_screen_improved_ux/screen.png", t: "Live Response", d: "Real-time ETA tracking." }
    ],
    'Officer': [
      { url: "/Assests/officer_dashboard_improved_ux/screen.png", t: "Officer Patrol", d: "Incident management." },
      { url: "/Assests/officer_verification_improved_ux/screen.png", t: "Duty Onboarding", d: "Biometric ID verification." },
      { url: "/Assests/live_response_tracking_1/screen.png", t: "Route Navigation", d: "Precise victim location." },
      { url: "/Assests/officer_case_file_input_citizen_origin/screen.png", t: "Field Reports", d: "Multimedia evidence." }
    ],
    'Command': [
      { url: "/Assests/admin_dashboard_live_map_improved_ux/screen.png", t: "Live Map Overlay", d: "Nationwide strategic oversight." },
      { url: "/Assests/admin_dashboard_incident_feed/screen.png", t: "Control Feed", d: "Real-time assignment." },
      { url: "/Assests/super_admin_dashboard_complete_ux/screen.png", t: "Unit Analytics", d: "Performance metrics." },
      { url: "/Assests/admin_login_with_2fa_improved_ux/screen.png", t: "Secure Access", d: "RBAC and 2FA gateway." }
    ]
  };

  return (
    <div className="relative bg-white">
      <div className="min-h-screen p-6 md:p-12 lg:p-32 flex flex-col">
        <SectionDivider title="UX Journey" id="ux-journey" />
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8 md:gap-10">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-slate-900 mb-4 md:mb-6 tracking-tighter leading-none uppercase">Showcase</h2>
            <div className="h-1.5 md:h-2 w-24 md:w-32 bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex flex-wrap gap-2 p-1 md:p-1.5 bg-slate-100 rounded-xl md:rounded-2xl border border-slate-200 w-full lg:w-auto">
            {Object.keys(categories).map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex-1 lg:flex-none px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {cat} App
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="contents"
            >
              {categories[activeTab as keyof typeof categories].map((screen, i) => (
                <div key={screen.url} className="flex flex-col gap-4 md:gap-6">
                  <MobileMockup src={screen.url} label={screen.t} />
                  <div className="text-center px-4">
                    <h4 className="font-black text-base md:text-xl text-slate-900 mb-1 uppercase tracking-tight">{screen.t}</h4>
                    <p className="text-slate-500 font-medium text-[10px] md:text-xs">{screen.d}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <ScrollIndicator />
      </div>

      <div className="p-6 md:p-12 lg:p-32 bg-slate-50">
        <SectionDivider title="Comprehensive Asset Map" id="assets" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {[
            "onboarding_verification", "sos_panic_control", "incident_reporting", "live_tracking", "command_analytics",
            "unit_management", "officer_verification", "billing_sanctions", "notification_hub", "audit_logging"
          ].map((tag, i) => (
            <div key={i} className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center group hover:border-blue-500 transition-all cursor-default shadow-sm">
              <Grid className="text-slate-300 group-hover:text-blue-500 mb-2 md:mb-3 transition-colors shrink-0" size={18} />
              <p className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest leading-tight">{tag.replace(/_/g, ' ')}</p>
            </div>
          ))}
        </div>
      </div>
      <GlobalFooter />
    </div>
  );
};

const Slide_Governance = () => (
  <div className="relative bg-white flex flex-col min-h-screen">
    <div className="flex-1 p-6 md:p-12 lg:p-32 flex flex-col justify-center">
      <SectionDivider title="PGIS Department Oversight" id="pgis" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-12 md:mb-24">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-none uppercase">Governance</h2>
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-600 mb-8 md:mb-12 font-medium leading-relaxed">
            The SVS is supervised by the newly proposed <span className="text-blue-600 font-black">Police Geospatial Intelligence & Surveillance (PGIS)</span> Department.
          </p>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            {[
              "Data compliance: NDPA 2023 & Cybercrime Act.",
              "Immutable audit records for operational transparency.",
              "Automated sanctions linked to digital identities."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <CheckCircle2 className="text-blue-600 shrink-0" size={20} className="md:w-6 md:h-6" />
                <span className="text-base md:text-lg font-bold text-slate-700">{text}</span>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 bg-red-50 rounded-2xl md:rounded-[2.5rem] border border-red-100">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <Scale className="text-red-600 shrink-0" size={24} className="md:w-8 md:h-8" />
              <h4 className="text-xl md:text-2xl font-black text-red-900 uppercase tracking-tighter">Disciplinary Policy</h4>
            </div>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { l: "1st False Alarm", v: "System Warning" },
                { l: "2nd False Alarm", v: "7-Day Suspension" },
                { l: "3rd False Alarm", v: "21-Day + ₦5,000 Fine" },
                { l: "Repeated Offense", v: "Permanent Ban + PGIS Report" }
              ].map((p, i) => (
                <div key={i} className="flex flex-col xs:flex-row justify-between items-start xs:items-center p-3 md:p-4 bg-white/60 rounded-xl md:rounded-2xl border border-red-100 gap-1 xs:gap-4">
                  <span className="text-[9px] md:text-xs font-black text-red-900 uppercase tracking-widest">{p.l}</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-600">{p.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 order-1 lg:order-2">
          <MobileMockup src="/Assests/admin_login_with_2fa_improved_ux/screen.png" label="Secure Access" />
          <div className="flex items-center gap-4 md:gap-6 bg-slate-900 px-6 md:px-10 py-4 md:py-6 rounded-2xl md:rounded-3xl text-white shadow-2xl border border-white/5">
            <Fingerprint size={24} className="md:w-8 md:h-8 text-blue-500 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-400">Security Layer</span>
              <span className="text-base md:text-lg font-bold">Biometric Authentication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GlobalFooter />
  </div>
);

const Slide_TechStack = () => (
  <div className="relative bg-slate-50 flex flex-col min-h-screen">
    <div className="flex-1 p-6 md:p-12 lg:p-32 flex flex-col justify-center">
      <SectionDivider title="Engineering Architecture" id="stack" />
      <div className="max-w-7xl mx-auto w-full mb-12 md:mb-24">
        <div className="text-center mb-12 md:mb-24 px-4">
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black text-slate-900 mb-4 md:mb-6 tracking-tighter leading-none uppercase">System Stack</h2>
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">Scalable, secure, and production-ready infrastructure built for national deployment.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { t: "Frontend Layer", l: "Flutter & Next.js", i: <Smartphone />, d: "Cross-platform mobile & command apps." },
            { t: "Backend Logic", l: "Node.js & Django", i: <Server />, d: "RESTful APIs with RBAC and routing." },
            { t: "Data Persistence", l: "PostgreSQL & Firebase", i: <Database />, d: "Real-time state sync and incident logs." },
            { t: "Security Ops", l: "AES-256 & TLS 1.3", i: <Lock />, d: "E2E encrypted streams and 2FA gateway." }
          ].map((item, i) => (
            <div key={i} className="p-8 md:p-12 bg-white rounded-2xl md:rounded-[3.5rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-500 transition-all">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-slate-50 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                {React.cloneElement(item.i as React.ReactElement, { size: 28, className: "md:w-9 md:h-9" })}
              </div>
              <h3 className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-widest mb-1.5 md:mb-2 leading-none">{item.t}</h3>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-3 md:mb-4 leading-tight">{item.l}</h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-3 md:gap-6 px-4">
          {["AWS EC2", "Cloudflare", "NIMC API", "Google Maps API", "Twilio SMS", "Firebase FCM"].map((tag, i) => (
            <span key={i} className="px-5 md:px-8 py-2 md:py-3 bg-white border border-slate-200 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">{tag}</span>
          ))}
        </div>
      </div>
    </div>
    <GlobalFooter />
  </div>
);

const Slide_LiveIntelligence = () => (
  <div className="relative min-h-screen bg-slate-900 text-white flex flex-col lg:flex-row overflow-hidden">
    <div className="flex-1 p-6 md:p-12 lg:p-24 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-white/5">
      <SectionDivider title="Spatial Awareness" id="spatial" />
      <h4 className="text-blue-400 font-black text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8">Data-Driven Policing</h4>
      <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black mb-8 md:mb-10 tracking-tighter leading-none uppercase">Live Intelligence</h2>
      <p className="text-lg md:text-2xl lg:text-3xl text-slate-400 max-w-xl mb-10 md:mb-16 font-medium leading-relaxed">
        Real-time strategic oversight of national security assets and incident density via PGIS.
      </p>
      
      <div className="space-y-4 md:space-y-6">
        {[
          { t: "Dynamic Heatmapping", d: "Visualize crime hotspots.", i: <Radar /> },
          { t: "Officer Tracking", d: "GPS verified unit deployment.", i: <Navigation /> },
          { t: "Geo-Fencing", d: "Sector breach automated alerts.", i: <MapIcon /> }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5 backdrop-blur-md group hover:bg-white/10 transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
              {React.cloneElement(item.i as React.ReactElement, { size: 18, className: "md:w-5 md:h-5" })}
            </div>
            <div>
              <h5 className="font-black text-white text-sm md:text-base uppercase tracking-tight">{item.t}</h5>
              <p className="text-slate-400 text-xs md:text-sm font-medium">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 relative overflow-hidden bg-slate-800 h-[40vh] lg:h-auto min-h-[300px]">
      <div className="absolute inset-0 opacity-40">
        <img src="/Assests/admin_dashboard_live_map_improved_ux/screen.png" className="w-full h-full object-cover grayscale brightness-50" alt="Map" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <motion.div animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute inset-0 bg-blue-500 rounded-full blur-2xl md:blur-3xl" />
          <div className="relative w-48 h-48 md:w-80 md:h-80 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 md:w-40 md:h-40 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 md:w-10 md:h-10 bg-blue-500 rounded-full shadow-[0_0_20px_md:shadow-[0_0_40px]_rgba(59,130,246,0.8)] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide_Engagement = () => (
  <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 lg:p-32 flex flex-col justify-center relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[200px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    <div className="max-w-5xl mx-auto w-full text-center relative z-10">
      <SectionDivider title="Strategic Rollout" id="rollout" />
      <h4 className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] mb-8 md:mb-10">Engagement</h4>
      <h2 className="text-4xl md:text-7xl lg:text-[9rem] font-black mb-12 md:mb-16 tracking-tighter leading-[0.9] md:leading-[0.85] uppercase">Secure the <span className="text-blue-600 underline decoration-blue-600/10">Future.</span></h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10">
        <a href="mailto:info@tricodepro.com" className="w-full lg:w-auto px-10 md:px-16 py-6 md:py-8 bg-blue-600 rounded-2xl md:rounded-[2.5rem] font-black text-xl md:text-2xl tracking-tighter hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-4 md:gap-6 group">
          Get in Touch <ArrowRight className="group-hover:translate-x-2 transition-transform shrink-0" />
        </a>
        <a 
          href="/Assests/SafeAlert Mobile .pdf" 
          download="NPF_SafeAlert_PRD.pdf"
          className="w-full lg:w-auto px-10 md:px-16 py-6 md:py-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-[2.5rem] font-black text-xl md:text-2xl tracking-tighter hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-4 md:gap-6 group"
        >
          Download PRD <Download className="group-hover:translate-y-1 transition-transform shrink-0" />
        </a>
      </div>
      <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-center md:text-left opacity-60">
        <div className="space-y-3 md:space-y-4">
          <h5 className="text-blue-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Business Partnerships</h5>
          <p className="text-lg md:text-xl font-bold uppercase tracking-tight">CRYTOFY DIGITAL SERVICES LTD</p>
          <p className="text-xs md:text-sm font-medium leading-relaxed">Official Digital Systems Integration & Support RC: 7019763</p>
        </div>
        <div className="space-y-3 md:space-y-4">
          <h5 className="text-blue-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em]">Nigerian Senior Officers</h5>
          <p className="text-lg md:text-xl font-bold uppercase tracking-tight">Director, PGIS Department</p>
          <p className="text-xs md:text-sm font-medium leading-relaxed">National Geospatial Intelligence & Surveillance Strategy Division</p>
        </div>
      </div>
      <p className="mt-20 md:mt-32 text-slate-500 font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px]">TRICODE PRO LTD &copy; 2026 / AUTHORIZED DEPLOYMENT STRATEGY</p>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const slides = useMemo(() => [
    { id: 'intro', label: 'Executive Overview', comp: <Slide_Intro /> },
    { id: 'goals', label: 'Strategic KPIs', comp: <Slide_BusinessGoals /> },
    { id: 'showcase', label: 'UX Showcase', comp: <Slide_UIGallery /> },
    { id: 'governance', label: 'Policy & PGIS', comp: <Slide_Governance /> },
    { id: 'tech', label: 'System Stack', comp: <Slide_TechStack /> },
    { id: 'mapping', label: 'Live Intelligence', comp: <Slide_LiveIntelligence /> },
    { id: 'contact', label: 'Engagement', comp: <Slide_Engagement /> }
  ], []);

  const filteredFeatures = useMemo(() => {
    if (!searchQuery) return [];
    const features = [
      { t: 'SOS Trigger', d: 'Citizen emergency activation.', s: 0 },
      { t: 'False Alarm Policy', d: 'Disciplinary strike system.', s: 3 },
      { t: 'NIN Verification', d: 'Verified identity onboarding.', s: 0 },
      { t: 'Response Time', d: 'KPIs for Urban/Rural dispatch.', s: 1 },
      { t: 'System Stack', d: 'Frontend & Backend architecture.', s: 4 },
      { t: 'Live Map', d: 'PGIS intelligence oversight.', s: 5 }
    ];
    return features.filter(f => f.t.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const navigate = useCallback((newDirection: number) => {
    const nextIndex = currentSlide + newDirection;
    if (nextIndex >= 0 && nextIndex < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextIndex);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="w-full bg-slate-950 font-sans selection:bg-blue-500/30 text-slate-900 antialiased overflow-x-hidden">
      <MicroScrollNav />
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[150] h-1 md:h-1.5 flex gap-1 md:gap-1.5 px-1.5 md:px-2 pt-1.5 md:pt-2">
        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-full bg-white/10 rounded-full overflow-hidden">
            <motion.div initial={false} animate={{ width: i === currentSlide ? '100%' : i < currentSlide ? '100%' : '0%', backgroundColor: i === currentSlide ? '#2563eb' : i < currentSlide ? '#1e293b' : 'rgba(255, 255, 255, 0)' }} className="h-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          </div>
        ))}
      </div>

      {/* Navigation Header */}
      <header className="fixed top-4 md:top-8 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 flex justify-between items-center pointer-events-none">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-3 md:gap-6 bg-white/90 backdrop-blur-xl px-4 md:px-8 py-2.5 md:py-4 rounded-2xl md:rounded-[2rem] border border-white/20 shadow-xl pointer-events-auto">
          <img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-6 md:h-10 w-auto rounded-lg md:rounded-xl p-0.5 md:p-1 bg-white shrink-0" />
          <div className="h-6 md:h-8 w-px bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-black tracking-tighter uppercase text-[10px] md:text-sm leading-none">NPF SafeAlert</span>
            <span className="text-blue-600 text-[6px] md:text-[8px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mt-0.5 md:mt-1">SVS v5.2</span>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-3 md:gap-6 pointer-events-auto">
          <button onClick={() => setIsSearchOpen(true)} className="p-3 md:p-4 bg-white/90 backdrop-blur-xl text-slate-900 rounded-xl md:rounded-2xl hover:bg-white border border-white/20 transition-all active:scale-95 cursor-pointer shadow-lg group"><SearchIcon size={18} className="md:w-6 md:h-6" /></button>
          <button onClick={() => setIsMenuOpen(true)} className="p-3 md:p-4 bg-slate-900 text-white rounded-xl md:rounded-2xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-xl group"><Menu size={18} className="md:w-6 md:h-6" /></button>
        </div>
      </header>

      {/* Main Experience Flow */}
      <main className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div key={currentSlide} custom={direction} initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-full bg-white overflow-x-hidden min-h-screen">
            {slides[currentSlide].comp}
          </motion.div>
        </AnimatePresence>

        {/* Global Navigation Controls */}
        <div className="fixed bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-8 pointer-events-none w-full px-4">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-4 md:gap-8 bg-slate-900/95 backdrop-blur-xl p-2.5 md:p-4 rounded-full border border-white/10 shadow-2xl pointer-events-auto max-w-full">
            <button onClick={() => navigate(-1)} disabled={currentSlide === 0} className={`p-4 md:p-6 rounded-full transition-all opacity-20 hover:opacity-100 ${currentSlide === 0 ? 'text-white/10 cursor-not-allowed' : 'text-white hover:bg-white/10 cursor-pointer active:scale-90'}`}><ChevronLeft size={24} className="md:w-8 md:h-8" strokeWidth={3} /></button>
            <div className="flex items-center gap-2 md:gap-4 px-2 md:px-4">
              {slides.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); window.scrollTo({ top: 0, behavior: 'instant' }); }} className={`group relative h-8 md:h-10 flex items-center justify-center transition-all ${i === currentSlide ? 'w-10 md:w-16' : 'w-2 md:w-3 hover:w-4 md:hover:w-6'}`}><div className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-full bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.7)]' : 'w-full bg-white/20 group-hover:bg-white/40'}`} /></button>
              ))}
            </div>
            <button onClick={() => navigate(1)} disabled={currentSlide === slides.length - 1} className={`p-4 md:p-6 rounded-full transition-all opacity-20 hover:opacity-100 ${currentSlide === slides.length - 1 ? 'text-white/10 cursor-not-allowed' : 'text-white hover:bg-white/10 cursor-pointer active:scale-90'}`}><ChevronRight size={24} className="md:w-8 md:h-8" strokeWidth={3} /></button>
          </motion.div>
        </div>
      </main>

      {/* Functional AI Search Tab */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] bg-slate-950/98 backdrop-blur-3xl flex flex-col items-center justify-center p-6 md:p-12 lg:p-32">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-6 md:top-12 right-6 md:right-12 p-4 md:p-6 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all border border-white/10 shadow-xl"><X size={24} className="md:w-8 md:h-8" /></button>
            <div className="max-w-4xl w-full space-y-8 md:space-y-12">
              <div className="flex items-center gap-4 md:gap-8 bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-white/10 shadow-2xl">
                <Search size={32} className="md:w-10 md:h-10 text-blue-500 shrink-0" />
                <input 
                  autoFocus 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search SVS Intelligence..." 
                  className="bg-transparent border-none outline-none text-xl md:text-3xl lg:text-5xl text-white font-black w-full placeholder:text-white/5" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {filteredFeatures.length > 0 ? (
                  filteredFeatures.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => {
                        setCurrentSlide(item.s);
                        setIsSearchOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="p-6 md:p-8 bg-white/5 rounded-2xl md:rounded-3xl border border-white/5 flex items-center justify-between group hover:bg-blue-600 transition-all cursor-pointer shadow-lg"
                    >
                      <div className="flex items-center gap-4 md:gap-5">
                        <Terminal size={18} className="md:w-5 md:h-5 text-blue-400 group-hover:text-white shrink-0" />
                        <span className="text-base md:text-lg font-bold text-white/80 group-hover:text-white uppercase tracking-tight">{item.t}</span>
                      </div>
                      <ArrowRight size={16} className="md:w-[18px] md:h-[18px] text-white/20 group-hover:text-white shrink-0" />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-white/20 font-black text-sm md:text-lg text-center col-span-2 uppercase tracking-[0.3em] py-8 md:py-12">Awaiting Strategic Input...</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Index */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-3xl p-6 md:p-12 lg:p-32 flex flex-col justify-center">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 md:top-12 right-6 md:right-12 p-4 md:p-6 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all border border-white/10 cursor-pointer shadow-xl"><X size={24} className="md:w-8 md:h-8" /></button>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
              <div className="space-y-8 md:space-y-12">
                <div className="flex items-center gap-4 md:gap-8"><img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-10 md:h-16 w-auto bg-white rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-2xl" /><span className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase">Executive Index</span></div>
                <div className="grid grid-cols-1 gap-2 md:gap-4 overflow-y-auto max-h-[60vh] lg:max-h-none pr-4">
                  {slides.map((slide, i) => (
                    <motion.button key={slide.id} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }} className={`flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all text-left group cursor-pointer border border-transparent ${i === currentSlide ? 'bg-blue-600 text-white shadow-2xl border-white/10' : 'hover:bg-white/5 text-white/30 hover:text-white'}`}><span className={`text-xl md:text-2xl font-black shrink-0 ${i === currentSlide ? 'text-white' : 'text-white/10 group-hover:text-blue-50'}`}>0{i + 1}</span><span className="text-lg md:text-2xl lg:text-4xl font-black tracking-tighter uppercase">{slide.label}</span></motion.button>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex flex-col justify-end pb-6">
                <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
                  <p className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6">Strategic Focus</p>
                  <p className="text-2xl font-light text-slate-400 leading-relaxed italic">"Modernizing national security through geospatial intelligence and citizen-police collaboration."</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
