import React, { useState, useEffect } from 'react';
import { Timer, Info, RefreshCw, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Stopwatch() {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(() => {
    const saved = localStorage.getItem('stopwatchRunning');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem('stopwatchTime');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [lastUpdate, setLastUpdate] = useState(() => {
    const saved = localStorage.getItem('stopwatchLastUpdate');
    return saved ? parseInt(saved, 10) : Date.now();
  });

  useEffect(() => {
    let intervalId: number;
    
    if (isRunning) {
      // Calculate time elapsed since last update
      const now = Date.now();
      const timeDiff = now - lastUpdate;
      if (timeDiff > 0) {
        setTime(prevTime => prevTime + timeDiff);
      }
      setLastUpdate(now);
      
      intervalId = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime + 10;
          localStorage.setItem('stopwatchTime', newTime.toString());
          return newTime;
        });
        setLastUpdate(Date.now());
      }, 10);
    }

    localStorage.setItem('stopwatchRunning', JSON.stringify(isRunning));
    localStorage.setItem('stopwatchLastUpdate', Date.now().toString());

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, lastUpdate]);

  const handleStartStop = () => {
    if (!isRunning) {
      // When starting, update the last update time to now
      setLastUpdate(Date.now());
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    localStorage.setItem('stopwatchTime', '0');
    localStorage.setItem('stopwatchRunning', 'false');
  };

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            STOPWATCH
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Track your study sessions and practice tests
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="text-center mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
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
            Back to NEET 2025
          </button>
          <button 
            onClick={() => navigate('/neet-2026')}
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
            Back to NEET 2026
          </button>
        </div>

        {/* Stopwatch Card */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <Timer className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Study Timer</h2>
          </div>
          <div className="text-4xl md:text-6xl font-bold mb-8 font-mono text-center">
            {formatTime(time)}
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleStartStop}
              className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold transition-colors"
            >
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-lg font-semibold transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 mb-12 border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <Info className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-semibold">Stopwatch Guide</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Features & Usage</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Track your study sessions with precision timing</li>
                <li>Measure practice test durations accurately</li>
                <li>Monitor breaks and revision sessions</li>
                <li>High-precision timer with millisecond accuracy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Controls</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Start/Stop Button:</strong> Controls the timer. The time will continue from where you stopped</li>
                <li><strong>Reset Button:</strong> Clears the timer back to 00:00:00.00</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Data Persistence</h3>
              <div className="flex items-start gap-4 mb-4">
                <Save className="w-5 h-5 text-purple-400 mt-1" />
                <p className="text-gray-300">Your stopwatch time is automatically saved and will persist even if you:</p>
              </div>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Refresh the page</li>
                <li>Close and reopen the browser</li>
                <li>Navigate to different sections of the website</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Important Notes</h3>
              <div className="flex items-start gap-4 mb-4">
                <RefreshCw className="w-5 h-5 text-purple-400 mt-1" />
                <p className="text-gray-300">For accurate timing:</p>
              </div>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The stopwatch will continue from where you stopped when pressing Start again</li>
                <li>Use the Reset button when you want to start a new timing session</li>
                <li>The stopwatch will continue running even if you switch to other pages within the site</li>
                <li>Your time is automatically saved and will be restored even after closing the browser</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 py-4">
          <p>Developed By EpexAyush</p>
          <p>© 2025 NEET Countdown Timer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Stopwatch;