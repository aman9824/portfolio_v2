import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | Jan 2022 - Present</p>
        <ul className="job__points">
          <li> Designed and developed highly scalable systems using Java, Spring Boot, JavaScript, and React, achieving an average request response time of 500 milliseconds. </li>
          <li> Troubleshooted and resolved production and non-production issues by reviewing/debugging code using IntelliJ and Kibana, ensuring timely fixes and workarounds to meet deadlines. </li>
          <li> Demonstrated leadership by delivering Spring Boot-based Microservices and Batch Applications, promoting clean code programming skills, and mentoring team members. </li>
          <li> Ensured adherence to security, logging, error handling, and performance standards and non-functional requirements in code/configurations </li>
          <li> Tested and deployed microservices in OpenShift and Amazon EKS/EC2 environments using Docker, Helm, and Kubernetes technologies. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - Jan 2022</p>
        <ul className="job__points">
          <li> Maintained thorough and accurate documentation of all work in Confluence and Jira including status updates to summarize projects highlights validating those processes operate properly and conform to standards. </li>
          <li> Conducted testing of applications based on pre-written scripts created with Bash and Postman, focusing on functional and end-to-end testing to validate system responses and outputs against business requirements. </li>
          <li> Identified and created test automation suite and design necessary documentation for automated processes. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network | Jan 2021 - June 2021</p>
        <ul className="job__points">
          <li> Gained hands-on experience in professional software engineering practices and best practices for the full software development life cycle, including coding standards, code reviews, source control management, testing, and operations. </li>
          <li> Translated user needs into technical specifications, conceptualizing and facilitating technical requirements from users.  </li>
          <li> Proficient in agile development processes with hands-on Back-End development skills. </li>
          <li> Conducted preventative and corrective maintenance, troubleshooting, and fault rectification of system and core software components. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
