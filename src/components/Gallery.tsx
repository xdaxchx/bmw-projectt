import car1_E38 from "../assets/images/img-1.e38.png";
import car2_E38 from "../assets/images/img-2.e38.png";
import car3_E38 from "../assets/images/img-3.e38.png";
import car4_E38 from "../assets/images/img-4.e38.png";
import car5_E38 from "../assets/images/img-5.e38.png";

import car1_E32 from "../assets/images/img-1.e32.png";
import car2_E32 from "../assets/images/img-2.e32.png";
import car3_E32 from "../assets/images/img-3.e32.png";
import car4_E32 from "../assets/images/img-4.e32.png";
import car5_E32 from "../assets/images/img-5.e32.png";

import car1_E23 from "../assets/images/img-1.e23.png";
import car2_E23 from "../assets/images/img-2.e23.png";
import car3_E23 from "../assets/images/img-3.e23.png";
import car4_E23 from "../assets/images/img-4.e23.png";
import car5_E23 from "../assets/images/img-5.e23.png";

const carImagesE38 = [
  { id: 1, src: car1_E38, alt: "BMW E38" },
  { id: 2, src: car2_E38, alt: "BMW E38" },
  { id: 3, src: car3_E38, alt: "BMW E38" },
  { id: 4, src: car4_E38, alt: "BMW E38" },
  { id: 5, src: car5_E38, alt: "BMW E38" },
];

const carImagesE32 = [
  { id: 1, src: car1_E32, alt: "BMW E32" },
  { id: 2, src: car2_E32, alt: "BMW E32" },
  { id: 3, src: car3_E32, alt: "BMW E32" },
  { id: 4, src: car4_E32, alt: "BMW E32" },
  { id: 5, src: car5_E32, alt: "BMW E32" },
];

const carImagesE23 = [
  { id: 1, src: car1_E23, alt: "BMW E23" },
  { id: 2, src: car2_E23, alt: "BMW E23" },
  { id: 3, src: car3_E23, alt: "BMW E23" },
  { id: 4, src: car4_E23, alt: "BMW E23" },
  { id: 5, src: car5_E23, alt: "BMW E23" },
];

const galleries = [
  { title: "E38", images: carImagesE38 },
  { title: "E32", images: carImagesE32 },
  { title: "E23", images: carImagesE23 },
];

// export default function Gallery({ carId }) {
//   const currentGallery = galleries.find((g) => g.title.toLowerCase() === carId);
//   if (!currentGallery) return null;
//   return (
//     <div className="gallery-section">
//       <div className="car-row">
//         {currentGallery.images.map((image) => (
//           <img
//             key={image.id}
//             src={image.src}
//             alt={image.alt}
//             className="car-thumb"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Gallery({ id }) {
  if (!id) {
    return (
      <div>
        {galleries.map((group) => (
          <div key={group.title} className="gallery-section">
            <h2>{group.title}</h2>

            <div className="car-row">
              {group.images.map((img) => (
                <img key={img.id} src={img.src} className="car-thumb" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const currentGallery = galleries.find((g) => g.title.toLowerCase() === id);

  if (!currentGallery) return null;

  return (
    <div className="car-row">
      {currentGallery.images.map((img) => (
        <img key={img.id} src={img.src} className="car-thumb" />
      ))}
    </div>
  );
}
