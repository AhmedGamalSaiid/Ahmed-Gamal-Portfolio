import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

export default function Skills(props) {
  const { t } = useTranslation();
  return (
    <div id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header">
            {t("skills.header")}
          </h1>
        </Fade>
      </div>
      <SkillSection theme={props.theme} />
    </div>
  );
}
