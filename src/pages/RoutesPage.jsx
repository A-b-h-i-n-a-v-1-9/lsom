import React, { useState, useEffect } from "react";

export default function RoutesComingSoon() {
  const [playerDistance, setPlayerDistance] = useState(0);
  const [aiDistance, setAiDistance] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const finishLine = 100;

  const handleClick = () => {
    if (!gameOver) setPlayerDistance((prev) => prev + 1.5);
  };

  const restartGame = () => {
    setPlayerDistance(0);
    setAiDistance(0);
    setGameOver(false);
  };

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setAiDistance((prev) => prev + Math.random() * 2);
    }, 200);
    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    if (playerDistance >= finishLine || aiDistance >= finishLine) {
      setGameOver(true);
    }
  }, [playerDistance, aiDistance]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Routes Coming Soon!
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          While we map the course, beat the AI runner in this mini-game!
        </p>
      </div>

      {/* GAME CARD */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full border border-gray-100 dark:border-gray-700 mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          🏃‍♂️ Race Madness Mini-Game
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
          Tap fast to outrun the AI before reaching the finish line!
        </p>

        {/* TRACK */}
        <div className="relative w-full h-20 sm:h-24 bg-gray-900 rounded-xl border-4 border-yellow-500 mx-auto mb-8 overflow-hidden">
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-red-600"></div>

          <div
            className="absolute top-3 sm:top-4 text-xl sm:text-2xl"
            style={{ left: `${(aiDistance / finishLine) * 100}%` }}
          >
            🤖
          </div>
          <div
            className="absolute bottom-3 sm:bottom-4 text-2xl sm:text-3xl"
            style={{ left: `${(playerDistance / finishLine) * 100}%` }}
          >
            🏃‍♂️
          </div>
        </div>

        {/* BUTTON / STATUS */}
        {!gameOver ? (
          <button
            onClick={handleClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-lg sm:text-xl transition active:scale-95 shadow-lg mb-4"
          >
            Tap to Run!
          </button>
        ) : (
          <div className="font-bold text-base sm:text-lg text-yellow-400 mb-4">
            {playerDistance >= finishLine
              ? "🎉 You Won! 🥇"
              : "😅 AI Won! Try Again!"}
          </div>
        )}

        {gameOver && (
          <button
            onClick={restartGame}
            className="w-full bg-white dark:bg-gray-900 border dark:border-gray-600 text-black dark:text-white font-bold py-2 rounded-lg shadow"
          >
            Restart Race
          </button>
        )}
      </div>

      {/* FOOTER NOTE */}
      <p className="text-gray-500 dark:text-gray-400 text-xs text-center max-w-xs">
        Official marathon routes will be revealed soon. Until then, race, train, and stay hydrated! 💧🏅
      </p>
    </section>
  );
}
