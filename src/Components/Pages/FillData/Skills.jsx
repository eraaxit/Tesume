
import styles from "./FillDataComponents.module.css";

const Skills = (props) => {

  const {skills,setSkills} = props
  
  const onChangeText = (e, i) => {
    let newArr = [...skills];
    newArr[i][e.target.name] = e.target.value;
    setSkills(newArr);
  };

  return (
    <div className={styles.addBox}>
    <h3 className={styles.heading}>Skills</h3>
      <div
        className={styles.plus}
        onClick={() =>
          setSkills([
            ...skills,
            {
              skillName: "",
              proficiency: "",
            },
          ])
        }
      >
        +
      </div>
      {skills.map((eachSkills, i) => (
        <div key={i} className={styles.moreInfo}>
          <input
            type="text"
            name="skillName"
            value={eachSkills.skillName}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Skill Name"
          />
          <br />
          <input
            type="text"
            name="proficiency"
            value={eachSkills.proficiency}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Proficiency"
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
