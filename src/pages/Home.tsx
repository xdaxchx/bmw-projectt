import bmwImg from "../assets/bmw.png";
import bmwImg2 from "../assets/e32.homee.png";
import bmwImg3 from "../assets/e23.homee.png";

import Bmw from "../Bmw";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [bmwImg, bmwImg2, bmwImg3];
  return (
    <>
      <img src={slides[activeSlide]} className="bmw" alt="bmw" />
      {/* <img src={bmwImg} className="bmw" alt="bmw" /> */}
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
      <Bmw />
      <Features />
    </>
  );
}
