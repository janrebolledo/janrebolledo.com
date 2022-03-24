import Logo from "../public/Logo.png";
import Link from "next/link";

import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const P5 = dynamic(() => import("../components/P5"), {
  ssr: false,
});

export default function Header() {
  function mobileNavMenu() {
    const nav = document.querySelector("nav");
    const navButton = document.getElementById("mobile-nav-menu");

    if (nav.classList.contains("menu-open")) {
      nav.classList.remove("menu-open");
      navButton.innerHTML = "menu";
    } else {
      nav.classList.add("menu-open");
      navButton.innerHTML = "close";
    }
  }

  function closeNav() {
    if (window.outerWidth && window.outerWidth < 980) {
      const nav = document.querySelector("nav");
      const navButton = document.getElementById("mobile-nav-menu");
      nav.classList.remove("menu-open");
      navButton.innerHTML = "menu";
    }
  }

  const router = useRouter();
  if (router.pathname == "/") {
    return (
      <>
        <header>
          <Link href="/" passHref>
            <div className="header-logo-link">JAN REBOLLEDO</div>
          </Link>
          <nav>
            <ul className="header-list">
              <li className="header-list-item">
                <Link href="#home">
                  <a className="header-link" onClick={closeNav}>
                    HOME
                  </a>
                </Link>
              </li>
              <li className="header-list-item">
                <Link href="#projects">
                  <a className="header-link" onClick={closeNav}>
                    PROJECTS
                  </a>
                </Link>
              </li>
              <li className="header-list-item">
                <Link href="#process">
                  <a className="header-link" onClick={closeNav}>
                    MY PROCESS
                  </a>
                </Link>
              </li>
              <li className="header-list-item contact-button">
                <Link href="#contact">
                  <a className="header-link" onClick={closeNav}>
                    CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <span
            className="material-icons mobile-nav-menu"
            id="mobile-nav-menu"
            onClick={mobileNavMenu}
          >
            menu
          </span>
        </header>
        <P5 />
      </>
    );
  } else {
    return (
      <>
        <header>
          <Link href="/" passHref>
            <div className="header-logo-link">
              <img className="header-logo" alt="Logo" src={Logo.src} />
              JAN REBOLLEDO
            </div>
          </Link>
          <nav>
            <ul className="header-list">
              <li className="header-list-item">
                <Link href="/">
                  <a className="header-link" onClick={closeNav}>
                    HOME
                  </a>
                </Link>
              </li>
              <li className="header-list-item">
                <Link href="/projects">
                  <a className="header-link" onClick={closeNav}>
                    PROJECTS
                  </a>
                </Link>
              </li>
              <li className="header-list-item contact-button">
                <Link href="/contact">
                  <a className="header-link" onClick={closeNav}>
                    CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <span
            className="material-icons mobile-nav-menu"
            id="mobile-nav-menu"
            onClick={mobileNavMenu}
          >
            menu
          </span>
        </header>
      </>
    );
  }
}
