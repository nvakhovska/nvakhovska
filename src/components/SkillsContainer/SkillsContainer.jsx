import "./skillsContainer.css";

const SkillsContainer = ({ skill }) => {
  return (
    <li className="skills__list-item">
      <img
        src={import.meta.env.BASE_URL + skill.logo}
        alt={skill.name}
        className="skills__item-img"
      />
      <span className="skills__item-text">{skill.name}</span>
    </li>
  );
};

export default SkillsContainer;
