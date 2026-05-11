// import car11_E23 from "../assets/images/bmw.e23.1.png";
// import car12_E23 from "../assets/images/bmw.e23.2.png";
// import car13_E23 from "../assets/images/bmw.e23.3.png";
// import car14_E23 from "../assets/images/bmw.e23.4.png";
// import car15_E23 from "../assets/images/bmw.e23.5.png";

// import car11_E32 from "../assets/images/bmw.e32.1.png";
// import car12_E32 from "../assets/images/bmw.e32.2.png";
// import car13_E32 from "../assets/images/bmw.e32.3.png";
// import car14_E32 from "../assets/images/bmw.e32.4.png";
// import car15_E32 from "../assets/images/bmw.e32.5.png";

// import car11_E38 from "../assets/images/bmw.e38.1.png";
// import car12_E38 from "../assets/images/bmw.e38.2.png";
// import car13_E38 from "../assets/images/bmw.e38.3.png";
// import car14_E38 from "../assets/images/bmw.e38.4.png";
// import car15_E38 from "../assets/images/bmw.e38.5.png";

// const salonImagesE23 = [
//   { id: 1, src: car11_E23, alt: "BMW E23" },
//   { id: 2, src: car12_E23, alt: "BMW E23" },
//   { id: 3, src: car13_E23, alt: "BMW E23" },
//   { id: 4, src: car14_E23, alt: "BMW E23" },
//   { id: 5, src: car15_E23, alt: "BMW E23" },
// ];

// const salonImagesE32 = [
//   { id: 1, src: car11_E32, alt: "BMW E32" },
//   { id: 2, src: car12_E32, alt: "BMW E32" },
//   { id: 3, src: car13_E32, alt: "BMW E32" },
//   { id: 4, src: car14_E32, alt: "BMW E32" },
//   { id: 5, src: car15_E32, alt: "BMW E32" },
// ];

// const salonImagesE38 = [
//   { id: 1, src: car11_E38, alt: "BMW E38" },
//   { id: 2, src: car12_E38, alt: "BMW E38" },
//   { id: 3, src: car13_E38, alt: "BMW E38" },
//   { id: 4, src: car14_E38, alt: "BMW E38" },
//   { id: 5, src: car15_E38, alt: "BMW E38" },
// ];

// const salons = [
//   { title: "E23", images: salonImagesE23 },
//   { title: "E32", images: salonImagesE32 },
//   { title: "E38", images: salonImagesE38 },
// ];

// import { useParams } from "react-router-dom";
// export default function Salon() {
//   const { id } = useParams(); // e23 / e32 / e38
//   const salons = {
//     e23: salonImagesE23,
//     e32: salonImagesE32,
//     e38: salonImagesE38,
//   };
//   const currentSalon = salons[id]; // вибираємо потрібний
//   //   if (!currentSalon) return <h1>Not found</h1>;
//   return (
//     <div className="gallery">
//       <div className="car-row">
//         {currentSalon.map((img) => (
//           <img key={img.id} src={img.src} alt={img.alt} className="car-thumb" />
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";

import car11_E23 from "../assets/images/bmw.e23.1.png";
import car12_E23 from "../assets/images/bmw.e23.2.png";
import car13_E23 from "../assets/images/bmw.e23.3.png";
import car14_E23 from "../assets/images/bmw.e23.4.png";
import car15_E23 from "../assets/images/bmw.e23.5.png";

import car11_E32 from "../assets/images/bmw.e32.1.png";
import car12_E32 from "../assets/images/bmw.e32.2.png";
import car13_E32 from "../assets/images/bmw.e32.3.png";
import car14_E32 from "../assets/images/bmw.e32.4.png";
import car15_E32 from "../assets/images/bmw.e32.5.png";

import car11_E38 from "../assets/images/bmw.e38.1.png";
import car12_E38 from "../assets/images/bmw.e38.2.png";
import car13_E38 from "../assets/images/bmw.e38.3.png";
import car14_E38 from "../assets/images/bmw.e38.4.png";
import car15_E38 from "../assets/images/bmw.e38.5.png";

const salonImagesE23 = [
  { id: 1, src: car11_E23, alt: "BMW E23" },
  { id: 2, src: car12_E23, alt: "BMW E23" },
  { id: 3, src: car13_E23, alt: "BMW E23" },
  { id: 4, src: car14_E23, alt: "BMW E23" },
  { id: 5, src: car15_E23, alt: "BMW E23" },
];

const salonImagesE32 = [
  { id: 1, src: car11_E32, alt: "BMW E32" },
  { id: 2, src: car12_E32, alt: "BMW E32" },
  { id: 3, src: car13_E32, alt: "BMW E32" },
  { id: 4, src: car14_E32, alt: "BMW E32" },
  { id: 5, src: car15_E32, alt: "BMW E32" },
];

const salonImagesE38 = [
  { id: 1, src: car11_E38, alt: "BMW E38" },
  { id: 2, src: car12_E38, alt: "BMW E38" },
  { id: 3, src: car13_E38, alt: "BMW E38" },
  { id: 4, src: car14_E38, alt: "BMW E38" },
  { id: 5, src: car15_E38, alt: "BMW E38" },
];

type SalonProps = {
  id: string;
};

export default function Salon({ id }: SalonProps) {
  // export default function Salon() {
  //   const { id } = useParams();

  const salons = {
    e23: salonImagesE23,
    e32: salonImagesE32,
    e38: salonImagesE38,
  };

  const currentSalon = salons[id as keyof typeof salons];

  if (!currentSalon) {
    return <h1>Salon not found</h1>;
  }

  return (
    <div className="gallery">
      <div className="car-row">
        {currentSalon.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} className="car-thumb" />
        ))}
      </div>
    </div>
  );
}
