import Portrait from "../public/Portrait.jpg";
import Link from "next/link";

import Instagram from "../public/Social-Icons/Instagram.png";
import Twitter from "../public/Social-Icons/Twitter.png";
import Twitch from "../public/Social-Icons/Twitch.png";

export default function Landingpage() {
  return (
    <>
      <section id="home" className="landing-section" tabIndex="0">
        <div className="landing-container">
          <div>
            <h1 className="landing-h1">
              <span className="moveUpAnimation">CREATING</span>{" "}
              <span className="landing-underline moveUpAnimation">UNIQUE</span>{" "}
              <span className="moveUpAnimation">WEB</span>{" "}
              <span className="moveUpAnimation">EXPERIENCES</span>
            </h1>
            <div className="landing-buttons">
              <Link href="#projects">
                <a className="button moveUpAnimation">VIEW PROJECTS →</a>
              </Link>
              <Link href="#contact">
                <a className="button-outline moveUpAnimation">CONTACT →</a>
              </Link>
            </div>
          </div>
          <div className="landing-section-socials">
            <Link href="https://instagram.com/janconcepts" passHref>
              <img
                src={Instagram.src}
                className="landing-social moveUpAnimation"
                alt="Instagram Logo"
              />
            </Link>
            <Link href="https://twitter.com/janconcepts" passHref>
              <img
                src={Twitter.src}
                className="landing-social moveUpAnimation"
                alt="Twitter Logo"
              />
            </Link>
            <Link href="https://twitch.tv/janrebolledo" passHref>
              <img
                src={Twitch.src}
                className="landing-social moveUpAnimation"
                alt="Twitch Logo"
              />
            </Link>
          </div>
        </div>
        <img
          className="img-responsive"
          alt="Portrait of Jan Rebolledo"
          src={Portrait.src}
        />
      </section>
    </>
  );
}
