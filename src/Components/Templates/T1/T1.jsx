import "./T1.css";
import { demoProfileData } from "../../../Helpers";
import EachEdu from './components/EachEdu';
import EachExperience from './components/EachExperience';
import EachSkill from './components/EachSkill';

const T1 = () => {
    return (
        <div className="T1">
            <div className="container">
                <div className="header">
                </div>
                <div className="profile_photo">
                    <img src="https://www.bing.com/th?id=OIP.JWeoMXt9SFgHXs-vqGTiuAHaHa&w=200&h=148&c=7&qlt=90&bgcl=ececec&o=6&pid=PersonalBing" />
                </div>
                <div className="details">
                    <h1>{demoProfileData.name}</h1><br />
                    <p>{demoProfileData.currentProfession}</p>
                </div> 
                <div className="education">
                    <div className="T1_container">
                        <h5><ion-icon name="book"></ion-icon>Education</h5>
                        <div className="add-more">
                        <ion-icon name="add"></ion-icon>
                        </div>
                    </div>
                    <div className="T1_edu_wrapper">
                        {
                            demoProfileData.education.map( each => <EachEdu {...{institution_name: each.institution_name, enroll_year: each.enroll_year,passout_year: each.passout_year,grades: each.grades}} />)
                        }
                    </div>
                </div>
                <div className="skills">
                    <div className="T1_container">
                        <h5><ion-icon name="copy"></ion-icon>Skills</h5>
                        <div className="add-more">
                        <ion-icon name="add"></ion-icon>
                        </div>
                    </div>
                    <div className="T1_skill_wrapper">
                        {
                            demoProfileData.skills.map( each => <EachSkill {...{skillName: each.skillName,proficiency: each.proficiency}} />)
                        }
                    </div>
                </div>
                <div className="experience">
                    <div className="T1_container">
                        <h5><ion-icon name="laptop"></ion-icon>Experience</h5>
                        <div className="add-more">
                        <ion-icon name="add"></ion-icon>
                        </div>
                    </div>
                    <div className="T1_exp_wrapper">
                        {
                            demoProfileData.experience.map( each => <EachExperience {...{title: each.title, period: each.period,organization: each.organization}} />)
                        }
                    </div>
                </div>
                <div className="links">
                    <ul>
                        <li><a href={demoProfileData.socialLinks.linkedin}> <ion-icon name="logo-linkedin"></ion-icon> </a></li>
                        <li><a href={demoProfileData.socialLinks.github}> <ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a href={demoProfileData.socialLinks.phone}> <ion-icon name="call"></ion-icon></a></li>
                        <li><a href={demoProfileData.socialLinks.email}> <ion-icon name="mail"></ion-icon></a></li>
                        <li><a href={demoProfileData.socialLinks.website}> <ion-icon name="globe"></ion-icon></a></li>
                    </ul>
                </div>
                <div className="footer">
                </div>
            </div>
        </div>
    )
}

export default T1
