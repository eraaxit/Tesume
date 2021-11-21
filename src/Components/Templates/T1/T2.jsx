import "./T2.css";
import { demoProfileData } from "../../../Helpers";
import EachEdu from './components/EachEdu';
import EachExperience from './components/EachExperience';
import EachSkill from './components/EachSkill';

const T2 = () => {
    return(

        <div className="T2">
            <div className="container">
                <div className="left_side">
                    <div className="profile_details">
                        <div className="profile_photo">
                            <img src="https://www.bing.com/th?id=OIP.JWeoMXt9SFgHXs-vqGTiuAHaHa&w=200&h=148&c=7&qlt=90&bgcl=ececec&o=6&pid=PersonalBing" />
                        </div>
                        <h2>{demoProfileData.name}</h2><br />
                        <p>{demoProfileData.currentProfession}</p>
                    </div>

                    <div className="links">
                        <ul>
                            <li>
                                <span className="icon"><a href={demoProfileData.socialLinks.linkedin}> <ion-icon name="logo-linkedin"></ion-icon> </a></span>
                                <span className="text">Linkedin</span>
                            </li>
                            <li>
                                <span className="icon"> <a href={demoProfileData.socialLinks.github}> <ion-icon name="logo-github"></ion-icon></a></span>
                                <span className="text">Github</span>
                            </li>
                            <li>
                                <span className="icon"><a href={demoProfileData.socialLinks.phone}> <ion-icon name="call"></ion-icon></a></span>
                                <span className="text">Phone</span>
                            </li>
                            <li>
                                <span className="icon"><a href={demoProfileData.socialLinks.email}> <ion-icon name="mail"></ion-icon></a></span>
                                <span className="text">Email</span>
                            </li>
                            <li>
                                <span className="icon"><a href={demoProfileData.socialLinks.website}> <ion-icon name="globe"></ion-icon></a></span>
                                <span className="text">Website</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="right_side">
                    <div className="education">
                        <div className="T2_container">
                            <h5><ion-icon name="book"></ion-icon>Education</h5>
                            <div className="add-more">
                            <ion-icon name="add"></ion-icon>
                            </div>
                        </div>
                        <div className="T2_edu_wrapper">
                            {
                                demoProfileData.education.map( each => <EachEdu {...{institution_name: each.institution_name, enroll_year: each.enroll_year,passout_year: each.passout_year,grades: each.grades}} />)
                            }
                        </div>
                    </div>
                    <div className="skills">
                        <div className="T2_container">
                            <h5><ion-icon name="copy"></ion-icon>Skills</h5>
                            <div className="add-more">
                            <ion-icon name="add"></ion-icon>
                            </div>
                        </div>
                        <div className="T2_skill_wrapper">
                            {
                                demoProfileData.skills.map( each => <EachSkill {...{skillName: each.skillName,proficiency: each.proficiency}} />)
                            }
                        </div>
                    </div>
                    <div className="experience">
                        <div className="T2_container">
                            <h5><ion-icon name="laptop"></ion-icon>Experience</h5>
                            <div className="add-more">
                            <ion-icon name="add"></ion-icon>
                            </div>
                        </div>
                        <div className="T2_exp_wrapper">
                            {
                                demoProfileData.experience.map( each => <EachExperience {...{title: each.title, period: each.period,organization: each.organization}} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default T2;