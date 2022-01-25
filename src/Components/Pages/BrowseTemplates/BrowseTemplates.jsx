// formState is the global state and formData is the local state of the componenet

import styles from "./BrowseTemplates.module.css";
import T1 from "../../Templates/T1/T1";
import T2 from "../../Templates/T2/T2";
import T3 from "../../Templates/T3/T3";
import T4 from "../../Templates/T4/T4";
import T5 from "../../Templates/T5/T5";
import React, { useContext, useState, useEffect } from "react";
import FormContext from "../../Context/FormContext";
import Education from "../FillData/Education";
import Experience from "../FillData/Experience";
import Skills from "../FillData/Skills";
import { useRef } from "react";
import Pdf from "react-to-pdf";
import { useMediaQuery } from "react-responsive";

const BrowseTemplates = () => {
  const ref = React.createRef();
  const ref1 = React.createRef();
  const ref2 = React.createRef();
  const ref3 = React.createRef();
  const ref4 = React.createRef();

  const handleToggle = () => {
    if (form === "flex") {
      setForm("none");
      setTemp("flex");
    } else {
      setForm("flex");
      setTemp("none");
    }
  };
  const [temp, setTemp] = useState("flex");
  const [form, setForm] = useState("flex");

  const match = useMediaQuery({ query: "(max-width:1200px)" });
  const match1 = useMediaQuery({ query: "(max-width:1600px)" });
  const match2 = useMediaQuery({ query: "(max-width:800px)" });
  const match3 = useMediaQuery({ query: "(max-width:600px)" });
  const match4 = useMediaQuery({ query: "(max-width:1800px)" });
  const match5 = useMediaQuery({ query: "(max-width:2000px)" });
  useEffect(() => {
    return () => {
      let l = window.innerWidth;

      if (l >= 600) {
        setTemp("flex");
        setForm("flex");
      } else if (l < 600) {
        setForm("none");
        setTemp("flex");
      }
    };
  }, [match, match1, match2, match3, match4, match5]);

  const formContext = useContext(FormContext);
  

  const selectImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDisplayPicture(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
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

  const [educations, setEducations] = useState(formData.educations);

  const [experiences, setExperiences] = useState(formData.experiences);

  const [skills, setSkills] = useState(formData.skills);

  return (
    <div className={styles.container}>
      <div className={styles.template_info} style={{ display: `${form}` }}>
        <div className={styles.innerContainer}>
          <div className={styles.inputImageContainer}>
            <div className={styles.imageHolder}>
              <div
                className={styles.image}
                onClick={() => inputRef.current.click()}
                style={{ backgroundImage: `url(${displayPicture})` }}
              >
                <div className={styles.takeImage}></div>
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
            ></Education>
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
        </div>
      </div>

      <div>
        <div className={styles.formIcon}>
          {" "}
          <i className="fas fa-file-signature" onClick={handleToggle}></i>{" "}
        </div>

        <div className={styles.all_templates} style={{ display: `${temp}` }}>
          <div
            ref={ref}
            className={styles.particular_template}
            style={{ width: 1000, height: 600 }}
          >
            <T1
              name={name}
              currentProfession={currentProfession}
              educations={educations}
              skills={skills}
              experiences={experiences}
              socialLinks={formContext.socialLinks}
              displayPicture={displayPicture}
            />
          </div>
          <div className={styles.downloadBtn}>
            <Pdf targetRef={ref} filename="Tesume.pdf" scale={2.0} x={5.0}>
              {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
            </Pdf>
          </div>
          <div
            ref={ref1}
            className={styles.particular_template}
            style={{ width: 1000, height: 600 }}
          >
            <T2
              name={name}
              currentProfession={currentProfession}
              educations={educations}
              skills={skills}
              experiences={experiences}
              socialLinks={formContext.socialLinks}
              displayPicture={displayPicture}
            />
          </div>
          <div className={styles.downloadBtn}>
            <Pdf targetRef={ref1} filename="Tesume.pdf" scale={2.0} x={5.0}>
              {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
            </Pdf>
          </div>
          <div
            ref={ref2}
            className={styles.particular_template}
            style={{ width: 1000, height: 600 }}
          >
            <T3
              name={name}
              currentProfession={currentProfession}
              educations={educations}
              skills={skills}
              experiences={experiences}
              socialLinks={formContext.socialLinks}
              displayPicture={displayPicture}
            />
          </div>
          <div className={styles.downloadBtn}>
            <Pdf targetRef={ref2} filename="Tesume.pdf" scale={2.0} x={5.0}>
              {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
            </Pdf>
          </div>
          <div
            ref={ref3}
            className={styles.particular_template}
            style={{ width: 1000, height: 600 }}
          >
            <T4
              name={name}
              currentProfession={currentProfession}
              educations={educations}
              skills={skills}
              experiences={experiences}
              socialLinks={formContext.socialLinks}
              displayPicture={displayPicture}
            />
          </div>
          <div className={styles.downloadBtn}>
            <Pdf targetRef={ref3} filename="Tesume.pdf" scale={2.0} x={5.0}>
              {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
            </Pdf>
          </div>
          <div
            ref={ref4}
            className={styles.particular_template}
            style={{ width: 1000, height: 600 }}
          >
            <T5
              name={name}
              currentProfession={currentProfession}
              educations={educations}
              skills={skills}
              experiences={experiences}
              socialLinks={formContext.socialLinks}
              displayPicture={displayPicture}
            />
          </div>
          <div className={styles.downloadBtn}>
            <Pdf targetRef={ref4} filename="Tesume.pdf" scale={2.0} x={5.0}>
              {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
            </Pdf>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTemplates;
