import styles from "../styles/end-of-support.module.scss";
import { CircleAlert } from "lucide-react";

export default function OldBrowserWarning() {

  return  <div className={styles.background}>
      <CircleAlert />
     <p>Update your browser to get the best experience</p>
    </div>;
}
