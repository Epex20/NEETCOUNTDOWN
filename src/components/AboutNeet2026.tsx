import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BookOpen, Calendar, Clock, Users, Award, Target, FileText, CreditCard } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

function AboutNeet2026() {
  React.useEffect(() => {
    document.title = "About NEET 2026 | Complete Guide to National Eligibility cum Entrance Test";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Complete guide to NEET 2026 exam - eligibility criteria, exam pattern, syllabus, preparation strategies, and important dates. Everything you need to know about National Eligibility cum Entrance Test 2026.");
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://neetexamcountdown.com/about-neet-2026" />
        <meta property="og:url" content="https://neetexamcountdown.com/about-neet-2026" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>
      <SchemaMarkup type="about" />
    <div className="pt-24 pb-16 min-h-screen w-full px-4 text-gray-300">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            NEET 2026: The Complete Guide for Students
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            Your one-stop guide to everything you need to know about NEET UG 2026
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Welcome to NEETEXAMCOUNTDOWN.COM! The <strong className="text-purple-400">NEET 2026</strong> countdown on our website is ticking, reminding you that your journey toward a medical career has officially begun. If you're a Class 11,12 student dreaming of becoming a doctor, this is your one-stop guide to everything you need to know about the NEET UG 2026 exam.
          </p>
        </section>

        {/* What is NEET */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            What is NEET UG and Who is it For?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            The National Eligibility cum Entrance Test (NEET UG) is a single, national-level exam held by the National Testing Agency (NTA). Your scores and rank in this exam will decide which medical college you get into.
          </p>
          
          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🎯 NEET UG is essential for you if you want to:</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li>🏥 Study MBBS, BDS, or other medical courses in any government or private college in India</li>
            <li>💊 Get into a top nursing, pharmacy, or paramedicine college in India</li>
            <li>🌍 Study medicine in many colleges outside of India, as they also accept NEET scores</li>
          </ul>

          <p className="text-sm sm:text-base leading-relaxed font-medium text-purple-300">
            For many students, the <strong>NEET 2026</strong> result is even more important than their Class 12 board results, as it's the main factor for college admissions.
          </p>
        </section>

        {/* Key Dates */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET UG 2026: Key Dates You Must Know
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            The NTA has already released the official dates for the NEET 2026 exam. Make sure you have these dates marked on your calendar to avoid missing any deadlines.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">📝 Registration Start</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">February 7, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">⏰ Registration End</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">March 7, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">✏️ Correction Window</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">March 9-11, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">🏙️ City Intimation</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">April 26, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">🎫 Admit Card</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">May 1, 2026</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm sm:text-base font-bold">📅 Exam Date</span>
              <span className="text-sm sm:text-base font-bold text-white">May 3, 2026</span>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            How to Apply for NEET 2026
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Applying for the NEET exam is easy and must be done online on the official NTA website. Follow these simple steps:
          </p>
          
          <ol className="space-y-3 list-decimal list-inside text-sm sm:text-base">
            <li><strong className="text-purple-300">Visit Official Website:</strong> Go to the official NEET UG NTA website and click on the registration link.</li>
            <li><strong className="text-purple-300">Create Account:</strong> Fill in your personal details, including your name and email address to create a new account.</li>
            <li><strong className="text-purple-300">Login & Fill Form:</strong> Use your login details to access the student portal and fill out the NEET 2026 registration form completely.</li>
            <li><strong className="text-purple-300">Upload Documents:</strong> Upload scanned copies of required documents like birth certificate and Class 10 marksheet.</li>
            <li><strong className="text-purple-300">Review & Pay:</strong> Review all information carefully, pay the application fee, and download your receipt.</li>
          </ol>
        </section>

        {/* Eligibility and Fees */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Eligibility and Fees
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Before you apply, make sure you meet the official eligibility criteria.
          </p>

          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">✅ Eligibility Criteria</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li><strong>Age Requirement:</strong> Must be at least 17 years old by December 31, 2026</li>
            <li><strong>Educational Qualification:</strong> Class 12 with Physics, Chemistry, Biology/Biotechnology, and English</li>
            <li><strong>Minimum Marks:</strong> 50% in PCB (General), 40% for OBC/SC/ST/PwD</li>
            <li><strong>Other Eligibility:</strong> NRIs, PIOs, and foreign nationals are also eligible to apply</li>
          </ul>
          
          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">💳 Application Fees</h3>
          <p className="text-sm sm:text-base mb-3">The application fees depend on your category and are paid online:</p>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li><strong>General:</strong> ₹1,700</li>
            <li><strong>General-EWS & OBC-NCL:</strong> ₹1,600</li>
            <li><strong>SC, ST, PwD & Third Gender:</strong> ₹1,000</li>
            <li><strong>Outside India:</strong> ₹9,500</li>
          </ul>
        </section>

        {/* Exam Details */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Exam Details
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            The NEET 2026 exam is a pen-and-paper test held from <strong className="text-purple-400">2:00 PM to 5:20 PM IST</strong> at various centers across India.
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">📝 Total Questions</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">200 (Attempt 180)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">🎯 Total Marks</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">720</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">⏱️ Duration</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">3h 20m (2:00-5:20 PM)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm sm:text-base">📚 Subjects</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">Physics, Chemistry, Biology</span>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            All the Best for Your Preparation!
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            NEET is known for being a tough exam, but with a smart study plan and a positive attitude, you can definitely achieve your goals. Use our countdown to track your progress, stay on schedule, and give your very best. We wish you all the luck on your journey!
          </p>
        </section>
      </article>

      {/* FAQ Section */}
      <AboutFAQSection />
    </div>
    </>
  );
}

// FAQ Component for About NEET 2026 page
function AboutFAQSection() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is the NEET 2026 exam date?",
      answer: "The NEET 2026 exam is tentatively scheduled for May 3, 2026, which is the first Sunday of May. The official exam date will be confirmed by the National Testing Agency (NTA) when they release the information bulletin."
    },
    {
      question: "When will the NEET 2026 application form be released?",
      answer: "The NTA is expected to release the application form and the official notification in February 2026. The registration window is typically open for about one month."
    },
    {
      question: "What is the eligibility criteria for NEET 2026?",
      answer: "To be eligible, a candidate must be at least 17 years old by December 31, 2026, have completed Class 12 with Physics, Chemistry, Biology/Biotechnology, and English, and secure minimum 50% in PCB (General), 40% for SC/ST/OBC, 45% for PwD."
    },
    {
      question: "What is the exam pattern for NEET 2026?",
      answer: "The exam is conducted in an offline (pen and paper) format. It has a total of 180 multiple-choice questions to be attempted in 3 hours. The total marks are 720. There are 45 questions each in Physics, Chemistry, Botany, and Zoology. Marking Scheme: +4 marks for a correct answer and -1 mark for an incorrect answer."
    },
    {
      question: "Is there any change in the NEET 2026 syllabus?",
      answer: "The NEET 2026 syllabus is based on the NCERT Class 11 and 12 curriculum. While some topics were removed in previous years, it's always best to download the latest official syllabus from the NTA website when it's released to confirm any changes."
    },
    {
      question: "How many times can I attempt the NEET exam?",
      answer: "There is no upper age limit and no restriction on the number of attempts for the NEET exam."
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

export default AboutNeet2026;