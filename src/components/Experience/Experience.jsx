import { v4 as uuidv4 } from "uuid";
import { workExperience, about } from "../../portfolio";
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";

// Styles
import "./experience.css";

const Experience = () => {
  if (!workExperience.length) return null;

  return (
    <section className="section experience" id="experience">
      <h2 className="section__title">Work Experience</h2>
      <div className="experience__grid">
        {workExperience.map((job) => (
          <ExperienceContainer key={uuidv4()} experience={job} />
        ))}
      </div>
      <p className="experience__more">
        More details about my professional experience can be found on my{" "}
        <a
          className="link"
          href={`${about.social.linkedin}/details/experience/`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a>
        !
      </p>
    </section>
  );
};
export default Experience;
