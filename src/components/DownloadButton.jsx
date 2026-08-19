import { Download } from "lucide-react";
import styles from "../styles/app-details.module.scss";

export default function DownloadButton({ os, app }) {
  console.log("Windows Debug: ", app.downloadLinks?.windows);
  console.log("Macos Debug: ", app.downloadLinks?.macos);
  console.log("Linux Debug: ", app.downloadLinks?.linux);

  console.log("OS!!!", os);

  console.log("pre-fix", app.downloadLinks?.[os], typeof os);

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
