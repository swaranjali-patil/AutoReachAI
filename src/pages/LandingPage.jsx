import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Download, 
  MessageSquare, 
  PhoneCall, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Lock, 
  Smartphone, 
  ArrowRight, 
  Play, 
  Layers, 
  Cpu, 
  Activity,
  AlertCircle,
  FileText,
  Clock,
  UserCheck,
  ShieldAlert,
  Terminal,
  HelpCircle,
  Mail
} from 'lucide-react';

const LandingPage = () => {
  const [activeChannel, setActiveChannel] = useState('whatsapp');

  useEffect(() => {
    document.title = "AutoReachAI - Automate Your Customer Outreach Instantly";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "AutoReachAI automates SMS, Missed Call replies, and WhatsApp messages directly from your device. Boost response rates and never miss a business lead.");
    }
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-7 h-7 text-cyan-600" />,
      title: "AI-powered Templates",
      description: "Create dynamic template messages with custom placeholders like {CustomerName}, {Time}, and {Company}. Tailor every response to feel personal and engaging.",
      badge: "Dynamic Variables",
      gradient: "from-cyan-500/10 to-blue-500/5",
      border: "hover:border-cyan-500/30"
    },
    {
      icon: <Layers className="w-7 h-7 text-indigo-600" />,
      title: "Multi-channel Support",
      description: "Toggle automated outreach between SMS and WhatsApp effortlessly. Reach customers on their preferred communication channels without manual intervention.",
      badge: "SMS & WhatsApp",
      gradient: "from-indigo-500/10 to-purple-500/5",
      border: "hover:border-indigo-500/30"
    },
    {
      icon: <Zap className="w-7 h-7 text-purple-600" />,
      title: "Rule-based Automation",
      description: "Set intelligent triggers (e.g., reply automatically when you miss a call or receive an inquiry keyword). Define custom working hours and cooldown periods.",
      badge: "Smart Triggers",
      gradient: "from-purple-500/10 to-pink-500/5",
      border: "hover:border-purple-500/30"
    },
    {
      icon: <Lock className="w-7 h-7 text-emerald-600" />,
      title: "Privacy-First Architecture",
      description: "Message configurations, contact lists, and automation rules run strictly locally on-device. Zero cloud syncing, zero external servers, 100% data ownership.",
      badge: "On-Device Processing",
      gradient: "from-emerald-500/10 to-teal-500/5",
      border: "hover:border-emerald-500/30"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Download & Install",
      description: "Download and install AutoReachAI directly on your Android device from the Play Store or official APK release.",
      icon: <Download className="w-6 h-6 text-cyan-600" />
    },
    {
      number: "02",
      title: "Grant Permissions",
      description: "Set the app as your default SMS handler and grant Accessibility permission (used strictly for WhatsApp auto-sending without screen monitoring).",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />
    },
    {
      number: "03",
      title: "Configure Rules & Templates",
      description: "Setup your custom message templates and automation rules (e.g., 'If Missed Call from new number → Send WhatsApp Catalog').",
      icon: <SlidersIcon className="w-6 h-6 text-purple-600" />
    },
    {
      number: "04",
      title: "Activate Automation",
      description: "Turn on the automation switch and let AutoReachAI handle incoming leads and missed calls automatically while you focus on work.",
      icon: <Activity className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-20">
      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Gradients & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-cyan-500/8 via-indigo-500/8 to-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Next-Gen Android Automation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
                Automate Your <br className="hidden sm:block" />
                <span className="text-gradient-purple">Customer Outreach</span> <br className="hidden sm:block" />
                Instantly
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                AutoReachAI automates SMS, Missed Call replies, and WhatsApp messages directly from your device. Boost response rates and never miss a business lead.
              </p>

              {/* Call-To-Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#how-it-works"
                  id="hero-demo-btn"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-indigo-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4.5 h-4.5 text-white fill-white" />
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 bg-opacity-10">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">100% Local</div>
                    <div className="text-[11px] text-slate-500">Zero Cloud Storage</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 bg-opacity-10">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">&lt; 1s Reply</div>
                    <div className="text-[11px] text-slate-500">Instant Triggers</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 bg-opacity-10">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">24/7 Active</div>
                    <div className="text-[11px] text-slate-500">Never Miss Leads</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Glow Behind Mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-10 transform scale-90" />

              {/* Phone Container */}
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-gradient-to-b from-slate-200 to-slate-300 p-3 rounded-[40px] border border-slate-200 shadow-2xl animate-float">
                <div className="w-full bg-[#f8fafc] rounded-[32px] overflow-hidden border border-slate-200 relative">
                  
                  {/* Speaker bar */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-300 rounded-full z-20" />

                  {/* App Screen Content */}
                  <div className="p-4 pt-6 space-y-4">
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                          AI
                        </div>
                        <span className="font-bold text-sm text-slate-900">AutoReach<span className="text-indigo-600">AI</span></span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Active
                      </div>
                    </div>

                    {/* Stats Widget */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-[10px] text-slate-500 font-medium">Leads Saved Today</div>
                        <div className="text-lg font-bold text-cyan-600">42 Leads</div>
                        <div className="text-[9px] text-emerald-600 font-bold">+18% vs yesterday</div>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                        <div className="text-[10px] text-slate-500 font-medium">Response Rate</div>
                        <div className="text-lg font-bold text-purple-600">99.4%</div>
                        <div className="text-[9px] text-slate-400 font-medium">0.8s avg reply</div>
                      </div>
                    </div>

                    {/* Rule Toggle Cards */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Triggers</div>
                      
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">Missed Call Reply</div>
                            <div className="text-[10px] text-slate-500">WhatsApp &bull; Template #1</div>
                          </div>
                        </div>
                        <div className="w-9 h-5 rounded-full bg-cyan-500 p-0.5 flex justify-end">
                          <div className="w-4 h-4 rounded-full bg-white shadow" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">New SMS Inquiry</div>
                            <div className="text-[10px] text-slate-500">SMS &bull; Instant Catalog</div>
                          </div>
                        </div>
                        <div className="w-9 h-5 rounded-full bg-purple-500 p-0.5 flex justify-end">
                          <div className="w-4 h-4 rounded-full bg-white shadow" />
                        </div>
                      </div>
                    </div>

                    {/* Live Activity Feed */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent Activity</div>
                      <div className="p-2 rounded-lg bg-white border border-slate-100 flex items-center gap-2 text-[11px] shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="text-slate-600 truncate">Replied to +91 98765***** via WhatsApp</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-100 flex items-center gap-2 text-[11px] shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span className="text-slate-600 truncate">SMS Sent to missed caller +1 (555) 234-***</span>
                      </div>
                    </div>

                    {/* Real Image Mockup Override */}
                    <div className="pt-2">
                      <img 
                        src="/mockup.jpg" 
                        alt="AutoReachAI App Interface Mockup" 
                        className="w-full h-36 object-cover rounded-xl border border-slate-100 shadow-inner"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Badges */}
              <div className="absolute -left-6 bottom-16 bg-white border border-slate-100 p-3 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 animate-pulse">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero Missed Leads</div>
                  <div className="text-[10px] text-slate-500">Auto-reply while you sleep</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE FEATURES SECTION ================= */}
      <section id="features" className="py-24 bg-slate-50 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Core Features
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Powerful Automation Engineered for <span className="text-gradient-purple">Business Growth</span>
            </p>
            <p className="text-slate-600 text-base sm:text-lg">
              Every feature in AutoReachAI is designed to convert missed calls and unanswered messages into loyal paying customers.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-200/60 glass-card-hover flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Background Gradient Spot */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-indigo-500/30 transition-colors">
                    {item.icon}
                  </div>
                  
                  <div className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-sm">
                    {item.badge}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Demo Box */}
          <div className="mt-16 bg-gradient-to-r from-white via-slate-50 to-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Live Simulation</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  See How Dynamic Templates Respond
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  When a customer calls while you are busy, AutoReachAI instantly identifies the caller, compiles your tailored template, and fires off a polite response via SMS or WhatsApp within milliseconds.
                </p>
                
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveChannel('whatsapp')}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      activeChannel === 'whatsapp' 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10' 
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Reply</span>
                  </button>
                  <button
                    onClick={() => setActiveChannel('sms')}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      activeChannel === 'sms' 
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/10' 
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>SMS Reply</span>
                  </button>
                </div>
              </div>

              {/* Chat Simulation Preview */}
              <div className="lg:col-span-6 bg-slate-100 p-5 rounded-2xl border border-slate-200 space-y-4 font-sans">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Incoming Missed Call: +1 (555) 982-1049</span>
                  </div>
                  <span>Just now</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm max-w-[85%] text-sm text-slate-700">
                    📞 <span className="font-semibold text-slate-900">Missed Call Triggered</span> at 14:32 PM. Rule: "Working Hours Auto-Reply".
                  </div>

                  <div className={`p-4 rounded-2xl rounded-tr-none border max-w-[90%] ml-auto text-sm shadow-sm ${
                    activeChannel === 'whatsapp'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                  }`}>
                    <div className="text-[10px] uppercase font-bold tracking-wider mb-1 opacity-75 flex items-center gap-1">
                      {activeChannel === 'whatsapp' ? '💬 WhatsApp Auto-Sent' : '✉️ SMS Auto-Sent'}
                    </div>
                    <p className="leading-relaxed">
                      "Hi there! Thanks for calling <strong className="text-slate-900">AutoReachAI Support</strong>. We missed your call as we're currently assisting another client. Please let us know how we can help, or view our instant catalog at <span className="underline">autoreachai.com/catalog</span>."
                    </p>
                    <div className="text-[10px] text-right mt-2 opacity-60 flex items-center justify-end gap-1">
                      <span>Sent automatically &bull; 14:32 PM</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Step-by-Step Guide
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Setup Your Automation in <span className="text-gradient-purple">4 Simple Steps</span>
            </p>
            <p className="text-slate-600 text-base sm:text-lg">
              Get up and running in under 3 minutes. No technical coding required, just install and configure your automation rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/3 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 -z-10" />

            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-500/30 transition-all duration-300 relative group flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-slate-300 font-mono transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Setup Guarantee */}
          <div className="mt-16 max-w-xl mx-auto bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-center gap-3 text-center text-sm text-indigo-800">
            <Clock className="w-5 h-5 text-indigo-600 shrink-0 animate-spin" style={{ animationDuration: '10s' }} />
            <span><strong>Total Setup Time:</strong> Approximately 2 minutes. Compatible with all Android 9.0+ devices.</span>
          </div>

        </div>
      </section>

      {/* ================= DETAILED PERMISSIONS DISCLOSURE SECTION ================= */}
      <section id="permissions" className="py-24 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Google Play Compliance & Security</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Transparent Permissions & <span className="text-gradient-purple">Data Privacy</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                We believe in complete transparency. Here is exactly why AutoReachAI requests sensitive Android permissions and how your data remains 100% protected on your device.
              </p>
            </div>

            {/* Permission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SMS & Call Log Permission Card */}
              <div className="bg-white p-7 rounded-3xl border border-cyan-500/20 relative overflow-hidden shadow-md">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 bg-opacity-10">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">SMS & Call Log Permissions</h3>
                    <div className="text-xs text-cyan-600 font-mono font-bold">READ_CALL_LOG / SEND_SMS</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">What it does:</strong> Think of this as a helpful virtual assistant. The app needs to see when you miss a call or receive an inquiry so it knows exactly when to send your auto-replies.
                  </p>
                  <p>
                    <strong className="text-slate-900">How your data is protected:</strong> Every single message and call log stays entirely on your phone. They are processed locally to trigger your rules, meaning nothing is ever uploaded to the cloud or shared with anyone else.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Your conversations and contacts are 100% private to you—we never upload them to our servers or share them with third parties.</span>
                  </div>
                </div>
              </div>

              {/* Accessibility Service API Card */}
              <div className="bg-white p-7 rounded-3xl border border-purple-500/20 relative overflow-hidden shadow-md">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 bg-opacity-10">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Accessibility Service API</h3>
                    <div className="text-xs text-purple-600 font-mono font-bold">BIND_ACCESSIBILITY_SERVICE</div>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">What it does:</strong> This works like virtual fingers for WhatsApp. When a rule is triggered, it automatically pastes your response template and hits the "Send" button on your behalf.
                  </p>
                  <p>
                    <strong className="text-slate-900">How your data is protected:</strong> It only types and clicks what you specify in your rules. We never read your other chats, watch your screen, track what you type, or collect any private data.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 flex items-start gap-2">
                    <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>This service runs completely locally on your device and never monitors your keystrokes or screen outside of auto-sending replies.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Play Compliance Note Box */}
            <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-bold text-slate-800 flex items-center justify-center sm:justify-start gap-2">
                  <UserCheck className="w-4 h-4 text-indigo-600" />
                  <span>Looking for our complete legal documentation?</span>
                </div>
                <p className="text-xs text-slate-500">
                  Read our full official Privacy Policy detailing data retention, user rights, and contact procedures.
                </p>
              </div>
              <Link
                to="/privacy-policy"
                id="permissions-privacy-btn"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 flex items-center gap-2 whitespace-nowrap transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Read Privacy Policy</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA / DOWNLOAD SECTION ================= */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-10" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-50 via-indigo-50 to-purple-50 p-8 sm:p-12 lg:p-16 rounded-[40px] border border-indigo-100 text-center relative overflow-hidden shadow-lg">
            {/* Glows inside card */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center mx-auto shadow-md">
                <Bot className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Ready to Automate Your <br />
                <span className="text-gradient-purple">Business Communications?</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Join thousands of businesses using AutoReachAI to respond instantly to missed calls and messages. Email us at <strong className="text-indigo-600">support@autoreachai.com</strong> for a custom setup.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:support@autoreachai.com"
                  id="bottom-contact-btn"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-base shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-white" />
                  <span>Contact support for custom setup</span>
                </a>
                <Link
                  to="/privacy-policy"
                  id="bottom-privacy-btn"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-700 font-bold text-base border border-slate-200 shadow-md hover:bg-slate-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-indigo-600" />
                  <span>View Privacy Policy</span>
                </Link>
              </div>

              <div className="pt-6 text-xs text-slate-500 flex items-center justify-center gap-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Free 14-Day Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  No Credit Card Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function SlidersIcon(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

export default LandingPage;
