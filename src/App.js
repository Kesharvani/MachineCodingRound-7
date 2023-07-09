import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Continent } from "./pages/continent/Continent";
import { Country } from "./pages/country/Country";
import { Destinations } from "./pages/destinations/Destinations";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Continent />} />
      <Route path="/continent/:continentId" element={<Country />} />
      <Route path="/country/:countryId" element={<Destinations />} />
      <Route path="/destination/:destinationId" element={<Destinations />} />
    </Routes>
  );
}
