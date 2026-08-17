import { useEffect, useState } from "react";
import styles from "../styles/settings.module.scss"

export default function Settings({transparency, setTransparency}) {


  const toggleTransparency = () => {
    if (transparency === "transparent") {
      setTransparency("solid");
    } else {
      setTransparency("transparent");
    }
  };


  return (
    <section>
<div className={styles.background__test}>
    <div className={styles.glass__test}>
    </div>
</div>
<div className={styles.wrapper}>
     <button className={styles.transp__btn} onClick={toggleTransparency} id={`theme-${transparency}`}>Toggle Transparency to {transparency == "transparent" ? "solid" : "transparent"}</button>
<br />
<a href="https://unsplash.com/photos/river-in-yosemite-valley-at-low-light-NRQV-hBF10M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Photo link </a>
</div>
     
    </section>
  );
}
