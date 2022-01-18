import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.wrapper+" roboto mid"}>
            <div className={styles.logo_rec} />
            <div className={styles.content+" mid"} >
                <div className={styles.tagline}>OK, let's get you a perfect resume!</div>
                <div className={styles.que}>What would you like to do first ?</div>
                <Link to="/details" className={styles.button} >Enter Details</Link>
                <Link to="/templates" className={styles.button} >Browse Templates</Link>
            </div>
           
            <a href="https://github.com/eraaxit/tesume" target="_drake" style={{ marginTop: "30px"}}><ion-icon color="light" size="large" name="logo-github"></ion-icon></a>
        
        </div>
    )
}

export default Home
