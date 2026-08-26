
import { getSlider } from "../api/api";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import styles from "../styles/slider.module.scss"
import SliderItem from "./SliderItem";

export default function Slider() {
  const slider = getSlider();
  const [slideId, setSlideId] = useState(1);

  const nextSlide = () => {
    if (slideId !== slider.length) {
      setSlideId((s) => s + 1);
    }
  };
  const prevSlide = () => {
    if (slideId !== 1) {
       setSlideId((s) => s - 1); 
    }
  };

  return (
    <div className={styles.slider}>
      <SliderItem slider={slider}  slideId={slideId}/>
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
