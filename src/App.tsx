import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  Smartphone
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
      <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex justify-center p-1">
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 bg-blue-50 rounded-full"
        />
      </div>
      <span className="text-[9px] font-black text-blue-500/50 uppercase tracking-[0.4em]">Scroll for Details</span>
    </motion.div>
  );
};

const SectionDivider = ({ title }: { title: string }) => (
  <div className="flex items-center gap-8 py-24">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200"></div>
    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] whitespace-nowrap">{title}</h3>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200"></div>
  </div>
);

const MobileMockup = ({ src, children, label }: { src?: string, children?: React.ReactNode, label: string }) => (
  <div className="relative group mx-auto">
    <div className="relative w-[280px] lg:w-[310px] h-[580px] lg:h-[640px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:scale-[1.01] transition-all duration-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-800 rounded-b-2xl z-20"></div>
      <div className="w-full h-full bg-slate-50 relative flex flex-col">
        {src ? (
          <img src={src} alt={label} className="w-full h-full object-cover" onError={(e) => (e.target as HTMLImageElement).src = `https://placehold.co/400x800/f8fafc/64748b?text=${encodeURIComponent(label)}`} />
        ) : (
          children
        )}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-[80px] -z-10 group-hover:bg-blue-600/20 transition-all"></div>
  </div>
);

const PhoneSOSContent = () => (
  <div className="flex flex-col h-full bg-white font-sans overflow-hidden">
    {/* Status Bar */}
    <div className="flex justify-between items-center px-6 py-4 bg-slate-50/50">
      <span className="text-[10px] font-black text-slate-900">9:41</span>
      <div className="flex gap-1.5 items-center">
        <Signal size={10} className="text-slate-900" />
        <div className="w-4 h-2 rounded-[2px] border border-slate-400 relative">
          <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-slate-900 m-[1px] rounded-[1px]"></div>
        </div>
      </div>
    </div>
    
    {/* App Bar */}
    <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100">
      <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white text-[10px] font-black shadow-lg shadow-blue-500/20">NPF</div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">SafeAlert</span>
      <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100"><Settings size={14} className="text-slate-400" /></div>
    </div>

    {/* SOS Button Area */}
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50/30">
      <div className="relative mb-12">
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-red-600 rounded-full blur-2xl"
        />
        <motion.button
          whileTap={{ scale: 0.92 }}
          className="relative w-36 h-36 bg-red-600 rounded-full shadow-2xl flex flex-col items-center justify-center border-[6px] border-white/20 active:bg-red-700 transition-all group"
        >
          <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-[spin_4s_linear_infinite]"></div>
          <AlertCircle size={40} className="text-white mb-2" />
          <span className="text-white font-black text-3xl tracking-tighter">SOS</span>
          <span className="text-white/60 text-[7px] font-black uppercase tracking-[0.2em] mt-1.5">Hold to trigger</span>
        </motion.button>
      </div>
      
      <div className="w-full p-4 bg-white rounded-2xl border border-slate-100 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">NIN Verified</span>
          </div>
          <span className="text-[8px] font-black text-slate-300 uppercase">ID: SA-9921</span>
        </div>
        <p className="text-[10px] font-bold text-slate-700">Police Unit 04-B / Lagos HQ</p>
        <p className="text-[9px] text-slate-400 font-medium">ETA: 4-6 Minutes</p>
      </div>
    </div>

    {/* Quick Grid */}
    <div className="p-4 grid grid-cols-2 gap-3 bg-white border-t border-slate-100">
      {[
        { t: "Road Alert", i: <Zap /> },
        { t: "Report Crime", i: <Shield /> },
        { t: "Missing", i: <Users /> },
        { t: "Suspicious", i: <SearchIcon /> }
      ].map((item, i) => (
        <div key={i} className="bg-slate-50 p-3.5 rounded-2xl flex flex-col items-center gap-2 border border-slate-100 group hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer">
          <div className="text-blue-600 group-hover:text-white transition-colors">{React.cloneElement(item.i as React.ReactElement, { size: 14 })}</div>
          <span className="text-[7px] font-black text-slate-500 group-hover:text-white uppercase tracking-wider transition-colors">{item.t}</span>
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
      <div className="flex-1 p-8 lg:p-24 flex flex-col justify-center border-r border-slate-800 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-8 mb-10">
            <img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-16 w-auto bg-white rounded-2xl p-2.5 shadow-2xl shadow-blue-500/20" />
            <div className="h-12 w-px bg-slate-700"></div>
            <span className="text-2xl font-bold tracking-tight">TRICODE PRO LTD</span>
          </div>
          <p className="text-blue-400 text-xs font-black uppercase tracking-[0.5em] mb-10">National Security Infrastructure</p>
        </div>
        <h1 className="text-6xl lg:text-[9rem] font-black mb-10 leading-[0.85] tracking-tighter">
          NPF <span className="text-blue-500 underline decoration-blue-500/10">SafeAlert</span>
        </h1>
        <h2 className="text-3xl lg:text-5xl font-light text-slate-300 mb-12 italic opacity-90 leading-tight">Surveillance & Vigilance <br/>System (NPF-SVS)</h2>
        <p className="text-xl lg:text-3xl text-slate-400 max-w-2xl leading-relaxed font-medium">
          Nationwide emergency response and citizen safety platform designed for the Nigeria Police Force.
        </p>
        <ScrollIndicator />
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center p-16 bg-white">
        <MobileMockup src="/Assests/splash_screen_1/screen.png" label="SafeAlert App" />
      </div>
    </div>

    <div className="p-8 lg:p-32 bg-white">
      <SectionDivider title="Product Vision" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Mission <span className="text-blue-600">Statement</span></h3>
          <p className="text-2xl text-slate-600 leading-relaxed font-bold italic">“To make every Nigerian’s safety just one tap away — connecting citizens and police through trust, speed, and technology.”</p>
          <div className="grid grid-cols-1 gap-6">
            {[
              { t: "AI-Driven Triage", d: "Automated classification of urgency (Accident, Crime, Distress).", i: <Activity /> },
              { t: "NIN & Passport", d: "Cross-verified identity via NIMC and Immigration APIs.", i: <ShieldCheck /> },
              { t: "Live Geofencing", d: "System verifies if alert location matches registered address.", i: <MapIcon /> },
              { t: "Multilingual Support", d: "English, Hausa, Yoruba, Igbo support for universal access.", i: <Globe2 /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-7 bg-slate-50 rounded-[2rem] border border-slate-100 group">
                <div className="w-11 h-11 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.i as React.ReactElement, { size: 20 })}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{item.t}</h4>
                  <p className="text-slate-500 font-medium text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center py-10 lg:py-0">
          <MobileMockup label="Structured SOS Content">
            <PhoneSOSContent />
          </MobileMockup>
        </div>
      </div>
    </div>
  </div>
);

const Slide_BusinessGoals = () => (
  <div className="relative">
    <div className="min-h-screen p-8 lg:p-32 flex flex-col justify-center bg-slate-50">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
        <div>
          <h2 className="text-5xl lg:text-[7rem] font-black text-slate-900 mb-6 tracking-tighter leading-none">Strategic KPIs</h2>
          <div className="h-2 w-32 bg-blue-600 rounded-full"></div>
        </div>
        <div className="text-left lg:text-right">
          <p className="text-blue-400 text-xs font-black uppercase tracking-[0.4em] mb-4">Performance Targets (Year 1)</p>
          <div className="flex items-center gap-4 px-6 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <BarChart3 size={20} className="text-blue-600" />
            <span className="text-lg font-black text-slate-900">1.5M Verified Users</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { t: "Urban Response", s: "< 5 Minutes", d: "Rapid dispatch target for Lagos, Abuja, and Port Harcourt.", icon: <Zap />, color: "amber" },
          { t: "Rural Response", s: "< 10 Minutes", d: "Optimized coordination for rural safety and banditry alerts.", icon: <Navigation />, color: "blue" },
          { t: "False Alarm Rate", s: "< 2.0%", d: "Target reduction through strict NIN-linked sanctions.", icon: <AlertCircle />, color: "emerald" },
          { t: "Operational Units", s: "37 Commands", d: "Full coverage across all 36 states plus FCT.", icon: <Grid />, color: "indigo" }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm transition-all group">
            <div className={`w-16 h-16 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-8 text-${item.color}-600 group-hover:bg-${item.color}-600 group-hover:text-white transition-all`}>
              {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
            </div>
            <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">{item.s}</h3>
            <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">{item.t}</h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
          </motion.div>
        ))}
      </div>
      <ScrollIndicator />
    </div>

    <div className="p-8 lg:p-32 bg-white">
      <SectionDivider title="Analytics & AI Layer" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="p-12 bg-slate-900 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 text-blue-500/10"><Activity size={180} /></div>
            <h4 className="text-4xl font-black mb-10 tracking-tighter">AI Capabilities</h4>
            <div className="space-y-8 relative z-10">
              {[
                "Behavioral AI: Detects false alarms via pattern mismatches.",
                "Predictive Mapping: Identifies crime hotspots via geospatial data.",
                "Leaderboards: Measures unit performance by response time.",
                "Automated Sanctions: Links penalty fees to verified identity."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 font-black text-sm">0{i+1}</div>
                  <span className="text-lg font-bold tracking-tight text-slate-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { l: 'User Satisfaction', v: '90%+', d: 'Target positive feedback score from citizens.' },
            { l: 'Data Accuracy', v: '99.9%', d: 'NIN and Passport verified registration data.' }
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
              <p className="text-5xl font-black text-blue-600 mb-3">{stat.v}</p>
              <p className="text-base font-black text-slate-900 mb-2">{stat.l}</p>
              <p className="text-xs text-slate-500 font-medium">{stat.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide_UIGallery = () => {
  const [activeTab, setActiveTab] = useState('Citizen');
  const categories = {
    'Citizen': [
      { url: "/Assests/home_dashboard_sos_control_1/screen.png", t: "SOS Interface", d: "One-tap panic trigger with GPS." },
      { url: "/Assests/citizen_dashboard_improved_ux/screen.png", t: "SafeAlert Dashboard", d: "Verified citizen command center." },
      { url: "/Assests/citizen_report_incident_improved_ux/screen.png", t: "Incident Report", d: "Evidence-backed crime reporting." },
      { url: "/Assests/live_response_screen_improved_ux/screen.png", t: "Live Response", d: "Real-time officer ETA tracking." }
    ],
    'Officer': [
      { url: "/Assests/officer_dashboard_improved_ux/screen.png", t: "Officer Patrol", d: "Assigned incident management." },
      { url: "/Assests/officer_verification_improved_ux/screen.png", t: "Duty Onboarding", d: "Biometric and Badge ID verification." },
      { url: "/Assests/live_response_tracking_1/screen.png", t: "Route Navigation", d: "Precise victim location routing." },
      { url: "/Assests/officer_case_file_input_citizen_origin/screen.png", t: "Field Reports", d: "Multimedia evidence upload." }
    ],
    'Command': [
      { url: "/Assests/admin_dashboard_live_map_improved_ux/screen.png", t: "Live Map Overlay", d: "Nationwide strategic oversight." },
      { url: "/Assests/admin_dashboard_incident_feed/screen.png", t: "Control Feed", d: "Real-time triage and assignment." },
      { url: "/Assests/super_admin_dashboard_complete_ux/screen.png", t: "Unit Analytics", d: "Command-level performance metrics." },
      { url: "/Assests/admin_login_with_2fa_improved_ux/screen.png", t: "Secure Access", d: "Mandatory RBAC and 2FA gateway." }
    ]
  };

  return (
    <div className="relative bg-white">
      <div className="min-h-screen p-8 lg:p-32 flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div>
            <h2 className="text-5xl lg:text-[7rem] font-black text-slate-900 mb-6 tracking-tighter leading-none">UX Showcase</h2>
            <div className="h-2 w-32 bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {Object.keys(categories).map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {cat} App
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimatePresence mode="wait">
            {categories[activeTab as keyof typeof categories].map((screen, i) => (
              <motion.div 
                key={screen.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col gap-6"
              >
                <MobileMockup src={screen.url} label={screen.t} />
                <div className="text-center">
                  <h4 className="font-black text-xl text-slate-900 mb-1">{screen.t}</h4>
                  <p className="text-slate-500 font-medium text-xs">{screen.d}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <ScrollIndicator />
      </div>

      <div className="p-8 lg:p-32 bg-slate-50">
        <SectionDivider title="Comprehensive Asset Map" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            "onboarding_verification", "sos_panic_control", "incident_reporting", "live_tracking", "command_analytics",
            "unit_management", "officer_verification", "billing_sanctions", "notification_hub", "audit_logging"
          ].map((tag, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center group hover:border-blue-500 transition-all cursor-default">
              <Grid className="text-slate-300 group-hover:text-blue-500 mb-3 transition-colors" size={20} />
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-tight">{tag.replace(/_/g, ' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Slide_Governance = () => (
  <div className="min-h-screen bg-white p-8 lg:p-32 flex flex-col justify-center">
    <SectionDivider title="PGIS Department Oversight" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h2 className="text-5xl lg:text-[7rem] font-black text-slate-900 mb-8 tracking-tighter leading-none">Governance</h2>
        <p className="text-xl lg:text-3xl text-slate-600 mb-12 font-medium leading-relaxed">
          The SVS is supervised by the newly proposed <span className="text-blue-600 font-black">Police Geospatial Intelligence & Surveillance (PGIS)</span> Department.
        </p>
        
        <div className="space-y-6 mb-12">
          {[
            "Data compliance: NDPA 2023 & Cybercrime Act.",
            "Immutable audit records for operational transparency.",
            "Automated sanctions linked to digital identities."
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
              <span className="text-lg font-bold text-slate-700">{text}</span>
            </div>
          ))}
        </div>

        <div className="p-8 bg-red-50 rounded-[2.5rem] border border-red-100">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="text-red-600" size={32} />
            <h4 className="text-2xl font-black text-red-900 uppercase tracking-tighter">Disciplinary Policy</h4>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { l: "1st False Alarm", v: "System Warning + Account Flagged" },
              { l: "2nd False Alarm", v: "7-Day Temporary Suspension" },
              { l: "3rd False Alarm", v: "21-Day Suspension + ₦5,000 Fine" },
              { l: "Repeated Offense", v: "Permanent Ban + PGIS Database Report" }
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-white/60 rounded-2xl border border-red-100">
                <span className="text-xs font-black text-red-900 uppercase tracking-widest">{p.l}</span>
                <span className="text-xs font-bold text-slate-600">{p.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12">
        <MobileMockup src="/Assests/admin_login_with_2fa_improved_ux/screen.png" label="Secure Access" />
        <div className="flex items-center gap-6 bg-slate-900 px-10 py-6 rounded-3xl text-white shadow-2xl">
          <Fingerprint size={32} className="text-blue-500" />
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-400">Security Layer</span>
            <span className="text-lg font-bold">Biometric Authentication</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide_TechStack = () => (
  <div className="min-h-screen bg-slate-50 p-8 lg:p-32 flex flex-col justify-center">
    <SectionDivider title="Engineering Architecture" />
    <div className="max-w-7xl mx-auto w-full">
      <div className="text-center mb-24">
        <h2 className="text-5xl lg:text-[7rem] font-black text-slate-900 mb-6 tracking-tighter leading-none">System Stack</h2>
        <p className="text-xl lg:text-3xl text-slate-500 font-medium max-w-3xl mx-auto">Scalable, secure, and production-ready infrastructure built for national deployment.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { t: "Frontend Layer", l: "Flutter & Next.js", i: <Smartphone />, d: "Cross-platform mobile and responsive command webapps." },
          { t: "Backend Logic", l: "Node.js & Django", i: <Server />, d: "RESTful APIs with robust RBAC and geo-routing logic." },
          { t: "Data Persistence", l: "PostgreSQL & Firebase", i: <Database />, d: "Relational incident logs and real-time state sync." },
          { t: "Security Ops", l: "AES-256 & TLS 1.3", i: <Lock />, d: "End-to-end encrypted data streams and 2FA gateway." }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-white rounded-[3.5rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-500 transition-all">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {React.cloneElement(item.i as React.ReactElement, { size: 36 })}
            </div>
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">{item.t}</h3>
            <h2 className="text-2xl font-black text-slate-900 mb-4">{item.l}</h2>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {["AWS EC2", "Cloudflare", "NIMC API", "Google Maps API", "Twilio SMS", "Firebase FCM"].map((tag, i) => (
          <span key={i} className="px-8 py-3 bg-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Slide_LiveIntelligence = () => (
  <div className="relative min-h-screen bg-slate-900 text-white flex flex-col lg:flex-row overflow-hidden">
    <div className="flex-1 p-8 lg:p-24 flex flex-col justify-center relative z-10">
      <h4 className="text-blue-400 font-black text-xs uppercase tracking-[0.5em] mb-8">Spatial Awareness</h4>
      <h2 className="text-5xl lg:text-[7rem] font-black mb-10 tracking-tighter leading-none">Live Intelligence</h2>
      <p className="text-xl lg:text-3xl text-slate-400 max-w-xl mb-16 font-medium leading-relaxed">
        Real-time strategic oversight of national security assets and incident density via PGIS.
      </p>
      
      <div className="space-y-6">
        {[
          { t: "Dynamic Heatmapping", d: "Visualize crime hotspots in real-time.", i: <Radar /> },
          { t: "Officer Tracking", d: "GPS verified deployment of patrol units.", i: <Navigation /> },
          { t: "Geo-Fencing", d: "Automated alerts for sector breaches.", i: <MapIcon /> }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-md">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">{item.i}</div>
            <div>
              <h5 className="font-black text-white">{item.t}</h5>
              <p className="text-slate-400 text-sm font-medium">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 relative overflow-hidden bg-slate-800">
      <div className="absolute inset-0 opacity-40">
        <img src="/Assests/admin_dashboard_live_map_improved_ux/screen.png" className="w-full h-full object-cover grayscale brightness-50" alt="Map" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <motion.div animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute inset-0 bg-blue-500 rounded-full blur-3xl" />
          <div className="relative w-80 h-80 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-40 h-40 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.8)] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide_Engagement = () => (
  <div className="min-h-screen bg-slate-950 text-white p-8 lg:p-32 flex flex-col justify-center relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[200px] translate-x-1/2 translate-y-1/2"></div>
    <div className="max-w-5xl mx-auto w-full text-center relative z-10">
      <h4 className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-10">Next Steps</h4>
      <h2 className="text-6xl lg:text-[9rem] font-black mb-16 tracking-tighter leading-[0.85]">Let's Secure the <span className="text-blue-600">Future.</span></h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <a href="mailto:info@tricodepro.com" className="px-16 py-8 bg-blue-600 rounded-[2.5rem] font-black text-2xl tracking-tighter hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-6 group">
          Get in Touch <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
        <a 
          href="/Assests/SafeAlert Mobile .pdf" 
          download="NPF_SafeAlert_PRD.pdf"
          className="px-16 py-8 bg-white/5 border border-white/10 rounded-[2.5rem] font-black text-2xl tracking-tighter hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-6 group"
        >
          Download PRD <Download className="group-hover:translate-y-1 transition-transform" />
        </a>
        <div className="flex gap-6">
          {[Linkedin, Twitter, Globe2].map((Icon, i) => (
            <button key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all"><Icon size={32} /></button>
          ))}
        </div>
      </div>
      <p className="mt-32 text-slate-500 font-black uppercase tracking-[0.6em] text-[10px]">TRICODE PRO LTD &copy; 2026</p>
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
    <div className="w-full bg-slate-950 font-sans selection:bg-blue-500/30 text-slate-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1.5 flex gap-1.5 px-2 pt-2">
        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-full bg-white/10 rounded-full overflow-hidden">
            <motion.div initial={false} animate={{ width: i === currentSlide ? '100%' : i < currentSlide ? '100%' : '0%', backgroundColor: i === currentSlide ? '#2563eb' : i < currentSlide ? '#1e293b' : 'rgba(255, 255, 255, 0)' }} className="h-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
          </div>
        ))}
      </div>

      {/* Navigation Header */}
      <header className="fixed top-8 left-0 right-0 z-50 px-8 lg:px-16 flex justify-between items-center pointer-events-none">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-6 bg-white/90 backdrop-blur-xl px-8 py-4 rounded-[2rem] border border-white/20 shadow-xl pointer-events-auto">
          <img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-10 w-auto rounded-xl p-1 bg-white" />
          <div className="h-8 w-px bg-slate-200"></div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-black tracking-tighter uppercase text-sm leading-none">NPF SafeAlert</span>
            <span className="text-blue-600 text-[8px] font-black uppercase tracking-[0.4em] mt-1">SVS v5.2</span>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-6 pointer-events-auto">
          <button onClick={() => setIsSearchOpen(true)} className="p-4 bg-white/90 backdrop-blur-xl text-slate-900 rounded-2xl hover:bg-white border border-white/20 transition-all active:scale-95 cursor-pointer shadow-lg group"><SearchIcon size={24} /></button>
          <button onClick={() => setIsMenuOpen(true)} className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all active:scale-95 cursor-pointer shadow-xl group"><Menu size={24} /></button>
        </div>
      </header>

      {/* Main Experience Flow */}
      <main className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div key={currentSlide} custom={direction} initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="w-full bg-white overflow-x-hidden min-h-screen">
            {slides[currentSlide].comp}
          </motion.div>
        </AnimatePresence>

        {/* Global Navigation Controls */}
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-8 pointer-events-none">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-8 bg-slate-900/95 backdrop-blur-xl p-4 rounded-full border border-white/10 shadow-2xl pointer-events-auto">
            <button onClick={() => navigate(-1)} disabled={currentSlide === 0} className={`p-6 rounded-full transition-all ${currentSlide === 0 ? 'text-white/10 cursor-not-allowed' : 'text-white hover:bg-white/10 cursor-pointer active:scale-90'}`}><ChevronLeft size={32} strokeWidth={3} /></button>
            <div className="flex items-center gap-4 px-4">
              {slides.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); window.scrollTo({ top: 0, behavior: 'instant' }); }} className={`group relative h-10 flex items-center justify-center transition-all ${i === currentSlide ? 'w-16' : 'w-3 hover:w-6'}`}><div className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.7)]' : 'w-full bg-white/20 group-hover:bg-white/40'}`} /></button>
              ))}
            </div>
            <button onClick={() => navigate(1)} disabled={currentSlide === slides.length - 1} className={`p-6 rounded-full transition-all ${currentSlide === slides.length - 1 ? 'text-white/10 cursor-not-allowed' : 'text-white hover:bg-white/10 cursor-pointer active:scale-90'}`}><ChevronRight size={32} strokeWidth={3} /></button>
          </motion.div>
        </div>
      </main>

      {/* Functional AI Search Tab */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] bg-slate-950/98 backdrop-blur-3xl flex flex-col items-center justify-center p-8 lg:p-32">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-12 right-12 p-6 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all border border-white/10"><X size={32} /></button>
            <div className="max-w-4xl w-full space-y-12">
              <div className="flex items-center gap-8 bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
                <Search size={40} className="text-blue-500" />
                <input 
                  autoFocus 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask SVS Intelligence..." 
                  className="bg-transparent border-none outline-none text-3xl lg:text-5xl text-white font-black w-full placeholder:text-white/5" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="p-8 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between group hover:bg-blue-600 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-5">
                        <Terminal size={20} className="text-blue-400 group-hover:text-white" />
                        <span className="text-lg font-bold text-white/80 group-hover:text-white">{item.t}</span>
                      </div>
                      <ArrowRight size={18} className="text-white/20 group-hover:text-white" />
                    </motion.div>
                  ))
                ) : (
                  <p className="text-white/20 font-black text-lg text-center col-span-2 uppercase tracking-widest">Awaiting Strategic Input...</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Index */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-3xl p-12 lg:p-32 flex flex-col justify-center">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 p-6 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all border border-white/10 cursor-pointer"><X size={32} /></button>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="flex items-center gap-8"><img src="/Assests/tricode 2.PNG" alt="TRICODE" className="h-16 w-auto bg-white rounded-2xl p-2" /><span className="text-white font-black text-3xl tracking-tighter uppercase">Executive Index</span></div>
                <div className="grid grid-cols-1 gap-4">
                  {slides.map((slide, i) => (
                    <motion.button key={slide.id} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }} className={`flex items-center gap-6 p-6 rounded-3xl transition-all text-left group cursor-pointer border border-transparent ${i === currentSlide ? 'bg-blue-600 text-white shadow-xl border-white/10' : 'hover:bg-white/5 text-white/30 hover:text-white'}`}><span className={`text-2xl font-black ${i === currentSlide ? 'text-white' : 'text-white/10 group-hover:text-blue-50'}`}>0{i + 1}</span><span className="text-2xl lg:text-4xl font-black tracking-tighter">{slide.label}</span></motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
