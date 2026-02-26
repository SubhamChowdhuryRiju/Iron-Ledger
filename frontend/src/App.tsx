import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Payments from "./pages/Payments";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";
import Expenditure from "./pages/Expenditure";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/expenditure" element={<Expenditure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
