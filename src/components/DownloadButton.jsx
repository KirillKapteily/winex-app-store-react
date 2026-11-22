import { Download } from "lucide-react";
import styles from "../styles/app-details.module.scss";

export default function DownloadButton({ os, app }) {

  return (
    <div>
      <a href={app.downloadLinks?.[os]} className={styles.download__button}>
        {app.downloadLinks?.[os] === undefined ? (
          <>This app isn't supported on your OS</>
        ) : (
          <>
            <Download className={styles.ico} />
            Download
          </>
        )}
      </a>
    </div>
  );
}
