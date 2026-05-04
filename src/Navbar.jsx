import React from "react";
import Links from "./Links";
import bmwLogo from "./assets/logo.png";

export default function Navbar() {
  return (
    <div className="new-header" style={{ height: "100px" }}>
      <header className="header">
        <img src={bmwLogo} className="bmw-logo" alt="bmw logo" />
        <div className="nav">
          <Links />
          <div className="nav-center">
            BMW 7 SERIES
            <span>20TH CENTURY ICONS</span>
          </div>
        </div>
      </header>
    </div>
  );
}
