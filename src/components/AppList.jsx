import AppItem from "./AppItem";
import styles from "../styles/list.module.scss";
import NotFound from "./NotFound";

export default function AppList({ apps }) {
console.log(apps);
//console.log(apps.length);

if (apps?.length === 0) {
  return <NotFound/>
}

  return (
    <ul className={styles.app__list}>
      {apps?.map((app) => (
        <AppItem key={app.id} app={app} />
      ))}
    </ul>
  );
}
