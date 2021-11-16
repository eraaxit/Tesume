import "./T1.css";
import { demoProfileData } from "../../../Helpers";

const T1 = () => {
    return (
        <div className="T1">

            <div className="header">
            </div>
            <div className="profile-photo">
            </div>
            <div className="details">
                <h1>{demoProfileData.name}</h1><br />
                <p>{demoProfileData.currentProfession}</p>
            </div> 
            <div className="education">
                <h5><ion-icon name="book"></ion-icon>Education{demoProfileData.education[0].grades}</h5>
                <div className="add-more">
                <ion-icon name="add"></ion-icon>
                </div>
            </div>
            <div className="skills">
                <h5><ion-icon name="copy"></ion-icon>Skills</h5>
                <div className="add-more">
                <ion-icon name="add"></ion-icon>
                </div>
            </div>
            <div className="experience">
                <h5><ion-icon name="laptop"></ion-icon>Experience</h5>
                <div className="add-more">
                <ion-icon name="add"></ion-icon>
                </div>
            </div>
            <div className="social-links">
               <a href={demoProfileData.socialLinks.linkedin}> <ion-icon name="logo-linkedin"></ion-icon> </a>
                <ion-icon name="logo-github"></ion-icon>
                <ion-icon name="call"></ion-icon>
                <ion-icon name="mail"></ion-icon>
            </div>
            <div className="footer">
            </div>

        </div>
    )
}

export default T1
