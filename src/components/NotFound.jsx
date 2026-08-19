import styles from "../styles/not-found.module.scss";
import img from "../assets/system/not-found.svg"

export default function NotFound(){
    return(
        <div className={styles.notfound__wrapper}>
            <img src={img} alt="not found icon" />
            <h1 className={styles.error}>Try searching for something else</h1>
        </div>
    )
}