import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/RoutesPage";  // Import your RoutesPage

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RoutesPage" element={<RoutesPage />} />

      </Routes>
    </Router>
  );
}
