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
    <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-2 sm:p-3 border border-gray-800 text-white">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="text-base sm:text-lg font-bold">{formatDigitalTime(time)}</div>
        <div className="text-xs sm:text-sm text-gray-300">{formatTimeText(time)}</div>
      </div>
    </div>
  );
}

export default RealTimeClock;