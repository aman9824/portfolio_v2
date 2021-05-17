import React from "react";
import Logo from "../assets/logo.jpg";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiNextDotJs,
  SiTypescript,
  SiJavascript,
  SiJava,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiRedux,
   SiJest,
  SiGit,
  SiAngular,
  SiFlask,
  SiCsharp
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
            (May 2021).
          </p>
          <p>
            I am originally from India 🇮🇳 and have moved to Canada 🇨🇦 in 2018.
          </p>
          <p>
            👨‍💻 Software Developer at The Graduate Network. Building backend API using Python, Flask, Selenium and MongoDB.
          </p>
          <p>
            As for my future, I am seeking to work as a Full Stack Developer /
            Backend Developer / Software Developer / Frontend Developer with a diverse team.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills-section">
          <div className="skills-grid">
            <p className="skill">
              <span>
                <FaReact />
              </span>
              ReactJs
            </p>
            <p className="skill">
              <span>
                <FaNodeJs />
              </span>
              NodeJs
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
                <SiRedux />
              </span>
              Redux
            </p>
            <p className="skill">
              <span>
                <SiNextDotJs />
              </span>
              NextJs
            </p>
            <p className="skill">
              <span>
                <SiJest />
              </span>
              Jest
            </p>
            <p className="skill">
              <span>
                <FaSass />
              </span>
              Sass/SCSS
            </p>
            <p className="skill">
              <span>
                <SiGit />
              </span>
              Version Control
            </p>
            <p className="skill">
              <span>
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="skill">
              <span>
                <SiPostgresql />
              </span>
              Postgres
            </p>
            <p className="skill">
              <span>
                <SiJava />
              </span>
              Java
            </p>
            <p className="skill">
              <span>
                <SiPython />
              </span>
              Python
            </p>
            <p className="skill">
              <span>
                <SiFlask />
              </span>
              Flask
            </p>
            <p className="skill">
              <span>
                <SiPython />
              </span>
              Selenium
            </p>
            <p className="skill">
              <span>
                <SiCsharp />
              </span>
              C#
            </p>
            <p className="skill">
              <span>
                <SiCsharp />
              </span>
              ASP.NET
            </p>
            <p className="skill">
              <span>
                <SiAngular />
              </span>
              Angular
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
