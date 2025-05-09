import React from 'react';
import { useNavigate } from 'react-router-dom';

function TermsAndConditions() {
  React.useEffect(() => {
    document.title = "Terms and Conditions | NEET 2026 Exam Countdown - Updated Feb 18, 2025";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read our terms and conditions to understand your rights and obligations when using NEET Exam Countdown. Learn about our service terms, user responsibilities, and legal agreements. Last updated: February 18, 2025.");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Last updated: February 18, 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">1. Agreement to Terms</h2>
              <p>
                By accessing and using NEET Exam Countdown, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials (information or software) on NEET Exam 
                Countdown for personal, non-commercial viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">3. Disclaimer</h2>
              <p>
                The materials on NEET Exam Countdown are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including, without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">4. Limitations</h2>
              <p>
                In no event shall NEET Exam Countdown or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on NEET Exam Countdown could include technical, typographical, or 
                photographic errors. We do not warrant that any of the materials on the website are accurate, 
                complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">6. Links</h2>
              <p>
                NEET Exam Countdown has not reviewed all of the sites linked to its website and is not 
                responsible for the contents of any such linked site. The inclusion of any link does not 
                imply endorsement by us of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">7. Modifications</h2>
              <p>
                We may revise these terms of service at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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

export default TermsAndConditions;