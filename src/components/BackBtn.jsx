import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import styles from "../styles/back-btn.module.scss";

export default function BackBtn() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return <button onClick={back} className={styles.back__btn}><ChevronLeft/></button>;
}
