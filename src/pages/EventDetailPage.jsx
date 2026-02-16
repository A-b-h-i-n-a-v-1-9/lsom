import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HostGroupSection from "../components/HostGroupSection";
import RaceSchedule from "../components/RaceSchedule";
import Footer from "../components/Footer";
import { getEventById } from "../data/lsomEvents";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = getEventById(id);

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="mt-[72px] min-h-[60vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Event not found
          </h1>
          <Link
            to="/"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            ← Back to upcoming runs
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mt-[72px]">
        <div className="mb-4 px-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Upcoming runs
          </Link>
        </div>
        <div id="home">
          <HeroSection event={event} />
        </div>
        <div id="hosts">
          <HostGroupSection event={event} />
        </div>
        <div id="race">
          <RaceSchedule event={event} />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
