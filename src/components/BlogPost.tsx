import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = {
    1: {
      title: "How to Prepare for NEET Physics in 6 Months",
      content: `
        <h2>Introduction</h2>
        <p>Preparing for NEET Physics requires a systematic approach and dedicated study plan. This comprehensive guide will help you master Physics concepts effectively within 6 months.</p>

        <h2>Month 1-2: Building the Foundation</h2>
        <ul>
          <li>Focus on Mechanics and Kinematics</li>
          <li>Master Newton's Laws and their applications</li>
          <li>Practice numerical problems daily</li>
          <li>Create formula sheets for quick revision</li>
        </ul>

        <h2>Month 3-4: Advanced Concepts</h2>
        <ul>
          <li>Study Thermodynamics and Waves</li>
          <li>Understanding Optics and Modern Physics</li>
          <li>Solve previous year questions</li>
          <li>Take regular mock tests</li>
        </ul>

        <h2>Month 5-6: Revision and Practice</h2>
        <ul>
          <li>Complete revision of all topics</li>
          <li>Focus on weak areas</li>
          <li>Increase mock test frequency</li>
          <li>Time management practice</li>
        </ul>
      `,
      author: "Dr. Rajesh Kumar",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Physics",
      image: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg"
    },
    2: {
      title: "Essential Biology Topics for NEET 2025",
      content: `
        <h2>Key Focus Areas</h2>
        <p>Biology forms the backbone of NEET examination. Here are the most important topics you need to master.</p>

        <h2>Human Physiology</h2>
        <ul>
          <li>Digestive System</li>
          <li>Respiratory System</li>
          <li>Circulatory System</li>
          <li>Nervous System</li>
        </ul>

        <h2>Genetics and Evolution</h2>
        <ul>
          <li>Mendelian Genetics</li>
          <li>Molecular Basis of Inheritance</li>
          <li>Evolution and Adaptations</li>
          <li>Human Evolution</li>
        </ul>

        <h2>Plant Biology</h2>
        <ul>
          <li>Plant Anatomy</li>
          <li>Plant Physiology</li>
          <li>Plant Reproduction</li>
          <li>Plant Classification</li>
        </ul>
      `,
      author: "Dr. Priya Singh",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Biology",
      image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg"
    },
    3: {
      title: "Chemistry Preparation Strategies by NEET Toppers",
      content: `
        <h2>Effective Study Techniques</h2>
        <p>Learn from the experience of NEET toppers who have successfully cracked the examination.</p>

        <h2>Physical Chemistry</h2>
        <ul>
          <li>Focus on Thermodynamics</li>
          <li>Master Chemical Kinetics</li>
          <li>Understanding Electrochemistry</li>
          <li>Practice Numerical Problems</li>
        </ul>

        <h2>Organic Chemistry</h2>
        <ul>
          <li>IUPAC Nomenclature</li>
          <li>Reaction Mechanisms</li>
          <li>Important Name Reactions</li>
          <li>Biomolecules</li>
        </ul>

        <h2>Inorganic Chemistry</h2>
        <ul>
          <li>Periodic Table</li>
          <li>Chemical Bonding</li>
          <li>Coordination Compounds</li>
          <li>Metallurgy</li>
        </ul>
      `,
      author: "Dr. Amit Sharma",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Chemistry",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
    },
    4: {
      title: "Time Management Tips for NEET Aspirants",
      content: `
        <h2>Smart Study Planning</h2>
        <p>Effective time management is crucial for NEET preparation. Here's how to make the most of your study hours.</p>

        <h2>Daily Schedule</h2>
        <ul>
          <li>Create a fixed study routine</li>
          <li>Allocate subject-wise time</li>
          <li>Include regular breaks</li>
          <li>Plan revision sessions</li>
        </ul>

        <h2>Weekly Planning</h2>
        <ul>
          <li>Set weekly goals</li>
          <li>Track progress</li>
          <li>Adjust study plans</li>
          <li>Review weak areas</li>
        </ul>

        <h2>Test Practice</h2>
        <ul>
          <li>Regular mock tests</li>
          <li>Time-bound practice</li>
          <li>Analysis of mistakes</li>
          <li>Improvement strategies</li>
        </ul>
      `,
      author: "Dr. Meera Patel",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Study Tips",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-purple-400 hover:text-purple-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </button>

        <div className="max-w-4xl mx-auto">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <footer className="text-center text-sm text-gray-400 py-8 mt-12">
          <p>Developed By EpexAyush</p>
          <p>© 2024 NEET Countdown Timer. All rights reserved.</p>
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

export default BlogPost;