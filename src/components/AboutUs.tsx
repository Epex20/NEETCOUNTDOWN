import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Target, Users, Heart } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

function AboutUs() {
  React.useEffect(() => {
    document.title = "About Us | NEET Exam Countdown - Helping Students Track Their Preparation Time";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about our mission to help NEET students track their preparation time. Simple, focused countdown service to keep you aware of time remaining until NEET exam.");
    }
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://neetexamcountdown.com/about/us" />
        <meta property="og:url" content="https://neetexamcountdown.com/about/us" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <SchemaMarkup type="about" />
      
      <div className="pt-24 pb-16 min-h-screen w-full px-4 text-gray-300">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              About Us
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Helping NEET students stay aware of their preparation time
            </p>
          </header>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Mission Section */}
            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed">
                We created this service so that NEET students can be aware of the time they have left till the next NEET exam. 
                Simple, focused, and effective - that's our approach to helping you track your preparation journey.
              </p>
            </section>

            {/* Why We Built This */}
            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white">Why NEET Countdown?</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Time awareness is crucial for NEET preparation. Every day, every hour counts when you're working towards your medical career dreams.
                </p>
                <p>
                  Our countdown timer helps you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stay constantly aware of the time remaining</li>
                  <li>Plan your study schedule effectively</li>
                  <li>Maintain urgency in your preparation</li>
                  <li>Track your progress with a clear timeline</li>
                </ul>
              </div>
            </section>

            {/* What We Offer */}
            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white">What We Offer</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-300">🕒 Real-Time Countdown</h3>
                  <p className="text-sm leading-relaxed">
                    Accurate countdown to NEET 2026 exam date with days, hours, minutes, and seconds.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-300">📚 Exam Information</h3>
                  <p className="text-sm leading-relaxed">
                    Complete details about NEET exam pattern, eligibility, and important dates.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-300">📱 Mobile Friendly</h3>
                  <p className="text-sm leading-relaxed">
                    Access your countdown anywhere, anytime on any device.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-300">🎯 Clean & Simple</h3>
                  <p className="text-sm leading-relaxed">
                    No distractions, just the information you need to stay focused.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white">Get in Touch</h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Have questions or suggestions? We'd love to hear from you.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm">📱 Telegram:</span>
                <span className="text-purple-400 font-semibold">@imayuu03</span>
              </div>
            </section>

            {/* Developer Credit */}
            <section className="text-center py-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Developed by <span className="text-purple-400 font-semibold">EpexAyush</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                © 2026 NEET Exam Countdown. All rights reserved.
              </p>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}

export default AboutUs;