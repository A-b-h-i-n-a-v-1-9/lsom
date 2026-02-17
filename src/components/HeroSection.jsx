function getEventFromEnv() {
  return {
    registerLink: import.meta.env.VITE_REGISTER_LINK,
    registerText: import.meta.env.VITE_REGISTER_TEXT,
    backgroundImage: import.meta.env.VITE_PUBLIC_BACKGROUND_IMAGE,
    locationName: import.meta.env.VITE_LOCATION_NAME,
    placeName: import.meta.env.VITE_PLACE_NAME,
    locationLink: import.meta.env.VITE_LOCATION_LINK,
    eventDate: import.meta.env.VITE_EVENT_DATE,
    flagOffTime: import.meta.env.VITE_FLAG_OFF_TIME,
  };
}

export default function HeroSection({ event: eventProp }) {
  const event = eventProp ?? getEventFromEnv();
  const REGISTER_LINK = event?.registerLink;
  const REGISTER_TEXT = event?.registerText ?? "Register Now";
  const BACKGROUND_IMAGE = event?.backgroundImage;
  const locationName = event?.locationName;
  const PlaceName = event?.placeName;
  const LOCATION_LINK = event?.locationLink;
  const EVENT_DATE = event?.eventDate;
  const FLAG_OFF_TIME = event?.flagOffTime;

  if (!EVENT_DATE || !locationName) return null;

  const eventDate = new Date(EVENT_DATE);
  const eventDay = eventDate.getDate();
  const eventMonth = eventDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();
  const eventYear = eventDate.getFullYear();

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* 1st bg: image provided by the running group */}
      {BACKGROUND_IMAGE && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${BACKGROUND_IMAGE}')`,
            backgroundAttachment: "fixed",
          }}
        />
      )}

      {/* 2nd bg: dark only in center (narrow band); left & right show image as-is */}
      <div
        className="absolute inset-y-0 left-[20%] right-[20%] bg-black/90"
        aria-hidden
      />

      {/* Hero Content on top of the central dark patch */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Title */}
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            LSOM {eventMonth}
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
              We're a running community hosting monthly runs across Pune and free
              weekly training sessions. Join us!
            </p>
            <p className="text-yellow-400 font-semibold text-3xl">
              {locationName}
            </p>
            {event?.subheading && (
              <p className="text-yellow-400/95 text-xl md:text-2xl font-medium">
                {event.subheading}
              </p>
            )}
          </div>

          {/* CTA + Social */}
          <div className="flex flex-col items-center gap-4 pt-4">
            {REGISTER_LINK ? (
              <a
                href={REGISTER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-yellow-500 transition"
              >
                {REGISTER_TEXT}
              </a>
            ) : (
              <div className="bg-gray-600 text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg">
                Registration not yet open
              </div>
            )}

            {/* Social Buttons Side-by-Side */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/pashanrunning?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/20 hover:border-pink-500 hover:text-pink-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
                </svg>
                <span className="font-semibold">Follow us on Instagram</span>
              </a>
            </div>
          </div>

          {/* Date Card */}
          <div className="pt-6">
            <div className="inline-flex items-center bg-black/60 backdrop-blur-sm gap-6 px-6 py-4 rounded-lg border border-white/10">
              <div className="text-yellow-400 font-extrabold text-3xl">
                {eventDay}
              </div>
              <div className="text-left border-l border-white/20 pl-4">
                <div className="text-yellow-400 text-lg font-medium">
                  {eventMonth} {eventYear}
                </div>
                <div className="text-yellow-400 text-sm">
                  FLAG-OFF: {FLAG_OFF_TIME} @{" "}
                  {LOCATION_LINK && PlaceName ? (
                    <a
                      href={LOCATION_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-yellow-300 transition"
                    >
                      {PlaceName}
                    </a>
                  ) : (
                    PlaceName
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
