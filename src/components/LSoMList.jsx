import { Link } from "react-router-dom";
import { getUpcomingEvents } from "../data/lsomEvents";

export default function LSoMList() {
  const events = getUpcomingEvents();

  if (events.length === 0) {
    return (
      <section id="events" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming LSoM Runs
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            No upcoming events at the moment. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-700 rounded-full mb-4">
            Community Runs
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming LSoM Runs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each run is hosted by a different running group. Pick one to see details and register.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((evt, index) => {
            const date = new Date(evt.eventDate);
            const isNext = index === 0;
            return (
              <div
                key={evt.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                {/* Image Background with Text Overlay */}
                <div className="relative h-64 overflow-hidden">
                  {evt.backgroundImage && (
                    <img
                      src={evt.backgroundImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Dark overlay gradient in center for text readability (the "dark spot") */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60" />
                  
                  {/* Text Overlay - positioned in the center dark area */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                    {isNext && (
                      <span className="inline-block px-3 py-0.5 text-xs font-semibold text-green-400 bg-black/40 backdrop-blur-sm rounded-full mb-3">
                        Next
                      </span>
                    )}
                    {index === 1 && (
                      <span className="inline-block px-3 py-0.5 text-xs font-semibold text-gray-300 bg-black/40 backdrop-blur-sm rounded-full mb-3">
                        Next&apos;s next
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-0.5">
                      {evt.locationName}
                    </h3>
                    {evt.subheading && (
                      <p className="text-yellow-400/95 text-lg md:text-xl font-medium mb-2">
                        {evt.subheading}
                      </p>
                    )}
                    <p className="text-yellow-400 text-sm md:text-base mb-1 font-medium">
                      {date.toLocaleDateString("en-IN", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-yellow-400/90 text-xs md:text-sm mb-2">
                      {evt.placeName}
                    </p>
                    {evt.hostGroup?.title && (
                      <p className="text-green-400 text-xs md:text-sm font-medium">
                        {evt.hostGroup.title}
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/event/${evt.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition flex-1 justify-center"
                    >
                      View details
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    {evt.registerLink && (
                      <a
                        href={evt.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition flex-1 justify-center"
                      >
                        {evt.registerText ?? "Register"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
