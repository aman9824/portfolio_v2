import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Software Developer</p>
        <p className="company__name">Amdocs | Jan 2022 - Present</p>
        <ul className="job__points">
          <li> Design, develop, modify, debug and/or maintain software code according to functional, non-functional and technical design specifications. </li>
          <li> Investigate issues by reviewing/debugging code, provides fixes and workarounds, and reviews changes for operability to maintain existing software solutions. </li>
          <li> Work within a team, collaborate and add value through participation in peer code reviews, provide comments and suggestions, work with cross-functional teams to achieve goals. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Junior Quality Automation Engineer</p>
        <p className="company__name">Equifax | July 2021 - Jan 2022</p>
        <ul className="job__points">
          <li> Maintained thorough and accurate documentation of all work including status updates to summarize project highlights validating those processes operate properly and conform to standards. </li>
          <li> Perform testing of applications based on pre-written scripts, focusing on functional and end-to-end testing, validating that system response and output accurately reflect business requirements as outlined in requirements document. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network | Jan 2021 - June 2021</p>
        <ul className="job__points">
          <li> Worked in an agile environment to deliver high-quality software. </li>
          <li> Built distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use. </li>
          <li> Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
