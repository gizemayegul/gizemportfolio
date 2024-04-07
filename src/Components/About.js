import React from "react";
import myPhoto from "./assests/myphoto-min.png";

const About = () => {
  return (
    <section id="about">
      <div id="about-wrapper">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="about-image-holder">
            <img
              src={myPhoto}
              className="img-thumbnail"
              alt="..."
              style={{ borderRadius: "50%", width: "50%", height: "auto" }}
            />
          </div>
          <h2 className="text-center" style={{ margin: "1rem" }}>
            Hello Welcome to my Page!
          </h2>
          <p className="text-center">
            {" "}
            🎯 Just Finished Web Development Bootcamp at Ironhack! 👀 Learning
            <br />
            🏆 And our project selected 1st among the other web projects 🏆 🥂
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/posts/ironhack-germany_last-friday-we-hosted-the-final-hackshow-activity-7142911688139317249-F5cN?utm_source=share&utm_medium=member_desktop"
            >
              <br />
              Check
            </a>{" "}
          </p>
        </div>

        <div className="row" style={{ padding: "3rem" }}>
          <p>
            {" "}
            I come from a background in Product and Agile, where I've developed
            solid communication skills, effective prioritization abilities, and
            a sharp understanding of user experience. Understanding and pointing
            out the needs of stakeholders helps me grasp the requirements very
            easily. Even though I don’t have direct experience as a web
            developer, my early curiosity in the field has been present since
            childhood, leading me to always maintain interest and slowly develop
            some skills even before I decided to change my career to web
            development. Through personal projects and collaborative efforts
            during boot camp, I've delved into the world of web development and
            realized that the joy of working with software and overcoming
            challenges is addictive. Being an experienced product owner has
            allowed me to seamlessly work with developers, and quickly grasp
            technical aspects, and also my scrum master experiences enabling me
            to navigate and overcome obstacles with ease. What I bring to the
            table is not just a set of skills, but also my endless curiosity and
            a commitment to continuous learning. I am confident in my ability to
            be a significant asset to any team, offering not only my existing
            knowledge but also a dedication to staying current with the latest
            technologies and approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
