import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const comebackDate = new Date('2026-03-20T04:00:00Z');
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = comebackDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
      {timeUnits.map((unit, index) => (
        <motion.div key={unit.label} className="flex flex-col items-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + index * 0.1 }}>
          <div className="countdown-digit rounded-xl p-4 sm:p-5 md:p-6 min-w-[70px] sm:min-w-[90px] md:min-w-[110px] border border-border/50">
            <span className="font-oswald text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bts-red block text-center">{String(unit.value).padStart(2, '0')}</span>
          </div>
          <span className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-medium">{unit.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Countdown;