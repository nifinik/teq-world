import { NavLink } from "react-router-dom";
import styles from "./ServicesItem.module.scss";

const ServicesItem = ({ title, img, index }) => {
  return (
    <div className={styles.item}>
      <img className={styles.item_img} src={img} alt="" />
      <div className={styles.item_num}>{"0" + (index + 1)}</div>
      <div className={styles.item_bottom}>
        <div className={styles.title}>{title}</div>
        <NavLink to={`/project/${index}`}>
          <button className="mainBtn">Оставить заявку </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ServicesItem;
