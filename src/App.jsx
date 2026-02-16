import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/RoutesPage";
import EventDetailPage from "./pages/EventDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/RoutesPage" element={<RoutesPage />} />
      </Routes>
    </Router>
  );
}