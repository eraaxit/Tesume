// formState is the global state and formData is the local state of the componenet

import styles from "./BrowseTemplates.module.css";
import T1 from "../../Templates/T1/T1";
import T2 from "../../Templates/T2/T2";
import T3 from "../../Templates/T3/T3";
import T4 from "../../Templates/T4/T4";
import T5 from "../../Templates/T5/T5";
import T7 from "../../Templates/T7/T7";

import React, { useContext, useState } from "react";
import FormContext from "../../Context/FormContext";
import Education from "../FillData/Education";
import Experience from "../FillData/Experience";
import Skills from "../FillData/Skills";
import { useRef } from "react";

const BrowseTemplates = () => {


  

  // const [style, setStyle] = useState("template_info");
  
  // const changeStyle = () => {
  //   console.log(" you just clicked");
  //   setStyle("template_info_modal");
  // }

  const formContext = useContext(FormContext);
  const { addData } = formContext;
  
const selectImage = (e) => {
    console.log(e)
    const reader = new FileReader();
      reader.onload = () => {
        console.log("onload started")
       setDisplayPicture(reader.result);
       console.log("onload ended")  
    };
   reader.readAsDataURL(e.target.files[0]);
  };
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
  const [displayPicture, setDisplayPicture] = useState(formData.displayPicture);
  const inputRef = useRef();

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

  const nextFunction = () => {
    addData({
      name: formData.name,
      currentProfession: formData.currentProfession,
      socialLinks:formData.socialLinks,
      educations:educations,
      displayPicture:displayPicture,
      experiences:experiences,
      skills:skills
      }
    ); 
};

  return (
    <div className={styles.container}>
      <div className={styles.template_info} >
          <div className={styles.innerContainer}>
          <div className={styles.inputImageContainer}>
          <div className={styles.imageHolder}>
            <div
              className={styles.image}
              onClick={() => inputRef.current.click()}
              style={{ backgroundImage: `url(${displayPicture})` }}
            >
              <div className={styles.takeImage}>
              </div>
            </div>
            <input type="file" ref={inputRef} onChange={selectImage} />
          </div>
        </div>
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
          <div className={styles.dataField}>
            <Education
              educations={educations}
              setEducations={setEducations}
            >
            </Education>
            </div>
            <div className={styles.dataField}>
            <Experience
              experiences={experiences}
              setExperiences={setExperiences}
            ></Experience>
            </div>
            <div className={styles.dataField}>
            <Skills skills={skills} setSkills={setSkills}></Skills>
            </div>
            <button className={styles.updateDetails} onClick={nextFunction}>Refresh</button>
          </div>
          
        
      </div>
      

      <div>
        {/* <div className={`${styles.formIcon} ${style}`}> <i className="fas fa-file-signature" onClick={changeStyle}></i> </div> */}
      <div className={styles.leftarrow} onClick={handleLeftArrow}>
      <ion-icon name="arrow-dropleft-circle"></ion-icon>
        </div>

         {
  window.innerWidth<'800' && <div className={styles.all_templates}>
      { <T1  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture}  />}
       {<T5  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
       {<T3  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
       {<T4  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
       { <T5  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
       {<T7  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
   
     </div>
 }
{
 window.innerWidth>'800' &&  <div className={styles.all_templates}>
     {step === 1 && <T1  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture}  />}
      {step === 1 && <T5  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
      {step === 2 && <T3  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
      {step === 1 && <T4  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
      {step === 2 && <T5  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
      {step === 2 && <T7  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={displayPicture} />}
  
    </div>
}
    {/* {window.innerWidth<1000&&window.innerWidth>600&&<div className={styles.all_templates}>
      {step === 1 && <T1  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture}  />}
      {step === 1 && <T2  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
      {step === 2 && <T3  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
      {step === 2 && <T4  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
      {step === 3 && <T5  name={name} currentProfession={currentProfession} educations={educations} skills={skills} experiences= {experiences} socialLinks={formContext.socialLinks} displayPicture={formContext.displayPicture} />}
      
    </div>} */}

        <div className={styles.rightarrow} onClick={handleRightArrow}>
          <ion-icon name="arrow-dropright-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default BrowseTemplates;