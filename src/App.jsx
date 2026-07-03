import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
