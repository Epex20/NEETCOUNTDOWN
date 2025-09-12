import React, { useState, useEffect } from 'react';

function RealTimeClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeText = (date: Date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
    return formatter.format(date);
  };

  const formatDigitalTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-3 border border-gray-800 text-white max-w-full">
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
        <div className="text-sm sm:text-base lg:text-lg font-bold whitespace-nowrap">{formatDigitalTime(time)}</div>
        <div className="text-xs sm:text-sm text-gray-300 truncate max-w-[200px] sm:max-w-none">{formatTimeText(time)}</div>
      </div>
    </div>
  );
}

export default RealTimeClock;