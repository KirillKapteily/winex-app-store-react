import styles from "../styles/modal.module.scss";
import { getScreenImageURL } from "../image-util-screens";
import { useEffect, useState } from "react";

export default function Modal({ url, closeModal }) {
  const [zoom, setZoom] = useState(80);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const [pageY, setPageY] = useState(0);
  const [pageX, setPageX] = useState(0);

  const img = document.querySelector(".img");
  const y = document.querySelector(".img");

  const handleZoomIn = (e) => {
    e.stopPropagation();

    setZoom((z) => z + 10);
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();

    setZoom((z) => z - 10);
  };

  // const handleDrag = (e) => {
  //   e.stopPropagation();
  //   console.log("ZOOM INFO!", top, left);

  //   const startX = e.clientX;
  //   const startY = e.clientY;

  //   setPageY(startY);
  //   setPageX(startX);

  //   setTop(startY + img.offsetWidth / 2);
  //   setLeft(startX + img.offsetWidth / 2);
  // };

  return (
    <div className={styles.overlay} onClick={() => closeModal()}>
      <div className={styles.model__wrapper}>
        <button onClick={handleZoomIn} className={styles.modal__btn}>
          +
        </button>
        <button onClick={handleZoomOut} className={styles.modal__btn}>
          -
        </button>
      </div>
      <div className={styles.modal}>
        <img
          src={getScreenImageURL(url)}
          alt={url}
          className={styles.img}
          //onDrag={handleDrag}
          style={{ width: zoom + "%", top: top + "px", left: left + "px" }}
        />
      </div>
    </div>
  );
}
