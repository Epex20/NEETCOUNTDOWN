import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BookOpen, Clock, Calendar, Target, Award } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SchemaMarkup from './components/SchemaMarkup';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Contact from './components/Contact';
import AboutNeet2026 from './components/AboutNeet2026';

function Home() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    document.title = "NEET Exam Countdown - Plan Your Preparation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get accurate countdown to NEET exam. Plan your preparation with our interactive countdown timer and comprehensive exam information.");
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
    <>
      <Helmet>
        <link rel="canonical" href="https://neetexamcountdown.com/" />
        <meta property="og:url" content="https://neetexamcountdown.com/" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <SchemaMarkup type="homepage" />
      <HeroSection timeLeft={timeLeft} />

      {/* Blog Article Section */}
      <article className="w-full px-4 py-8 text-gray-300">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              The NEET UG 2026 Countdown: Your Ultimate Guide to Success
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Plan your studies efficiently with our comprehensive NEET preparation guide
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Welcome to <strong className="text-purple-400">NEETEXAMCOUNTDOWN.COM</strong>! We know that every day, every hour, and every minute counts when you're preparing for one of the most competitive exams in India. That's why we've created this dedicated NEET UG 2026 Countdown to help you plan your studies, stay on track, and maximize your preparation time.
            </p>
          </section>

          {/* Why Countdown Matters */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
              Why a Countdown Matters for Your NEET Preparation
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              The NEET UG exam is a marathon, not a sprint. With so much syllabus to cover and concepts to master, it's easy to feel overwhelmed. Our live countdown clock serves as a powerful tool to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-sm sm:text-base leading-relaxed">
                <strong className="text-purple-300">Create Urgency:</strong> The visual reminder of the approaching exam date helps you stay focused and avoid procrastination.
              </li>
              <li className="text-sm sm:text-base leading-relaxed">
                <strong className="text-purple-300">Boost Time Management:</strong> Know exactly how many days are left to break down your study plan into manageable targets.
              </li>
              <li className="text-sm sm:text-base leading-relaxed">
                <strong className="text-purple-300">Motivate Studies:</strong> Seeing the countdown decrease is a powerful motivator to make the most of every moment.
              </li>
            </ul>
          </section>

          {/* Key Details */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
              NEET UG 2026: Key Details to Know
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              While the countdown is a great tool, it's crucial to understand the key details of the NEET UG 2026 exam to prepare effectively.
            </p>
            
            <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📅 Exam Schedule</h3>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li><strong>Tentative Exam Date:</strong> May 3, 2026 (First Sunday of May)</li>
              <li><strong>Time:</strong> 2:00 PM to 5:20 PM (3 hours 20 minutes)</li>
              <li><strong>Mode:</strong> Offline (Pen & Paper)</li>
            </ul>
            
            <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📝 Exam Pattern</h3>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li><strong>Total Questions:</strong> 180 MCQs (out of 200)</li>
              <li><strong>Total Marks:</strong> 720</li>
              <li><strong>Marking:</strong> +4 for correct, -1 for incorrect</li>
            </ul>
            
            <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📚 Subject Distribution</h3>
            <ul className="space-y-2 mb-6 text-sm sm:text-base">
              <li><strong>Physics:</strong> 45 Questions (180 marks)</li>
              <li><strong>Chemistry:</strong> 45 Questions (180 marks)</li>
              <li><strong>Biology:</strong> 90 Questions (360 marks - Botany + Zoology)</li>
            </ul>
            
            <p className="text-sm sm:text-base leading-relaxed">
              <strong>Syllabus:</strong> The NEET UG 2026 syllabus is based on the NCERT curriculum for Class 11 and 12, with some chapters having been rationalized. It's essential to refer to the official NTA notification for the most accurate and up-to-date syllabus.
            </p>
          </section>

          {/* Preparation Strategies */}
          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
              Top 3 Preparation Strategies to Make the Countdown Count
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Now that you know the details, let's talk about how to use the time you have left. Here are some proven strategies to help you ace the NEET UG 2026 exam:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">1. Prioritize High-Weightage Topics</h3>
                <p className="text-sm sm:text-base leading-relaxed">Based on previous years' papers, identify chapters with higher weightage in Physics, Chemistry, and Biology. Dedicate more time to these topics to ensure you secure maximum marks.</p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">2. Focus on NCERT</h3>
                <p className="text-sm sm:text-base leading-relaxed">The NEET exam is heavily based on NCERT textbooks. Master the concepts, diagrams, and summary points from your Class 11 and 12 NCERTs first. Use reference books for supplementary practice and deeper understanding.</p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">3. Practice Mock Tests Regularly</h3>
                <p className="text-sm sm:text-base leading-relaxed">Solving previous year's question papers and taking full-length mock tests is non-negotiable. This not only helps you get familiar with the exam pattern and time constraints but also allows you to identify your weak areas and work on them.</p>
              </div>
            </div>
          </section>
          
          {/* Conclusion */}
          <section className="mb-8">
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              The journey to cracking NEET UG 2026 is challenging, but with a strategic approach and consistent effort, you can achieve your dream. Use our countdown to keep yourself accountable and stay motivated every single day.
            </p>
            <p className="text-sm sm:text-base leading-relaxed font-medium text-purple-300">
              Bookmark this page and make it your daily starting point for a focused and productive study session. Good luck!
            </p>
          </section>
        </div>
      </article>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}

// FAQ Component with dropdown functionality
function FAQSection() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Why is this website a countdown for NEET?",
      answer: "Our website, NEETEXAMCOUNTDOWN.COM, is designed to help you plan your studies efficiently and stay motivated. The live countdown shows you exactly how much time is left until the NEET 2026 exam, helping you manage your study schedule and make every day count."
    },
    {
      question: "How many days are left until NEET 2026?",
      answer: "The exact number of days, hours, minutes, and seconds are shown live on our homepage. This timer is based on the official, tentative exam date of May 3, 2026."
    },
    {
      question: "Is the NEET 2026 exam date confirmed?",
      answer: "The official, confirmed date for the NEET 2026 exam will be released by the National Testing Agency (NTA). Based on the trend of previous years, the exam is expected to be held on the first Sunday of May. Our countdown reflects this and will be updated immediately if the official date changes."
    },
    {
      question: "Is this countdown accurate?",
      answer: "Yes, our countdown is accurate and is regularly updated. It is synchronized with the most reliable information available regarding the NEET UG 2026 exam date."
    },
    {
      question: "What is the benefit of a countdown website for NEET?",
      answer: "A countdown website helps you stay motivated by creating urgency, plan better by breaking down study goals into daily targets, and stay focused with constant reminders to use your time wisely."
    },
    {
      question: "Where can I find more information about NEET 2026?",
      answer: "You can find a complete guide to the NEET UG 2026 exam on our website, including details on the syllabus, exam pattern, eligibility, and preparation tips. You can also visit the official NTA website for direct announcements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-8 bg-gray-900/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-8 text-center">
          Here are the most common questions about the NEET 2026 exam
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-4 text-left bg-gray-800/50 hover:bg-gray-800/70 transition-colors focus:outline-none focus:bg-gray-800/70"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm sm:text-base font-medium text-white pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <span className="text-purple-400 flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-4 py-4 bg-gray-900/30 border-t border-gray-700">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-neet-2026" element={<AboutNeet2026 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;