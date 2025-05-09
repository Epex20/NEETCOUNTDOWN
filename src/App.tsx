import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Clock, BookOpen, Calendar, MessageCircle, Link } from 'lucide-react';
import RealTimeClock from './components/RealTimeClock';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function Home() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    document.title = "NEET 2026 Countdown Timer - Plan Your Preparation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get accurate countdown to NEET 2026 exam. Plan your long-term preparation with our interactive timer and comprehensive exam information.");
    }
  }, []);

  React.useEffect(() => {
    const targetDate = new Date('2026-05-03T14:00:00+05:30'); // Indian time (IST)

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 relative">
        <RealTimeClock />
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            NEET UG 2026 COUNTDOWN
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Plan your studies efficiently with an interactive NEET 2026 countdown clock.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.days}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.hours}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.minutes}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.seconds}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="text-center mb-12 flex flex-wrap justify-center gap-4">
          <a 
            href="/blog"
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
            Read Our Blog
          </a>
        </div>

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Description</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            This website is designed for NEET 2026 aspirants to keep track of their exam countdown in a 
            visually appealing and interactive way. The live countdown timer displays the remaining days, 
            hours, minutes, and seconds until NEET UG 2026.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Date: Sunday, May 03, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Duration: 3 hours 20 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Mode: Offline (Pen & Paper)</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Questions: 180 (Physics, Chemistry & Biology)</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span>Telegram: @EpexAyush</span>
            </div>
            <div className="flex items-center gap-2">
              <Link className="w-5 h-5 text-purple-400" />
              <a href="https://neet.nta.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                Official NEET Website
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;