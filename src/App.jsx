import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/RoutesPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 
          Homepage handles all hash fragments (#home, #about, etc.)
          - `path="/*"` allows nested hash navigation inside Home
        */}
        <Route path="/*" element={<Home />} />

        {/* Separate page (accessible via /#/RoutesPage) */}
        <Route path="/RoutesPage" element={<RoutesPage />} />
      </Routes>
    </Router>
  );
}