import React from "react";
import Topbar from "../components/topbar/Topbar";
import Portfolio from "../components/portfolio/Portfolio";
export default function PortfolioPage() {
  return (
    <div className="home">
      <Topbar></Topbar>
      <div className="section">
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}
