import React, { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [inputMinutes, setInputMinutes] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(inputMinutes * 60);
    }
    setIsRunning(true);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(0);
  };

  const formatTime = (total) => {
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return [mins, secs]
      .map((unit) => unit.toString().padStart(2, "0"))
      .join(":");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 w-[420px] text-center">

        {/* Input */}
        <input
          type="number"
          min="1"
          disabled={isRunning}
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Number(e.target.value))}
          className="mb-8 w-full text-center bg-transparent border border-white/20 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="Minutes"
        />

        {/* Timer Display */}
        <h1 className="text-6xl font-extralight tracking-widest mb-10">
          {formatTime(timeLeft)}
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/30"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(false)}
              className="px-6 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600 transition-all duration-200 shadow-lg shadow-yellow-500/30"
            >
              Pause
            </button>
          )}

          <button
            onClick={resetTimer}
            className="px-6 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-200 shadow-lg shadow-red-500/30"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}
