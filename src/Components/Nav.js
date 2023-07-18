import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";


const Nav = () => {
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
            <ul style={{listStyle:"none"}} className="social-icons" >
                <li >
                    <a href={item.url}>
                        <FontAwesomeIcon icon={item.icon} size="2x" style={{color:"#211E78"}}/>
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
        <section id="home">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project" onClick={(e) => handleNavClick(e, '#project')}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="resume" onClick={(e) => handleNavClick(e, '#resume')}>Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Me</a>
                            </li>

                        </ul>
                    </div>
                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {socialList}
                        </ul>
                    </div>
                    </div>


            </nav>
        </section>
    );
};

export default Nav;