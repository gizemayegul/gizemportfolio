import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectsData from "../assets/data";

const Projects = () => {
  return (
    <section id="project">
      <h1>Projects</h1>

      <div id="wrapper" className="row row-cols-1 row-cols-md-4 g-4">
        {projectsData.map((project, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <div className="image-holder">
                <img
                  src={project.imgUrl}
                  className="card-img-top"
                  alt={project.title + "image"}
                />
              </div>
              <div className="card-body">
                <a className="btn btn-secondary" href={project.url}>
                  Check it{" "}
                </a>
                <p className="card-text">{project.description}</p>
                <h5 className="card-title">{project.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
