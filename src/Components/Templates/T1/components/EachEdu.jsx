import styles from "./t1styles.module.css";

const EachEdu = ({ institution_name, enroll_year, passout_year, grades }) => {
    return (
        <div className={styles.eachEdu}>
            <h4>{institution_name}</h4>
            <div>
                <div><b>Start year: </b>{enroll_year}</div>
                <div><b>End year: </b>{passout_year}</div>
            </div>
            <div className={styles.grades}>Grades: {grades}</div>
        </div>
    )
}

export default EachEdu