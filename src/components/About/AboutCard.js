import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Punit Giri </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I am a  pre-final year student pursuing Electronics and Computer Science with honours in Data Science from Fr. Conceicao Rodrigues college of Engineering
            <br />
            Additionally, I am currently Technical and Marketing Lead at GDSC CRCE
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Punit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
