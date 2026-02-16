import { useState, useEffect } from "react";
import { racesTemplate } from "../data/lsomEvents";

function getEventFromEnv() {
  return {
    eventDate: import.meta.env.VITE_EVENT_DATE,
    registerLink: import.meta.env.VITE_REGISTER_LINK,
    registerText: import.meta.env.VITE_REGISTER_TEXT,
    raceDirectorName: import.meta.env.VITE_RACE_DIRECTOR_NAME,
    raceDirectorPhone: import.meta.env.VITE_RACE_DIRECTOR_PHONE,
    routeMapLink: "https://maps.app.goo.gl/zgogsm3noMcSPFLLA",
    startTimes: {
      "15 Km ": import.meta.env.VITE_START_TIME_15K || "06:00",
      "10 Km ": import.meta.env.VITE_START_TIME_10K || "06:15",
      "5 Km Fun Run": import.meta.env.VITE_START_TIME_5K || "06:30",
      "3 Km Walk": import.meta.env.VITE_START_TIME_3K || "06:45",
    },
  };
}

export default function RaceSchedule({ event: eventProp }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const event = eventProp ?? getEventFromEnv();
  const REGISTER_LINK = event?.registerLink;
  const REGISTER_TEXT = event?.registerText ?? "Register Now";
  const EVENT_DATE = event?.eventDate;
  const RACE_DIRECTOR_NAME = event?.raceDirectorName;
  const RACE_DIRECTOR_PHONE = event?.raceDirectorPhone;
  const routeMapLink = event?.routeMapLink;
  const raceStartTimes = event?.startTimes ?? {};

  const races = racesTemplate.filter((r) => raceStartTimes[r.distance] != null);

  if (!EVENT_DATE) return null;

  const targetDate = new Date(EVENT_DATE);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="schedule"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-700 rounded-full mb-4">
            Upcoming Event
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Race Day Schedule
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mark your calendar for our next community run
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
            Next Run:{" "}
            <span className="text-green-600">
              {targetDate.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </span>
          </h3>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-[9px] uppercase text-gray-500 dark:text-gray-400 mt-1">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Start Times
              </h3>

              <ul className="space-y-6">
                {races.map((race, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={`mt-1 w-3 h-3 ${race.color} rounded-full flex-shrink-0`}
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {race.distance}{" "}
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          ({race.level})
                        </span>
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300">
                        Flag off at{" "}
                        <span className="font-semibold">
                          {raceStartTimes[race.distance]}
                        </span>{" "}
                        AM
                      </p>

                      {routeMapLink && (
                        <a
                          href={routeMapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:underline mt-1"
                        >
                          View running route
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-700/30">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Registration
              </h3>

              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">
                    Nominal Fee: ₹200
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Includes bib, refreshments, and route support. No refunds for missed runs.
                  </p>
                </div>

                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">✔ Mandatory for all participants</li>
                  <li className="flex items-start">✔ Collect bib 1 hour before your race</li>
                  <li className="flex items-start">✔ Bring your own water bottle</li>
                </ul>

                {REGISTER_LINK && (
                  <a
                    href={REGISTER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
                  >
                    {REGISTER_TEXT}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                )}

                {RACE_DIRECTOR_NAME && RACE_DIRECTOR_PHONE && (
                  <div className="text-sm text-gray-700 dark:text-gray-300 mt-6">
                    For any questions, contact:{" "}
                    <span className="font-semibold">{RACE_DIRECTOR_NAME}</span>{" "}
                    at{" "}
                    <a
                      href={`tel:${RACE_DIRECTOR_PHONE}`}
                      className="text-green-600 dark:text-green-400 underline"
                    >
                      {RACE_DIRECTOR_PHONE}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
