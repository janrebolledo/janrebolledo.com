import Instagram from "../public/Social-Icons/Instagram.png";
import Twitter from "../public/Social-Icons/Twitter.png";
import Twitch from "../public/Social-Icons/Twitch.png";
import Link from "next/link";
import Logo from "../public/Logo.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logo.src} />
            <h3>JAN REBOLLEDO</h3>
          </div>
          <div className="footer-list">
            <Link href="#home">
              <a className="underline">HOME</a>
            </Link>
            <Link href="#projects">
              <a className="underline">PROJECTS</a>
            </Link>
            <Link href="#contact">
              <a className="underline">CONTACT</a>
            </Link>
          </div>
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
        </div>
        <p className="footer-cr">
          <span>
            Copyright © 2021{" "}
            <Link href="/">
              <a className="underline link">Jan Rebolledo</a>
            </Link>
            .
          </span>
          <span>
            Digital Experience by{" "}
            <Link href="/">
              <a className="underline link">Jan Rebolledo</a>
            </Link>
            .
          </span>
        </p>
      </footer>
    </>
  );
}
