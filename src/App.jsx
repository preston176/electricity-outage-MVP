import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ReportOutage from "./pages/ReportOutage"
import NavBar from "./Components/NavBar"
import { useEffect } from "react"
import { useState } from "react"
import OutageList from "./pages/OutageList"
const App = () => {

  const [outages, setOutages] = useState([]);

  const fetchOutages = async () => {
    const response = await fetch('http://localhost:3000/outages');
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
        <Route path="*" element={<>Page Not Found</>} />
        <Route path="/report" element={<ReportOutage fetchOutages={fetchOutages} />} />
        {/* outagelist */}
        <Route path="/outages" element={<OutageList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App