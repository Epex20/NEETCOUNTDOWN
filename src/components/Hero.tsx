import React from 'react';
import { Calendar, Clock, BookOpen, MessageCircle, Link } from 'lucide-react';

interface HeroProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  title: string;
  subtitle: string;
  examDate: string;
  examDuration: string;
  children?: React.ReactNode;
}

function Hero({ timeLeft, title, subtitle, examDate, examDuration, children }: HeroProps) {
  return (
    <div className="pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {subtitle}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.days}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.hours}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.minutes}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-6 text-center border border-gray-800">
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-1 sm:mb-2">{timeLeft.seconds}</div>
              <div className="text-[10px] sm:text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {children && (
          <div className="text-center mb-12 flex flex-wrap justify-center gap-4">
            {children}
          </div>
        )}

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Exam Information</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            This website is designed for NEET aspirants to keep track of their exam countdown in a 
            visually appealing and interactive way. The live countdown timer displays the remaining days, 
            hours, minutes, and seconds until the NEET exam.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>Date: {examDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Duration: {examDuration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Mode: Offline (Pen & Paper)</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Questions: 180 (Physics, Chemistry & Biology)</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span>Telegram: @EpexAyush</span>
            </div>
            <div className="flex items-center gap-2">
              <Link className="w-5 h-5 text-purple-400" />
              <a href="https://neet.nta.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                Official NEET Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;