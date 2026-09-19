import { useEffect, useState } from "react";
import styles from "../styles/settings.module.scss";

export default function Settings({
  transparency,
  setTransparency,
  theme,
  setTheme,
}) {
  const toggleTransparency = () => {
    if (transparency === "transparent") {
      setTransparency("solid");
    } else {
      setTransparency("transparent");
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <section>
      <div className={styles.background__test}>
        <div className={styles.glass__test}>
          <p>River in Yousemite</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <button
          className={styles.transp__btn}
          onClick={toggleTransparency}
          id={`theme-${transparency}`}
        >
          Toggle Transparency to{" "}
          {transparency == "transparent" ? "solid" : "transparent"}
        </button>
        <br />
        <button
          className={styles.transp__btn}
          onClick={toggleTheme}
          id={`theme-${theme}`}
        >
          Toggle Theme to {theme == "light" ? "dark" : "light"}
        </button>
        <br />
        <a
          href="https://unsplash.com/photos/river-in-yosemite-valley-at-low-light-NRQV-hBF10M?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          className={styles.settings__link}
        >
          Photo link{" "}
        </a>
      </div>
    </section>
  );
}
