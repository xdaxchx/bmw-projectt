import { Link } from "react-router-dom";

export default function Features() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="features">
      <div className="feature-card">
        {/* <img src={`${baseUrl}engine.png`} alt="Engines" /> */}
        <img src={`${baseUrl}dvigun.png`} alt="Engines" />
        <div className="feature-content">
          <h3>ENGINES</h3>
          <p>
            Explore the powerful engines
            <br />
            that defined an era.
          </p>
          <Link to="/gallery" className="btn">
            VIEW ENGINES
          </Link>
        </div>
      </div>
      <div className="feature-card">
        <img src={`${baseUrl}interior.png`} alt="Interior" />
        <div className="feature-content">
          <h3>INTERIOR</h3>
          <p>
            Timeless design.
            <br />
            Unmatched comfort.
          </p>
          <Link to="/gallery" className="btn">
            VIEW INTERIORS
          </Link>
        </div>
      </div>
    </section>
  );
}
