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
        <div className="countdown-container flex md:grid md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 overflow-x-auto md:overflow-visible px-2 sm:px-4 pb-2 md:pb-0 max-w-6xl mx-auto mb-8 sm:mb-12"
             style={{ scrollSnapType: 'x mandatory' }}>
          <div className="countdown-item bg-glass rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow min-w-[85px] sm:min-w-[120px] md:min-w-0 flex-shrink-0 transition-all duration-300 hover:scale-105"
               style={{ scrollSnapAlign: 'center' }}>
            <div className="text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.days}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Days</div>
          </div>
          <div className="countdown-item bg-glass rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow min-w-[85px] sm:min-w-[120px] md:min-w-0 flex-shrink-0 transition-all duration-300 hover:scale-105"
               style={{ scrollSnapAlign: 'center' }}>
            <div className="text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.hours}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Hours</div>
          </div>
          <div className="countdown-item bg-glass rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow min-w-[85px] sm:min-w-[120px] md:min-w-0 flex-shrink-0 transition-all duration-300 hover:scale-105"
               style={{ scrollSnapAlign: 'center' }}>
            <div className="text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.minutes}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Minutes</div>
          </div>
          <div className="countdown-item bg-glass rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow min-w-[85px] sm:min-w-[120px] md:min-w-0 flex-shrink-0 transition-all duration-300 hover:scale-105"
               style={{ scrollSnapAlign: 'center' }}>
            <div className="text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.seconds}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Seconds</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default React.memo(HeroSection);