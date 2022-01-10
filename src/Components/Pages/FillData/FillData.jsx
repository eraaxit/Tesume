import { useContext, useState } from "react";
import { useRef } from "react";
import TextField from "../../Input/TextField";
import styles from "./FillDataStyles.module.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import FormContext from "../../Context/FormContext";
import Alertbox from "./Alertbox";
import { useNavigate } from "react-router-dom";

const FillData = (props) => {
  let navigate = useNavigate();
  const formContext = useContext(FormContext);
  const { addData } = formContext;

  const [displayPicture, setDisplayPicture] = useState(
    "https://i.ibb.co/09kSvLZ/account-profile-user-icon-icon-search-engine-10-removebg-preview.png"
  );

  const inputRef = useRef("https://i.ibb.co/q5wZDgs/temp2-removebg-preview.png");

  const [formData, setFormData] = useState({
    name: "",
    currentProfession: "",
    socialLinks: {
      linkedin: "",
      github: "",
      phone: "",
      website: "",
      email: "",
    },
  });

  const [educations, setEducations] = useState([
    {
      institution_name: "",
      enroll_year: "",
      passout_year: "",
      grades: "",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      title: "",
      period: "",
      organization: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      skillName: "",
      proficiency: "",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const selectImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDisplayPicture(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const changeText = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const changeIcon = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [name]: value,
      },
    });
  };

  // const nameError = () => {
  //   if (formData.name === "") {
  //     return true;
  //   }
  // };
  const nextFunction = () => {
    if (
      formData.name === "" ||
      formData.currentProfession === "" ||
      educations[0].institution_name === "" ||
      educations[0].enroll_year === "" ||
      educations[0].passout_year === "" ||
      educations[0].grades === "" ||
      skills[0].skillName === "" ||
      skills[0].proficiency === ""
    ) {
      setOpenModal(true);
      return;
    }
    addData({
      name: formData.name,
      currentProfession: formData.currentProfession,
      socialLinks: formData.socialLinks,
      displayPicture: displayPicture,
      educations: educations,
      experiences: experiences,
      skills: skills,
    });
    navigate("/templates");
  };

  return (
    <div className={styles.container}>
      {openModal && <Alertbox closeModal={setOpenModal} />}

      <div className={styles.row1}>
        <div className={styles.inputFieldContainer}>
          <div className={styles.textField}>
            <TextField
              onChange={changeText}
              placeholder="Enter your full name"
              formData={formData}
              setFormData={setFormData}
              val="name"
            />
            <TextField
              onChange={changeText}
              placeholder="Your current profession"
              formData={formData}
              setFormData={setFormData}
              val="currentProfession"
            />
          </div>
          <div className={styles.link}>
            <div className={styles.textBalls}>
              <div className={styles.balls}  >
                <i className="fab fa-linkedin" 
                >
                  <span className={styles.toolTip}>
                    <input
                      type="text"
                      name="linkedin"
                      onChange={changeIcon}
                      value={formData.socialLinks.linkedin}
                      placeholder="LinkedIn"
                    />
                  </span>
                </i>
              </div>
              <div className={styles.balls}>
                <i className="fab fa-github">
                  <span className={styles.toolTip}>
                    <input
                      type="text"
                      name="github"
                      onChange={changeIcon}
                      value={formData.socialLinks.github}
                      placeholder="GitHub"
                    />
                  </span>
                </i>
              </div>
              <div className={styles.balls}>
                <i className="fas fa-phone-square-alt">
                  <span className={styles.toolTip}>
                    <input
                      type="number"
                      name="phone"
                      onChange={changeIcon}
                      value={formData.socialLinks.phone}
                      placeholder="Contact No."
                    />
                  </span>
                </i>
              </div>
              <div className={styles.balls}>
                <i className="fas fa-globe">
                  <span className={styles.toolTip}>
                    <input
                      type="text"
                      name="website"
                      onChange={changeIcon}
                      value={formData.socialLinks.website}
                      placeholder="Website Link"
                    />
                  </span>
                </i>
              </div>
              <div className={styles.balls}>
                <i className="fas fa-envelope-open-text">
                  <span className={styles.toolTip}>
                    <input
                      type="email"
                      name="email"
                      onChange={changeIcon}
                      value={formData.socialLinks.email}
                      placeholder="Email"
                    />
                  </span>
                </i>
              </div>
            </div>
            <div className={styles.pasteLink}>Paste your links here</div>
          </div>
        </div>
        <div className={styles.inputImageContainer}>
          <div className={styles.imageHolder}>
            <div
              className={styles.image}
              onClick={() => inputRef.current.click()}
              style={{ backgroundImage: `url(${displayPicture})` }}
            >
              <div className={styles.takeImage}>
                <i className="fas fa-image"></i>
                Upload Image
              </div>
            </div>
            <input type="file" ref={inputRef} onChange={selectImage} />
          </div>
        </div>
      </div>
      <div className={styles.horizontalLine}><span>Provide your details below:</span></div>
      <div className={styles.row2}>
      <div className={styles.educationContainer}>
      <Education educations={educations} setEducations={setEducations}></Education>
      </div>
      <div className={styles.skillContainer}>
      <Skills skills={skills} setSkills={setSkills}></Skills>
      </div>
      <div className={styles.experienceContainer}>
      <Experience experiences={experiences} setExperiences={setExperiences}></Experience>
      </div>
      </div>
    </div>
  );
};
export default FillData;
