import { useContext, useState, useRef } from "react";
import TextField from "../../Input/TextField";
import styles from "./FillDataStyles.module.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import FormContext from "../../Context/FormContext";
import { useNavigate } from "react-router-dom";
import upload_img from "./upload_img.svg"
import spinner from "./loading-buffering.gif"

const FillData = (props) => {
  let navigate = useNavigate();
  const formContext = useContext(FormContext);
  const { addData } = formContext;

  const [displayPicture, setDisplayPicture] = useState(upload_img);
  const inputRef = useRef();

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

  const [loading, setLoading] = useState(false);

  const selectImage = async(e) => {
    setLoading(true);
    console.log(e)
    const reader = new FileReader();
      reader.onload = () => {
        console.log("onload started")
       setDisplayPicture(reader.result);
       setLoading(false); 
       console.log("onload ended")  
    };
    await reader.readAsDataURL(e.target.files[0]);
    console.log("reading data url")
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

  const nextFunction = () => {

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
    <>
    <div className={styles.container}>
      <div className={styles.row1}>
        <div className={styles.inputFieldContainer}>
          <div className={styles.textField}>
            <TextField
              placeholder=" Enter your full name"
              formData={formData}
              setFormData={setFormData}
              val="name"
            />
            <TextField
              placeholder=" Your current profession"
              formData={formData}
              setFormData={setFormData}
              val="currentProfession"
            />
          </div>
          <div className={styles.link}>
            <div className={styles.textBalls}>
            <div className={styles.balls}  >
              <div className={formData.socialLinks.linkedin===""?styles.linkBorder:styles.linkBorderWithData}>
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
            </div>
              <div className={styles.balls}>
              <div className={formData.socialLinks.github===""?styles.linkBorder:styles.linkBorderWithData}>
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
              </div>
              <div className={styles.balls}>
              <div className={formData.socialLinks.phone===""?styles.linkBorder:styles.linkBorderWithData}>
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
              </div>
              <div className={styles.balls}>
              <div className={formData.socialLinks.website===""?styles.linkBorder:styles.linkBorderWithData}>
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
              </div>
              <div className={styles.balls}>
              <div className={formData.socialLinks.email===""?styles.linkBorder:styles.linkBorderWithData}>
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
            </div>
            <div className={styles.pasteLink}>Paste your links here</div>
          </div>
        </div>
        <div className={styles.inputImageContainer}>
          <div className={styles.imageHolder}>
            {loading&&<img src ={spinner} className={styles.spinner} alt="spinner" ></img>}
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
      <button className={styles.button} onClick={nextFunction}>Next</button>
    </div>
    <div className={styles.lines}>
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
    </div>
  
    </>
  );
};
export default FillData;
