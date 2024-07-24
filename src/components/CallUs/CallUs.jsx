import { res } from "../../helpers/projectList";
import styles from "./CallUs.module.scss";

const CallUs = () => {
  return (
    <section className="callUs">
      <div className="callUs_left">
        <div className="titleHead">
          <img src={res.titleSnow} alt="" />
          <div className="subtitle">Свяжитесь с нами!</div>
        </div>
        <div className="title">Оставьте свою заявку</div>
        <div className="descr">
          Мы обещаем связаться с вами в ближайшее время для предоставления
          лучшего технического решения вашему бизнесу!
        </div>
      </div>
      <div className="callUs_right">
        <input className="callUs_input" placeholder="Ваше имя*" type="text" />
        <input
          className="callUs_input"
          placeholder="Телефон*"
          type="tel"
          id="phone"
          name="phone"
        />
        <input
          className="callUs_input"
          placeholder="Ваш комментарий"
          type="text"
        />
        <div className="checkSide">
          <input type="checkbox" id="scales" name="scales" />
          <label for="scales">
            Заполняя эти поля, вы принимаете условия соглашения о персональных
            данных
          </label>
        </div>
        <button className="mainBtn">Отправить</button>
      </div>
    </section>
  );
};

export default CallUs;
