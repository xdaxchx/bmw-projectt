import { Link } from "react-router-dom";

export default function History() {
  return (
    <main className="history-page">
      <section className="history-hero">
        <span>LEGENDARY JOURNEY</span>
        <h1>BMW 7 Series through three iconic generations</h1>
        <p>
          A story of luxury, innovation and bold design. From the first E23 to the
          timeless E38, the BMW 7 Series has always been the flagship of comfort
          and technical progress.
        </p>
      </section>

      <section className="history-grid">
        <article className="history-card">
          <h2>E23 — 1977-1986</h2>
          <p>
            The very first 7 Series introduced the world to premium technology,
            luxury features, and a refined driving experience that changed the
            luxury sedan forever.
          </p>
        </article>
        <article className="history-card">
          <h2>E32 — 1986-1994</h2>
          <p>
            The second generation brought sleek new styling and advanced systems,
            including BMW's first V12 engine, making it a true symbol of prestige
            and performance.
          </p>
        </article>
        <article className="history-card">
          <h2>E38 — 1994-2001</h2>
          <p>
            The E38 combined polished looks with cutting-edge technology such as
            iDrive, creating one of the most iconic and desirable luxury sedans
            of its era.
          </p>
        </article>
      </section>

      <Link to="/" className="history-back">
        Back to home
      </Link>
    </main>
  );
}
