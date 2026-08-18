import styles from "../styles/modal.module.scss";
import { getScreenImageURL } from "../image-util-screens";


export default function Modal({ url, closeModal }) {
const zoom = () =>{
  document.querySelector(".img").setAttribute("data-theme", zoomed);
  console.log("click");
  
}

  return (
    <div className={styles.overlay} onClick={() => closeModal()}>
      <div className={styles.modal}>
        <img src={getScreenImageURL(url)} alt={url} className={styles.img} onClick={() => zoom}/>
      </div>
    </div>
  );
}
