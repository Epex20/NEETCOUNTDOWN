import React from 'react';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
  React.useEffect(() => {
    document.title = "Privacy Policy | NEET 2026 Exam Countdown - Updated Feb 18, 2025";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read our privacy policy to understand how NEET Exam Countdown protects your data. Learn about our data collection, usage, and protection practices. Last updated: February 18, 2025.");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Last updated: February 18, 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">1. Introduction</h2>
              <p>
                Welcome to NEET Exam Countdown. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we handle any information collected when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">2. Information We Collect</h2>
              <p className="mb-4">We collect minimal information to provide you with the best possible experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and version</li>
                <li>Time zone setting</li>
                <li>Browser plug-in types and versions</li>
                <li>Operating system and platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our countdown timer service</li>
                <li>Improve our website functionality</li>
                <li>Monitor and analyze usage patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">4. Data Storage</h2>
              <p>
                We do not store any personal information on our servers. Any data collected is purely for 
                functional purposes and remains on your local device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">5. Cookies</h2>
              <p>
                We do not use cookies for tracking or advertising purposes. Any data stored is purely functional 
                and remains on your local device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">6. Third-Party Services</h2>
              <p>
                We do not share any information with third parties. Our website is static and does not integrate 
                with external services for data collection or processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your locally stored data</li>
                <li>Clear your browser data at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us via Telegram: @EpexAyush
              </p>
            </section>
          </div>
        </div>

        <div className="text-center mb-12">
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg 
            shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] 
            border border-gray-700/50 transition-all duration-300 
            backdrop-blur-lg backdrop-brightness-125 
            hover:scale-105 hover:from-gray-700 hover:to-gray-800
            relative overflow-hidden
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
            before:translate-x-[-200%] before:transition-transform before:duration-[0.7s] before:hover:translate-x-[200%]
            active:scale-95"
          >
            Back to Home
          </button>
        </div>

        <footer className="text-center text-sm text-gray-400 py-4">
          <p>Developed By EpexAyush</p>
          <p>© 2026 NEET Countdown Timer. All rights reserved.</p>
          <nav className="mt-4">
            <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 mx-2">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-purple-400 hover:text-purple-300 mx-2">Terms & Conditions</a>
            <a href="/contact" className="text-purple-400 hover:text-purple-300 mx-2">Contact Us</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy;