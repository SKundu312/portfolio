import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreya Kundu</span>
            from <span className="purple"> Lucknow, India.</span>
            <br />I am a pre-final year student pursuing B.Tech in Electronics and Communication Engineering from National Institute of Technology, Kurukshetra. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Theatre-acting
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shreya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
