import React from 'react';

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

function HeroSection({ timeLeft }: HeroSectionProps) {
  const [isFocusMode, setIsFocusMode] = React.useState(false);

  const enterFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.log('Fullscreen not supported or denied');
    }
  };

  const exitFullscreen = async () => {
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.log('Exit fullscreen failed');
    }
  };

  const toggleFocusMode = async () => {
    if (!isFocusMode) {
      // Entering focus mode - go fullscreen
      await enterFullscreen();
      setIsFocusMode(true);
    } else {
      // Exiting focus mode - exit fullscreen
      await exitFullscreen();
      setIsFocusMode(false);
    }
  };

  const exitFocusMode = async () => {
    await exitFullscreen();
    setIsFocusMode(false);
  };

  // Handle keyboard shortcuts and fullscreen changes
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFocusMode) {
        exitFocusMode();
      }
    };

    const handleFullscreenChange = () => {
      // If user exits fullscreen manually (ESC, F11, etc), also exit focus mode
      if (!document.fullscreenElement && isFocusMode) {
        setIsFocusMode(false);
      }
    };

    if (isFocusMode) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      // Prevent body scroll when in focus mode
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.body.style.overflow = 'unset';
    };
  }, [isFocusMode]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-2 sm:px-4">
      <div className="container mx-auto py-6 sm:py-8 text-center w-full">
        {/* Main Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight px-2 sm:px-4">
            NEET UG 2026 COUNTDOWN
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Plan your studies efficiently with an interactive NEET 2026 countdown clock.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex md:grid md:grid-cols-4 gap-1 sm:gap-2 md:gap-6 px-2 sm:px-4 max-w-6xl mx-auto mb-6 sm:mb-8 justify-center">
          <div className="bg-glass rounded-lg sm:rounded-xl p-1 sm:p-3 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow flex-1 transition-all duration-300 hover:scale-105">
            <div className="text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.days}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Days</div>
          </div>
          <div className="bg-glass rounded-lg sm:rounded-xl p-1 sm:p-3 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow flex-1 transition-all duration-300 hover:scale-105">
            <div className="text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.hours}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Hours</div>
          </div>
          <div className="bg-glass rounded-lg sm:rounded-xl p-1 sm:p-3 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow flex-1 transition-all duration-300 hover:scale-105">
            <div className="text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.minutes}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Minutes</div>
          </div>
          <div className="bg-glass rounded-lg sm:rounded-xl p-1 sm:p-3 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow flex-1 transition-all duration-300 hover:scale-105">
            <div className="text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.seconds}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Seconds</div>
          </div>
        </div>

        {/* Focus Mode Button */}
        <div className="absolute bottom-8 right-8 z-50 group">
          <button 
            onClick={toggleFocusMode}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-purple-400/30"
            title="Enter Focus Mode"
          >
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Focus Mode
          </div>
        </div>

        {/* Focus Mode Full Screen Overlay */}
        {isFocusMode && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center animate-in fade-in duration-500"
            onClick={exitFocusMode}
          >
            <div className="text-center animate-in zoom-in duration-700 delay-200">
              {/* Full Screen Countdown */}
              <div className="flex gap-8 sm:gap-12 md:gap-16 justify-center mb-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {timeLeft.days}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-gray-300 font-semibold">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {timeLeft.hours}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-gray-300 font-semibold">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-gray-300 font-semibold">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-gray-300 font-semibold">Seconds</div>
                </div>
              </div>
              
              {/* Focus Mode Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                NEET UG 2026 COUNTDOWN
              </h1>
              
              {/* Exit Instruction */}
              <p className="text-gray-400 text-sm sm:text-base animate-pulse">
                Click anywhere to exit focus mode
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default React.memo(HeroSection);