import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <SchemaMarkup type="about" />
    <div className="pt-24 pb-12 min-h-screen w-full px-4 text-gray-300">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-normal py-2 px-4">
          NEET 2026: The Complete Guide for Students
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 px-4">
          Your one-stop guide to everything you need to know about NEET UG 2026
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <p className="mb-6 leading-relaxed">
            Welcome to NEETEXAMCOUNTDOWN.COM! The <strong>NEET 2026</strong> countdown on our website is ticking, reminding you that your journey toward a medical career has officially begun. If you're a Class 11,12 student dreaming of becoming a doctor, this is your one-stop guide to everything you need to know about the NEET UG 2026 exam.
          </p>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">What is NEET UG and Who is it For?</h2>
          </div>
          <p className="mb-6 leading-relaxed">
            The National Eligibility cum Entrance Test (NEET UG) is a single, national-level exam held by the National Testing Agency (NTA). Your scores and rank in this exam will decide which medical college you get into.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 text-white">NEET UG is essential for you if you want to:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Study MBBS, BDS, or other medical courses in any government or private college in India.</li>
              <li>Get into a top nursing, pharmacy, or paramedicine college in India.</li>
              <li>Study medicine in many colleges outside of India, as they also accept NEET scores.</li>
            </ul>
          </div>

          <p className="leading-relaxed">
            For many students, the <strong>NEET 2026</strong> result is even more important than their Class 12 board results, as it's the main factor for college admissions.
          </p>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">NEET UG 2026: Key Dates You Must Know</h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            The NTA has already released the official dates for the NEET 2026 exam. Make sure you have these dates marked on your calendar to avoid missing any deadlines.
          </p>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>Registration Start Date:</strong> February 7, 2026
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>Registration End Date:</strong> March 7, 2026
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>Correction Window:</strong> March 9 – March 11, 2026
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>City Intimation:</strong> April 26, 2026
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>Admit Card Download:</strong> May 1, 2026
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>Exam Date:</strong> May 3, 2026
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <strong>Result Date:</strong> June 14, 2026 (Tentative)
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">How to Apply for NEET 2026</h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            Applying for the NEET exam is easy and must be done online on the official NTA website. Follow these simple steps:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li>Go to the official <strong>NEET UG NTA website</strong>.</li>
            <li>Click on the registration link to create a new account.</li>
            <li>Fill in your personal details, including your name and email address.</li>
            <li>Use the login details you receive to log in to your student portal.</li>
            <li>Fill out the <strong>NEET 2026 registration form</strong> completely.</li>
            <li>Upload scanned copies of required documents like your birth certificate and Class 10 marksheet. Keep your Aadhaar card and other relevant documents ready.</li>
            <li>Review all the information carefully before submitting.</li>
            <li>Pay the application fee using an online payment method.</li>
            <li>Download a copy of the receipt and your final application for future reference.</li>
          </ol>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">NEET 2026 Eligibility and Fees</h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            Before you apply, make sure you meet the official eligibility criteria.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold mb-4 text-white">Eligibility Criteria:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least <strong>17 years old</strong> by December 31, 2026.</li>
                <li>You must have completed or be appearing for Class 12 with <strong>Physics, Chemistry, Biology/Biotechnology</strong>, and English as core subjects.</li>
                <li>You need a minimum of <strong>50% marks</strong> in PCB for the General category, and <strong>40%</strong> for OBC, SC, ST, and PwD categories.</li>
                <li>NRIs, PIOs, and foreign nationals are also eligible to apply.</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Application Fees:</h3>
              </div>
              <p className="mb-3 text-sm">The application fees depend on your category and are paid online.</p>
              <ul className="space-y-2">
                <li><strong>General:</strong> ₹1700</li>
                <li><strong>General-EWS & OBC-NCL:</strong> ₹1600</li>
                <li><strong>SC, ST, PwD & Third Gender:</strong> ₹1000</li>
                <li><strong>Outside India:</strong> ₹9500</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">NEET 2026 Exam Details</h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            The NEET 2026 exam is a pen-and-paper test held from <strong>2:00 PM to 5:20 PM IST</strong> at various centers across India.
          </p>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
            <ul className="space-y-3">
              <li><strong>Total Questions:</strong> 200 multiple-choice questions (you must attempt 180).</li>
              <li><strong>Total Marks:</strong> 720</li>
              <li><strong>Subjects:</strong> Questions are from Physics, Chemistry, and Biology (Botany & Zoology) based on the CBSE Class 11 and 12 curriculum.</li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">Frequently Asked Questions (FAQs)</h2>
          </div>
          
          <p className="mb-6 leading-relaxed">
            Here are the most common questions about the <strong>NEET 2026</strong> exam, along with their answers, to help you stay informed and focused.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-white">1. What is the NEET 2026 exam date?</h3>
              <p className="leading-relaxed">
                The <strong>NEET 2026 exam</strong> is tentatively scheduled for <strong>May 3, 2026</strong>, which is the first Sunday of May. The official exam date will be confirmed by the National Testing Agency (NTA) when they release the information bulletin.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-white">2. When will the NEET 2026 application form be released?</h3>
              <p className="leading-relaxed">
                The NTA is expected to release the application form and the official notification in <strong>February 2026</strong>. The registration window is typically open for about one month.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-white">3. What is the eligibility criteria for NEET 2026?</h3>
              <p className="mb-3 leading-relaxed">To be eligible, a candidate must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Be at least <strong>17 years old</strong> by December 31, 2026.</li>
                <li>Have passed Class 12 or an equivalent exam with Physics, Chemistry, Biology/Biotechnology, and English as subjects.</li>
                <li>Secure a minimum of <strong>50% marks</strong> in PCB for the General category (40% for SC/ST/OBC and 45% for PwD).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-white">4. What is the exam pattern for NEET 2026?</h3>
              <p className="mb-3 leading-relaxed">
                The exam is conducted in an <strong>offline (pen and paper)</strong> format. It has a total of <strong>180 multiple-choice questions</strong> to be attempted in <strong>3 hours</strong>. The total marks are <strong>720</strong>. There are <strong>45 questions each</strong> in Physics, Chemistry, Botany, and Zoology.
              </p>
              <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4">
                <p className="text-purple-200">
                  <strong>Marking Scheme:</strong> +4 marks for a correct answer and -1 mark for an incorrect answer.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-white">5. Is there any change in the NEET 2026 syllabus?</h3>
              <p className="leading-relaxed">
                The <strong>NEET 2026 syllabus</strong> is based on the NCERT Class 11 and 12 curriculum. While some topics were removed in previous years, it's always best to download the latest official syllabus from the NTA website when it's released to confirm any changes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-white">6. How many times can I attempt the NEET exam?</h3>
              <p className="leading-relaxed">
                There is <strong>no upper age limit</strong> and <strong>no restriction on the number of attempts</strong> for the NEET exam.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-700" />

        <section>
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 leading-tight">All the Best for Your Preparation!</h2>
          </div>
          
          <p className="leading-relaxed text-center italic">
            NEET is known for being a tough exam, but with a smart study plan and a positive attitude, you can definitely achieve your goals. Use our countdown to track your progress, stay on schedule, and give your very best. We wish you all the luck on your journey!
          </p>
        </section>
      </div>
    </div>
    </>
  );
}

export default AboutNeet2026;