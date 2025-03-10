import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  return (
    <div id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header">
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={props.theme} />
    </div>
  );
}
