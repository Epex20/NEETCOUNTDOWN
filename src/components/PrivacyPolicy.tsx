import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <link rel="canonical" href="https://neetexamcountdown.com/privacy-policy" />
        <meta property="og:url" content="https://neetexamcountdown.com/privacy-policy" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <SchemaMarkup type="privacy" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6">
          Last updated: February 18, 2025
        </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">1. Introduction</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            Welcome to NEET Exam Countdown. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we handle any information collected when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">2. Information We Collect</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">We collect minimal information to provide you with the best possible experience:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>Browser type and version</li>
              <li>Time zone setting</li>
              <li>Browser plug-in types and versions</li>
              <li>Operating system and platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">3. How We Use Your Information</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>Provide and maintain our countdown timer service</li>
              <li>Improve our website functionality</li>
              <li>Monitor and analyze usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">4. Data Storage</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            We do not store any personal information on our servers. Any data collected is purely for 
            functional purposes and remains on your local device.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">5. Cookies</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            We do not use cookies for tracking or advertising purposes. Any data stored is purely functional 
            and remains on your local device.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">6. Third-Party Services</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            We do not share any information with third parties. Our website is static and does not integrate 
            with external services for data collection or processing.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">7. Your Rights</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>Access your locally stored data</li>
              <li>Clear your browser data at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">8. Changes to This Policy</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by 
            posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">9. Contact Us</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            If you have any questions about this privacy policy, please contact us via Telegram: @EpexAyush
            </p>
          </section>
        </div>
      </article>
    </div>
    </>
  );
}

export default PrivacyPolicy;