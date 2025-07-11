import { useState, useEffect } from 'react';

export const useCountdown = (initialMinutes = 30, initialSeconds = 0) => {
  const [countdown, setCountdown] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 30, seconds: 0 }; // Reset to 30 minutes
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return countdown;
};
