import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function Navigation() {
    const socials = [

        {
            icon: faGithub,
            url: "https://github.com/gizemayegul",
        },
        {
            icon: faLinkedin,
            url: "https://www.linkedin.com/in/gayazyegul/",
        },
        {
            icon: faStackOverflow,
            url: "https://stackoverflow.com/users/19579837/gizem-ayaz-yeg%c3%bcl",
        },
    ];
    const socialList = socials.map((item, index) => {
        return <div key={index} size="2px">
            <ul style={{ listStyle: "none" }} className="social-icons" >
                <li >
                    <a href={item.url}>
                        <FontAwesomeIcon icon={item.icon} size="2x" style={{ color: "#211E78" }} />
                    </a>
                </li>
            </ul>
        </div>
    })
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <Navbar expand="lg" bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={(e) => handleNavClick(e, '#about')}>Home</Nav.Link>
                            <Nav.Link href="#project" onClick={(e) => handleNavClick(e, '#project')}>Projects</Nav.Link>
                            <Nav.Link href="#resume" onClick={(e) => handleNavClick(e, '#resume')}>Resume</Nav.Link>
                            <Nav.Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</Nav.Link>
                        </Nav>
                        <Nav >
                            {socialList}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;