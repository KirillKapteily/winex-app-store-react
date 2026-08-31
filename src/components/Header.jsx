import { Link } from "react-router-dom";
import styles from "../styles/header.module.scss";
import "../styles/container.scss";
import { CircleX,  CircleEllipsis} from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Header() {
  const [isOpened, setOpened] = useState(false);

  return (
    <header className={styles.hedaer}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Link to="/apps" className={styles.link}>
            WinexAppStore
          </Link>
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
          <button
            onClick={() => setOpened(!isOpened)}
            className={styles.menu__btn}
          >
            {
              isOpened ? <CircleX /> : <CircleEllipsis />
            }
          </button>
        </div>
      </div>
      {isOpened && <Sidebar />}
    </header>
  );
}
