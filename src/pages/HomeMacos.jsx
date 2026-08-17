import AppList from "../components/AppList";
import { getMacApps } from "../api/api";

export default function Home() {
  const apps = getMacApps();

  return (
    <section>
      <h1>Apps</h1>
      <AppList apps={apps} />
    </section>
  );
}
