
import styles from "./FillDataComponents.module.css";

const Skills = (props) => {

  const {skills,setSkills} = props
  
  const onChangeText = (e, i) => {
    let newArr = [...skills];
    newArr[i][e.target.name] = e.target.value;
    setSkills(newArr);
  };

  const handleremove = (i) => {
    const shortarr = skills
      .slice(0, i)
      .concat(skills.slice(i + 1, skills.length));
    setSkills(shortarr);
  };

  return (
    <div className={styles.addBox}>
    <h3 className={styles.heading}>Skills</h3>
      {skills.map((eachSkills, i) => (
        <div key={i} className={styles.moreInfo}>
           { i===0 ?"": <div className={styles.minus} onClick={() => handleremove(i)}>
              -
            </div>}
          <div className={styles.inputFields}>
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
          
          <div
              className={styles.plus}
              onClick={() =>
                setSkills([
                  ...skills,
                  {
                    institution_name: "",
                    enroll_year: "",
                    passout_year: "",
                    grades: "",
                  },
                ])
              }
            >
              +
            </div>
        </div>
      ))}
      
    </div>
  );
};

export default Skills;
