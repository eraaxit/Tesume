
import styles from "./FillDataStyles.module.css";

const Education = (props) => {
  
  const {educations,setEducations} = props

  const onChangeText = (e, i) => {
    let newArr = [...educations];
    newArr[i][e.target.name] = e.target.value;
    setEducations(newArr);
  };

  return (
    <div className={styles.addBox}>
    <h3 className={styles.heading}>Education</h3>
      <div
        className={styles.plus}
        onClick={() =>
          setEducations([
            ...educations,
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
      {educations.map((eachEducation, i) => (
        <div key={i} className={styles.moreInfo}>
          <input
            type="text"
            name="institution_name"
            value={eachEducation.institution_name}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Institution Name"
          />
          <br />
          <input
            type="number"
            name="enroll_year"
            value={eachEducation.enroll_year}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Enroll Year"
          />
                    <br />
          <input
            type="number"
            name="passout_year"
            value={eachEducation.passout_year}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Passout Year"
          />
                    <br />
          <input
            type="text"
            name="grades"
            value={eachEducation.grades}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Grades"
          />
        </div>
      ))}
    </div>
  );
};

export default Education;
