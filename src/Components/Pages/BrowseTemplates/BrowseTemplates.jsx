// formState is the global state and formData is the local state of the componenet

import styles from "./BrowseTemplates.module.css";
import T1 from "../../Templates/T1/T1";
import T2 from "../../Templates/T2/T2";
import T3 from "../../Templates/T3/T3";
import T4 from "../../Templates/T4/T4";
import T5 from "../../Templates/T5/T5";
import React, { useContext, useState } from "react";
import FormContext from "../../Context/FormContext";
import Education from "../FillData/Education";
import Experience from "../FillData/Experience";
import Skills from "../FillData/Skills";

const BrowseTemplates = () => {

  const formContext = useContext(FormContext);
  // const { addData } = formContext;

  const [step, setStep] = useState(1);
  const handleRightArrow = () => {
    if (step === 2) {
      setStep(1);
      return;
    }
    setStep(step + 1);
  };

  const handleLeftArrow = () => {
    if (step === 1) {
      setStep(2);
      return;
    }
    setStep(step - 1);
  };
  


  const [formData, setFormData] = useState(formContext);
  const { name, currentProfession } = formData;

  const changeText = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const [educations, setEducations] = useState(
    formData.educations
  );

  const [experiences, setExperiences] = useState(formData.experiences
  );

  const [skills, setSkills] = useState(formData.skills);

//   const nextFunction = () => {
//     addData({
//       name: formData.name,
//       currentProfession: formData.currentProfession,
//       socialLinks:formData.socialLinks,
//       educations:educations,
//       experiences:experiences,
//       skills:skills
//       }
//     ); 
// };

  return (
    <div className={styles.container}>
      <div className={styles.template_info}>
        <div className={` ${styles.innerContainer}`}>
          <div className={styles.innerContainer}>
            <div className={styles.textFields}>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={name}
                onChange={changeText}
              />
              <input
                type="text"
                placeholder="Your current profession"
                name="currentProfession"
                value={currentProfession}
                onChange={changeText}
              />
            </div>

            <Education
              educations={educations}
              setEducations={setEducations}
            ></Education>
            <Experience
              experiences={experiences}
              setExperiences={setExperiences}
            ></Experience>
            <Skills skills={skills} setSkills={setSkills}></Skills>
            {/* <button className={styles.updateDetails} onClick={nextFunction}>Refresh</button> */}
          </div>
          
        </div>
        
      </div>
      

      <div>
      <div className={styles.leftarrow} onClick={handleLeftArrow}>
      <ion-icon name="arrow-dropleft-circle"></ion-icon>
        </div>

        <div className={styles.all_templates}>
          {step === 1 && <T1  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture}  />}
          {step === 1 && <T2  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
          {step === 2 && <T3  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
          {step === 1 && <T4  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
          {step === 2 && <T5  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
          
        </div>

        <div className={styles.rightarrow} onClick={handleRightArrow}>
          <ion-icon name="arrow-dropright-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default BrowseTemplates;