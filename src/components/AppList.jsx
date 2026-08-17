import AppItem from "./AppItem";
import styles from "../styles/list.module.scss";

export default function AppList({ apps }) {
console.log(apps);
console.log(apps.length);

if (apps.length === 0) {
  return <h1 className={styles.error}>Try searching for something else</h1>
}

  return (
    <ul className={styles.app__list}>
      {apps.map((app) => (
        <AppItem app={app} />
      ))}
    </ul>
  );
}
