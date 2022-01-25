import styles from "./T4.module.css";
import EachEdu from '../components/EachEdu';
import EachExperience from '../components/EachExperience';
import EachSkill from '../components/EachSkill';

const T4 = (props) => {
    const {name,currentProfession,socialLinks,educations,skills,experiences,displayPicture} = props
    return(

        <div className={styles.T4}>
            <div className={styles.container}>
                <div className={styles.upper_part}>
                    <div className={styles.profile_photo}>
                        <img src={displayPicture} alt="dp" />
                    </div>
                    <div className={styles.profile_details}>
                        <h2>{name}</h2><br />
                        <p>{currentProfession}</p>
                    </div>
                </div>
                <div className={styles.lower_part}>
                    <div className={styles.left_side}>

                        <div className={styles.links}>
                            <ul>
                                <li>
                                    <span className={styles.icon}><a href={socialLinks.linkedin}> <i className="fab fa-linkedin"></i> </a></span><br />
                                    <span className={styles.text}>Linkedin</span>
                                </li>
                                <li>
                                    <span className={styles.icon}> <a href={socialLinks.github}><i className="fab fa-github"></i></a></span><br />
                                    <span className={styles.text}>Github</span>
                                </li>
                                <li>
                                    <span className={styles.icon}><a href={socialLinks.phone}> <i className="fas fa-phone-square-alt"></i></a></span><br />
                                    <span className={styles.text}>Phone</span>
                                </li>
                                <li>
                                    <span className={styles.icon}><a href={socialLinks.email}> <i className="fas fa-envelope"></i></a></span><br />
                                    <span className={styles.text}>Email</span>
                                </li>
                                <li>
                                    <span className={styles.icon}><a href={socialLinks.website}> <i className="fas fa-globe-europe"></i></a></span><br />
                                    <span className={styles.text}>Website</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.right_side}>
                        <div className={styles.education}>
                            <div className={styles.T4_container}>
                                <h5><i className="fas fa-book-open"></i>EDUCATION</h5>
                            </div>
                            <div className={styles.T4_edu_wrapper}>
                                {
                                    educations.map( (each,i) => <EachEdu key={i} {...{institution_name: each.institution_name, enroll_year: each.enroll_year,passout_year: each.passout_year,grades: each.grades}} />)
                                }
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <div className={styles.T4_container}>
                                <h5><i className="fas fa-copy"></i>SKILLS</h5>
                            </div>
                            <div className={styles.T4_skill_wrapper}>
                                {
                                    skills.map( (each,i) => <EachSkill key={i} {...{skillName: each.skillName,proficiency: each.proficiency}} />)
                                }
                            </div>
                        </div>
                        <div className={styles.experience}>
                            <div className={styles.T4_container}>
                                <h5><i className="fas fa-laptop"></i>EXPERIENCE</h5>
                            </div>
                            <div className={styles.T4_exp_wrapper}>
                                {
                                    experiences.map( (each,i) => <EachExperience key={i} {...{title: each.title, period: each.period,organization: each.organization}} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default T4;