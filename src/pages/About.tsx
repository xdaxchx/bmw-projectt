import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-badge">ABOUT BMW 7 SERIES</p>
        <h1>The story behind the silhouette.</h1>
        <p>
          Behind every curve of the BMW 7 Series is a story of daring
          innovation, luxury engineering and timeless design. This is the place
          where comfort meets performance, history meets the future and each
          generation stands as a statement of excellence.
        </p>
      </section>

      <section className="about-cards">
        <article className="about-card">
          <h2>Luxury with purpose</h2>
          <p>
            The 7 Series is not just a sedan. It is a carefully crafted
            experience for drivers and passengers who expect precision, silence,
            and a feeling of quiet strength.
          </p>
        </article>
        <article className="about-card about-card--accent">
          <h2>Technology beyond time</h2>
          <p>
            Each generation introduced innovations that shaped the automotive
            world: from advanced electronics to premium comfort systems and
            intelligent driver support.
          </p>
        </article>
        <article className="about-card">
          <h2>Design for every road</h2>
          <p>
            Elegant lines, bold proportions and powerful presence make every 7
            Series instantly recognizable, whether on city streets or open
            roads.
          </p>
        </article>
      </section>

      <Link to="/" className="about-back">
        Return to home
      </Link>
    </main>
  );
}
