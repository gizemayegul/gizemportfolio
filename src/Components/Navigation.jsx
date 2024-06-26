import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/planet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "../assets/icons8-github-48.png";
import linkedin from "../assets/icons8-linkedin-48.png";
import {
  faGithub,
  faLinkedin,
  // faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import DarkMode from "./DarkMode";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Navigation() {
  const { theme } = useContext(ThemeContext);
  const socials = [
    {
      icon: github,
      url: "https://github.com/gizemayegul",
    },
    {
      icon: linkedin,
      url: "https://www.linkedin.com/in/gayazyegul/",
    },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        expand="lg"
        bg="ligth"
        data-bs-theme={`${theme ? "ligth" : "dark"}`}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Navbar.Brand href="#home">
              <img
                src={logo}
                width="50"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#project"
                onClick={(e) => handleNavClick(e, "#project")}
              >
                Projects
              </Nav.Link>
              {/* <Nav.Link
                href="#resume"
                onClick={(e) => handleNavClick(e, "#resume")}
              >
                Resume
              </Nav.Link> */}
              <Nav.Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3  ">
              {socials.map((e, i) => (
                <Nav.Link
                  className="align-center"
                  key={i}
                  href={e.url}
                  target="_blank"
                >
                  <img className="icons" src={e.icon} alt={e.icon + "Svg"} />
                </Nav.Link>
              ))}
              <div className="dark-toggle-button">
                <DarkMode />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
