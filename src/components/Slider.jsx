import SliderList from "./SliderList";
import { getSlider } from "../api/api";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import styles from "../styles/slider.module.scss"

export default function Slider() {
  const slider = getSlider();
  const [slidePosition, setSlidePosition] = useState(0);

  const nextSlide = () => {
    if (slidePosition < 301) {
      setSlidePosition((s) => s + 300);
      console.log(slidePosition);
    } else {
      setSlidePosition(0);
    } 
  };
  const prevSlide = () => {
    if (slidePosition > 0) {
      setSlidePosition((s) => s - 300);
      console.log(slidePosition);
    } else {
          console.log(slidePosition);
    }
  };

  return (
    <div className={styles.slider}>
      <SliderList slider={slider} slidePosition={slidePosition} />
      <div className={styles.slider__btn__wrapper}>
        <button onClick={prevSlide} className={styles.slider__button}>
        <ChevronLeft />
      </button>
      <button onClick={nextSlide} className={styles.slider__button}>
        <ChevronRight />
      </button>
      </div>
    </div>
  );
}
