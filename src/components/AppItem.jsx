import { getImageURL } from "../image-util";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Bowser from "bowser";
import { isOldBrowser } from "../browser/browser-check";
import styles from "../styles/item.module.scss";

export default function AppItem({ app }) {
  const [chrome49Styles, setChrome49Styles] = useState(isOldBrowser);

  return (
    <li
      className={`${chrome49Styles ? styles.chrome49__item : styles.app__item}`}
    >
      <Link className={styles.app__title} to={`/apps/${app.id}`}>
        <img src={getImageURL(app.img)} alt={app.title} width="119" />
        <h3 className={styles.app__title}>{app.title}</h3>
      </Link>
    </li>
  );
}
