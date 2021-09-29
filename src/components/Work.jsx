import React from "react";

function Work() {
  return (
    <div className="experience-section">

      <h2 className="title">Work Experience</h2>

      <div className="job">
        <p className="job__title">Junior Automation Engineer</p>
        <p className="company__name">Equifax</p>
        <ul className="job__points">
          <li> Maintained thorough and accurate documentation of all work including status updates to summarize project highlights validating those processes operate properly and conform to standards. </li>
          <li> Perform testing of applications based on pre-written scripts, focusing on functional and end-to-end testing, validating that system response and output accurately reflect business requirements as outlined in requirements document. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Software Developer Intern</p>
        <p className="company__name">The Graduate Network</p>
        <ul className="job__points">
          <li> Worked in an agile environment to deliver high-quality software. </li>
          <li> Built distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use. </li>
          <li> Got hands-on experience in professional software engineering practices & best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations. </li>
        </ul>
      </div>

      <div className="job">
        <p className="job__title">Full Stack Web Developer Intern</p>
        <p className="company__name">MacroLabs</p>
        <ul className="job__points">
          <li> Produced high-impact, user-friendly websites that accomplished all business goals. </li>
          <li> Create solutions to run predictions on distributed systems with exposure to innovative technologies at incredible scale and speed. </li>
          <li> Collaborate with experienced cross-disciplinary seniors to conceive, design, and bring innovative products and services to market. </li>
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
