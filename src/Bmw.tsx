// export default function Bmw() {
//   return (
//     <div className="bmw-container">
//       <div className="bmw-section">CHOOSE YOUR GENERATION</div>
//       <div className="trio-bmw">
//         <img src="/bmw.e23.png" className="bmw-card" alt="E23" />
//         <img src="/bmw.e32.png" className="bmw-card" alt="E32" />
//         <img src="/bmw.e38.png" className="bmw-card" alt="E38" />
//       </div>
//     </div>
//   );
// }

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
            <img src={`${baseUrl}bmw.${car.id}.png`} alt={car.name} />
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
