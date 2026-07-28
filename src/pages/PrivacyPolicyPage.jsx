import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle, AlertTriangle, PhoneCall, Terminal, Users, Database, HelpCircle, Mail, Globe, Sparkles, MessageSquare, Info } from 'lucide-react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy - AutoReach AI Official Compliance";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Official Privacy Policy for AutoReach AI. Learn how we handle your data with strict on-device processing, zero cloud storage, and transparent Android permission disclosures.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-700 pt-28 pb-24">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-indigo-500/5 via-cyan-500/2 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <div className="mb-8">
          <Link 
            to="/" 
            id="back-to-home-link"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl mb-12 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-[0.05] text-indigo-400 pointer-events-none">
            <Shield className="w-48 h-48 -mr-10 -mt-10" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Privacy & Compliance Policy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Privacy Policy for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AutoReach AI</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-4 border-t border-slate-800">
              <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                Google Play Compliant
              </span>
              <span>&bull;</span>
              <span><strong>Last Updated:</strong> July 28, 2026</span>
              <span>&bull;</span>
              <span><strong>Developer:</strong> Infoyashonand Technology Pvt Ltd</span>
              <span>&bull;</span>
              <span><strong>Package:</strong> com.spark.autoreachai</span>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <article className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 space-y-10 font-sans leading-relaxed text-slate-700 text-base shadow-lg relative overflow-hidden">
          
          {/* Welcome Message */}
          <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100/80 text-slate-700">
            <p className="leading-relaxed">
              <strong>Infoyashonand Technology Pvt Ltd</strong> ("we," "our," or "us") operates the <strong>AutoReach AI</strong> mobile application. We respect your privacy and are committed to protecting your personal data.
            </p>
            <p className="mt-3 leading-relaxed">
              This Privacy Policy explains how our application handles information, including sensitive permissions requested on your Android device. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* 1. Core Functionality & Purpose */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                1. Core Functionality & Purpose
              </h2>
            </div>
            <p>
              AutoReach AI functions as a <strong>Default SMS Application</strong> and <strong>Call Response Automation Tool</strong>. Its core purpose is to allow users to manage SMS messages, send/receive text conversations, and automatically dispatch custom pre-configured SMS replies to incoming callers when a call is missed or rejected.
            </p>
          </section>

          {/* 2. Sensitive Permissions & Data Usage */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                2. Sensitive Permissions & Data Usage
              </h2>
            </div>
            <p>
              To deliver its core features, AutoReach AI requests access to specific sensitive Android permissions. All data accessed by these permissions is processed <strong>100% on-device</strong> and is <strong>never collected, uploaded, sold, or shared with external servers or third parties.</strong>
            </p>

            <div className="space-y-6">
              {/* A. SMS Permissions */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">A. SMS Permissions (<code className="text-indigo-600 font-mono bg-indigo-50 px-1 py-0.5 rounded text-sm">SEND_SMS</code>, <code className="text-indigo-600 font-mono bg-indigo-50 px-1 py-0.5 rounded text-sm">RECEIVE_SMS</code>, <code className="text-indigo-600 font-mono bg-indigo-50 px-1 py-0.5 rounded text-sm">READ_SMS</code>)</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-600 pl-1">
                  <p><strong>Purpose:</strong> Required because AutoReach AI functions as your device's <strong>Default SMS Handler</strong>. These permissions enable the app to compose, send, receive, and display SMS messages, as well as send automated SMS replies (e.g., using your pre-set templates) when you receive a missed call.</p>
                  <p><strong>Data Storage:</strong> All SMS content and message history remain strictly stored locally on your device.</p>
                </div>
              </div>

              {/* B. Call Log Permission */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">B. Call Log Permission (<code className="text-cyan-600 font-mono bg-cyan-50 px-1 py-0.5 rounded text-sm">READ_CALL_LOG</code>)</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-600 pl-1">
                  <p><strong>Purpose:</strong> Required to detect phone call outcomes (such as missed calls or rejected calls) immediately after a call ends. The app reads recent call events solely to match missed calls against your selected auto-reply settings.</p>
                  <p><strong>Data Storage:</strong> Call log data is read on-demand locally on your device and is never transmitted off your device.</p>
                </div>
              </div>

              {/* C. Phone State Permission */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">C. Phone State Permission (<code className="text-emerald-600 font-mono bg-emerald-50 px-1 py-0.5 rounded text-sm">READ_PHONE_STATE</code>)</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-600 pl-1">
                  <p><strong>Purpose:</strong> Required to detect real-time telephony state transitions (idle, ringing, or call ended) so the app knows when a call occurs and can evaluate if an auto-reply should be triggered.</p>
                </div>
              </div>

              {/* D. Contacts Permission */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">D. Contacts Permission (<code className="text-purple-600 font-mono bg-purple-50 px-1 py-0.5 rounded text-sm">READ_CONTACTS</code>)</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-600 pl-1">
                  <p><strong>Purpose:</strong> Read-only access to resolve caller phone numbers to contact names. This allows the app to display friendly contact names in your recent activity log instead of raw phone numbers.</p>
                </div>
              </div>

              {/* E. Notification Permission */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <Info className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">E. Notification Permission (<code className="text-amber-600 font-mono bg-amber-50 px-1 py-0.5 rounded text-sm">POST_NOTIFICATIONS</code>)</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-600 pl-1">
                  <p><strong>Purpose:</strong> Required on Android 13+ to display status notifications when automated reply messages are sent or when user action is required.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Prominent Disclosure: Accessibility Service API */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                <Terminal className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>3. Prominent Disclosure: Accessibility Service API</span>
                <span className="text-sm font-mono text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  BIND_ACCESSIBILITY_SERVICE
                </span>
              </h2>
            </div>
            <p>
              AutoReach AI provides an <strong>optional</strong> feature allowing users to automate reply messages via WhatsApp.
            </p>
            <div className="bg-purple-50/50 border border-purple-200 p-6 rounded-2xl space-y-4">
              <div className="space-y-1">
                <strong className="text-slate-900 block font-bold text-base">How Accessibility is Used:</strong>
                <p className="text-sm text-slate-700">
                  When enabled by the user, AutoReach AI uses the Android Accessibility Service API <strong>exclusively</strong> to perform automated UI interactions within the official WhatsApp application (specifically to locate the text message input field and send button to dispatch your pre-set reply message).
                </p>
              </div>
              <div className="space-y-2 pt-2 border-t border-purple-200">
                <strong className="text-slate-900 block font-bold text-base">Privacy & Security Guarantee:</strong>
                <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                  <li>The Accessibility Service API is <strong>NOT</strong> used to monitor, read, collect, or store screen text, personal messages, or user inputs outside of dispatching the auto-reply.</li>
                  <li>The Accessibility Service API is <strong>NOT</strong> used to track keystrokes, log passwords, or capture personal data.</li>
                  <li>This feature is <strong>100% optional</strong> and requires explicit user enablement in Android Accessibility Settings. AutoReach AI operates fully as an SMS client without enabling Accessibility Services.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Third-Party Data Sharing & Selling */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                4. Third-Party Data Sharing & Selling
              </h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li><strong>No Data Selling:</strong> We do <strong>not</strong> sell, rent, or trade your personal data, call logs, contacts, or SMS messages to any third party.</li>
              <li><strong>No Analytics Tracking on Sensitive Data:</strong> We do not track or log your sensitive communication contents or caller details.</li>
            </ul>
          </section>

          {/* 5. Data Retention & Deletion */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Database className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                5. Data Retention & Deletion
              </h2>
            </div>
            <p>
              Because all app data (templates, activity logs, and settings) is stored locally on your device's private application storage:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>You can clear all data at any time by going to <strong>Android Settings &rarr; Apps &rarr; AutoReach AI &rarr; Clear Data / Clear Storage</strong>.</li>
              <li>Uninstalling the application immediately and permanently removes all app settings and logs from your device.</li>
            </ul>
          </section>

          {/* 6. Children's Privacy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                6. Children's Privacy
              </h2>
            </div>
            <p>
              AutoReach AI is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* 7. Changes to This Privacy Policy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                7. Changes to This Privacy Policy
              </h2>
            </div>
            <p>
              We may update our Privacy Policy from time to time to reflect policy or regulatory changes. Any updates will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Mail className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                8. Contact Us
              </h2>
            </div>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or data privacy practices, please contact us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Company & App Details</span>
                <div className="text-sm font-bold text-slate-900">Infoyashonand Technology Pvt Ltd</div>
                <div className="text-xs text-slate-500 font-semibold">Package: com.spark.autoreachai</div>
                <div className="text-xs text-slate-500 font-semibold">Operating Jurisdiction: Maharashtra, India</div>
              </div>
              
              <div className="p-5 rounded-2xl bg-indigo-50/30 border border-indigo-100 flex flex-col justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Support & Website</span>
                  <a href="mailto:sparkcomputer555@gmail.com" className="text-sm font-bold text-slate-900 hover:underline block mt-1">sparkcomputer555@gmail.com</a>
                  <a href="https://auto-reach-ai-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 font-semibold hover:underline block mt-1 flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>auto-reach-ai-tau.vercel.app</span>
                  </a>
                </div>
                <a
                  href="mailto:sparkcomputer555@gmail.com"
                  className="w-full text-center px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-colors block shadow-md shadow-indigo-500/10"
                >
                  Send us an email
                </a>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
