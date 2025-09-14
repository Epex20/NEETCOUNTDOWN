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
            NEET (UG) 2026: The Complete Guide for Students
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            National Eligibility-cum-Entrance Test for Undergraduate Medical Courses
          </p>
        </header>

        {/* Quick Overview */}
        <section className="mb-8 bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET (UG) 2026 - Quick Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span>📅 Exam Date:</span>
              <span className="font-semibold text-purple-300">03 May 2026 (SUNDAY)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span>⏱️ Duration:</span>
              <span className="font-semibold text-purple-300">3 Hours (180 minutes)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span>📝 Questions:</span>
              <span className="font-semibold text-purple-300">180 MCQ Questions</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-700">
              <span>🎯 Total Marks:</span>
              <span className="font-semibold text-purple-300">720 Marks</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            Welcome to NEETEXAMCOUNTDOWN.COM! The <strong className="text-purple-400">NEET 2026</strong> countdown on our website is ticking, reminding you that your journey toward a medical career has officially begun. If you're a Class 11, 12 student dreaming of becoming a doctor, this is your comprehensive guide to everything you need to know about the NEET UG 2026 exam.
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
            <li>💊 Get into BAMS (Ayurveda), BUMS (Unani), BSMS (Siddha), BHMS (Homeopathy)</li>
            <li>🩺 Pursue B.Sc. Nursing, BVSc & AH, and Allied Health Sciences</li>
            <li>🌍 Study medicine in many colleges outside of India, as they also accept NEET scores</li>
          </ul>

          <p className="text-sm sm:text-base leading-relaxed font-medium text-purple-300">
            For many students, the <strong>NEET 2026</strong> result is even more important than their Class 12 board results, as it's the main factor for college admissions.
          </p>
        </section>

        {/* Important Dates */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET UG 2026: Important Dates & Fees
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            While the exam date is confirmed, other important dates are yet to be announced by NTA. Based on previous years' pattern, here's the expected timeline:
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">📝 Online Application</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">Not announced yet</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">💳 Fee Payment Last Date</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">Not announced yet</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">✏️ Correction Window</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">Not announced yet</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base">🎫 Admit Card Download</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">Not announced yet</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-700">
              <span className="text-sm sm:text-base font-bold">📅 Examination Date</span>
              <span className="text-sm sm:text-base font-bold text-white">03 May 2026 (SUNDAY)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm sm:text-base">📊 Result Declaration</span>
              <span className="text-sm sm:text-base font-semibold text-purple-300">Not announced yet</span>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Eligibility Criteria
          </h2>
          
          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📅 Age Criteria</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li><strong>Minimum Age:</strong> 17 years (Born on or before 31.12.2009)</li>
            <li><strong>Upper Age Limit:</strong> No upper age limit</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📚 Educational Qualifications</h3>
          <p className="text-sm sm:text-base mb-3">Required Subjects:</p>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li>• Physics (Compulsory)</li>
            <li>• Chemistry (Compulsory)</li>
            <li>• Biology/Biotechnology (Compulsory)</li>
            <li>• English (Compulsory)</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📊 Minimum Marks Required</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li><strong>General/EWS:</strong> 50% in PCB</li>
            <li><strong>SC/ST/OBC-NCL:</strong> 40% in PCB</li>
            <li><strong>PwBD:</strong> 40% in PCB</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🌍 Nationality</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li>• Indian Nationals</li>
            <li>• Non-Resident Indians (NRIs)</li>
            <li>• Overseas Citizens of India (OCI)</li>
            <li>• Foreign Nationals</li>
          </ul>
        </section>

        {/* Fee Structure */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Fee Structure
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Category</th>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">In India</th>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Outside India</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">General</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">₹ 1,700/-</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">₹ 9,500/-</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">General-EWS/OBC-NCL</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">₹ 1,600/-</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">₹ 9,500/-</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">SC/ST/PwBD/PwD/Third Gender</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">₹ 1,000/-</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">₹ 9,500/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Exam Pattern */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Examination Pattern
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📝 Exam Details</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><strong>Mode:</strong> Pen & Paper (Offline)</li>
                <li><strong>Duration:</strong> 3 Hours (180 minutes)</li>
                <li><strong>Type:</strong> Multiple Choice Questions (MCQ)</li>
                <li><strong>Total Questions:</strong> 180 Questions</li>
                <li><strong>Total Marks:</strong> 720 Marks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">⏰ Timing</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><strong>Exam Time:</strong> 2:00 PM to 5:00 PM (IST)</li>
                <li><strong>Entry Closes:</strong> 1:30 PM</li>
                <li><strong>For PwBD:</strong> Additional 1 hour</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📊 Subject-wise Distribution</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Subject</th>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Questions</th>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Physics</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">45</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">180</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Chemistry</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">45</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">180</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Biology (Botany & Zoology)</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">90</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">360</td>
                </tr>
                <tr className="bg-gray-800/30">
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-bold">Total</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-bold text-white">180</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-bold text-white">720</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">📈 Marking Scheme</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            <li><strong>Correct Answer:</strong> +4 marks</li>
            <li><strong>Wrong Answer:</strong> -1 mark</li>
            <li><strong>Unanswered:</strong> 0 marks</li>
          </ul>
        </section>

        {/* Language Options */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            Language Options for NEET 2026
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            NEET (UG) 2026 will be conducted in the following languages:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• English</li>
              <li>• Hindi</li>
              <li>• Assamese</li>
              <li>• Bengali</li>
              <li>• Gujarati</li>
              <li>• Kannada</li>
              <li>• Malayalam</li>
            </ul>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• Marathi</li>
              <li>• Odia</li>
              <li>• Punjabi</li>
              <li>• Tamil</li>
              <li>• Telugu</li>
              <li>• Urdu</li>
            </ul>
          </div>
          <p className="text-sm sm:text-base leading-relaxed font-medium text-purple-300">
            <strong>Note:</strong> Regional language papers will be bilingual (English + Regional Language)
          </p>
        </section>

        {/* Syllabus Overview */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Syllabus Overview
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            The NEET (UG) 2026 syllabus is based on the NCERT curriculum of Class 11 and 12 for Physics, Chemistry, and Biology.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Physics */}
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">⚛️ Physics</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Class 11 Topics:</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Physical World and Measurement</li>
                  <li>• Kinematics</li>
                  <li>• Laws of Motion</li>
                  <li>• Work, Energy and Power</li>
                  <li>• Gravitation</li>
                  <li>• Thermodynamics</li>
                  <li>• Oscillations and Waves</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Class 12 Topics:</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Electrostatics</li>
                  <li>• Current Electricity</li>
                  <li>• Magnetism</li>
                  <li>• Electromagnetic Induction</li>
                  <li>• Optics</li>
                  <li>• Atoms and Nuclei</li>
                  <li>• Electronic Devices</li>
                </ul>
              </div>
            </div>

            {/* Chemistry */}
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🧪 Chemistry</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Class 11 Topics:</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Basic Concepts of Chemistry</li>
                  <li>• Structure of Atom</li>
                  <li>• Chemical Bonding</li>
                  <li>• States of Matter</li>
                  <li>• Thermodynamics</li>
                  <li>• Equilibrium</li>
                  <li>• Organic Chemistry Basics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Class 12 Topics:</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Solid State</li>
                  <li>• Solutions</li>
                  <li>• Electrochemistry</li>
                  <li>• Chemical Kinetics</li>
                  <li>• p-Block Elements</li>
                  <li>• Coordination Compounds</li>
                  <li>• Biomolecules</li>
                </ul>
              </div>
            </div>

            {/* Biology */}
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🧬 Biology</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Class 11 Topics:</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Diversity in Living World</li>
                  <li>• Structural Organisation</li>
                  <li>• Cell Structure and Function</li>
                  <li>• Plant Physiology</li>
                  <li>• Human Physiology</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Class 12 Topics:</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Reproduction</li>
                  <li>• Genetics and Evolution</li>
                  <li>• Biology and Human Welfare</li>
                  <li>• Biotechnology</li>
                  <li>• Ecology and Environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Counselling Process */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Counselling Process
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🏛️ All India Quota (15%)</h3>
              <p className="text-sm sm:text-base mb-3"><strong>Conducted by:</strong> Medical Counselling Committee (MCC), DGHS</p>
              <p className="text-sm sm:text-base mb-3"><strong>Website:</strong> mcc.nic.in</p>
              <p className="text-sm sm:text-base mb-2"><strong>Includes:</strong></p>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• AIIMS across India</li>
                <li>• JIPMER</li>
                <li>• Central Universities (BHU, AMU, DU)</li>
                <li>• ESIC Medical Colleges</li>
                <li>• AFMC (Registration only)</li>
                <li>• Deemed Universities</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🏢 State Quota (85%)</h3>
              <p className="text-sm sm:text-base mb-3"><strong>Conducted by:</strong> Respective State Governments</p>
              <p className="text-sm sm:text-base mb-3"><strong>Reservation Policy:</strong> As per state rules</p>
              <p className="text-sm sm:text-base mb-2"><strong>Includes:</strong></p>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• State Government Colleges</li>
                <li>• Private Medical Colleges</li>
                <li>• Management Quota Seats</li>
                <li>• NRI Quota Seats</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900/30 rounded-lg p-4 border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">🌿 AYUSH Courses</h3>
            <p className="text-sm sm:text-base mb-3"><strong>Conducted by:</strong> AACCC (AYUSH Admissions Central Counselling Committee)</p>
            <p className="text-sm sm:text-base mb-3"><strong>Website:</strong> aaccc.gov.in</p>
            <p className="text-sm sm:text-base mb-2"><strong>Courses:</strong></p>
            <ul className="text-xs sm:text-sm space-y-1 grid md:grid-cols-2 gap-2">
              <li>• BAMS (Ayurveda)</li>
              <li>• BUMS (Unani)</li>
              <li>• BSMS (Siddha)</li>
              <li>• BHMS (Homeopathy)</li>
            </ul>
          </div>
        </section>

        {/* Reservation Policy */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            Reservation Policy (All India Quota)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Category</th>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Percentage</th>
                  <th className="border border-gray-700 px-4 py-3 text-left text-sm sm:text-base font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">General</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">Open</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">General category candidates</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">EWS</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">10%</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Economically Weaker Section</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">OBC-NCL</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">27%</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Other Backward Classes (Non-Creamy Layer)</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">SC</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">15%</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Scheduled Castes</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">ST</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">7.5%</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Scheduled Tribes</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">PwBD</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base font-semibold text-purple-300">5%</td>
                  <td className="border border-gray-700 px-4 py-3 text-sm sm:text-base">Persons with Benchmark Disabilities (Horizontal)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            NEET 2026 Application Process
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            The application process will be conducted online at <strong className="text-purple-400">neet.nta.nic.in</strong>. Follow these steps:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <span className="bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                <h3 className="text-base sm:text-lg font-semibold text-white">Registration</h3>
              </div>
              <p className="text-sm sm:text-base mb-3">Fill basic details and get Application Number</p>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• Personal Details</li>
                <li>• Mobile & Email Verification</li>
                <li>• Address Information</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <span className="bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                <h3 className="text-base sm:text-lg font-semibold text-white">Application Form</h3>
              </div>
              <p className="text-sm sm:text-base mb-3">Complete detailed application form</p>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• Educational Qualifications</li>
                <li>• Choice of Exam Cities</li>
                <li>• Document Upload</li>
                <li>• Question Paper Medium</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-3">
                <span className="bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                <h3 className="text-base sm:text-lg font-semibold text-white">Fee Payment</h3>
              </div>
              <p className="text-sm sm:text-base mb-3">Pay application fee online</p>
              <ul className="text-xs sm:text-sm space-y-1">
                <li>• Net Banking</li>
                <li>• Credit/Debit Card</li>
                <li>• UPI Payment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            Documents Required for Upload
          </h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>📸 <strong>Recent Passport Size Photograph</strong> (10-200 KB)</li>
            <li>✍️ <strong>Signature</strong> (10-50 KB)</li>
            <li>👍 <strong>Left & Right Hand Thumb Impressions</strong> (10-200 KB)</li>
            <li>📜 <strong>Class X Certificate</strong> (50-300 KB)</li>
            <li>📋 <strong>Category Certificate</strong> (if applicable)</li>
            <li>♿ <strong>PwD Certificate</strong> (if applicable)</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 leading-tight">
            All the Best for Your NEET 2026 Preparation!
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            NEET is known for being a tough exam, but with a smart study plan, consistent effort, and the right guidance, you can definitely achieve your goals. The competition is intense, but remember that thousands of students crack NEET every year and fulfill their dream of becoming doctors.
          </p>
          <p className="text-sm sm:text-base leading-relaxed font-medium text-purple-300">
            Use our countdown to track your progress, stay on schedule, and give your very best. Stay updated with official announcements from NTA, and don't forget to apply when the registration opens. We wish you all the luck on your journey to becoming a medical professional!
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
      answer: "The NEET 2026 exam is scheduled for May 3, 2026 (Sunday). The exam will be conducted from 2:00 PM to 5:00 PM (IST) across various centers in India and abroad."). The exam will be conducted from 2:00 PM to 5:00 PM (IST) across various centers in India and abroad."
    },
    {
      question: "When will the NEET 2026 application form be released?",
      answer: "The application form and official notification dates have not been announced yet by NTA. Based on previous years' pattern, the registration is expected to begin in February 2026. Stay tuned to the official website neet.nta.nic.in for updates."
    },
    {
      question: "What is the eligibility criteria for NEET 2026?",
      answer: "To be eligible, a candidate must be at least 17 years old by December 31, 2026, have completed Class 12 with Physics, Chemistry, Biology/Biotechnology, and English, and secure minimum 50% in PCB (General), 40% for SC/ST/OBC-NCL, and 40% for PwBD."
    },
    {
      question: "What is the exam pattern for NEET 2026?",
      answer: "The exam is conducted in an offline (pen and paper) format. It has a total of 180 multiple-choice questions to be attempted in 3 hours. The total marks are 720. There are 45 questions each in Physics, Chemistry, and 90 questions in Biology (Botany + Zoology). Marking Scheme: +4 marks for a correct answer and -1 mark for an incorrect answer."
    },
    {
      question: "Is there any change in the NEET 2026 syllabus?",
      answer: "The NEET 2026 syllabus is based on the NCERT Class 11 and 12 curriculum. While some topics were removed in previous years, it's always best to download the latest official syllabus from the NTA website when it's released to confirm any changes."
    },
    {
      question: "How many times can I attempt the NEET exam?",
      answer: "There is no upper age limit and no restriction on the number of attempts for the NEET exam. You can attempt NEET as many times as you want until you qualify or achieve your desired score."
    },
    {
      question: "What are the application fees for NEET 2026?",
      answer: "The application fees are: General - ₹1,700, General-EWS/OBC-NCL - ₹1,600, SC/ST/PwBD/Third Gender - ₹1,000. For candidates applying from outside India, the fee is ₹9,500 for all categories."
    },
    {
      question: "In how many languages is NEET 2026 conducted?",
      answer: "NEET 2026 will be conducted in 13 languages: English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu. Regional language papers will be bilingual (English + Regional Language)."
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