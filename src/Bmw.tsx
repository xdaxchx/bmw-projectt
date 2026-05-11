import { useNavigate } from "react-router-dom";
import { cars } from "./data/bmw";
export default function Bmw() {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;
  const handleCardClick = (carId: string) => {
    navigate(`/models/${carId}`);
  };
  return (
    <div className="bmw-container">
      <h2 className="bmw-title">CHOOSE YOUR GENERATION</h2>
      <div className="trio-bmw">
        {cars.map((car) => (
          <div
            key={car.id}
            className="card"
            onClick={() => handleCardClick(car.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={`${baseUrl}${car.detailImg}`} />
            {/* <img src={`${baseUrl}bmw.${car.id}.png`} alt={car.name} /> */}
            <div className="card-content">
              <h3>{car.id.toUpperCase()}</h3>
              <p>{car.year}</p>
              <span>VIEW DETAILS →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
