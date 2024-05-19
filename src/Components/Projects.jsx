import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectsData from "../assets/data";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import hover from "../assets/hover.png";

const Projects = () => {
  return (
    <section id="project">
      <Container>
        <h1 className="project-title">Projects</h1>
        <div id="projects-wrapper" className="row row-cols-1 row-cols-md-4 g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col flip-card">
              <div className="flip-card-inner">
                <div className="card h-100 flip-card-front">
                  <div className="image-holder">
                    <img
                      src={project.imgUrl}
                      className="card-img-top"
                      alt={project.title + "image"}
                    />
                  </div>
                  <div className="card-body">
                    <div className="hover-icon">
                      <img src={hover} alt={hover + "svg"} />
                    </div>
                    <p className="card-text">{project.description}</p>
                    <h5 className="card-title">{project.title}</h5>
                  </div>
                </div>
                <div className="flip-card-back">
                  <p> {project.description}</p>
                  <a className="btn btn-secondary" href={project.url}>
                    Go to Page <ArrowRightCircle size={40} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Projects;
