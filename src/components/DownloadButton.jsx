import { Download } from "lucide-react";
import styles from "../styles/app-details.module.scss"

export default function DownloadButton({ os, app }) {
  console.log("Windows Debug: ", app.downloadLinks[0]?.windows);
  console.log("Macos Debug: ", app.downloadLinks[1]?.macos);
  console.log("Linux Debug: ", app.downloadLinks[2]?.linux);

  const links = [
    app.downloadLinks[0]?.windows,
    app.downloadLinks[1]?.macos,
    app.downloadLinks[2]?.linux,
  ];
console.log("pre-fix", links[os], os);

  return (
    <a href={links[os]} className={styles.download__button}>
      {links[os] === undefined ? (
        <p>This app isn't supported on your OS</p>
      ) : (
        <>
          <Download className={styles.ico}/>
          Download
        </>
      )}
    </a>
  );
}
