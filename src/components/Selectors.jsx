import styles from "../styles/selector.module.scss";

export default function Selectors({ os, filter, setOs, setFilter }) {
  return (
    <div className={styles.selector__wrapper}>
      <select
        name="OS"
        value={os}
        onChange={(e) => setOs(e.target.value)}
        className={styles.app__selector}
      >
        <option value="windows">Windows</option>
        <option value="macos">macOS</option>
        <option value="linux">Linux</option>
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
        <option value="compatibility-layers">compatibility layers</option>
        <option value="office">office</option>
      </select>
    </div>
  );
}
