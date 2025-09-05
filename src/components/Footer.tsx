import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-lg border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">Developed By EpexAyush</p>
          <p className="mb-4">© 2026 NEET 2026 Countdown Timer. All rights reserved.</p>
          <p className="mb-4">
            Time synchronized with Indian Standard Time (IST) | Powered by World Time API
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            <span 
              className="text-purple-400 cursor-pointer"
              onClick={() => navigate('/privacy-policy')}
            >
              Privacy Policy
            </span>
            <span 
              className="text-purple-400 cursor-pointer"
              onClick={() => navigate('/terms-and-conditions')}
            >
              Terms & Conditions
            </span>
            <span 
              className="text-purple-400 cursor-pointer"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;