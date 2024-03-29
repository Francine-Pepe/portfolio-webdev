import "./Navbar.css";
import { Icon } from "@iconify/react";
import Logo from "./../../Images/logo_fran_bigger.png";

export default function Navbar() {
  const onButtonClick = () => {
    fetch("Francine_Pêpe_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Francine_Pêpe_CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <nav className="navbar">
        <a href="#about" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <Icon
            icon="system-uicons:menu-hamburger"
            color="#373737"
            width="50"
            height="50"
          />
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
                href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4e972e9-8e9f-35bb-b9de-1bef646f3c91"
                target="_blank"
                rel="noreferrer noopener"
                download
                onClick={onButtonClick}
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
