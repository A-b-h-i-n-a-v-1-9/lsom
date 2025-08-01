import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RaceSchedule from "../components/RaceSchedule";
import InfoSection from "../components/InfoSection";
import ReusableBottle from "../components/ReusableBottle";
import Gallery from "../components/Gallery";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import HostGroupSection from "../components/HostGroupSection"; // ✅ fixed path

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const scrollHintTimer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);

    const handleScroll = () => {
      setShowScrollHint(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollHintTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <div className="relative">
        <Navbar />

        <main className="mt-[72px]">
          <div id="home">
            <HeroSection />
          </div>

          <div id="hosts">
            <HostGroupSection /> {/* ✅ New section added here */}
          </div>

          <div id="race">
            <RaceSchedule />
          </div>

          <div id="about">
            <InfoSection />
          </div>

          <div id="gallery">
            <Gallery />
          </div>

          <ReusableBottle />
        </main>

        <div id="contact">
          <Footer />

          {/* Scroll hint animation */}
          {showScrollHint && (
            <div className="fixed bottom-8 right-8 z-50 animate-bounce">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
