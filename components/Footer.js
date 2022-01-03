import Instagram from "../public/Social-Icons/Instagram.png";
import Twitter from "../public/Social-Icons/Twitter.png";
import Twitch from "../public/Social-Icons/Twitch.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-list">
          <a
            href="https://instagram.com/janconcepts"
            className="footer-social-link"
          >
            <img
              alt="Social Media Logo"
              className="footer-social-logo"
              src={Instagram.src}
            />
          </a>
          <a
            href="https://twitter.com/janconcepts"
            className="footer-social-link"
          >
            <img
              alt="Social Media Logo"
              className="footer-social-logo"
              src={Twitter.src}
            />
          </a>
          <a
            href="https://twitch.tv/janrebolledo"
            className="footer-social-link"
          >
            <img
              alt="Social Media Logo"
              className="footer-social-logo"
              src={Twitch.src}
            />
          </a>
        </div>
        <div className="footer-list">
          <Link
            to="home"
            smooth={true}
            offset={-144}
            duration={2000}
            className="footer-social-link underline"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={2000}
            className="footer-social-link underline"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={2000}
            className="footer-social-link underline"
          >
            Contact
          </Link>
        </div>
        <p>
          Copyright © 2021{" "}
          <Link to="home" smooth={true} offset={-144} duration={2000}>
            <a className="underline link">Jan Rebolledo</a>
          </Link>
          . Digital Experience by{" "}
          <Link to="home" smooth={true} offset={-144} duration={2000}>
            <a className="underline link">Jan Rebolledo</a>
          </Link>
          .
        </p>
      </footer>
    </>
  );
}
