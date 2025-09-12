import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

function HeroSection({ timeLeft }: HeroSectionProps) {
  const navigate = useNavigate();
  const [isAndroid, setIsAndroid] = React.useState(false);

  React.useEffect(() => {
    // Check if the device is Android
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroidDevice = /android/.test(userAgent);
    setIsAndroid(isAndroidDevice);
  }, []);

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
        <div className={`max-w-5xl mx-auto mb-8 sm:mb-12 transition-smooth ${
          isAndroid 
            ? 'flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-2' 
            : 'grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4'
        }`}>
          <div className={`bg-glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow ${
            isAndroid ? 'min-w-[120px] sm:min-w-[160px] flex-shrink-0' : ''
          }`}>
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.days}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Days</div>
          </div>
          <div className={`bg-glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow ${
            isAndroid ? 'min-w-[120px] sm:min-w-[160px] flex-shrink-0' : ''
          }`}>
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.hours}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Hours</div>
          </div>
          <div className={`bg-glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow ${
            isAndroid ? 'min-w-[120px] sm:min-w-[160px] flex-shrink-0' : ''
          }`}>
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.minutes}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Minutes</div>
          </div>
          <div className={`bg-glass rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 text-center border border-gray-800 shadow-glow ${
            isAndroid ? 'min-w-[120px] sm:min-w-[160px] flex-shrink-0' : ''
          }`}>
            <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 text-gradient">
              {timeLeft.seconds}
            </div>
            <div className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-gray-300 font-semibold">Seconds</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;