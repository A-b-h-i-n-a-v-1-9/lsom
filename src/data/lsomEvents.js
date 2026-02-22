/**
 * LSoM events data.
 * Each event can have different host group, format, timings, date, and venue.
 * Add new events here; sort by eventDate for "next" / "next's next".
 *
 * Schema (per event):
 * - id: string (unique slug for routing, e.g. "pashan-2026-03")
 * - locationName: string
 * - subheading: string (optional, e.g. "5th Edition", shown on second line below title)
 * - placeName: string
 * - locationLink: string (maps URL)
 * - eventDate: string (ISO datetime)
 * - flagOffTime: string (e.g. "6:00 A.M.")
 * - registerLink: string
 * - registerText: string (default "Register Now")
 * - backgroundImage: string (path)
 * - startTimes: { "15 Km ": "6:00", "10 Km ": "6:15", ... } (keys must match races[].distance)
 * - routeMapLink: string (optional, fallback for all routes)
 * - routeMapLinks: { "15 Km ": "url1", "10 Km ": "url2", ... } (optional, per-route map links)
 * - raceDirectorName, raceDirectorPhone: string (optional)
 * - assistantRaceDirectorName, assistantRaceDirectorPhone: string (optional)
 * - hostGroup: { title, image, desc1, desc2, quote } (optional)
 */

const DEFAULT_RACES = [
  { distance: "15 Km ", level: "Advanced", color: "bg-red-500" },
  { distance: "10 Km ", level: "Intermediate", color: "bg-blue-500" },
  { distance: "5 Km Fun Run", level: "Beginner", color: "bg-yellow-500" },
  { distance: "3 Km Walk", level: "All Levels", color: "bg-green-500" },
];

export const racesTemplate = DEFAULT_RACES;

export const lsomEvents = [
  {
    id: "pashan-2026-03",
    locationName: "Pashan LSOM",
    placeName: "NCL Cricket Ground",
    locationLink: "https://maps.app.goo.gl/TFgCGPTJYugVSRBL9",
    eventDate: "2026-03-01T06:00:00",
    flagOffTime: "6:00 A.M.",
    registerLink: "https://konfhub.com/pashanlsom2026",
    registerText: "Register Now",
    backgroundImage: "/assets/Pashan_LSoM_Image_2026_2.jpeg",

    startTimes: {
      "15 Km ": "6:00",
      "10 Km ": "6:30",
      "5 Km Fun Run": "7:00",
      "3 Km Walk": "7:00",
    },

    // Fallback map (if specific not found)
    routeMapLink: "https://maps.app.goo.gl/zgogsm3noMcSPFLLA",

    routeMapLinks: {
      "15 Km ": "https://www.plotaroute.com/route/3227693?units=km",
      "10 Km ": "https://www.plotaroute.com/route/3227710?units=km",
      "5 Km Fun Run": "https://www.plotaroute.com/route/3227708?units=km",
      "3 Km Walk": "https://www.plotaroute.com/route/3227698?units=km",
    },

    raceDirectorName: "Bhupendra Bahadur Singh",
    raceDirectorPhone: "+919236165030",

    hostGroup: {
      title: "Host - Pashan Running Group",
      image: "assets/Pashan_LSoM_Image_2026_2.jpeg",
      desc1:
        "Pashan Running Group is a passionate community of runners dedicated to building endurance, discipline, and a healthy lifestyle through regular group runs.",
      desc2:
        "Our weekly runs are designed for beginners to experienced runners, focusing on stamina, pace improvement, and consistency. Everyone is welcome to run, learn, and grow together.",
      quote:
        "Run strong with Pashan Running Group and stay motivated every step of the way. To join us, please contact the group coordinator.",
    },
  },

  {
    id: "ncrunners-2026-03",
    locationName: "Nanded City LSoM",
    subheading: "5th Edition",
    placeName: "Kridangan, Nanded City",
    locationLink: "https://maps.app.goo.gl/iSsFL27UaYctUUpN8",
    eventDate: "2026-03-29T05:30:00",
    flagOffTime: "5:45 A.M.",
    registerLink: "",
    registerText: "Register Now",
    backgroundImage: "assets/ncrunnersBg.jpeg",

    startTimes: {
      "15 Km ": "5:45",
      "10 Km ": "6:15",
      "5 Km Fun Run": "6:30",
      "3 Km Walk": "6:45",
    },

    routeMapLink: "",

    routeMapLinks: {
      "15 Km ": "https://www.plotaroute.com/route/2889597",
      "10 Km ": "https://www.plotaroute.com/route/2889720",
      "5 Km Fun Run": "https://www.plotaroute.com/route/2889731",
      "3 Km Walk": "https://www.plotaroute.com/route/2889737",
    },

    raceDirectorName: "Shri Swapnil Nandgaonkar",
    raceDirectorPhone: "9371781809",
    assistantRaceDirectorName: "Smt Pooja Gogave",
    assistantRaceDirectorPhone: "9604639425",

    hostGroup: {
      title: "Host - NCRunners",
      image: "assets/ncrunners.jpeg",
      desc1:
        "NCRunners is a dynamic community of over 250+ runners in and around Nanded City, Pune, established in 2016.",
      desc2:
        "Dedicated to health and well-being, we offer free weekly sessions in strength training (ST), running, cycling, swimming, trekking, and yoga. Additionally, we provide comprehensive 4-6 month training schedules for members preparing for major marathons, triathlons, and swimathons.",
      quote:
        "The community is driven by volunteers who organize all activities at no cost emphasizing our commitment to promoting sports and well-being. Visit https://ncrunners.in for more details",
    },
  },
];

/** Upcoming events only, sorted by date (next first) */
export function getUpcomingEvents() {
  const now = new Date();
  return [...lsomEvents]
    .filter((e) => new Date(e.eventDate) >= now)
    .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
}

/** Next single event (soonest upcoming), or null */
export function getNextEvent() {
  const upcoming = getUpcomingEvents();
  return upcoming[0] ?? null;
}

/** Get event by id */
export function getEventById(id) {
  return lsomEvents.find((e) => e.id === id) ?? null;
}
