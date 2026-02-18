import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUpcomingEvents } from "../data/lsomEvents";

export default function LSoMList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother entrance animation
    setTimeout(() => {
      setEvents(getUpcomingEvents());
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
      <section id="events" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((n) => (
              <div key={n} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-300 dark:bg-gray-700" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4" />
                  <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section id="events" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12">
            <div className="w-20 h-20 mx-auto mb-6 text-green-500">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No Upcoming Runs
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Stay tuned! New LSoM runs are being organized. Follow us on social media for updates.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-800 rounded-full mb-4 border border-green-100 dark:border-gray-700">
            🏃‍♂️ Community Runs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Upcoming LSoM Runs
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each run is hosted by a different running group. Pick your favorite and join the community!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((evt, index) => {
            const date = new Date(evt.eventDate);
            const isNext = index === 0;
            const isSecond = index === 1;
            
            return (
              <div
                key={evt.id}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Status Badge - Floating */}
                {(isNext || isSecond) && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${
                      isNext 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                        : 'bg-gray-900/90 text-gray-200 border border-gray-700'
                    }`}>
                      {isNext ? '⚡ NEXT RUN' : '↝ UP NEXT'}
                    </span>
                  </div>
                )}

                {/* Image Container with Modern Overlay */}
                <div className="relative h-72 overflow-hidden">
                  {/* Background Image */}
                  {evt.backgroundImage && (
                    <img
                      src={evt.backgroundImage}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Gradient Overlay - More sophisticated */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    {/* Host Group */}
                    {evt.hostGroup?.title && (
                      <p className="text-green-400 text-sm font-medium mb-2 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Hosted by {evt.hostGroup.title}
                      </p>
                    )}

                    {/* Location Name */}
                    <h3 className="text-3xl md:text-4xl font-black mb-2">
                      {evt.locationName}
                    </h3>

                    {/* Subheading */}
                    {evt.subheading && (
                      <p className="text-yellow-400 text-lg md:text-xl font-medium mb-3">
                        {evt.subheading}
                      </p>
                    )}

                    {/* Date and Place */}
                    <div className="space-y-1 text-gray-200 text-sm">
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {date.toLocaleDateString("en-IN", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {evt.placeName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Modern Design */}
                <div className="p-6 bg-white dark:bg-gray-800">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/event/${evt.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    
                    {evt.registerLink && (
                      <a
                        href={evt.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        {evt.registerText ?? "Register Now"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/events" 
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all"
          >
            <span>View All Events</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}