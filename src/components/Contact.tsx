import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Get in touch with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <p>Email: neetexamcountdown@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  <p>Telegram: @EpexAyush</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Get Support</h2>
              <p className="mb-4">
                For any queries, suggestions, or support, you can reach out to us through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send us an email at neetexamcountdown@gmail.com</li>
                <li>Message us on Telegram @EpexAyush</li>
                <li>We typically respond within 24-48 hours</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Feedback</h2>
              <p>
                We value your feedback! If you have any suggestions for improving our website or 
                would like to report any issues, please don't hesitate to contact us. Your feedback 
                helps us make NEET Exam Countdown better for everyone.
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
          <p>© 2025 NEET Countdown Timer. All rights reserved.</p>
          <nav className="mt-4">
            <a href="/" className="text-purple-400 hover:text-purple-300 mx-2">NEET 2025</a>
            <a href="/neet-2026" className="text-purple-400 hover:text-purple-300 mx-2">NEET 2026</a>
            <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 mx-2">Privacy Policy</a>
            <a href="/terms-and-conditions" className="text-purple-400 hover:text-purple-300 mx-2">Terms & Conditions</a>
            <a href="/contact" className="text-purple-400 hover:text-purple-300 mx-2">Contact Us</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Contact;