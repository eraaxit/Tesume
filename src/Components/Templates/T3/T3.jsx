import styles from "./T3.module.css";
import { demoProfileData } from "../../../Helpers";
import EachEdu from '../components/EachEdu';
import EachExperience from '../components/EachExperience';
import EachSkill from '../components/EachSkill';

const T3 = () => {
    return(

        <div className={styles.T3}>
            <div className={styles.container}>
                <div className={styles.upper_part}>
                    <div className={styles.profile_photo}>
                        <img src="https://www.bing.com/th?id=OIP.JWeoMXt9SFgHXs-vqGTiuAHaHa&w=200&h=148&c=7&qlt=90&bgcl=ececec&o=6&pid=PersonalBing" alt="dp" />
                    </div>
                    <div className={styles.profile_details}>
                        <h2>{demoProfileData.name}</h2><br />
                        <p>{demoProfileData.currentProfession}</p>
                    </div>
                </div>
                <div className={styles.lower_part}>
                    <div className={styles.left_side}>

                        <div className={styles.links}>
                            <ul>
                                <li>
                                    <span className={styles.icon}><a href={demoProfileData.socialLinks.linkedin}> <ion-icon name="logo-linkedin"></ion-icon> </a></span>
                                </li>
                                <li>
                                    <span className={styles.icon}> <a href={demoProfileData.socialLinks.github}> <ion-icon name="logo-github"></ion-icon></a></span>
                                </li>
                                <li>
                                    <span className={styles.icon}><a href={demoProfileData.socialLinks.phone}> <ion-icon name="call"></ion-icon></a></span>
                                </li>
                                <li>
                                    <span className={styles.icon}><a href={demoProfileData.socialLinks.email}> <ion-icon name="mail"></ion-icon></a></span>
                                </li>
                                <li>
                                    <span className={styles.icon}><a href={demoProfileData.socialLinks.website}> <ion-icon name="globe"></ion-icon></a></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <div className={styles.education}>
                            <div className={styles.T3_container}>
                                <h5><ion-icon name="book"></ion-icon>Education</h5>
                            </div>
                            <div className={styles.T3_edu_wrapper}>
                                {
                                    demoProfileData.education.map( (each,i) => <EachEdu key={i} {...{institution_name: each.institution_name, enroll_year: each.enroll_year,passout_year: each.passout_year,grades: each.grades}} />)
                                }
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <div className={styles.T3_container}>
                                <h5><ion-icon name="copy"></ion-icon>Skills</h5>
                            </div>
                            <div className={styles.T3_skill_wrapper}>
                                {
                                    demoProfileData.skills.map( (each,i) => <EachSkill key={i} {...{skillName: each.skillName,proficiency: each.proficiency}} />)
                                }
                            </div>
                        </div>
                        <div className={styles.experience}>
                            <div className={styles.T3_container}>
                                <h5><ion-icon name="laptop"></ion-icon>Experience</h5>
                            </div>
                            <div className={styles.T3_exp_wrapper}>
                                {
                                    demoProfileData.experience.map( (each,i) => <EachExperience key={i} {...{title: each.title, period: each.period,organization: each.organization}} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default T3;