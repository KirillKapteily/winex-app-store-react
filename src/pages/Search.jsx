import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchForApps } from "../api/api";
import AppList from "../components/AppList";
import styles from "../styles/search.module.scss";
import container from "../styles/container.module.scss";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [apps, setApps] = useState([]);

  useEffect(() => {
    setApps(searchForApps(searchQuery));
  }, [searchParams]);

  let query = searchParams.get("query");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      alert("The field can't be empty");
      return;
    } else {
      setSearchParams({ query: searchQuery });
      searchForApps(searchQuery);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.app__search__form}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.app__search}
        />
        <button type="submit" className={styles.app__search__btn}>
          Search
        </button>
      </form>
      <div className={container.container}>
        <AppList apps={apps} />
      </div>
    </section>
  );
}
