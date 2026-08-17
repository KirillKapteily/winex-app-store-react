import styles from "../styles/sidebar.module.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="search?query=" className={styles.link}>
            Search
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/settings" className={styles.link}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
