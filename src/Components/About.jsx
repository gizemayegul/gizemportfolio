import React from "react";
import myPhoto from "../assets/myphoto-min.png";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Scrum Master"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about">
      <div id="about-wrapper">
        <Container>
          <h1 className="tagline">Welcome to my Portfolio</h1>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h1
                      style={{
                        backgroundColor:
                          "linear-gradient(to right, #800080, #FFC0CB)",
                      }}
                    >
                      {`Hi! I'm Gizem`}{" "}
                      <span
                        className="txt-rotate"
                        data-period="1000"
                        data-rotate='[ "Web Developer", "Scrum Master" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      With a background in Product Management and Agile
                      methodologies, I've honed strong communication skills and
                      a deep understanding of user experience. I am passionate
                      about creating interactive websites, seamlessly blending
                      my skills in product development with my love for crafting
                      engaging user experiences. I am always eager to learn and
                      grow, committed to staying current with the latest
                      technologies and approaches to continuously improve and
                      contribute effectively to any team. If you want to
                      collaborate, feel free to send me an email!
                    </p>
                    <button
                      className="btn btn-secondary"
                      style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                      onClick={(e) => handleNavClick(e, "#contact")}
                    >
                      Let’s Connect 🚀 <ArrowRightCircle size={40} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img className="astro" src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
