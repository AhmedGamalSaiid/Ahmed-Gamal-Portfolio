import React, { Component } from "react";
import "./Skills.css";
import { skills } from "../../assets/data/portfolio";
import { Fade } from "react-reveal";
import { withTranslation } from "react-i18next";
import ConsultationVector from "./ConsultationVector";
import FullStackImg from "./FullStackImg";
import FrontEndVector from "./FrontEndVector";
import TeachingVector from "./TeachingVector";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "ConsultationVector")
    return <ConsultationVector theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "FrontEndVector")
    return <FrontEndVector theme={props.theme} />;
  else if (props.fileName === "TeachingVector")
    return <TeachingVector theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

// Maps each skill entry (by its illustration) to its key under "skills.items"
// in the locale files. Entries without a key fall back to the raw data.
const SKILL_I18N_KEYS = {
  FrontEndVector: "frontend",
  TeachingVector: "teaching",
  ConsultationVector: "consultation",
};

class SkillSection extends Component {
  render() {
    const { theme, t } = this.props;
    return (
      <div className="skills-section">
        {skills.data.map((skill, i) => {
          const key = SKILL_I18N_KEYS[skill.fileName];
          const title = key ? t(`skills.items.${key}.title`) : skill.title;
          const points = key
            ? t(`skills.items.${key}.points`, { returnObjects: true })
            : skill.skills;
          return (
            <div key={i} className={i % 2 == 0 ? `skills-main-div` : 'skills-main-div reverse'}>
              <div className="img-fade-cont">
              <Fade right={i % 2} left={i % 2 == 0} duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              </div>
              <div className="skills-text-div">
                <Fade left={i % 2} right={i % 2 == 0} duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {title}
                  </h1>
                </Fade>
                <Fade left={i % 2} right={i % 2 == 0} duration={2000}>
                  <div>
                    {points.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withTranslation()(SkillSection);
