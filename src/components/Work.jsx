import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | Jan 2022 - Present</p>
        <ul className="job__points">
          <li> Spearheaded the development of critical modules for the CRM application using Java and Spring Boot, resulting in a 20% improvement in system efficiency. </li>
          <li> Implemented automated testing procedures with JUnit and Mockito, achieving a 30% reduction in debugging time and ensuring 100% code coverage. </li>
          <li> Collaborated with cross-functional teams in peer code reviews, utilizing Git and Bitbucket, significantly improving code quality and adherence to best practices. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - Jan 2022</p>
        <ul className="job__points">
          <li> Executed comprehensive functional and end-to-end testing procedures using automated scripts, ensuring the accuracy of system responses and outputs in alignment with business requirements. </li>
          <li> Implemented a streamlined documentation process using tools like Confluence, reducing the time spent on project status updates by 15% and enhancing team communication. </li>
          <li> Played a key role in identifying and resolving critical system issues, utilizing debugging tools and collaborating with development teams, contributing to a 25% improvement in overall application reliability. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network | Jan 2021 - June 2021</p>
        <ul className="job__points">
          <li> Contributed significantly to the development of scalable, fault-tolerant distributed storage, index, and query systems using Java and Python, resulting in a 40% improvement in system performance. </li>
          <li> Led the adoption of best practices in software engineering, including coding standards and rigorous testing with JUnit, Mockito, and other tools, resulting in a 20% reduction in post-release defects. </li>
          <li> Received recognition for proactive problem-solving and collaboration, directly impacting the successful completion of project milestones ahead of schedule. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
