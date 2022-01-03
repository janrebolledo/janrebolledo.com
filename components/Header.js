import Logo from "../public/Logo.png";
import Link from "next/link";

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
  return (
    <>
      <header>
        <Link href="/">
          <img className="header-logo" alt="Logo" src={Logo.src} />
        </Link>
        <nav>
          <ul className="header-list">
            <li className="header-list-item">
              <Link href="/" smooth={true} offset={-144} duration={2000}>
                <a className="underline" onClick={closeNav}>
                  Home
                </a>
              </Link>
            </li>
            <li className="header-list-item">
              <Link href="projects">
                <a className="underline" onClick={closeNav}>
                  Projects
                </a>
              </Link>
            </li>
            <li className="header-list-item contact-button">
              <Link href="contact">
                <a className="button" onClick={closeNav}>
                  Contact
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
