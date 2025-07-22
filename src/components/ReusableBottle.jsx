import { FaRecycle, FaWater } from "react-icons/fa";

export default function ReusableBottle() {
  return (
    <section className="relative overflow-hidden py-16 px-6 bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900 dark:to-green-800">
      {/* Animated Water Wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <div
          className="absolute -bottom-10 w-full h-24 bg-blue-400 opacity-25 animate-wave"
          style={{ borderRadius: '50%' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
        {/* Icon Section */}
        <div className="relative flex-shrink-0">
          <FaRecycle className="text-6xl text-green-700 dark:text-green-300" />
          <FaWater className="absolute -top-2 -right-2 text-blue-500 text-2xl animate-bounce" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-green-900 dark:text-green-100 mb-4">
            Hydration Stations 💧
          </h2>
          <p className="text-green-800 dark:text-green-200 text-lg mb-6 leading-relaxed">
            We're going plastic-free! Refill stations will be located every 2km along the race route. Bring your reusable bottles and join the movement.
          </p>

          {/* Highlight Tags */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {['Reduce', 'Reuse', 'Recycle', 'Run'].map((word, i) => (
              <span
                key={i}
                className="px-4 py-1.5 bg-white dark:bg-green-700/40 text-green-900 dark:text-green-100 rounded-full text-sm font-medium shadow-md transition duration-200 hover:bg-green-50 dark:hover:bg-green-600/60"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
