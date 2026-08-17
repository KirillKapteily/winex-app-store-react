import styles from "../styles/modal.module.scss";
import { getScreenImageURL } from "../image-util-screens";

export default function Modal({ url, closeModal }) {
  return (
    <div className={styles.overlay} onClick={() => closeModal()}>
      <div className={styles.modal}>
        <img src={getScreenImageURL(url)} alt={url} className={styles.img} />
      </div>
    </div>
  );
}
