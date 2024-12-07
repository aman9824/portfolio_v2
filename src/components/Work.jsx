import React from "react";

function Work() {
  return (
    <div className="experience-section">
      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | January 2022 - April 2024</p>
        <p className="job_description">
          Developed and maintained full stack services in AWS and OpenShift
          platform. I translated end-user requirements into technical
          speciﬁcations, meticulously considering edge cases, and ensured
          seamless communication with internal partners. I took full ownership
          of the applications I developed, providing ongoing support and swiftly
          addressing user reported issues.
        </p>
        <ul className="job__points">
          <li>
            {" "}
            Developed and maintained resilient React Micro Front-end and Node /
            Spring boot Microservices applications including analysis, design,
            development, and implementation.{" "}
          </li>
          <li>
            {" "}
            Built low latency, highly resilient and scalable cross-browser
            compatible services.{" "}
          </li>
          <li>
            {" "}
            Collaborated with technology partners to ensure conﬁgurations and
            custom components met application requirements and performance
            goals.{" "}
          </li>
          <li>
            {" "}
            Documented system components and architecture designs, ensuring
            compliance with security, integration, and operability standards,
            and utilized Jira and Confluence for project management and
            documentation.{" "}
          </li>
          <li>
            {" "}
            Maintained high-quality code, providing maintenance and support
            during testing cycles and post-production using unit testing
            techniques, and participated in peer code reviews to uphold coding
            standards.{" "}
          </li>
          <li>
            {" "}
            Assisted in the development and maintenance of processes that
            prevented issues, ensuring timely resolution of incidents and
            adherence to best practices.{" "}
          </li>
        </ul>
        <p className="job_description">
          <strong>Accomplishments:</strong>
        </p>
        <ul className="job__points">
          <li>
            {" "}
            Streamlined support operations by executing small enhancements and
            source code ﬁxes in services, resulting in a 30% reduction in
            downtime.{" "}
          </li>
          <li>
            {" "}
            Provided technical expertise during incident management in AWS, and
            OpenShift environments, reducing incident resolution time by 20%
            through effective analysis and communication.{" "}
          </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - January 2022</p>
        <p className="job_description">
          Performed hands-on testing activities: analysis, design, execution,
          maintenance, test creation, and process support within a given
          functional area to support the delivery of quality solutions by
          automating tests and creating/enhancing automation frameworks.
        </p>
        <ul className="job__points">
          <li>
            {" "}
            Developed and executed test cases based on analysis of business
            requirements, design specifications, and architecture blueprints.{" "}
          </li>
          <li>
            {" "}
            Analyzed, developed, debugged, and maintained both manual and
            automated test suites, including traceability matrices, and assisted
            in defect resolution.{" "}
          </li>
          <li>
            {" "}
            Implemented functional and non-functional automation approaches,
            including performance, reliability testing, and security testing,
            integrating them into CI/CD/CT pipelines.{" "}
          </li>
          <li>
            {" "}
            Utilized tools for test automation and management, including Jenkins
            and Bitbucket to support automation activities.{" "}
          </li>
          <li>
            {" "}
            Documented and supported the proactive identification of end-to-end
            test solution designs in Jira and Confluence, including updating
            knowledge bases and identifying early automation opportunities.{" "}
          </li>
        </ul>
        <p className="job_description">
          <strong>Accomplishments:</strong>
        </p>
        <ul className="job__points">
          <li>
            {" "}
            Contributed to test planning and hands-on test design, development,
            and maintenance using test automation frameworks and tools like
            Selenium and JUnit, leading to a 20% reduction in test cycle time
            and a 15% increase in defect detection rate.{" "}
          </li>
          <li>
            {" "}
            Integrated into the continuous delivery process using CI/CD
            pipelines and DevOps practices, enhancing software delivery speed by
            25% while maintaining high-quality standards.{" "}
          </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">
          The Graduate Network | January 2021 - June 2021
        </p>
        <p className="job_description">
          Worked on both the front end and back-end services. Wrote
          maintainable, testable, and high-performance code according to
          industry standards and collaborated with senior developers in code
          reviews and testing.
        </p>
        <ul className="job__points">
          <li>
            {" "}
            Assisted in developing web applications by writing clean,
            maintainable, and testable code.{" "}
          </li>
          <li>
            {" "}
            Collaborated with senior developers in code reviews and testing,
            contributing to the overall quality and performance of the software.{" "}
          </li>
          <li>
            {" "}
            Provided feedback, reporting, and analytics on overall quality,
            performance, user experience, and future bug prevention.{" "}
          </li>
          <li>
            {" "}
            Translated user needs into technical specifications, conceptualizing
            and facilitating technical requirements from users.{" "}
          </li>
        </ul>
        <p className="job_description">
          <strong>Accomplishments:</strong>
        </p>
        <ul className="job__points">
          <li>
            {" "}
            Troubleshooted and resolved production and non-production issues by
            reviewing/debugging code using IntelliJ and Kibana, ensuring timely
            fixes and workarounds to meet deadlines.{" "}
          </li>
          <li>
            {" "}
            Contributed to a collaborative coding platform project, working
            closely with team members to implement core features and improve
            software workflows.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
