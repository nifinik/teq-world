import { res } from "../../helpers/projectList";
import styles from "./TeamBlock.module.scss";

const TeamBlock = () => {
  return (
    <div className="team">
      <div className="titleMini">Команда</div>
      <div className={styles.descrMini}>
        Наша команда состоит из талантливых и амбициозных специалистов, которые
        готовы совершенствовать глобальные процессы, и стремятся к постоянному
        саморазвитию в условиях динамично меняющейся реальности.
      </div>
      <div className="teamImg">
        <img src={res.teamImg} alt="teamImg" />
      </div>
    </div>
  );
};

export default TeamBlock;
