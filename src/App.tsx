import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Bmw from "./Bmw";
import Features from "./components/Features";
import BmwDetails from "./pages/BmwDetails";
import History from "./pages/History";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import Salon from "./components/Salon";

function App() {
  return (
    <BrowserRouter basename="/bmw-projectt/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Bmw />} />
        <Route path="/models/:id" element={<BmwDetails />} />
        <Route path="/engines" element={<Features />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/salon/:id" element={<Salon />} />
        <Route path="/interiors" element={<Salon />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
