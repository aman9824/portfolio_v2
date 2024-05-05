import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | Jan 2022 - Present</p>
        <ul className="job__points">
          <li> Developed, implemented, and maintained highly scalable systems in agile environment with Java, Spring Boot, JavaScript and ReactJS according to functional, non-functional, and technical design specification achieving an average request response time of 500 milliseconds. </li>
          <li> Writing clean, maintainable, and testable code with clean code practices with almost 100% aim on automated test coverages using Mockito and TestNG for features. </li>
          <li> Ensured adherence to security, logging, error handling, and performance standards and non-functional requirements in code/configurations, resulting in a 20% reduction in system errors. </li>
          <li> Troubleshooted and resolved production and non-production issues by reviewing/debugging code and provided fixes and workarounds in timely manner to ensure deadlines were met. </li>
          <li> Tested and deployed microservices in OpenShift and Amazon EKS/EC2 environments using Docker, Helm, and Kubernetes technologies. </li>
          <li> Performed performance tuning of application on PET environment using AppDynamics and JMeter. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - Jan 2022</p>
        <ul className="job__points">
          <li> Maintained thorough and accurate documentation of all work in Confluence and Jira including status updates to summarize projects highlights validating those processes operate properly and conform to standards. </li>
          <li> Conducted testing of applications based on pre-written scripts created with Bash and Postman, achieving a 95% pass rate for automated tests. </li>
          <li> Identified and created test automation suite and design necessary documentation for automated processes, resulting in a 40% reduction in manual testing efforts. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network | Jan 2021 - June 2021</p>
        <ul className="job__points">
          <li> Conducted preventative and corrective maintenance, troubleshooting, and fault rectification of system and core software components. </li>
          <li> Built distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use.  </li>
          <li> Gained hands-on experience in professional software engineering practices and best practices for the full software development life cycle, including coding standards, code reviews, source control management, testing, and operations. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
