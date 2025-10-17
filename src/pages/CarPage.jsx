// src/pages/CarsPage.jsx
import React from "react";
import CarsShowcase from "../components/sections/CarsShowcase";
import CarPerformanceChart from "../components/charts/CarPerformanceChart";
import Leaderboard from "../components/sections/Leaderboard";

function CarsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <CarsShowcase />
      <CarPerformanceChart />
      <Leaderboard />
    </div>
  );
}

export default CarsPage;
