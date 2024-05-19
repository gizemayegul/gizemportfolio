import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Container } from "react-bootstrap";

const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const ContactMe = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const sendEmail = (e) => {
    console.log("anan");
    e.preventDefault();
    const templateParams = {
      to_name: "Gizem",
      from_name: name,
      message: text,
      reply_to: email,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      },
      (error) => {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    );

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="contact">
      <Container>
        <form id="contact" ref={form} onSubmit={sendEmail}>
          <h1 className="contact-title">Contact Me</h1>
          <div className="form-group">
            <label htmlFor="name" className="label">
              {" "}
              Name{" "}
            </label>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Name"
              name="Name"
              autoComplete="on"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              name="Email"
              type="email"
              className="form-control"
              placeholder="name@example.com"
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="label">
              Text me
            </label>
            <textarea
              className="form-control"
              name="Textarea"
              rows={3}
              autoComplete="on"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-secondary form-btn"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
        {showAlert && (
          <div className="alert alert-success mt-3">
            Thank you for your email, I will get back to you as soon as
            possible!
          </div>
        )}
        {showError && (
          <div className="alert alert-danger mt-3">
            Some problem has occurred, please reach out later.
          </div>
        )}
      </Container>
    </div>
  );
};

export default ContactMe;
