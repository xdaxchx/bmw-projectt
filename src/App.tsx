// import bmwImg from "./assets/bmw.png";
// import Features from "./components/Features";
// import Bmw from "./Bmw";
// function App() {
//   return (
//     <>
//       <header className="header">
//         <img src={bmwImg} className="bmw" alt="bmw" />

//         <div className="nav">
//           <div className="nav-left">
//             <a href="#">HOME</a>
//             <a href="#">MODELS</a>
//             <a href="#">ENGINES</a>
//             <a href="#">GALLERY</a>
//             <a href="#">HISTORY</a>
//             <a href="#">ABOUT</a>
//           </div>

//           <div className="nav-center">
//             BMW 7 SERIES
//             <span>20TH CENTURY ICONS</span>
//           </div>
//         </div>

//         <div className="content">
//           <h1>BMW 7 SERIES</h1>
//           <div className="models">E23 • E32 • E38</div>
//           <div className="text">
//             The legacy of perfection.
//             <br />
//             Experience the icons.
//           </div>
//           <a href="#" className="btn">
//             EXPLORE MODELS
//           </a>
//         </div>

//         <div className="dots">
//           <div className="dot active"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//         </div>
//       </header>
//       <Bmw />
//       <Features />
//     </>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bmw from "./Bmw";
import Features from "./components/Features";
import BmwDetails from "./pages/BmwDetails";
function App() {
  return (
    <BrowserRouter basename="/bmw-projectt/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Bmw />} />
        <Route path="/models/:id" element={<BmwDetails />} />
        <Route path="/engines" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
