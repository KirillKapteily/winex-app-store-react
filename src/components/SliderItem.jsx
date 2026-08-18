import { getScreenImageURL } from "../image-util-screens";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import styles from "../styles/slider-item.module.scss";

export default function SliderItem({ slide, slidePosition }) {
  return (
    <li className={styles.slider__item} style={{ transform: `translateX(-${slidePosition}px)`}}>
         <h3>{slide.title}</h3>
      <img src={getScreenImageURL(slide.img)} alt={slide.title} width="300"/>
      <p>{slide.description}</p>
         <Link to={`/${slide.id}`} className={styles.download__btn}>
     <Download/> Download
         </Link>
    </li>
  );
}
