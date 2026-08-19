import ImgItem from "./ImgItem";
import styles from "../styles/img-list.module.scss";

export default function ImgList({ app, openModal }) {
  return (
    <ul className={styles.img__list}>
      {app.screenshots.map((img) => (
        <ImgItem key={img.id} img={img} openModal={openModal}/>
      ))}
    </ul>
  );
}
