import { useState, useEffect } from 'react';

function Count({ days }) {
  const [timeLeft, setTimeLeft] = useState(days * 24 * 60 * 60); // в секундах

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (24 * 60 * 60));
    const h = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return {
      days: String(d).padStart(2, '0'),
      hours: String(h).padStart(2, '0'),
      minutes: String(m).padStart(2, '0'),
      seconds: String(s).padStart(2, '0'),
    };
  };

  const { days: d, hours: h, minutes: m, seconds: s } = formatTime(timeLeft);

  const renderDigits = (value) =>
    value.split('').map((digit, index) => (
      <span key={index} className="count-digit">{digit}</span>
    ));

  return (
    <div className="count-wrapper">
      <div className="count-section">
        {renderDigits(d)}
        <span className="count-label">{d}</span>
      </div>
      <div className="count-section">
        {renderDigits(h)}
        <span className="count-label">{h}</span>
      </div>
      <div className="count-section">
        {renderDigits(m)}
        <span className="count-label">m</span>
      </div>
      <div className="count-section">
        {renderDigits(s)}
        <span className="count-label">s</span>
      </div>
    </div>
  );
}

export default Count;
