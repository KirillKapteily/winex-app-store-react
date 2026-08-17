import { getScreenImageURL } from "../image-util-screens";
import styles from "../styles/img.module.scss";

export default function ImgItem({ img, openModal }) {
  return (
    <li>
      <img
        src={getScreenImageURL(img.url)}
        alt={img.url}
        width="300"
        className={styles.img}
        onClick={() => openModal(img.url)}
      />
    </li>
  );
}
