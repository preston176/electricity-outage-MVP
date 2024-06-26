import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ReportOutage from "./pages/ReportOutage"
import NavBar from "./Components/NavBar"
import { useEffect } from "react"
import { useState } from "react"
import OutageList from "./pages/OutageList"
import AboutUs from "./pages/AboutUs"
const App = () => {

  const [outages, setOutages] = useState([]);

  const API_URL = 'https://electricity-outage-mvp-server.onrender.com'

  // 'http://localhost:3000'

  const fetchOutages = async () => {
    const response = await fetch(`${API_URL}/outages`);
    const data = await response.json();
    setOutages(data);
  };

  useEffect(() => {
    fetchOutages();

  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/report" element={<ReportOutage fetchOutages={fetchOutages} />} />
        {/* outagelist */}
        <Route path="/outages" element={<OutageList outages={outages} setOutages={setOutages} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App