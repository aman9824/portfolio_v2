import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | Jan 2022 - Present</p>
        <ul className="job__points">
          <li> Hands on product design and develop with Java, Spring Boot, JavaScript and React in a highly scalable system with average request response time of 500 millisecond. </li>
          <li> Troubleshooted and resolved production and non-production issues by reviewing/debugging code using IntelliJ and Kibana and provided fixes and workarounds in timely manner to ensure deadlines were met. </li>
          <li> Following “Leading by example principle” Deliver Spring Boot base Microservices, Batch Application, and enable clean code programming skills and mentoring team. </li>
          <li> Well versed in agile development process with Hands-on B/E development skills. </li>
          <li> Tested and deployed microservices in OpenShift and Amazon EKS/EC2 environments using Docker, Helm, and Kubernetes technologies. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - Jan 2022</p>
        <ul className="job__points">
          <li> Maintained thorough and accurate documentation of all work in Confluence and Jira including status updates to summarize projects highlights validating those processes operate properly and conform to standards. </li>
          <li> Performed testing of applications based on pre-written scripts created with Bash and Postman, focusing on functional and end-to-end testing, validating that system response and output accurately reflect business requirements as outlined in requirements document. </li>
          <li> Identified and created test automation suite and design necessary documentation for automated processes. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network | Jan 2021 - June 2021</p>
        <ul className="job__points">
          <li> Built distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use. </li>
          <li> Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.  </li>
          <li> Hands-on JAVA B/E development, refactoring, and application performance tuning. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
