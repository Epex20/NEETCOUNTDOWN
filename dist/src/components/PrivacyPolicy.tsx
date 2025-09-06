import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Info, Database, Cookie, Users, FileText, Phone, RefreshCw } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

function PrivacyPolicy() {
  React.useEffect(() => {
    document.title = "Privacy Policy | NEET Exam Countdown - Updated Feb 18, 2025";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read our privacy policy to understand how NEET Exam Countdown protects your data. Learn about our data collection, usage, and protection practices. Last updated: February 18, 2025.");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <SchemaMarkup type="privacy" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-normal py-2 px-4">
          Privacy Policy
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 px-4">
          Last updated: February 18, 2025
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <div className="flex items-center gap-4 mb-4">
            <Info className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">1. Introduction</h2>
          </div>
          <p className="leading-relaxed">
            Welcome to NEET Exam Countdown. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we handle any information collected when you visit our website.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">2. Information We Collect</h2>
          </div>
          <p className="mb-4 leading-relaxed">We collect minimal information to provide you with the best possible experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser type and version</li>
            <li>Time zone setting</li>
            <li>Browser plug-in types and versions</li>
            <li>Operating system and platform</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">3. How We Use Your Information</h2>
          </div>
          <p className="mb-4 leading-relaxed">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our countdown timer service</li>
            <li>Improve our website functionality</li>
            <li>Monitor and analyze usage patterns</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">4. Data Storage</h2>
          </div>
          <p className="leading-relaxed">
            We do not store any personal information on our servers. Any data collected is purely for 
            functional purposes and remains on your local device.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">5. Cookies</h2>
          </div>
          <p className="leading-relaxed">
            We do not use cookies for tracking or advertising purposes. Any data stored is purely functional 
            and remains on your local device.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">6. Third-Party Services</h2>
          </div>
          <p className="leading-relaxed">
            We do not share any information with third parties. Our website is static and does not integrate 
            with external services for data collection or processing.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">7. Your Rights</h2>
          </div>
          <p className="mb-4 leading-relaxed">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your locally stored data</li>
            <li>Clear your browser data at any time</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <RefreshCw className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">8. Changes to This Policy</h2>
          </div>
          <p className="leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by 
            posting the new privacy policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Phone className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">9. Contact Us</h2>
          </div>
          <p className="leading-relaxed">
            If you have any questions about this privacy policy, please contact us via Telegram: @EpexAyush
          </p>
        </section>
      </div>
    </div>
    </>
  );
}

export default PrivacyPolicy;