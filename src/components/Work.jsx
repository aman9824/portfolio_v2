import React from "react";

function Work() {
  return (
    <div className="experience-section">
      <h2 className="title">Work Experience</h2>
      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network</p>

        <ul className="job__points">
          <li> Contributed to the development of 3 projects using python, selenium, and scrapy. </li>
          <li> Modified existing website and added new functionality to make it more responsive and better for user experience. </li>
          <li> Generated backend endpoints using C# and ASP.NET core using MVC architecture. </li>
          <li> Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Full Stack Web Developer Intern</p>
        <p className="company__name">MacroLabs</p>
        <ul className="job__points">
          <li> Produced high-impact, user-friendly websites that accomplished all business goals. </li>
          <li> Writing documentation, maintaining code, and writing automated tests to ensure the product is of the highest quality. Testing software to ensure responsiveness and efficiency. </li>
          <li> Created landing pages, dashboards, and web applications using React.js, Next.js, and Redux frameworks in JavaScript. </li>
          <li> Received and refined concepts in order to put together effective roadmaps for full projects. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Full Stack Developer Intern</p>
        <p className="company__name">Akash TechnoLabs</p>
        <ul className="job__points">
          <li> Modified existing software systems to enhance performance and add new features which resulted in 20 percent faster performance. </li>
          <li> Completed code debugging and implemented fixes to resolve problems based on the priority system. </li>
          <li> Got hands-on experience with a variety of Amazon Web Services (AWS) product offerings (EC2, S3, Load Balancing, CloudSearch, ElastiCache, and more). </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
