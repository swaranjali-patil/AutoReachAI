import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle, AlertTriangle, PhoneCall, Terminal, Users, Database, HelpCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy - AutoReachAI Official Compliance";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Official Privacy Policy for AutoReachAI. Learn how we handle your data with strict on-device processing, zero cloud storage, and transparent Android permission disclosures.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-700 pt-28 pb-24">
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
        <div className="bg-gradient-to-r from-slate-50 via-[#f1f5f9] to-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-indigo-600 pointer-events-none">
            <Shield className="w-48 h-48 -mr-10 -mt-10" />
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Legal Document</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Privacy Policy for <span className="text-gradient-purple">AutoReachAI</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200">
              <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                Google Play Compliant
              </span>
              <span>&bull;</span>
              <span><strong>Last updated:</strong> July 03, 2026</span>
              <span>&bull;</span>
              <span><strong>Country:</strong> Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <article className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/80 space-y-10 font-sans leading-relaxed text-slate-700 text-base shadow-lg">
          
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Introduction
            </h2>
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p>
              We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Interpretation and Definitions */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Interpretation and Definitions
            </h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-indigo-600">Interpretation</h3>
              <p>
                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-indigo-600">Definitions</h3>
              <p className="text-sm text-slate-500">For the purposes of this Privacy Policy:</p>
              
              <ul className="space-y-3 list-disc list-inside pl-2 text-slate-700">
                <li><strong className="text-slate-900">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong className="text-slate-900">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong className="text-slate-900">Application</strong> refers to AutoReachAI, the software program provided by the Company.</li>
                <li><strong className="text-slate-900">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to AutoReachAI.</li>
                <li><strong className="text-slate-900">Country</strong> refers to: Maharashtra, India</li>
                <li><strong className="text-slate-900">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                <li><strong className="text-slate-900">Personal Data</strong> (or "Personal Information") is any information that relates to an identified or identifiable individual.</li>
                <li><strong className="text-slate-900">Service</strong> refers to the Application.</li>
                <li><strong className="text-slate-900">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><strong className="text-slate-900">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong className="text-slate-900">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </div>
          </section>

          {/* Collecting and Using Your Personal Data */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Collecting and Using Your Personal Data
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-indigo-600">Types of Data Collected</h3>
              
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900">Personal Data</h4>
                <p>
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to Usage Data.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900">Usage Data</h4>
                <p>
                  Usage Data is collected automatically when using the Service.
                </p>
                <p>
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                </p>
              </div>
            </div>

            {/* Crucial Android Permissions Section */}
            <div className="space-y-6 pt-4">
              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center gap-3">
                <Lock className="w-6 h-6 text-cyan-600 shrink-0" />
                <div className="text-sm">
                  <span className="font-bold text-slate-900">Crucial Device Permissions Notice:</span>
                  <p className="text-slate-600">The following sections detail our strict on-device data processing policies for Android permissions.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">Information Collected while Using the Application</h3>
              <p>
                While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
              </p>

              <div className="space-y-6">
                
                {/* 1. Phone Book */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">1. Information from your Device's phone book (contacts list)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We use this information to provide features of Our Service, to improve and customize Our Service. The information may be simply stored on Your device. You can enable or disable access to this information at any time, through Your Device settings.
                  </p>
                </div>

                {/* 2. SMS and Call Log Permissions */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-cyan-200 space-y-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">2. SMS and Call Log Permissions (Default SMS Handler & Call Logs)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We request permissions such as <code className="text-cyan-700 font-mono bg-cyan-100 px-1.5 py-0.5 rounded">READ_CALL_LOG</code>, <code className="text-cyan-700 font-mono bg-cyan-100 px-1.5 py-0.5 rounded">READ_CONTACTS</code>, and <code className="text-cyan-700 font-mono bg-cyan-100 px-1.5 py-0.5 rounded">SEND_SMS</code>. These permissions are used solely to detect incoming or missed calls to trigger your user-configured auto-reply rules, and to send automated SMS responses as configured by you.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-emerald-700 font-semibold shadow-sm">
                    &bull; Your call logs and SMS data are processed strictly locally on your device to run the automation rules you set. We do not upload, share, or transmit your SMS contents, call logs, or contact databases to our servers or any third parties.
                  </div>
                </div>

                {/* 3. Accessibility Service API */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-purple-200 space-y-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">3. Accessibility Service API (WhatsApp Automation)</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We utilize the Accessibility Service API solely to automate the sending of user-initiated messages via WhatsApp. When triggered by your automation rules, the Accessibility Service programmatically pastes your template text into the WhatsApp message input field and automatically clicks the send button on your behalf.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-emerald-700 font-semibold shadow-sm">
                    &bull; Crucially, the Accessibility Service operates entirely locally. We do not use this service to monitor your screen, collect your keystrokes, read chat messages, record calls, track user actions, or transmit any data from your device to our servers or any third parties.
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Use of Your Personal Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Use of Your Personal Data
            </h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            
            <ul className="space-y-2 list-disc list-inside pl-2 text-slate-700">
              <li><strong className="text-slate-900">To provide and maintain our Service</strong>, including to monitor the usage of our Service.</li>
              <li><strong className="text-slate-900">To manage Your Account.</strong></li>
              <li><strong className="text-slate-900">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
              <li><strong className="text-slate-900">To manage Your requests.</strong></li>
            </ul>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-semibold mt-4">
              <strong>We do not sell Your Personal Data.</strong> Your sensitive device data (contacts, SMS, call logs, and Accessibility interactions) is never shared with third parties or advertisers.
            </div>
          </section>

          {/* Retention of Your Personal Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Retention of Your Personal Data
            </h2>
            <p>
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
            </p>
            <ul className="space-y-2 list-disc list-inside pl-2 text-slate-700">
              <li>Account Information and Usage Data statistics are retained up to 24 months.</li>
              <li><strong className="text-slate-900">Locally processed sensitive data (SMS, call logs, and WhatsApp automation history) remains on your device and is not retained on our servers.</strong></li>
            </ul>
          </section>

          {/* Transfer of Your Personal Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Transfer of Your Personal Data
            </h2>
            <p>
              Your information is processed at the Company's operating offices. It means that this information may be transferred to — and maintained on — computers located outside of Your jurisdiction. The Company will take all steps reasonably necessary to ensure that Your data is treated securely.
            </p>
          </section>

          {/* Delete Your Personal Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Delete Your Personal Data
            </h2>
            <p>
              You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information at any time from within the app settings or by contacting us.
            </p>
          </section>

          {/* Security of Your Personal Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Security of Your Personal Data
            </h2>
            <p>
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Children's Privacy
            </h2>
            <p>
              Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Links to Other Websites
            </h2>
            <p>
              Our Service may contain links to other websites that are not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:sparkcomputer555@gmail.com" className="text-indigo-600 font-bold hover:underline">sparkcomputer555@gmail.com</a>:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-inner">
              <div>
                <div className="text-sm font-bold text-slate-900">AutoReachAI Legal & Privacy Team</div>
                <div className="text-xs text-indigo-600 font-bold">sparkcomputer555@gmail.com</div>
                <div className="text-xs text-slate-500 font-semibold">Operating Jurisdiction: Maharashtra, India</div>
              </div>
              <a
                href="mailto:sparkcomputer555@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-md shadow-indigo-500/10 animate-pulse"
              >
                <span>Send us an email</span>
              </a>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
