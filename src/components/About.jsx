import React from "react";
import Logo from "../assets/logo.jpg";
import {
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPython,
  SiPostgresql,
  SiGit,
  SiFlask,
  SiSpring,
  SiSpringsecurity,
  SiApachemaven,
  SiApachekafka,
  SiCss3,
  SiAmazonec2,
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
            🎓 New Grad with a Bachelor's Of Science in Computer Science
            (June 2021).
          </p>
          <p>
            I am originally from India 🇮🇳 and have moved to Canada 🇨🇦 in 2018.
          </p>
          <p>
            👨‍💻 Software Developer at Amdocs.
          </p>
          <p>
            As for my future, I am seeking to work as a Backend Developer | Software Developer with a diverse team.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills-section">
          <div className="skills-grid">
            <p className="skill">
              <span>
                <SiJava />
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
                <SiSpringsecurity />
              </span>
              Spring Security
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
                <SiAmazonec2 />
              </span>
              AWS EC2
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
