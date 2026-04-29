import { Link } from "react-router-dom";

export default function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <img src="/public/ engine.png" alt="Engines" />
        <div className="feature-content">
          <h3>ENGINES</h3>
          <p>
            Explore the powerful engines
            <br />
            that defined an era.
          </p>
          <Link to="/engines" className="btn">
            VIEW ENGINES
          </Link>
        </div>
      </div>
      <div className="feature-card">
        <img src="/public/interior.png" alt="Interior" />
        <div className="feature-content">
          <h3>INTERIOR</h3>
          <p>
            Timeless design.
            <br />
            Unmatched comfort.
          </p>
          <Link to="/interiors" className="btn">
            VIEW INTERIORS
          </Link>
        </div>
      </div>
    </section>
  );
}
