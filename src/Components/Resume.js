import React from "react";
import Slides from "./Slides";
import resumePDF from "./assests/gizemayazyegulresume.pdf";

const Resume = () => {
  return (
    <section id="resume">
      <h1>Resume</h1>

      <div id="resume-wrapper">
        <div id="slides">
          <Slides />
        </div>
        <div>
          <h3>You can download my resume from here</h3>
        </div>
        <div>
          <a
            id="download"
            href={resumePDF}
            download
            className="btn btn-primary"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
