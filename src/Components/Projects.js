import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projectsData from "./data";
console.log(projectsData);

const Projects = () => {
  return (
    <section id="project">
      <h1>Projects</h1>
      <div id="wrapper" className="row row-cols-1 row-cols-md-3 g-4">
        {projectsData.map((project) => {
          return (
            <div className="col">
              <div className="card h-100">
                <div className="image-holder">
                  <img
                    src={project.imgUrl}
                    className="card-img-top"
                    size
                    alt="reframeproj"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">{project.description}</p>
                  <h5 className="card-title">{project.title}</h5>
                  <a href={project.url}>Check it </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
