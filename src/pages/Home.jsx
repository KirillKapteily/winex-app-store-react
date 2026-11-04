import AppList from "../components/AppList";
import { useState, useEffect } from "react";
import { getApps } from "../api/api";
import { filterApps } from "../api/api";
import Slider from "../components/Slider";
import "../styles/container.scss";
import Selectors from "../components/Selectors";
import styles from "../styles/selector.module.scss";
import Chrome49 from "../components/OldBrowserWarning";
import OldBrowserWarning from "../components/OldBrowserWarning";
import { isOldBrowser } from "../browser/browser-check";
export default function Home({ os, setOs }) {
  const [filter, setFilter] = useState("all");
  const filteredApps = filterApps(filter, os);
  const [oldBrowser, setOldBrowser] = useState(isOldBrowser);

  useEffect(() => {
 console.log(oldBrowser);
  }, []);

  useEffect(() => {
    console.log(filteredApps);
  }, [filter]);

  return (
    <section>
      <div className="container">
        {oldBrowser && <OldBrowserWarning />}

        <div className={styles.selector__wrapper}>
          <Selectors
            filter={filter}
            os={os}
            setOs={setOs}
            setFilter={setFilter}
          />
        </div>

        <Slider />
        <h1 className={styles.main__title}>Apps</h1>
        {filter !== "all" && <p className={styles.second__title}>{filter}</p>}
        <AppList apps={filteredApps} />
        {/* <Chrome49/> */}
      </div>
    </section>
  );
}
