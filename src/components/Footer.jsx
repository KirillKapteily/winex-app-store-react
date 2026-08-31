
import styles from "../styles/footer.module.scss";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
     <div className={styles.footer__wrapper}>
        <div >
          <ul className={styles.footer__list}>
            <li><a href="#" className={styles.footer__link}>WinexAppStore</a></li>
            <li>
              <p>Winex App Store Discover the ultimate app library with Winex App Store, your secure
                and modern
                destination
                for
                software on Windows, macOS, Android, and Linux. Whether you're seeking productivity tools, creative
                software, or
                the latest games, Winex App Store offers a curated selection to meet all your digital needs. 
              </p>
            </li>
            <li>
              <p>
                  The author does not own or claim any copyrights, trademarks, patents, or other intellectual property
                rights relating to any programs, applications, websites, or third-party products mentioned or used in
                this project. All rights belong to their respective owners.
                This material is created solely for educational purposes, with no intention of infringing or
                appropriating any third-party content. If any company or author believes that their rights have been
                infringed, please contact us to resolve the situation.
              </p>
            </li>
            <li>
              <p>
                App versions may vary.
              </p>
            </li>
          </ul>
          <div>
            <ul className={styles.footer__list}>
              <li className={styles.footer__item}><a href="mailto:lenaplop980@icloud.com" className={styles.footer__link}><Mail className={styles.icon__fixer}/>lenaplop980@icloud.com</a>
              </li>
              <li className={styles.footer__item}><a href="https://github.com/KirillKapteily" className={styles.footer__link}><Globe className={styles.icon__fixer}/>GitHub</a></li>
            </ul>
          </div>
          <p className={styles.version__p}>Version 1.0 Beta 7.3</p>
          <p>width: {window.innerWidth}px</p>
        </div>

      </div>
      
    </footer>
  );
}
