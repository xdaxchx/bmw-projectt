import bmwImg from "../assets/bmw.png";
import bmwLogo from "../assets/logo.jpg";
import Bmw from "../Bmw";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <header className="header">
        <img src={bmwImg} className="bmw" alt="bmw" />
        <img src={bmwLogo} className="bmw-logo" alt="bmw logo" />
        <div className="nav">
          <div className="nav-left">
            <Link to="/">HOME</Link>
            <Link to="/models">MODELS</Link>
            <Link to="/engines">ENGINES</Link>
            <Link to="/gallery">GALLERY</Link>
            <Link to="/history">HISTORY</Link>
            <Link to="/about">ABOUT</Link>
          </div>
          <div className="nav-center">
            BMW 7 SERIES
            <span>20TH CENTURY ICONS</span>
          </div>
        </div>
        <div className="content">
          <h1>BMW 7 SERIES</h1>
          <div className="models">E23 • E32 • E38</div>
          <div className="text">
            The legacy of perfection.
            <br />
            Experience the icons.
          </div>
          <Link to="/models" className="btn">
            EXPLORE MODELS
          </Link>
        </div>
        <div className="dots">
          <div
            className={`dot ${activeSlide === 0 ? "active" : ""}`}
            onClick={() => setActiveSlide(0)}
            style={{ cursor: "pointer" }}
          ></div>
          <div
            className={`dot ${activeSlide === 1 ? "active" : ""}`}
            onClick={() => setActiveSlide(1)}
            style={{ cursor: "pointer" }}
          ></div>
          <div
            className={`dot ${activeSlide === 2 ? "active" : ""}`}
            onClick={() => setActiveSlide(2)}
            style={{ cursor: "pointer" }}
          ></div>
        </div>
      </header>
      <Bmw />
      <Features />
    </>
  );
}
