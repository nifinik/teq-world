import { partners, res } from "../../helpers/projectList";
import styles from "./PartnersSection.module.scss";

const PartnersSection = ({}) => {
  return (
    <section className="partners">
      <div className="partners_content">
        <div className="titleHead">
          <img src={res.titleSnow} alt="" />
        </div>
        <div className="title">Партнеры и клиенты</div>
      </div>
      <div className="items-wrap">
        <div className="items marquee">
          <img className="item" src={partners[0]} alt="partners1" />
          <img className="item" src={partners[1]} alt="partners2" />
          <img className="item" src={partners[2]} alt="partners3" />
          <img className="item" src={partners[3]} alt="partners4" />
          <img className="item" src={partners[4]} alt="partners5" />
          <img className="item" src={partners[5]} alt="partners6" />
        </div>
        <div aria-hidden="true" class="items marquee">
          <img className="item" src={partners[0]} alt="partners1" />
          <img className="item" src={partners[1]} alt="partners2" />
          <img className="item" src={partners[2]} alt="partners3" />
          <img className="item" src={partners[3]} alt="partners4" />
          <img className="item" src={partners[4]} alt="partners5" />
          <img className="item" src={partners[5]} alt="partners6" />
        </div>
      </div>
      <div className={styles.line}></div>
    </section>
  );
};

export default PartnersSection;
