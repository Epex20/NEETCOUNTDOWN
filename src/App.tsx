import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <SchemaMarkup type="homepage" />
      <HeroSection timeLeft={timeLeft} />

      {/* NEET Guide Section - Full Width */}
      <div className="w-full px-4 py-12 text-gray-300">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="w-8 h-8 text-purple-400" />
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            The NEET UG 2026 Countdown: Your Ultimate Guide to Success
          </h3>
        </div>
        
        <p className="mb-6">
          Welcome to NEETEXAMCOUNTDOWN.COM! We know that every day, every hour, and every minute counts when you're preparing for one of the most competitive exams in India. That's why we've created this dedicated NEET UG 2026 Countdown to help you plan your studies, stay on track, and maximize your preparation time.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <Clock className="w-6 h-6 text-purple-400" />
          <h4 className="text-2xl font-bold text-purple-400">Why a Countdown Matters for Your NEET Preparation</h4>
        </div>
        <p className="mb-4">
          The NEET UG exam is a marathon, not a sprint. With so much syllabus to cover and concepts to master, it's easy to feel overwhelmed. Our live countdown clock serves as a powerful tool to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Create a sense of urgency:</strong> The visual reminder of the approaching exam date can help you stay focused and avoid procrastination.</li>
          <li><strong>Boost time management:</strong> By knowing exactly how many days are left, you can break down your study plan into manageable daily or weekly targets.</li>
          <li><strong>Motivate your studies:</strong> Seeing the number of days decrease can be a powerful motivator, encouraging you to make the most of every moment.</li>
        </ul>

        <div className="flex items-center gap-4 mb-4">
          <Calendar className="w-6 h-6 text-purple-400" />
          <h4 className="text-2xl font-bold text-purple-400">NEET UG 2026: Key Details to Know</h4>
        </div>
        <p className="mb-4">
          While the countdown is a great tool, it's crucial to understand the key details of the NEET UG 2026 exam to prepare effectively. Here's a quick overview of what you need to know:
        </p>
        
        <p className="mb-4">
          <strong>Tentative Exam Date:</strong> The NEET UG 2026 exam is tentatively scheduled for the first Sunday of May 2026, which is <strong>May 3, 2026</strong>.
        </p>
        
        <p className="mb-4">
          <strong>Exam Pattern:</strong> The National Testing Agency (NTA) conducts the exam in an offline, pen-and-paper mode. The question paper consists of 180 Multiple Choice Questions (MCQs) for a total of 720 marks.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Physics:</strong> 45 questions (180 marks)</li>
          <li><strong>Chemistry:</strong> 45 questions (180 marks)</li>
          <li><strong>Biology:</strong> 90 questions (360 marks) - (45 questions from Botany and 45 from Zoology)</li>
          <li><strong>Marking Scheme:</strong> You get +4 marks for every correct answer and -1 for every incorrect answer. There is no negative marking for unattempted questions.</li>
        </ul>
        
        <p className="mb-6">
          <strong>Syllabus:</strong> The NEET UG 2026 syllabus is based on the NCERT curriculum for Class 11 and 12, with some chapters having been rationalized. It's essential to refer to the official NTA notification for the most accurate and up-to-date syllabus.
        </p>

        <div className="flex items-center gap-4 mb-4">
          <Target className="w-6 h-6 text-purple-400" />
          <h4 className="text-2xl font-bold text-purple-400">Top 3 Preparation Strategies to Make the Countdown Count</h4>
        </div>
        <p className="mb-4">
          Now that you know the details, let's talk about how to use the time you have left. Here are some proven strategies to help you ace the NEET UG 2026 exam:
        </p>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-3"><strong>Prioritize High-Weightage Topics:</strong> Based on previous years' papers, identify chapters with higher weightage in Physics, Chemistry, and Biology. Dedicate more time to these topics to ensure you secure maximum marks.</li>
          <li className="mb-3"><strong>Focus on NCERT:</strong> The NEET exam is heavily based on NCERT textbooks. Master the concepts, diagrams, and summary points from your Class 11 and 12 NCERTs first. Use reference books for supplementary practice and deeper understanding.</li>
          <li className="mb-3"><strong>Practice Mock Tests Regularly:</strong> Solving previous year's question papers and taking full-length mock tests is non-negotiable. This not only helps you get familiar with the exam pattern and time constraints but also allows you to identify your weak areas and work on them.</li>
        </ol>
        
        <p className="mb-4">
          The journey to cracking NEET UG 2026 is challenging, but with a strategic approach and consistent effort, you can achieve your dream. Use our countdown to keep yourself accountable and stay motivated every single day.
        </p>
        
        <p className="mb-6">
          Bookmark this page and make it your daily starting point for a focused and productive study session. Good luck!
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 py-12 text-gray-300">
        <div className="flex items-center gap-4 mb-6">
          <Award className="w-8 h-8 text-purple-400" />
          <h3 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">
            Frequently Asked Questions (FAQs)
          </h3>
        </div>
        
        <p className="mb-6 leading-relaxed">
          Here are the most common questions about the <strong>NEET 2026</strong> exam, along with their answers, to help you stay informed and focused.
        </p>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-bold mb-3 text-white">1. Why is this website a countdown for NEET?</h4>
            <p className="leading-relaxed">
              Our website, NEETEXAMCOUNTDOWN.COM, is designed to help you plan your studies efficiently and stay motivated. The live countdown shows you exactly how much time is left until the NEET 2026 exam, helping you manage your study schedule and make every day count.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-white">2. How many days are left until NEET 2026?</h4>
            <p className="leading-relaxed">
              The exact number of days, hours, minutes, and seconds are shown live on our homepage. This timer is based on the official, tentative exam date of May 3, 2026.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-white">3. Is the NEET 2026 exam date confirmed?</h4>
            <p className="leading-relaxed">
              The official, confirmed date for the NEET 2026 exam will be released by the National Testing Agency (NTA). Based on the trend of previous years, the exam is expected to be held on the first Sunday of May. Our countdown reflects this and will be updated immediately if the official date changes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-white">4. Is this countdown accurate?</h4>
            <p className="leading-relaxed">
              Yes, our countdown is accurate and is regularly updated. It is synchronized with the most reliable information available regarding the <strong>NEET UG 2026</strong> exam date.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-white">5. What is the benefit of a countdown website for NEET?</h4>
            <p className="mb-3 leading-relaxed">A countdown website helps you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stay Motivated:</strong> Seeing the time decrease creates a sense of urgency.</li>
              <li><strong>Plan Better:</strong> It helps you break down your study goals into smaller, daily targets.</li>
              <li><strong>Stay Focused:</strong> It's a constant reminder to use your time wisely.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3 text-white">6. Where can I find more information about NEET 2026?</h4>
            <p className="leading-relaxed">
              You can find a complete guide to the <strong>NEET UG 2026</strong> exam on our website, including details on the syllabus, exam pattern, eligibility, and preparation tips. You can also visit the official NTA website for direct announcements.
            </p>
          </div>
        </div>
      </div>

    </>

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