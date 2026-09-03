import { getImageURL } from "../image-util";
import { Link } from "react-router-dom";
import styles from "../styles/item.module.scss";

export default function AppItem({ app }) {

  return (
    <li className={styles.app__item}> 
        <Link className={styles.app__title} to={`/apps/${app.id}`}>
      <img src={getImageURL(app.img)} alt={app.title} width="119"/>
      <h3 className={styles.app__title}>{app.title}</h3>
        </Link>
    </li>
  );
}
