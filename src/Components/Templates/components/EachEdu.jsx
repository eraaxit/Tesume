import styles from "./t1styles.module.css";

const EachEdu = ({ institution_name, enroll_year, passout_year, grades }) => {
    return (
        <div className={styles.eachEdu}>
            <div><b>institution_name: </b>{institution_name}</div>
            <div>
                <div><b>Start year: </b>{enroll_year}</div>
                <div><b>End year: </b>{passout_year}</div>
            </div>
            <div className={styles.grades}><b>Grades: </b> {grades}</div>
        </div>
    )
}

export default EachEdu;
