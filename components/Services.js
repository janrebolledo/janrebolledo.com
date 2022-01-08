import GraphicDesignIcon from "../public/Graphic Design.png";
import MotionGraphicsIcon from "../public/Motion Graphics.gif";
import WebDevelopmentIcon from "../public/Web Development.png";

import Photoshop from "../public/technologies-icons/photoshop.png";
import Illustrator from "../public/technologies-icons/illustrator.png";
import HTML3 from "../public/technologies-icons/html5.png";
import CSS3 from "../public/technologies-icons/css3.png";
import SASS from "../public/technologies-icons/sass.png";
import JavaScript from "../public/technologies-icons/javascript.png";
import TypeScript from "../public/technologies-icons/typescript.png";
import ReactImg from "../public/technologies-icons/react.png";
import NextJS from "../public/technologies-icons/nextjs.jpg";
import AfterEffects from "../public/technologies-icons/after-effects.png";
import PremierePro from "../public/technologies-icons/premiere-pro.png";

export default function Services() {
  return (
    <>
      <section tabIndex="0" className="cta-section services-section">
        <h1>Services</h1>
        <div className="cards-container">
          <div className="card" tabIndex="0">
            <img
              alt="Graphic Design Icon"
              className="card-img"
              src={GraphicDesignIcon.src}
            />
            <h3>Graphic Design</h3>
            <p>I create attention grabbing social &amp; branding graphics.</p>
            <div className="card-skills">
              <img className="card-img" alt="Photoshop" src={Photoshop.src} />
              <img
                className="card-img"
                alt="Illustrator"
                src={Illustrator.src}
              />
            </div>
          </div>
          <div className="card" tabIndex="0">
            <img
              alt="Web Development Icon"
              className="card-img"
              src={WebDevelopmentIcon.src}
            />
            <h3>Front-End Web Development</h3>
            <p>I create production ready e-commerce &amp; static websites.</p>
            <div className="card-skills">
              <img className="card-img" alt="HTML" src={HTML3.src} />
              <img className="card-img" alt="CSS" src={CSS3.src} />
              <img className="card-img" alt="SASS" src={SASS.src} />
              <img className="card-img" alt="JavaScript" src={JavaScript.src} />
              <img className="card-img" alt="TypeScript" src={TypeScript.src} />
              <img className="card-img" alt="React" src={ReactImg.src} />
              <img className="card-img" alt="Next.js" src={NextJS.src} />
            </div>
          </div>
          <div className="card" tabIndex="0">
            <img
              alt="Motion Graphics Icon"
              className="card-img"
              src={MotionGraphicsIcon.src}
            />
            <h3>Motion Design</h3>
            <p>
              I create simple and sleek motion advertisements &amp; social media
              assets.
            </p>
            <div className="card-skills">
              <img
                className="card-img"
                alt="After Effects"
                src={AfterEffects.src}
              />
              <img
                className="card-img"
                alt="Premiere Pro"
                src={PremierePro.src}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
