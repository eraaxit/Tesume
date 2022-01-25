import styles from "./FillDataComponents.module.css";

const Education = (props) => {
  const { educations, setEducations } = props;

  const onChangeText = (e, i) => {
    let newArr = [...educations];
    newArr[i][e.target.name] = e.target.value;
    setEducations(newArr);
  };

  const handleremove = (i) => {
    const shortarr = educations
      .slice(0, i)
      .concat(educations.slice(i + 1, educations.length));
    setEducations(shortarr);
  };

  return (
    <div className={styles.addBox}>
      <h3 className={styles.heading}>Education</h3> 
       
      {educations.map((eachEducation, i) => (
        <div key={i} className={styles.moreInfo}>
          { i===0 ?"": <div className={styles.minus} onClick={() => handleremove(i)}>
              -
            </div>}
          <div className={styles.inputFields}>
          <input 
            type="text"
            name="institution_name"
            value={eachEducation.institution_name}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Institution Name"
          />
          <br /> 
          <input
            type="text"
            name="enroll_year"
            value={eachEducation.enroll_year}
            onChange={(e) => onChangeText(e, i)}
            placeholder="Enroll Year"
          />
          <br />
          <input
            type="text"
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
        </div>
      ))}
    </div>
  );
};

export default Education;
