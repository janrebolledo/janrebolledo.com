import Portrait from "../public/Portrait.jpg";
import Link from "next/link";

import Logo from "../public/Logo.png";

import Instagram from "../public/Social-Icons/Instagram.png";
import Twitter from "../public/Social-Icons/Twitter.png";
import Twitch from "../public/Social-Icons/Twitch.png";

export default function Landingpage() {
  return (
    <>
      <section id="home" className="landing-section" tabIndex="0">
        <div>
          <div className="landing-header">
            <img src={Logo.src} className="landing-logo" />
            <div className="landing-header-links">
              <Link href="./projects" passHref>
                PROJECTS
              </Link>
              <Link href="./contact" passHref>
                CONTACT
              </Link>
            </div>
          </div>
          <h1>
            <span className="underline">FRONT&#8208;END WEB DEVELOPER</span> +{" "}
            <span className="underline">GRAPHIC DESIGNER</span>.
          </h1>
          <div className="landing-section-socials">
            <Link href="https://instagram.com/janconcepts" passHref>
              <img src={Instagram.src} className="landing-social" />
            </Link>
            <Link href="https://twitter.com/janconcepts" passHref>
              <img src={Twitter.src} className="landing-social" />
            </Link>
            <Link href="https://twitch.tv/janrebolledo" passHref>
              <img src={Twitch.src} className="landing-social" />
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
