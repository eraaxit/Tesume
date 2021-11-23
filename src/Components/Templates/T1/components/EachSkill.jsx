import styles from "./t1styles.module.css";

const EachSkill = ({ skillName,proficiency }) => {
    return (
        <div className={styles.eachSkills}>
            <h5>{skillName}</h5>
            <div className={styles.proficiency}><b>Proficiency: </b> {proficiency}</div>
        </div>
    )
}

export default EachSkill;