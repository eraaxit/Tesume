import styles from "./T1.module.css";
import EachEdu from "../components/EachEdu";
import EachExperience from "../components/EachExperience";
import EachSkill from "../components/EachSkill";

const T1 = (props) => {
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
    <div className={styles.T1}>
      <div className={styles.container}>
          <div className={styles.body}>
        <div className={styles.header}></div>
        <div className={styles.profile_photo}>
          <img
            src={displayPicture}
            alt="dp"
          />
        </div>
        <div className={styles.details}>
          <h1>{name}</h1>
          <br />
          <p>{currentProfession}</p>
        </div>
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
        <div className={styles.skills}>
          <div className={styles.T1_container}>
            <h5>
              <ion-icon name="copy"></ion-icon>Skills
            </h5>
          </div>
          <div className={styles.T1_skill_wrapper}>
            {skills.map((each, i) => (
              <EachSkill
                key={i}
                {...{
                  skillName: each.skillName,
                  proficiency: each.proficiency,
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.experience}>
          <div className={styles.T1_container}>
            <h5>
              <ion-icon name="laptop"></ion-icon>Experience
            </h5>
          </div>
          <div className={styles.T1_exp_wrapper}>
            {experiences.map((each, i) => (
              <EachExperience
                key={i}
                {...{
                  title: each.title,
                  period: each.period,
                  organization: each.organization,
                }}
              />
            ))}
          </div>
        </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={socialLinks.linkedin}>
               
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href={socialLinks.github}>
               
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a href={socialLinks.phone}>
               
                <ion-icon name="call"></ion-icon>
              </a>
            </li>
            <li>
              <a href={socialLinks.email}>
               
                <ion-icon name="mail"></ion-icon>
              </a>
            </li>
            <li>
              <a href={socialLinks.website}>
                <ion-icon name="globe"></ion-icon>
              </a>
            </li>
          </ul>
          <div className={styles.footer}></div>
        </div>
      </div>
      
    </div>
  );
};

export default T1;
