import React from "react";
import Book from "../assets/book.png";
import Think from "../assets/e-commerce1.png";
import Issue from "../assets/MusicXML.png";

function Projects() {
  return (
    <div className="project__container" style={{ overflowX: "hidden" }}>
      <h2 className="title">Some of my Projects</h2>
      <section
        className="card"
        style={{ overflowX: "hidden" }}
      >
        <img src={Issue} alt="card 1" />
        <div>
          <h3>MusicXML Convertor</h3>
          <ul>
            <li>
              Developed MusicXML Convertor using Java and JavaFX.
            </li>
            <li>
              This is a Final Year project, which is made and developed solely by students.
            </li>

            <li>
              Collaborated with other team members using Git.
            </li>
          </ul>
          <p style={{ color: "red" }}>Note: Work in Progress</p>
          <div className="btns">
            <a
              href="https://github.com/aman9824/2311-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
            <p className="code__btn">Code</p>
            </a>
          </div>
        </div>
      </section>
      <section className="card" data-aos="fade-left">
        <img src={Book} alt="card 1" />
        <div>
          <h3>Mom & Pop Book Store</h3>
          <ul>
            <li>Build Online Ecommerce Website for Books.</li>
            <li>
              Used over 28000 books data for the website without affecting the
              web performance. Implemented pagination on both frontend and
              backend to reduce network payload.
            </li>
            <li>Collaborated with team using Git and Github.</li>
            <li>Tech Used: ReactJS, Spring Boot, IBM DB2.</li>
          </ul>
          <p style={{ color: "red" }}>
            Note: Might take few seconds to load. Deployed on Free Tier on
            Heroku
          </p>
          <div className="btns">
            <a
              href="https://frontend-4413.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="live__btn">Live</p>
            </a>
            <a
              href="https://github.com/aman9824/4413-Backend-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="code__btn">Code</p>
            </a>
          </div>
        </div>
      </section>

      <section className="card" data-aos="fade-right">
        <img src={Think} alt="card 1" />
        <div>
          <h3>E-Commerce Web App</h3>
          <ul>
            <li>Online E-Commerce website.</li>
            <li>Build backend API in Express.js.</li>
            <li>Performed API testing with Postman and Software testing with Jest.</li>
            <li>Implemented Authentication using JWT tokens</li>
            <li>Tech Used: ReactJS, NodeJS, Express, PostgreSQL</li>
          </ul>
          <p style={{ color: "red" }}>
            Note: Might take few seconds to load. Deployed on Free Tier on
            Heroku
          </p>
          <div className="btns">
            <a
              href="http://gnmjbooks.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="live__btn">Live</p>
            </a>
            <a
              href="https://github.com/aman9824/E-Commerce-Web-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="code__btn">Code</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
