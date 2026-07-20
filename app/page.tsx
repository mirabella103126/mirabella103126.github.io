import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Bat Mitzvah Celebration | October 31, 2026",
  description:
    "Please join us in Philadelphia for a meaningful morning and a spirited Halloween celebration.",
};

const rodephMap =
  "https://www.google.com/maps/search/?api=1&query=Congregation+Rodeph+Shalom+615+N+Broad+St+Philadelphia+PA+19123";
const iatseMap =
  "https://www.google.com/maps/search/?api=1&query=IATSE+Ballroom+2401+S+Swanson+St+Philadelphia+PA+19148";

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Back to top">
            <span className="star">✦</span> OCT · 31 · 2026
          </a>
          <div className="navLinks">
            <a href="#day">The day</a>
            <a href="#details">Details</a>
            <a className="navRsvp" href="#rsvp">RSVP</a>
          </div>
        </nav>

        <div className="heroOrnament" aria-hidden="true">
          <span>✦</span><span>✦</span><span>✦</span>
        </div>
        <p className="eyebrow">WITH JOY, WE INVITE YOU TO</p>
        <h1>
          A Bat Mitzvah
          <em>Celebration</em>
        </h1>
        <p className="heroIntro">
          A sacred morning. A spirited afternoon.
          <br />One unforgettable Halloween in Philadelphia.
        </p>
        <div className="dateLockup" aria-label="Saturday, October 31, 2026">
          <span>SATURDAY</span>
          <strong>31</strong>
          <span>OCTOBER · 2026</span>
        </div>
        <a className="scrollCue" href="#day">
          Explore the day <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="day" id="day">
        <div className="sectionIntro">
          <p className="kicker">TWO MOMENTS · ONE MILESTONE</p>
          <h2>A day of meaning<br />and merriment</h2>
          <p>
            We’ll begin together in the beauty and tradition of Shabbat, then
            gather for an afternoon celebration with a little Halloween magic.
          </p>
        </div>

        <div className="eventCards">
          <article className="eventCard ceremony">
            <div className="cardNumber">01</div>
            <p className="cardLabel">THE SERVICE</p>
            <h3>A Meaningful<br />Morning</h3>
            <div className="divider"><span>✦</span></div>
            <dl>
              <div><dt>WHEN</dt><dd>10:00 am–12:30 pm</dd></div>
              <div><dt>WHERE</dt><dd>Congregation Rodeph Shalom</dd></div>
              <div><dt>ADDRESS</dt><dd>615 N. Broad Street<br />Philadelphia, PA 19123</dd></div>
            </dl>
            <p className="attire">Please dress in synagogue-appropriate attire.</p>
            <a href={rodephMap} target="_blank" rel="noreferrer">View on map <span>↗</span></a>
          </article>

          <article className="eventCard party">
            <div className="moon" aria-hidden="true"></div>
            <div className="cardNumber">02</div>
            <p className="cardLabel">THE CELEBRATION</p>
            <h3>A Spirited<br />Afternoon</h3>
            <div className="divider"><span>✦</span></div>
            <dl>
              <div><dt>WHEN</dt><dd>1:00–5:00 pm</dd></div>
              <div><dt>WHERE</dt><dd>IATSE Ballroom</dd></div>
              <div><dt>ADDRESS</dt><dd>2401 S. Swanson Street<br />Philadelphia, PA 19148</dd></div>
            </dl>
            <p className="attire">Halloween spirit encouraged. Costumes welcome!</p>
            <a href={iatseMap} target="_blank" rel="noreferrer">View on map <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="details" id="details">
        <div className="detailsTitle">
          <p className="kicker">A FEW HELPFUL NOTES</p>
          <h2>Good to know</h2>
        </div>
        <div className="notesGrid">
          <article>
            <span className="noteIcon">✦</span>
            <h3>Between venues</h3>
            <p>
              The celebration begins shortly after services. Please plan for
              travel time from North Broad Street to South Philadelphia.
            </p>
          </article>
          <article>
            <span className="noteIcon pumpkin">●</span>
            <h3>Costume change?</h3>
            <p>
              Come to the service in respectful attire. If you’d like to join
              the Halloween fun, feel free to change before the reception.
            </p>
          </article>
          <article>
            <span className="noteIcon">☾</span>
            <h3>All ages welcome</h3>
            <p>
              The afternoon will be festive, family-friendly, and full of
              treats—no tricks required.
            </p>
          </article>
        </div>
      </section>

      <section className="rsvp" id="rsvp">
        <div className="bat batOne" aria-hidden="true">⌁</div>
        <div className="bat batTwo" aria-hidden="true">⌁</div>
        <p className="kicker">SAVE THE DATE</p>
        <h2>We can’t wait to<br />celebrate with you</h2>
        <p>
          Formal invitation and RSVP details will follow.<br />For now, please
          hold October 31, 2026.
        </p>
        <div className="rsvpButton" aria-label="RSVP details coming soon">
          RSVP DETAILS COMING SOON
        </div>
        <div className="rsvpDate">SAT · 10 · 31 · 26</div>
      </section>

      <footer>
        <span>With love, from Philadelphia</span>
        <span className="footerMark">✦</span>
        <span>October 31, 2026</span>
      </footer>
    </main>
  );
}
