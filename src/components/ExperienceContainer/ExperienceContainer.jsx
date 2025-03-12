import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faBuilding } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./experienceContainer.css";

const ExperienceContainer = ({ experience }) => {
  return (
    <div className="experience">
      <h3>{experience.name}</h3>

      <p className="experience__description">{experience.description}</p>
      {experience.description2 && (
        <p className="experience__description">{experience.description2}</p>
      )}

      <div className="experience__links">
        {experience.companyLink && (
          <a
            href={experience.companyLink}
            aria-label="Company Website"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title={`${experience.name} Company Website`}
          >
            <FontAwesomeIcon icon={faBuilding} />
          </a>
        )}
        {experience.projectLink && (
          <a
            href={experience.projectLink}
            aria-label="Project Link"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            title={`${experience.name} Project Link`}
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceContainer;
