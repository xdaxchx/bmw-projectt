import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/bmw";
import "../styles/BmwDetails.css";
import Gallery from "../components/Gallery";
import Salon from "../components/Salon";
import Engines from "../components/Engines";
export default function BmwDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);

  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/models")}>
        ← BACK TO MODELS
      </button>
      <div className="details-content">
        {/* <img
          src={`${baseUrl}${car.detailImg}`}
          alt={car.name}
          className="bmw-url"
        /> */}
        <img
          src={`${baseUrl}bmw.${car.id}.png`}
          alt={car.name}
          className="bmw-url"
        />

        <div className="details-info">
          <h1>{car.name}</h1>
          <p className="year">{car.year}</p>
          <p className="car-info">{car.info}</p>
          {/* <h2>Двигуни:</h2> */}
          {/* <ul className="engines-list">
            {car.engines.map((engine, idx) => (
              <li key={idx}>
                {engine.name}L - {engine.power}
              </li>
            ))}
          </ul> */}
          <span className="span-gallery" onClick={() => navigate("/gallery")}>
            VIEW GALLERY
          </span>
        </div>
        <div className="specs">
          <div>
            <p>LENGTH</p>
            <h3>{car.length}</h3>
          </div>
          <div>
            <p>WIDTH</p>
            <h3>{car.width}</h3>
          </div>
          <div>
            <p>ENGINE OPTIONS</p>
            <h3>{car.engines.length}</h3>
          </div>
          <div>
            <p>PRODUCTION</p>
            <h3>{car.year}</h3>
          </div>
        </div>
      </div>
      <Gallery id={car.id} />

      <h2 className="bmw-title">CHOOSE ENGINE</h2>
      <Engines />

      <h2 className="bmw-title">EXPLORE INTERIOR</h2>
      {/* photo engine */}
      <Salon id={car.id} />
    </div>
  );
}
