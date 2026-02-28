import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/RoutesPage";
import EventDetailPage from "./pages/EventDetailPage";
import RegistrationClosed from "./pages/RegistrationClosed";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* More specific route FIRST */}
        <Route path="/event/:id/closed" element={<RegistrationClosed />} />

        {/* Then normal event page */}
        <Route path="/event/:id" element={<EventDetailPage />} />

        <Route path="/RoutesPage" element={<RoutesPage />} />

        {/* Optional 404 fallback (LAST) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}