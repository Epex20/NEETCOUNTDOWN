import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <SchemaMarkup type="terms" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-normal py-2 px-4">
          Terms and Conditions
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 px-4">
          Last updated: February 18, 2025
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">1. Agreement to Terms</h2>
          </div>
          <p className="leading-relaxed">
            By accessing and using NEET Exam Countdown, you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of these terms, you may not access the website.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Key className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">2. Use License</h2>
          </div>
          <p className="mb-4 leading-relaxed">
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
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">3. Disclaimer</h2>
          </div>
          <p className="leading-relaxed">
            The materials on NEET Exam Countdown are provided on an 'as is' basis. We make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular 
            purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">4. Limitations</h2>
          </div>
          <p className="leading-relaxed">
            In no event shall NEET Exam Countdown or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on the website.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">5. Accuracy of Materials</h2>
          </div>
          <p className="leading-relaxed">
            The materials appearing on NEET Exam Countdown could include technical, typographical, or 
            photographic errors. We do not warrant that any of the materials on the website are accurate, 
            complete, or current.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Link className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">6. Links</h2>
          </div>
          <p className="leading-relaxed">
            NEET Exam Countdown has not reviewed all of the sites linked to its website and is not 
            responsible for the contents of any such linked site. The inclusion of any link does not 
            imply endorsement by us of the site.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <RefreshCw className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">7. Modifications</h2>
          </div>
          <p className="leading-relaxed">
            We may revise these terms of service at any time without notice. By using this website, 
            you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Scale className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">8. Governing Law</h2>
          </div>
          <p className="leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of India 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}

export default TermsAndConditions;