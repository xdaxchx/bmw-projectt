import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/bmw";
import "../styles/BmwDetails.css";

export default function BmwDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="details-container">
        <h1>Модель не знайдена</h1>
      </div>
    );
  }
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/models")}>
        ← Назад
      </button>
      <div className="details-content">
        <img src={`${baseUrl}bmw.${car.id}.png`} alt={car.name} />
        <div className="details-info">
          <h1>{car.name}</h1>
          <p className="year">Роки випуску: {car.year}</p>
          <h2>Двигуни:</h2>
          <ul className="engines-list">
            {car.engines.map((engine, idx) => (
              <li key={idx}>
                {engine.name}L - {engine.power}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
