import "./Navbar.css";
import { Icon } from "@iconify/react";
import Logo from "./../../Images/logo_fran_bigger.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <Icon icon="system-uicons:menu-hamburger" color="#373737" width="50" height="50" />
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:fd16d6bb-204d-34fb-b325-51b5c73a0daa"
                target="_blank"
                rel="noreferrer noopener"
              >
                Resumé
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
