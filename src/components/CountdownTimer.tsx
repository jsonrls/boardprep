import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

// TODO: Update TARGET_DATE to the actual VLE exam date
const TARGET_DATE = new Date("2026-06-22T00:00:00+08:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex items-center justify-center gap-1.5 text-black rounded-xl border border-primary/20 bg-primary/5 px-3 py-2"
    >
      <span className="text-[10px] text-black">Registration closes in</span>
      <span className="font-mono text-[11px] font-semibold tabular-nums text-black">
        {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m{" "}
        {pad(timeLeft.seconds)}s
      </span>
    </div>
  );
}
