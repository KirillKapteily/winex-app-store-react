import AppList from "../components/AppList";
import { useState, useEffect } from "react";
import { getApps } from "../api/api";
import { filterApps } from "../api/api";
import Slider from "../components/Slider";
import container from "../styles/container.module.scss";
import styles from "../styles/selector.module.scss";

export default function Home({ os, setOs }) {
  const [filter, setFilter] = useState("all");
  // const apps = getApps();
  const filteredApps = filterApps(filter);

  useEffect(() => {
    console.log(filteredApps);
  }, [filter]);
  //app__selector
  return (
    <section>
      <div className={container.container}>
        <select
          name="OS"
          value={os}
          onChange={(e) => setOs(e.target.value)}
          className={styles.app__selector}
        >
          <option value="0">Windows</option>
          <option value="1">macOS</option>
          <option value="2">Linux</option>
        </select>

        <select
          name="filters"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={styles.app__selector}
        >
          <option value="all">all</option>
          <option value="browser">browser</option>
          <option value="messengers">messengers</option>
          <option value="social-network">social network</option>
          <option value="streaming-servises">streaming servises</option>
          <option value="cloud-servises">cloud servises</option>
          <option value="games">games</option>
          <option value="programing">programing</option>
          <option value="security">security</option>
          <option value="no-class">no classification</option>
          <option value="video-editors">video editors</option>
        </select>
<Slider/>

        <h1 className={styles.main__title}>Apps</h1>
        {filter !== "all" && <p className={styles.second__title}>{filter}</p>}
        <AppList apps={filteredApps} />
      </div>
    </section>
  );
}
