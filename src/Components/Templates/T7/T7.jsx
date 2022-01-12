import styles from "./T7.module.css";
// import im from './im.jpeg';
import EachEdu from '../components/EachEdu';
import EachExperience from '../components/EachExperience';
import EachSkill from '../components/EachSkill';

export default function T7(props) {

        const {
          name,
          currentProfession,
          socialLinks,
          educations,
          skills,
          experiences,
          displayPicture
        } = props;
  return (
      <div className={styles.outerCont}>
        <div className={styles.col1}>
        <div className={styles.profile_photo}>
        <img
          src=""
          alt="dp"
        />
      </div>
      <div className={styles.profile_info}>
      <h1>{name}Kirti Pahwa</h1>
      <p>{currentProfession}Web Developer</p>
      </div>
      <div className={styles.links}>
      <ul>
        <li>
          <a href={"socialLinks.linkedin"}>
           
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
       </li>
        <li>
          <a href={"socialLinks.github"}>
           
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a href={"socialLinks.phone"}>
           
            <ion-icon name="call"></ion-icon>
          </a>
        </li>
        <li>
          <a href={"socialLinks.email"}>
           
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
        <li>
          <a href={"socialLinks.website"}>
            <ion-icon name="globe"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.balls}></div>
          <div className={styles.balls}></div>
          <div className={styles.balls}></div>
          <div className={styles.balls}></div>
        </div>
        <div className={styles.col3}>
        <div className={styles.education}>
          <div className={styles.T1_container}>
            <h5>
              <ion-icon name="book"></ion-icon>Education
            </h5>
          </div>
          <div className={styles.T1_edu_wrapper}>
            {educations.map((each, i) => (
              <EachEdu
                key={i}
                {...{
                  institution_name: each.institution_name,
                  enroll_year: each.enroll_year,
                  passout_year: each.passout_year,
                  grades: each.grades,
                }}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
  );
}
