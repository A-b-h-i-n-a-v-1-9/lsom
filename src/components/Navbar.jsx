import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const REGISTER_LINK = import.meta.env.VITE_REGISTER_LINK ?? "#";
  const REGISTER_TEXT = import.meta.env.VITE_REGISTER_TEXT ?? "Register Now";

  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home","hosts", "about", "race", "gallery", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "hosts", label: "Host" },
    { id: "race", label: "Race Details" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md py-1.5"
          : "bg-white/80 backdrop-blur-md py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ minHeight: 48 }}>
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*kJ4JWcvolvoNTG0vhmOWTw.png"
              alt="LSoM Run Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              LSoM<span className="text-green-600"> Run</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-5 font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative px-1 py-1 transition-colors text-sm ${
                      activeLink === link.id
                        ? "text-green-600 font-semibold"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                    {activeLink === link.id && (
                      <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-green-500 rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={REGISTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-1"
            >
              {REGISTER_TEXT}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-3 pb-5 bg-white shadow-lg rounded-b-lg">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                    activeLink === link.id
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={REGISTER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
