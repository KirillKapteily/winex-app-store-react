import SliderItem from "./SliderItem";
import styles from "../styles/slider-list.module.scss"

export default function SliderList({ slider, slidePosition }) {
  return (
    <ul className={styles.slider__list}>
      {slider.map((slide) => (
        <SliderItem key={slide.id} slide={slide} slidePosition={slidePosition}/>
      ))}
    </ul>
  );
}
