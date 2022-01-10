import styles from "./T7.module.css";
import im from './im.jpeg';

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
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.col1}>
        <div className={styles.profile_photo}>
        <img
          src={im}
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
      <div className={styles.footer}></div>
    </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.balls}></div>
          <div className={styles.balls}></div>
          <div className={styles.balls}></div>
          <div className={styles.balls}></div>
        </div>
        <div className={styles.col3}></div>
      </div>
    </div>
  );
}
