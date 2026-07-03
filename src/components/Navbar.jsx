import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Mail, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (!isHome) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            id="nav-logo"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-300">
              <Bot className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                AutoReach<span className="text-gradient-purple">AI</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Android Outreach
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('permissions')} 
                  className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  Permissions
                </button>
              </>
            ) : (
              <Link 
                to="/" 
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Back to Home
              </Link>
            )}
            <Link 
              to="/privacy-policy" 
              className={`text-sm font-semibold transition-colors duration-200 ${
                location.pathname === '/privacy-policy' ? 'text-indigo-600 font-bold' : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:sparkcomputer555@gmail.com"
              id="nav-contact-btn"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-[10px] text-slate-800 group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-2 font-semibold">
                <Mail className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors" />
                Contact Support
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-slate-100 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {isHome ? (
                <>
                  <button 
                    onClick={() => scrollToSection('features')} 
                    className="text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('how-it-works')} 
                    className="text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('permissions')} 
                    className="text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-indigo-500" />
                    Permissions & Compliance
                  </button>
                </>
              ) : (
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                >
                  Back to Home
                </Link>
              )}
              <Link 
                to="/privacy-policy" 
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-semibold ${
                  location.pathname === '/privacy-policy' ? 'bg-slate-100 text-indigo-600 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                Privacy Policy
              </Link>
              <div className="pt-3">
                <a
                  href="mailto:sparkcomputer555@gmail.com"
                  id="mobile-contact-btn"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
