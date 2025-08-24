import { useEffect, useState } from "react";

interface CountdownTimerProps {
  hours?: number;
}

export const CountdownTimer = ({ hours = 24 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer finished
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center justify-center gap-4 bg-urgent text-urgent-foreground px-6 py-4 rounded-xl font-bold shadow-lg">
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-black">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-xs uppercase tracking-wide">
          Horas
        </div>
      </div>
      <div className="text-2xl animate-pulse">:</div>
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-black">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs uppercase tracking-wide">
          Min
        </div>
      </div>
      <div className="text-2xl animate-pulse">:</div>
      <div className="flex flex-col items-center">
        <div className="text-2xl md:text-3xl font-black">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs uppercase tracking-wide">
          Seg
        </div>
      </div>
    </div>
  );
};