'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

export function useCountdown(targetDate: string): TimeLeft {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    const absDifference = Math.abs(difference);

    return {
      days: Math.floor(absDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((absDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((absDifference / 1000 / 60) % 60),
      seconds: Math.floor((absDifference / 1000) % 60),
      total: difference // Keep original sign to know if it's before or after launch
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
