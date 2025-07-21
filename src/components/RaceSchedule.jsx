import { useState, useEffect } from "react";

export default function RaceSchedule() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate next LSoM date (last Sunday of current month)
  const calculateNextRaceDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // Find last day of month
    const lastDay = new Date(year, month + 1, 0);
    let lastSunday = new Date(lastDay);
    
    // Adjust to last Sunday
    lastSunday.setDate(lastDay.getDate() - lastDay.getDay());
    
    // If we've passed it this month, get next month's last Sunday
    if (lastSunday < now) {
      const nextMonth = new Date(year, month + 1, 1);
      const nextMonthLastDay = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
      lastSunday = new Date(nextMonthLastDay);
      lastSunday.setDate(nextMonthLastDay.getDate() - nextMonthLastDay.getDay());
    }
    
    return lastSunday;
  };

  useEffect(() => {
    const targetDate = calculateNextRaceDate();
    
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
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const races = [
    { distance: "15 Km Trail", time: "5:45 AM", color: "bg-red-500", level: "Advanced" },
    { distance: "10 Km Road", time: "5:45 AM", color: "bg-blue-500", level: "Intermediate" },
    { distance: "5 Km Fun Run", time: "6:15 AM", color: "bg-yellow-500", level: "Beginner" },
    { distance: "3 Km Walk", time: "6:15 AM", color: "bg-green-500", level: "All Levels" }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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

        {/* Countdown Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
            Next Run: <span className="text-green-600">{calculateNextRaceDate().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
          </h3>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase text-gray-500 dark:text-gray-400 mt-1">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Race Schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {/* Race Times */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start Times
              </h3>
              
              <ul className="space-y-6">
                {races.map((race, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`mt-1 w-3 h-3 ${race.color} rounded-full flex-shrink-0`}></div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {race.distance} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({race.level})</span>
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Flag off at <span className="font-semibold">{race.time}</span>
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:underline mt-1"
                      >
                        View route map
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Registration */}
            <div className="p-8 bg-gray-50 dark:bg-gray-700/30">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Registration
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Nominal Fee: ₹200</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Includes bib, refreshments, and route support. No refunds for missed runs.
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mandatory for all participants
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bib pickup starts at 5:00 AM
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bring your own water bottle
                  </li>
                </ul>
                
                <a
                  href="https://konfhub.com/bg-lsom#tickets"
                  className="inline-flex items-center justify-center w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl mt-6"
                >
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}