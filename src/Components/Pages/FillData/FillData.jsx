import { useState } from "react";
import { useRef } from "react";
import styles from "./FillDataStyles.module.css";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";



const FillData = () => {
  const [displayPicture, setDisplayPicture] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );

  const inputRef = useRef("https://www.w3schools.com/howto/img_avatar.png");
  const [formData, setFormData] = useState({
    name: "",
    currentProfession: "",
    socialLinks: {
      linkedin: "",
      github: "",
      phone: "",
      website: "",
      email: "",
    }
  });

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
      ...formData,socialLinks:{
     ...formData.socialLinks,[name]: value,
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.image} onClick={() => inputRef.current.click()}>
        <div
          className={styles.imageHolder}
          style={{ backgroundImage: `url(${displayPicture})` }}
        >
          <div className={styles.takeImage}>
            <i className="fas fa-image"></i>
            Upload Image
          </div>
        </div>
        <input type="file" ref={inputRef} onChange={selectImage} />
      </div>
      <div className={styles.textFields}>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          value={formData.name}
          onChange={changeText}
        />
        <input
          type="text"
          placeholder="Your current profession"
          name="currentProfession"
          value={formData.currentProfession}
          onChange={changeText}
        />
      </div>
      <div className={styles.textBalls}>
        <div className={styles.balls}>
          <i className="fab fa-linkedin">
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
      <Education></Education>
      <Experience></Experience>
      <Skills></Skills>
      
</div>

  );
};
export default FillData;