import GraphicDesignIcon from "../public/Graphic Design.png";
import MotionGraphicsIcon from "../public/Motion Graphics.gif";
import WebDevelopmentIcon from "../public/Web Development.png";

export default function Services() {
  return (
    <>
      <section className="cta-section services-section">
        <h1>Services</h1>
        <div className="cards-container">
          <div className="card">
            <img
              alt="Graphic Design Icon"
              className="card-img"
              src={GraphicDesignIcon.src}
            />
            <h3>Graphic Design</h3>
            <p>I create attention grabbing social &amp; branding graphics.</p>
          </div>
          <div className="card">
            <img
              alt="Web Development Icon"
              className="card-img"
              src={WebDevelopmentIcon.src}
            />
            <h3>Front-End Web Development</h3>
            <p>I create production ready e-commerce &amp; static websites.</p>
          </div>
          <div className="card">
            <img
              alt="Motion Graphics Icon"
              className="card-img"
              src={MotionGraphicsIcon.src}
            />
            <h3>Motion Design</h3>
            <p>I create simple and sleek motion advertisements &amp; social media assets.</p>
          </div>
        </div>
      </section>
    </>
  );
}
