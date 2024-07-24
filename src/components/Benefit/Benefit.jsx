import styles from "./Benefit.module.scss";
import { res } from "../../helpers/projectList";

const Benefit = ({ name, descr }) => {
  return (
    <div className={styles.item}>
      <img src={res.benefitIcon} alt="" />
      <div className={styles.item_title}>{name}</div>
      <div className={styles.item_descr}>{descr}</div>
    </div>
  );
};

export default Benefit;
