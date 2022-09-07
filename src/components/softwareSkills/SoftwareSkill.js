import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection,otherSkills} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
        <hr />
        <ul className="dev-icons">
          {otherSkills.map((skills, i) => {
            return (
              <li
                className="software-skill-inline"
                name={skills.skillName}
              >
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
