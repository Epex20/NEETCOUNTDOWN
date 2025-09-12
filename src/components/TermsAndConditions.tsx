import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FileText, Key, AlertTriangle, Shield, Target, Link, RefreshCw, Scale } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

function TermsAndConditions() {
  React.useEffect(() => {
    document.title = "Terms and Conditions | NEET Exam Countdown - Updated Feb 18, 2025";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read our terms and conditions to understand your rights and obligations when using NEET Exam Countdown. Learn about our service terms, user responsibilities, and legal agreements. Last updated: February 18, 2025.");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://neetexamcountdown.com/terms-and-conditions" />
        <meta property="og:url" content="https://neetexamcountdown.com/terms-and-conditions" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <SchemaMarkup type="terms" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Terms and Conditions
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6">
          Last updated: February 18, 2025
        </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">1. Agreement to Terms</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            By accessing and using NEET Exam Countdown, you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of these terms, you may not access the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">2. Use License</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
            Permission is granted to temporarily access the materials (information or software) on NEET Exam 
            Countdown for personal, non-commercial viewing only. This is the grant of a license, not a 
            transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">3. Disclaimer</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            The materials on NEET Exam Countdown are provided on an 'as is' basis. We make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular 
            purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">4. Limitations</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            In no event shall NEET Exam Countdown or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">5. Accuracy of Materials</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            The materials appearing on NEET Exam Countdown could include technical, typographical, or 
            photographic errors. We do not warrant that any of the materials on the website are accurate, 
            complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">6. Links</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            NEET Exam Countdown has not reviewed all of the sites linked to its website and is not 
            responsible for the contents of any such linked site. The inclusion of any link does not 
            imply endorsement by us of the site.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">7. Modifications</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            We may revise these terms of service at any time without notice. By using this website, 
            you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">8. Governing Law</h2>
            <p className="text-sm sm:text-base leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of India 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </article>
    </div>
    </>
  );
}

export default TermsAndConditions;