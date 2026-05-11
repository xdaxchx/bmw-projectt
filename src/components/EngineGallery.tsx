import engine4 from "../assets/engine-gallery/e38.3.png";
import engine2 from "../assets/engine-gallery/e38.4.png";
import engine1 from "../assets/engine-gallery/e38.2.png";
import engine3 from "../assets/engine-gallery/e38.5.png";

const engineImagesE32 = [
  { id: 1, src: engine2, alt: "BMW E38 Engine" },
  { id: 2, src: engine1, alt: "BMW E38 Engine" },
  { id: 3, src: engine3, alt: "BMW E38 Engine" },
  { id: 4, src: engine4, alt: "BMW E38 Engine" },
];

export default function EngineGallery() {
  return (
    <div className="gallery-engines">
      {engineImagesE32.map((img) => (
        <div key={img.id} className="car-thumb-engines">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}
