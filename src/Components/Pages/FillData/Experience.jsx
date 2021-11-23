import { useState } from "react";
import styles from "./FillDataStyles.module.css";

const Experience = () => {
  const [Experiences, setExperiences] = useState([
    {
      title: "",
      period: "",
      organization: ""
    },
  ]);
  const onChangeText = (e, i) => {
    let newArr = [...Experiences];
    newArr[i][e.target.name] = e.target.value;
    setExperiences(newArr);
  };

  return (
    <div className={styles.addBox}>
    <h3 className={styles.heading}>Experience</h3>
      <div
        className={styles.plus}
        onClick={() =>
          setExperiences([
            ...Experiences,
            {
              title: "",
              period: "",
              organization: "",
              grades: "",
            },
          ])
        }
      >
        +
      </div>
      {Experiences.map((eachExperience, i) => (
        <div key={i} className={styles.moreInfo}>
          <input
            type="text"
            name="title"
            value={eachExperience.title}
            onChange={(e) => onChangeText(e, i)}
            placeholder="title"
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
      ))}
    </div>
  );
};

export default Experience;
