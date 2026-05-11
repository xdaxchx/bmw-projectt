// import Engines from "../components/Engines";
import Gallery from "../components/Gallery";
import Salon from "../components/Salon";
import EngineGallery from "../components/EngineGallery";
export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <section className="gallery-block">
        <h1>BMW E23</h1>

        <Gallery id="e23" />
        <Salon id="e23" />
        <EngineGallery />
      </section>

      <section className="gallery-block">
        <h1>BMW E32</h1>

        <Gallery id="e32" />
        <Salon id="e32" />
        <EngineGallery />
      </section>

      <section className="gallery-block">
        <h1>BMW E38</h1>

        <Gallery id="e38" />
        <Salon id="e38" />
        <EngineGallery />
      </section>
    </div>
  );
}
