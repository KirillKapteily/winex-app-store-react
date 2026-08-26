import { getScreenImageURL } from "../image-util-screens";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import styles from "../styles/slider-item.module.scss";
import { getSlideId } from "../api/api";
import { useMemo } from "react";
import NotFound from "./NotFound";

export default function SliderItem({ slide, slideId }) {
  let slideInfo = useMemo(() => {
    return getSlideId(slideId);
  }, [slideId]);

  if (!slideInfo) return <NotFound />;

  return (
    <div className={styles.slider__item}>
      <h3>{slideInfo.title}</h3>
      <img
        src={getScreenImageURL(slideInfo.img)}
        alt={slideInfo.title}
        className={styles.slider__img}
      />
      <p>{slideInfo.description}</p>
      <Link to={`/${slideInfo.id}`} className={styles.download__btn}>
        <Download /> Download
      </Link>
    </div>
  );
}
