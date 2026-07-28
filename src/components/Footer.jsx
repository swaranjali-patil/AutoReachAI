import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Shield, Smartphone, Heart, ArrowUpRight, Globe, Share2, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#f8fafc] border-t border-slate-200/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-indigo-500/5 via-cyan-500/2 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200/60">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                AutoReach<span className="text-gradient-purple">AI</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              Automate your customer outreach directly from your Android device. SMS, Missed Call replies, and WhatsApp messages sent seamlessly with 100% on-device privacy.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-500/30 transition-all shadow-sm">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-500/30 transition-all shadow-sm">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Community" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-500/30 transition-all shadow-sm">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#permissions" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Android Permissions & Compliance
                </a>
              </li>
              <li>
                <a href="mailto:sparkcomputer555@gmail.com" className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy-policy" id="footer-privacy-link" className="text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5 font-medium">
                  <Shield className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <a href="#permissions" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Google Play Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Contact Us</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Have questions or need custom automation rules? Email us at <strong className="text-indigo-600">sparkcomputer555@gmail.com</strong> or click below.
            </p>
            <a 
              href="mailto:sparkcomputer555@gmail.com" 
              id="footer-contact-link"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm text-indigo-600 hover:bg-slate-50 hover:border-indigo-500/30 transition-all font-semibold shadow-sm w-full justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Support</span>
            </a>
            <div className="pt-2 text-xs text-slate-400">
              Operating Office: Maharashtra, India
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} AutoReachAI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Android Businesses
            </span>
            <span>&bull;</span>
            <Link to="/privacy-policy" className="hover:text-slate-700 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
