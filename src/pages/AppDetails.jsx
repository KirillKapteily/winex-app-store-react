import { useParams } from "react-router-dom";
import { getImageURL } from "../image-util";
import { getAppId } from "../api/api";
import { ShieldCheck, Copyright, Download } from "lucide-react";
import DownloadButton from "../components/DownloadButton";
import styles from "../styles/app-details.module.scss";
import ImgList from "../components/ImgList";
import AppList from "../components/AppList";
import { useState } from "react";
import Modal from "../components/Modal";
import BackBtn from "../components/BackBtn";
import container from "../styles/container.module.scss";

export default function AppDetails({ os }) {
  const { id } = useParams();
  const app = getAppId(Number(id));
  const [modal, setModal] = useState(null);

  const openModal = (url) => {
    setModal(url);
  };
  const closeModal = () => {
    setModal(null);
  };

  return (
    <section>
      <div className={container.container}>
        <BackBtn />
        <div className={styles.app__info__wrapper}>
          <div className={styles.app__info}>
            <img
              src={getImageURL(app.img)}
              alt={app.title}
              width="150"
              className={styles.img}
            />
            <div className={styles.app__info__text}>
              <h2>{app.title}</h2>
              <p>Version: {app.version}</p>
              <p>ID: {app.id}</p>
            </div>
          </div>
          <div className={styles.app__security}>
            <ShieldCheck size={64} className={styles.app__security__ico} />
            <p>This software is 100% safe</p>
          </div>
          <div className={styles.app__copyright}>
            <Copyright size={64} className={styles.app__copyright__ico} />
            <p>
              This app is developed by <br />{" "}
              <a href={app.devLink}>{app.developer}</a>
            </p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <strong>{app.description}</strong>
          <DownloadButton os={os} app={app} />
        </div>

        <ImgList app={app} openModal={openModal} />

        <p>{app.longDescription}</p>
        <h3 className={styles.main__title}>Similar Apps</h3>
        {app.similarApps.length > 0 ? (
          <AppList apps={app.similarApps} />
        ) : (
          <h3>None D:</h3>
        )}
      </div>
      {modal !== null && <Modal url={modal} closeModal={closeModal} />}
    </section>
  );
}
