import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <SchemaMarkup type="contact" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-normal py-2 px-4">
          Contact Us
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 px-4">
          Get in touch with us
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">Get in Touch with the NEET Exam Countdown Team</h2>
          </div>
          <p className="mb-6 leading-relaxed">
            Welcome to NEETEXAMCOUNTDOWN.COM! We're dedicated to helping you stay on track and prepared for the NEET UG 2026 exam. We understand that along the way, you might have questions, need guidance, or just want to share your feedback. We are here to listen and help.
          </p>
          <p className="mb-6 leading-relaxed">
            Whether you have a query about your study plan, a suggestion for the website, or just want to say hello, we look forward to hearing from you.
          </p>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <Phone className="w-8 h-8 text-purple-400" />
            <h3 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">How to Contact Us</h3>
          </div>
          <p className="mb-6 leading-relaxed">
            You can reach out to us using the following channels. We'll do our best to get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-3 text-white">1. Send us an Email</h4>
              <p className="mb-3 leading-relaxed">
                For any detailed queries or official communication, feel free to drop us an email.
              </p>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                <p className="leading-relaxed">
                  <strong>Email:</strong> <strong className="text-purple-400">neetexamcountdown@gmail.com</strong>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3 text-white">2. Connect with us on Telegram</h4>
              <p className="mb-3 leading-relaxed">
                For quick questions or general discussions, you can reach out directly on Telegram.
              </p>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                <p className="leading-relaxed">
                  <strong>Telegram:</strong> <strong className="text-purple-400">@imayuu03</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-700" />

        <section>
          <p className="leading-relaxed text-center italic">
            We believe that every second of your preparation counts, and so does every question you have. We are committed to supporting you on your journey to success.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}

export default Contact;