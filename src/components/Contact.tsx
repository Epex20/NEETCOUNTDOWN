import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Mail, MessageCircle, Phone, Users } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

function Contact() {
  React.useEffect(() => {
    document.title = "Contact Us | NEET Exam Countdown - Get Support and Assistance";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact NEET Exam Countdown for support, feedback, or inquiries. Reach us via email or Telegram for assistance with our NEET preparation tools and services.");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://neetexamcountdown.com/contact" />
        <meta property="og:url" content="https://neetexamcountdown.com/contact" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <SchemaMarkup type="contact" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6">
          Get in touch with us
        </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
              Get in Touch with the NEET Exam Countdown Team
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
            Welcome to NEETEXAMCOUNTDOWN.COM! We're dedicated to helping you stay on track and prepared for the NEET UG 2026 exam. We understand that along the way, you might have questions, need guidance, or just want to share your feedback. We are here to listen and help.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
            Whether you have a query about your study plan, a suggestion for the website, or just want to say hello, we look forward to hearing from you.
            </p>
          </section>

          <hr className="border-gray-700" />

          <section>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
              How to Contact Us
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
            You can reach out to us using the following channels. We'll do our best to get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">1. Send us an Email</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                For any detailed queries or official communication, feel free to drop us an email.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong>Email:</strong> <strong className="text-purple-400">neetexamcountdown@gmail.com</strong>
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">2. Connect with us on Telegram</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-3">
                For quick questions or general discussions, you can reach out directly on Telegram.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong>Telegram:</strong> <strong className="text-purple-400">@imayuu03</strong>
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-700" />

          <section>
            <p className="text-sm sm:text-base leading-relaxed text-center italic">
            We believe that every second of your preparation counts, and so does every question you have. We are committed to supporting you on your journey to success.
            </p>
          </section>
        </div>
      </article>
    </div>
    </>
  );
}

export default Contact;