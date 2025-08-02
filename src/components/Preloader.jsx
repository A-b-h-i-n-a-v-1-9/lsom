import { useEffect, useState } from 'react';

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [progress, setProgress] = useState(0);
  const taglines = [
    "Every mile begins with a single step...",
    "Preparing your running journey...",
    "Great runs start with great preparation...",
    "Building your endurance...",
    "Champions are made during preparation...",
    "The miracle isn't that you finished, but that you had the courage to start...",
    "Running is alone time that lets your brain unspool...",
    "You're stronger than you think...",
    "The body achieves what the mind believes...",
    "Pain is temporary, pride is forever..."
  ];
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);

  // Simulate progress up to 90%
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Update tagline whenever progress changes
  useEffect(() => {
    const idx = Math.floor(progress / 10) % taglines.length;
    setCurrentTagline(taglines[idx]);
  }, [progress]);

  // Real load event: jump to 100% and hide
  useEffect(() => {
    const onLoad = () => {
      setProgress(100);
      setTimeout(() => setShowPreloader(false), 500);
    };

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  if (!showPreloader) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 transition-opacity duration-500">
      {/* Progress bar */}
      <div className="w-full max-w-xs space-y-2">
        <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Tagline */}
      <div className="max-w-md px-6 text-center">
        <p className="text-xl font-medium text-gray-800 animate-pulse">
          {currentTagline}
        </p>
      </div>

      {/* Animated Icon */}
      <div className="mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-600 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </div>
    </div>
  );
}
