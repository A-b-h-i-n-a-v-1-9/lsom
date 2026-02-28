import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useParams } from "react-router-dom";
import { MapPin, Calendar, Phone, Clock } from "lucide-react";
import { lsomEvents } from "../data/lsomEvents";

export default function RegistrationClosed() {
  const { id } = useParams();
  const event = lsomEvents.find((e) => e.id === id);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (!event) return;

    // Subtle premium confetti
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });

    const interval = setInterval(() => {
      const diff =
        new Date(event.eventDate).getTime() - new Date().getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [event]);

  if (!event) return <div className="p-10">Event not found</div>;

  // ✅ Get earliest race start time properly
  const startTimesArray = Object.values(event.startTimes);

  const parsedTimes = startTimesArray.map((time) => {
    const [hour, minute] = time.split(":").map(Number);
    return { hour, minute };
  });

  // Sort times to find earliest
  parsedTimes.sort((a, b) => a.hour - b.hour);

  const earliest = parsedTimes[0];

  // Calculate offline start (1 hour before earliest race)
  let offlineHour = earliest.hour - 1;
  if (offlineHour <= 0) offlineHour = 12;

  const formatTime = (hour, minute) =>
    `${hour}:${minute.toString().padStart(2, "0")} AM`;

  const offlineStartTime = formatTime(offlineHour, earliest.minute);
  const raceStartTime = formatTime(earliest.hour, earliest.minute);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background */}
      <img
        src={event.backgroundImage}
        alt="Marathon"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-orange-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* HERO */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          Online Registration
          <span className="block text-orange-500 mt-2">
            Closed
          </span>
        </motion.h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Thank you for the incredible response.
          Offline registration is still available at the venue.
        </p>

        {/* Countdown */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center"
            >
              <div className="text-4xl font-bold">
                {timeLeft[unit] || 0}
              </div>
              <div className="uppercase text-sm text-gray-400 mt-2">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* OFFLINE DETAILS */}
        <div className="mt-16 bg-white text-black rounded-3xl p-10 shadow-2xl">

          <h2 className="text-3xl font-bold text-orange-600 mb-6">
            Offline Registration Window
          </h2>

          <p className="text-lg font-medium mb-6">
            Offline registration opens at{" "}
            <span className="text-orange-600 font-semibold">
              {offlineStartTime}
            </span>{" "}
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <a
                  href={event.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-orange-600"
                >
                  {event.placeName}
                </a>
              </div>

              <div className="flex items-center gap-3">
  <Calendar size={20} />
  {(() => {
    const date = new Date(event.eventDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  })()}
</div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                {event.raceDirectorName} —{" "}
                <span className="font-semibold text-orange-600">
                  {event.raceDirectorPhone}
                </span>
              </div>
            </div>

            {/* Race Schedule */}
            <div>
              <h3 className="flex items-center gap-2 font-semibold mb-4">
                <Clock size={18} /> Race Schedule
              </h3>

              <div className="space-y-3">
                {Object.entries(event.startTimes).map(
                  ([race, time]) => (
                    <div
                      key={race}
                      className="flex justify-between bg-orange-50 p-3 rounded-xl"
                    >
                      <span>{race.trim()}</span>
                      <span className="font-semibold">
                        {time} AM
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}