import engine4 from "../assets/engines/e38.3.0.png";
import engine2 from "../assets/engines/e38.4.4.png";
import engine1 from "../assets/engines/e38.2.8.png";
import engine3 from "../assets/engines/e38.5.0.png";

const engineImagesE38 = [
  { id: 1, src: engine2, alt: "BMW E38 Engine" },
  { id: 2, src: engine1, alt: "BMW E38 Engine" },
  { id: 3, src: engine3, alt: "BMW E38 Engine" },
  { id: 4, src: engine4, alt: "BMW E38 Engine" },
];

// export default function Engines() {
//   return (
//     <div className="gallery-engines">
//       {engineImagesE38.map((img) => (
//         <div key={img.id} className="car-thumb-engines">
//           <img src={img.src} alt={img.alt} />
//         </div>
//       ))}
//     </div>
//   );
// }

import { engines } from "../data/engines";
export default function Engines() {
  return (
    <div className="gallery-engines">
      {engines.map((engine) => (
        <div key={engine.id} className="car-thumb-engines">
          <img src={engine.src} alt={engine.title} />
          <div className="engine-info">
            <h2>{engine.title}</h2>
            <p>{engine.volume}</p>
            <p>{engine.power}</p>
            <span>{engine.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
