
import styles from "./FillDataComponents.module.css";

const Experience = (props) => {

  const {experiences,setExperiences} = props
  
  const onChangeText = (e, i) => {
    let newArr = [...experiences];
    newArr[i][e.target.name] = e.target.value;
    setExperiences(newArr);
  };

  const handleremove = (i) => {
    const shortarr = experiences
      .slice(0, i)
      .concat(experiences.slice(i + 1, experiences.length));
    setExperiences(shortarr);
  };

  return (
    <div className={styles.addBox}>
    <h3 className={styles.heading}>Experience</h3>
      {experiences.map((eachExperience, i) => (
        <div key={i} className={styles.moreInfo}>
           { i===0 ?"": <div className={styles.minus} onClick={() => handleremove(i)}>
              -
            </div>}
          <div className={styles.inputFields}>
          <input
            type="text"
            name="title"
            value={eachExperience.title}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Title"
          />
          <br />
          <input
            type="text"
            name="period"
            value={eachExperience.period}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Period"
          />
                    <br />
          <input
            type="text"
            name="organization"
            value={eachExperience.organization}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Organisation"
          />
          </div>
          <div
              className={styles.plus}
              onClick={() =>
                setExperiences([
                  ...experiences,
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

export default Experience;
