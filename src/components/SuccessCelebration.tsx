
import React, { useEffect } from "react";

const COLORS = [
  "#9b87f5", "#D6BCFA", "#D3E4FD", "#1EAEDB", "#fff",
  "#FFD700", "#00ffa3", "#ff5757", "#87d3f8"
];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

type Light = {
  left: string;
  duration: string;
  size: string;
  color: string;
  delay: string;
};

function createLights(num: number): Light[] {
  return Array.from({ length: num }).map(() => ({
    left: `${randomInt(0, 90)}vw`,
    duration: `${randomInt(900, 1800)}ms`,
    size: `${randomInt(8, 18)}px`,
    color: COLORS[randomInt(0, COLORS.length)],
    delay: `${randomInt(0, 600)}ms`
  }));
}

const lights = createLights(22);

export const SuccessCelebration: React.FC<{ dismiss: () => void }> = ({ dismiss }) => {
  useEffect(() => {
    const timer = setTimeout(dismiss, 2700);
    return () => clearTimeout(timer);
  }, [dismiss]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lights.map((light, i) => (
          <span
            key={i}
            style={{
              left: light.left,
              animationDuration: light.duration,
              width: light.size,
              height: light.size,
              background: light.color,
              animationDelay: light.delay,
              filter: "blur(0.5px)"
            }}
            className="absolute top-0 rounded-full opacity-80 animate-[fall_1.4s_linear_forwards]"
          />
        ))}
      </div>
      {/* Congratulatory Message */}
      <div className="relative z-20 flex flex-col items-center gap-2 animate-scale-in">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-400 text-white px-8 py-6 rounded-xl shadow-xl border-4 border-white/90 flex flex-col items-center">
          <svg width="48" height="48" className="mb-2 animate-pulse" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#9b87f5" />
            <path d="M17 9l-5 5-2-2" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-2xl font-bold mb-1 drop-shadow">Congratulations!</h2>
          <div className="text-base font-medium">
            Your application has been submitted 🎉
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes fall {
          0% { top: -20px; opacity: 0.9; }
          80% { opacity: 0.95; }
          100% { top: 95vh; opacity: 0.15; }
        }
        `}
      </style>
    </div>
  );
};

export default SuccessCelebration;
