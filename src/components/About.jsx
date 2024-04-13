import React from "react";
import Logo from "../assets/logo.jpg";
import {FaJava} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiGit,
  SiFlask,
  SiSpring,
  SiHelm,
  SiApachemaven,
  SiApachekafka,
  SiCss3,
  SiJenkins,
  SiHtml5,
  SiAmazonaws
} from "react-icons/si";

function About() {
  return (
    <div className="about__container">
      <h2 className="title">About me</h2>
      <div className="info">
        <div className="image">
          <img src={Logo} alt="me" />
        </div>
        <div className="text">
          <p>
            With around 3 years of experience, I have a strong background in B/E development.
          </p>
          <p>
            Specializing in RESTful APIs and event-driven systems. Skilled in Java, Spring Boot, JavaScript, microservices and Kafka with proficiency in backend-driven UI development with Camunda for BPMN-based processes.
          </p>
          <p>
            👨‍💻 Software Developer @ Amdocs | AWS CCP Certified
          </p>
          <p>
            Adept problem-solver with analytical thinking, dedicated to agile practices. Passionate about learning and staying updated on emerging technologies.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills-section">
          <div className="skills-grid">
            <p className="skill">
              <span>
                <FaJava />
              </span>
              Java
            </p>
            <p className="skill">
              <span>
                <SiGit />
              </span>
              Version Control
            </p>
            <p className="skill">
              <span>
                <SiPostgresql />
              </span>
              Postgres
            </p>
            <p className="skill">
              <span>
                <SiPython />
              </span>
              Python
            </p>
            <p className="skill">
              <span>
                <SiSpring />
              </span>
              Spring
            </p>
            <p className="skill">
              <span>
                <SiHelm />
              </span>
              Helm
            </p>
            <p className="skill">
              <span>
                <SiTypescript />
              </span>
              Typescript
            </p>
            <p className="skill">
              <span>
                <SiJavascript />
              </span>
              Javascript
            </p>
            <p className="skill">
              <span>
                <SiAmazonaws />
              </span>
              AWS
            </p>
            <p className="skill">
              <span>
                <SiApachemaven />
              </span>
              Maven
            </p>
            <p className="skill">
              <span>
                <SiApachekafka />
              </span>
              Apache Kafka
            </p>
            <p className="skill">
              <span>
                <SiCss3 />
              </span>
              CSS
            </p>
            <p className="skill">
              <span>
                <SiJenkins />
              </span>
              Jenkins
            </p>
            <p className="skill">
              <span>
                <SiHtml5 />
              </span>
              HTML5
            </p>
            <p className="skill">
              <span>
                <SiFlask />
              </span>
              Flask
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
