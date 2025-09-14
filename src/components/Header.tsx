import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Clock, Menu, X, ChevronDown, Home, BookOpen, Mail, Shield, FileText } from 'lucide-react';
import RealTimeClock from './RealTimeClock';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

  const submenuItems = [
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' }
  ];

  const aboutMenuItems = [
    { name: 'About Us', path: '/about/us' },
    { name: 'NEET 2026', path: '/about/neet-2026' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isSubmenuActive = () => {
    return submenuItems.some(item => isActivePath(item.path));
  };

  const isAboutMenuActive = () => {
    return aboutMenuItems.some(item => isActivePath(item.path));
  };
  
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsSubmenuOpen(false);
    setIsAboutMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsSubmenuOpen(false);
        setIsAboutMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-gray-900/30 backdrop-blur-lg border-b border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 relative">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => handleNavigation('/')}>
            <img 
              src="/new-favicon.svg" 
              alt="NEET Countdown Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0"
              width="32"
              height="32"
              loading="eager"
            />
            <span className="text-xs xs:text-sm sm:text-lg md:text-xl font-bold text-gradient uppercase whitespace-nowrap overflow-hidden text-ellipsis">
              NEET EXAM COUNTDOWN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
            <span
              className={`text-sm font-medium ${
                isActivePath('/')
                  ? 'text-gray-300 font-semibold'
                  : 'text-gray-300'
              } uppercase cursor-pointer`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </span>
            
            {/* About Submenu */}
            <div className="relative">
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  isAboutMenuActive()
                    ? 'text-gray-300 font-semibold'
                    : 'text-gray-300'
                } uppercase cursor-pointer`}
                onClick={() => {
                  setIsAboutMenuOpen(!isAboutMenuOpen);
                  setIsSubmenuOpen(false);
                }}
              >
                About
                <ChevronDown className={`w-4 h-4 ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
              </span>
              
              {/* About Dropdown */}
              {isAboutMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] py-2">
                  {aboutMenuItems.map((item) => (
                    <span
                      key={item.path}
                      className="block w-full text-left px-4 py-2 text-sm font-medium cursor-pointer text-gray-300 hover:text-white uppercase"
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* Submenu */}
            <div className="relative">
              <span
                className={`flex items-center gap-1 text-sm font-medium text-purple-400 font-semibold uppercase cursor-pointer`}
                onClick={() => {
                  setIsSubmenuOpen(!isSubmenuOpen);
                  setIsAboutMenuOpen(false);
                }}
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
            className="md:hidden text-gray-300 cursor-pointer flex-shrink-0 flex items-center justify-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </span>
        </div>

        {/* Mobile Navigation - Full Width */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-glass border-t border-gray-800">
            <nav className="py-6">
              <div className="space-y-3 px-4">
                <button
                  className={`block w-full text-left px-4 py-3 text-sm font-medium uppercase rounded-lg border transition-all duration-300 ${
                    isActivePath('/') 
                      ? 'text-white bg-purple-400/20 border-purple-400 shadow-glow' 
                      : 'text-gray-300 bg-glass border-gray-800 hover:bg-gray-800/70 hover:text-white hover:scale-105'
                  }`}
                  onClick={() => handleNavigation('/')}
                >
                  Home
                </button>
                
                {/* Mobile About Menu */}
                <div>
                  <button
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium uppercase rounded-lg border transition-all duration-300 ${
                      isAboutMenuActive() 
                        ? 'text-white bg-purple-400/20 border-purple-400 shadow-glow' 
                        : 'text-gray-300 bg-glass border-gray-800 hover:bg-gray-800/70 hover:text-white hover:scale-105'
                    }`}
                    onClick={() => {
                      setIsAboutMenuOpen(!isAboutMenuOpen);
                      setIsSubmenuOpen(false);
                    }}
                  >
                    About
                    <ChevronDown className={`w-4 h-4 transition-transform ${isAboutMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile About Submenu Items */}
                  {isAboutMenuOpen && (
                    <div className="mt-2 space-y-2 pl-4">
                      {aboutMenuItems.map((item) => (
                        <button
                          key={item.path}
                          className={`block w-full text-left px-4 py-2 text-sm uppercase rounded-lg border transition-all duration-300 ${
                            isActivePath(item.path) 
                              ? 'text-white bg-purple-400/20 border-purple-400 shadow-glow' 
                              : 'text-gray-300 bg-glass border-gray-700 hover:bg-gray-800/50 hover:text-white hover:scale-105'
                          }`}
                          onClick={() => handleNavigation(item.path)}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                <div>
                  <button
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium uppercase rounded-lg border transition-all duration-300 ${
                      isSubmenuActive() 
                        ? 'text-white bg-purple-400/20 border-purple-400 shadow-glow' 
                        : 'text-gray-300 bg-glass border-gray-800 hover:bg-gray-800/70 hover:text-white hover:scale-105'
                    }`}
                    onClick={() => {
                      setIsSubmenuOpen(!isSubmenuOpen);
                      setIsAboutMenuOpen(false);
                    }}
                  >
                    More
                    <ChevronDown className={`w-4 h-4 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Submenu Items */}
                  {isSubmenuOpen && (
                    <div className="mt-2 space-y-2 pl-4">
                      {submenuItems.map((item) => (
                        <button
                          key={item.path}
                          className={`block w-full text-left px-4 py-2 text-sm uppercase rounded-lg border transition-all duration-300 ${
                            isActivePath(item.path) 
                              ? 'text-white bg-purple-400/20 border-purple-400 shadow-glow' 
                              : 'text-gray-300 bg-glass border-gray-700 hover:bg-gray-800/50 hover:text-white hover:scale-105'
                          }`}
                          onClick={() => handleNavigation(item.path)}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Mobile Real Time Clock */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <RealTimeClock />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;