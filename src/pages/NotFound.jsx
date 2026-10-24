import img from "../assets/system/not-found.svg";
import styles from "../styles/not-found.module.scss";

export default function NotFound() {
  return (
    <section>
      <div className={styles.notfound__wrapper}>
        <img src={img} alt="not found icon" />
        <h1 className={styles.error}>The page you're looking for doesn't exist. Error 404</h1>
      </div>
    </section>
  );
}
