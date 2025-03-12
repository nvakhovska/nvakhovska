import { skills } from "../../portfolio";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import "./skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__list">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skills__category">
            <h3 className="skills__category-title">🔹 {skillCategory.category}</h3>
            <ul className="skills__category-list">
              {skillCategory.technologies.map((skill, idx) => (
                <SkillsContainer key={idx} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
