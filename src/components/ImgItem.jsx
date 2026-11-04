import { getScreenImageURL } from "../image-util-screens";
import styles from "../styles/img.module.scss";
import { isOldBrowser } from "../browser/browser-check";

export default function ImgItem({ img, openModal }) {
  return (
    <li>
      <img
        src={getScreenImageURL(img.url)}
        alt={img.url}
        width="300"
        className={`${isOldBrowser ? styles.img__chrome49 : styles.img}`}
        onClick={() => openModal(img.url)}
      />
    </li>
  );
}
