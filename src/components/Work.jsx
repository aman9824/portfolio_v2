import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | January 2022 - April 2024</p>
        <ul className="job__points">
          <li> Developed and managed scalable systems in agile environment using Java, Spring Boot, and JavaScript aligning with design specifications to <strong> achieve an impressive average request response time of 500 milliseconds </strong>, enhancing system performance and reliability. </li>
          <li> Wrote clean, maintainable, and testable code with <strong> clean code practices </strong> with almost 100% aim on test coverage using <strong> Mockito and TestNG </strong> for features.  </li>
          <li> Ensured adherence to <strong> security, logging, error handling, and performance standards </strong> and non-functional requirements in code/configurations,<strong> resulting in a 20% reduction in system errors. </strong> </li>
          <li> Investigated and resolved technical issues across production and non-production environments by <strong> analyzing and debugging code </strong>; implemented <strong> effective fixes and workarounds </strong> to ensure project timelines were met and exceeded consistently. </li>
          <li> Orchestrated the <strong> testing and deployment of microservices in OpenShift and Amazon EKS/EC2 </strong> environments leveraging Docker, Helm, and Kubernetes technologies. </li>
          <li> Optimized <strong> application performance </strong> on PET environment by implementing strategic adjustments based on insights from <strong> AppDynamics and JMeter, achieved 40% reduction in response time and a 25% increase in system efficiency. </strong> </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - January 2022</p>
        <ul className="job__points">
          <li> Handled <strong> detailed project records on Confluence and Jira </strong>, providing regular updates, guaranteeing <strong> operational effectiveness and adherence to standards </strong>, resulting in improved project outcomes.  </li>
          <li> Conducted testing of applications based on <strong> pre-written scripts created with Bash and Postman </strong>, achieving a 95% pass rate for automated tests.  </li>
          <li> <strong> Identified and created test automation suite </strong> and design necessary documentation for processes, resulting in a <strong> 40% reduction </strong> in manual testing efforts.  </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network | January 2021 - June 2021</p>
        <ul className="job__points">
          <li> Managed troubleshooting efforts for system components, identifying and resolving issues that resulted in a <strong> 30% reduction in critical system failures and accelerated operational efficiency. </strong> </li>
          <li> Deployed <strong> highly scalable, fault-tolerant distributed storage, indexing, and query systems </strong>; decreased system downtime by 60%. </li>
          <li> Orchestrated the implementation of <strong> professional software engineering practices </strong>, including <strong> coding standards, code reviews, and testing protocols </strong>; improved code quality by 30%. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
