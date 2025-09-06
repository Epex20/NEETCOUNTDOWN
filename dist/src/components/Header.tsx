import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, Menu, X, ChevronDown } from 'lucide-react';
import RealTimeClock from './RealTimeClock';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);

  const submenuItems = [
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isSubmenuActive = () => {
    return submenuItems.some(item => isActivePath(item.path));
  };
  
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/30 backdrop-blur-lg border-b border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer absolute left-0 ml-4 transition-smooth hover:scale-105" onClick={() => handleNavigation('/')}>
            <img 
              src="https://i.postimg.cc/J01X0sD0/exam-time.png" 
              alt="NEET Countdown Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-gradient uppercase">NEET EXAM COUNTDOWN</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute right-0 mr-4">
            <nav className="flex items-center space-x-8">
            <span
              className={`text-sm font-medium ${
                isActivePath('/')
                  ? 'text-purple-400 font-semibold'
                  : 'text-gray-300'
              } uppercase cursor-pointer`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </span>
            
            <span
              className={`text-sm font-medium ${
                isActivePath('/about-neet-2026')
                  ? 'text-purple-400 font-semibold'
                  : 'text-gray-300'
              } uppercase cursor-pointer`}
              onClick={() => handleNavigation('/about-neet-2026')}
            >
              About NEET 2026
            </span>
            
            {/* Submenu */}
            <div className="relative">
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  isSubmenuActive()
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300'
                } uppercase cursor-pointer`}
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                More
                <ChevronDown className={`w-4 h-4 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
              </span>
              
              {/* Submenu Dropdown */}
              {isSubmenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] py-2">
                  {submenuItems.map((item) => (
                    <span
                      key={item.path}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium cursor-pointer ${
                        isActivePath(item.path)
                          ? 'text-purple-400 font-semibold bg-purple-400/10'
                          : 'text-gray-300'
                      } uppercase`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            </nav>
            
            {/* Real Time Clock */}
            <div className="ml-6">
              <RealTimeClock />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <span
            className="md:hidden text-gray-300 absolute right-0 mr-4 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 bg-gray-900/30 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <span
                className={`text-left text-sm font-medium cursor-pointer ${
                  isActivePath('/')
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300'
                } uppercase`}
                onClick={() => handleNavigation('/')}
              >
                Home
              </span>
              
              <span
                className={`text-left text-sm font-medium cursor-pointer ${
                  isActivePath('/about-neet-2026')
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300'
                } uppercase`}
                onClick={() => handleNavigation('/about-neet-2026')}
              >
                About NEET 2026
              </span>
              
              {/* Mobile Submenu Items */}
              <div className="pl-4 space-y-3 border-l border-gray-700">
                {submenuItems.map((item) => (
                  <span
                    key={item.path}
                    className={`block text-left text-sm font-medium cursor-pointer ${
                      isActivePath(item.path)
                        ? 'text-purple-400 font-semibold'
                        : 'text-gray-300'
                    } uppercase`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;