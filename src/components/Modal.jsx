import styles from "../styles/modal.module.scss";
import Draggable from "react-draggable";
import { getScreenImageURL } from "../image-util-screens";
import { useEffect, useState, useRef } from "react";

export default function Modal({ url, closeModal }) {
  const [zoom, setZoom] = useState(80);
  const nodeRef = useRef(null);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom((z) => z + 10);
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom((z) => z - 10);
  };

  return (
    <div className={styles.overlay} onClick={() => closeModal()}>
      <div className={styles.model__wrapper}>
         <button onClick={() => closeModal()} className={styles.modal__btn}>
          X
        </button>
        <button onClick={handleZoomIn} className={styles.modal__btn}>
          +
        </button>
        <button onClick={handleZoomOut} className={styles.modal__btn}>
          -
        </button>
      </div>
      <div className={styles.modal}>
        <Draggable nodeRef={nodeRef}>
          <div onClick={(e) => e.stopPropagation()} ref={nodeRef}>
            <img
              src={getScreenImageURL(url)}
              alt={url}
              className={styles.img}
              style={{ width: zoom + "%" }}
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}
