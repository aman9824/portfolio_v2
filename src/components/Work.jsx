import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | Jan 2022 - Present</p>
        <ul className="job__points">
          <li> Part of the Development and delivery Unit responsible for the CRM application for the telecom base customers. Involving E2E implementation activity starting from development to delivery. Maintained clean code practice and with 100% aim on automated test coverage. </li>
          <li> Spearheaded the design, development, and maintenance of software code, ensuring compliance with industry standards and optimizing processes through the implementation of DevOps practices. </li>
          <li> Investigated and swiftly resolved issues, conducting thorough code reviews, and debugging, leading to a 30% reduction in system downtime and a 20% increase in overall software reliability. </li>
          <li> Facilitated seamless collaboration within cross-functional teams, leading to efficient decision-making and prompt issue resolution, fostering a cohesive work environment. </li>
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
          <li> Contributed significantly to the development of scalable, fault-tolerant distributed storage, index, and query systems using Java and Python on low cost, and easy to manage/use. </li>
          <li> Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. </li>
          <li> Received recognition for proactive problem-solving and collaboration, directly impacting the successful completion of project milestones ahead of schedule. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
