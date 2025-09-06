import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

function Blog() {
  React.useEffect(() => {
    document.title = "NEET Preparation Blog - Tips, Strategies & Updates";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read our comprehensive NEET preparation blog for expert tips, study strategies, and latest exam updates. Get insights from toppers and educators.");
    }
  }, []);

  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "How to Prepare for NEET Physics in 6 Months",
      excerpt: "A comprehensive guide to mastering NEET Physics concepts, including study strategies, important topics, and practice tips.",
      author: "Dr. Rajesh Kumar",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Physics",
      image: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg"
    },
    {
      id: 3,
      title: "Chemistry Preparation Strategies by NEET Toppers",
      excerpt: "Learn effective Chemistry preparation techniques and tips shared by previous year NEET top rankers.",
      author: "Dr. Amit Sharma",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Chemistry",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
    },
    {
      id: 4,
      title: "Time Management Tips for NEET Aspirants",
      excerpt: "Expert advice on managing your study schedule, maintaining work-life balance, and optimizing your preparation time.",
      author: "Dr. Meera Patel",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Study Tips",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            NEET Preparation Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Expert tips, strategies, and insights for NEET aspirants
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {blogPosts.map(post => (
            <article 
              key={post.id}
              className="bg-gray-900/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-white hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="mt-6 flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Back to Home Button */}
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

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 py-4">
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

export default Blog;