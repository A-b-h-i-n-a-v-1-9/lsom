export default function HeroMarathon() {
  const REGISTER_LINK = import.meta.env.VITE_REGISTER_LINK;
  const REGISTER_TEXT = import.meta.env.VITE_REGISTER_TEXT;
  const BACKGROUND_IMAGE = import.meta.env.VITE_PUBLIC_BACKGROUND_IMAGE;
  const locationName = import.meta.env.VITE_LOCATION_NAME;
  const PlaceName = import.meta.env.VITE_PLACE_NAME;
  const LOCATION_LINK = import.meta.env.VITE_LOCATION_LINK;
  const EVENT_DATE = import.meta.env.VITE_EVENT_DATE;
  const FLAG_OFF_TIME = import.meta.env.VITE_FLAG_OFF_TIME;

  const eventDate = new Date(EVENT_DATE);
  const eventDay = eventDate.getDate();
  const eventMonth = eventDate
    .toLocaleString("default", { month: "long" })
    .toUpperCase();
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
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Title */}
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            LSOM {eventMonth}
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
              We’re a running community hosting monthly runs across Pune and free
              weekly training sessions. Join us!
            </p>
            <p className="text-yellow-400 font-semibold text-3xl">
              {locationName}
            </p>
          </div>

          {/* CTA + Social */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <a
              href={REGISTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-yellow-500 transition"
            >
              {REGISTER_TEXT}
            </a>

            {/* Social Buttons Side-by-Side */}
            <div className="flex items-center justify-center gap-4 flex-wrap">

              {/* Instagram */}
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

              {/* WhatsApp */}
              {/* <a
                href="https://chat.whatsapp.com/B8mt6baR9WNG2TGbR0IxYB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600/70 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/20 hover:border-green-300 hover:text-green-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.37 0 .09 5.38.09 12a11.9 11.9 0 001.63 6L0 24l6.21-1.63A12.06 12.06 0 0012 24h.01c6.63 0 11.99-5.37 11.99-12a11.78 11.78 0 00-3.48-8.52zM12 21.5h-.01a9.51 9.51 0 01-4.84-1.32l-.35-.21-3.69.97.99-3.6-.23-.37A9.56 9.56 0 012.5 12C2.5 6.76 6.76 2.5 12 2.5a9.48 9.48 0 019.5 9.5c0 5.24-4.26 9.5-9.5 9.5zm5.12-7.36c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.62.14-.19.28-.72.9-.88 1.08-.16.18-.33.2-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.45-.62-.46h-.53c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.03 2.82 1.18 3.02.14.19 2.03 3.1 4.97 4.35.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.11.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.12-.25-.19-.52-.33z" />
                </svg>
                <span className="font-semibold">Join us on WhatsApp</span>
              </a> */}

            </div>
          </div>

          {/* Date Card */}
          <div className="pt-6">
            <div className="inline-flex items-center bg-black/60 backdrop-blur-sm gap-6 px-6 py-4 rounded-lg border border-white/10">
              <div className="text-yellow-400 font-extrabold text-3xl">
                {eventDay}
              </div>
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
