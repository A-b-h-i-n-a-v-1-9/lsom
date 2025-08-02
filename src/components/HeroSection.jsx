export default function HeroMarathon() {
  const REGISTER_LINK = import.meta.env.VITE_REGISTER_LINK;
  const BACKGROUND_IMAGE = import.meta.env.VITE_PUBLIC_BACKGROUND_IMAGE;
  const locationName = import.meta.env.VITE_LOCATION_NAME;
  const PlaceName = import.meta.env.VITE_PLACE_NAME;
  const LOCATION_LINK = import.meta.env.VITE_LOCATION_LINK;
  const EVENT_DATE = import.meta.env.VITE_EVENT_DATE;
  const FLAG_OFF_TIME = import.meta.env.VITE_FLAG_OFF_TIME;

  const eventDate = new Date(EVENT_DATE);
  const eventDay = eventDate.getDate();
  const eventMonth = eventDate.toLocaleString('default', { month: 'long' }).toUpperCase();
  const eventYear = eventDate.getFullYear();

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE}')`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-5xl w-full">
          {/* Title */}
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="block">LSOM {eventMonth}</span>
            <span className="text-yellow-400">MARATHON</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
           Take on Pune’s thrilling city routes with 15k, 10k, 5k & 3k runs built for every pace @{" "}
            <span className="text-yellow-400 font-semibold">{locationName}</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={REGISTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-yellow-500 transition"
            >
              Register Now
            </a>

            {/* <a
              href="./RoutesPage"
              className="border border-white text-white px-8 py-4 rounded-full text-lg hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Explore Routes
            </a> */}
          </div>

          {/* Date Card */}
          <div className="inline-flex items-center bg-black/60 backdrop-blur-sm gap-6 px-6 py-4 rounded-lg border border-white/10">
            <div className="text-yellow-400 font-extrabold text-3xl">{eventDay}</div>
            <div className="text-left border-l border-white/20 pl-4">
              <div className="text-white text-lg font-medium">
                {eventMonth} {eventYear}
              </div>
              <div className="text-gray-300 text-sm">
                FLAG-OFF: {FLAG_OFF_TIME} @{" "}
                <a
                  href={LOCATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-yellow-400 transition"
                >
                  {PlaceName}
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
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
