import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Calendar, MessageCircle, Link } from 'lucide-react';
import RealTimeClock from './components/RealTimeClock';
import Stopwatch from './components/Stopwatch';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Contact from './components/Contact';

function Home() {
  const navigate = useNavigate();
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

        {/* Navigation Button */}
        <div className="text-center mb-12">
          <button 
            onClick={() => navigate('/stopwatch')}
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg text-sm sm:text-lg 
            shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] 
            border border-gray-700/50 transition-all duration-300 
            backdrop-blur-lg backdrop-brightness-125 
            hover:scale-105 hover:from-gray-700 hover:to-gray-800
            relative overflow-hidden
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
            before:translate-x-[-200%] before:transition-transform before:duration-[0.7s] before:hover:translate-x-[200%]
            active:scale-95"
          >
            Stopwatch
          </button>
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

        {/* NEET Guide Section */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            NEET 2026: Ultimate Student Guide
          </h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Who Should Appear for NEET 2026?</h3>
              <p className="text-gray-300 mb-4">
                NEET UG is not just an entrance exam — it's your ticket to MBBS, BDS, AYUSH courses (BAMS, BUMS, BHMS, etc.), 
                and other paramedical programs in India and even abroad.
              </p>
              <p className="text-gray-300">
                Whether you're a Class 12 student or a dropper with a dream to study medicine, <strong>NEET is mandatory</strong> for 
                admission to most government and private medical colleges.
              </p>
              <p className="text-gray-300 mt-2 italic">
                Pro tip: Many foreign universities also accept NEET scores, so keep that in mind if you're considering studying medicine overseas.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Dates You Can't Miss</h3>
              <div className="grid gap-3">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">Form Release:</span> 6th February 2026
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">Last Date to Apply:</span> 6th March 2026
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">Correction Window:</span> 8th – 10th March 2026
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">City Allotment Slip:</span> 25th April 2026
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">Admit Card Release:</span> 30th April 2026
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">Exam Date:</span> 3rd May 2026
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <span className="font-semibold">Result (Tentative):</span> 13th June 2026
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">How to Apply (Step-by-Step)</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                <li>Go to <a href="https://neet.nta.nic.in" className="text-purple-400 hover:text-purple-300">neet.nta.nic.in</a></li>
                <li>Click on 'New Registration' and fill in your details</li>
                <li>Log in with your system-generated credentials</li>
                <li>Complete the application form carefully</li>
                <li>Upload required documents:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Recent passport-size photo</li>
                    <li>Signature</li>
                    <li>Class 10 certificate</li>
                    <li>Category certificate (if applicable)</li>
                  </ul>
                </li>
                <li>Pay the fee online through UPI, debit/credit card, or net banking</li>
                <li>Download your confirmation page and receipt</li>
              </ol>
              <p className="text-red-400 mt-4">⚠️ Double-check all entries before final submission — any error can delay your admit card.</p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Eligibility Criteria</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Be at least <strong>17 years old by 31st December 2026</strong></li>
                <li>Have passed or be appearing in <strong>Class 12 with Physics, Chemistry, Biology/Biotech & English</strong></li>
                <li>Score a minimum:
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>50%</strong> for General category</li>
                    <li><strong>40%</strong> for OBC/SC/ST/PwD categories</li>
                  </ul>
                </li>
                <li>NRI, OCI, PIO & foreign nationals can also apply</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Exam Pattern</h3>
              <div className="grid gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Mode & Duration</p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>Offline (pen and paper)</li>
                    <li>3 hours 20 minutes (2:00 PM – 5:20 PM IST)</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Questions & Marks</p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>200 MCQs (180 to be attempted)</li>
                    <li>Total Marks: 720</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Subjects</p>
                  <ul className="list-disc pl-6 text-gray-300">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology (Botany + Zoology)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Application Fees</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-800/50">
                      <th className="p-3 rounded-tl-lg">Category</th>
                      <th className="p-3 rounded-tr-lg">Fee (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">General</td>
                      <td className="p-3">1700</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">General-EWS / OBC-NCL</td>
                      <td className="p-3">1600</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">SC / ST / PwD / 3rd Gender</td>
                      <td className="p-3">1000</td>
                    </tr>
                    <tr>
                      <td className="p-3 rounded-bl-lg">Outside India</td>
                      <td className="p-3 rounded-br-lg">9500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Final Words</h3>
              <p className="text-gray-300 mb-4">
                Cracking NEET is tough — no doubt about it. But remember, every topper was once where you are. 
                With the right mindset, discipline, and a solid plan, <strong>you can turn your dreams into a medical seat</strong>.
              </p>
              <p className="text-gray-300">
                Stay consistent, keep revising smartly, and never lose confidence. You've got this! 💪
              </p>
            </section>
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
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;