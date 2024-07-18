import Footer from "../components/Footer/Footer";
import { partners, projects, res } from "../helpers/projectList";

const Home = () => {
  return (
    <div>
      <section className="main">
        <div className="main_head">
          <h1 className="main_head_title">
            TEQ World: IT-решения для вашего успеха
          </h1>
          <div className="main_head_right">
            <div className="main_head_text">
              пр. Сарыарка, 6, <br /> БЦ Арман, офис 311 <br /> г. Астана <br />{" "}
              <br />
              info@teq.kz
            </div>
            <div className="main_head_right_btns">
              <button className="secBtn">О компании</button>
              <button className="mainBtn">Оставить заявку</button>
            </div>
          </div>
        </div>
        <div className="main_bg">
          <img src={res.bgImg} alt="" />
        </div>
      </section>
      <section className="aboutUs">
        <div className="aboutUs_left">
          <div className="titleHead">
            <img src={res.titleSnow} alt="" />
            <div className="subtitle">О нас</div>
          </div>
          <div className="title">О компании</div>
          <div className="descr">
            Компания TEQ World создана ИТ-специалистами, имеющими колоссальный
            успешный опыт в реализации масштабных ИТ-проектов.
          </div>
          <a href="#">Подробнее</a>
        </div>
        <div className="line"></div>
        <div className="aboutUs_right">
          <div className="title_sec">
            Наша <span>команда</span> работает по принципам:
          </div>
          <div className="descr_items">
            <div className="item">
              <img src={res.star} alt="" />
              <div className="item_descr">
                Мы бросаем вызов нашим конкурентам — больше ценности за ту же
                стоимость.
              </div>
            </div>
          </div>
          <div className="descr_items">
            <div className="item">
              <img src={res.star} alt="" />
              <div className="item_descr">
                Мы бросаем вызов нашим конкурентам — больше ценности за ту же
                стоимость.
              </div>
            </div>
          </div>
          <div className="descr_items">
            <div className="item">
              <img src={res.star} alt="" />
              <div className="item_descr">
                Мы бросаем вызов нашим конкурентам — больше ценности за ту же
                стоимость.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="partners_content">
          <div className="titleHead">
            <img src={res.titleSnow} alt="" />
          </div>
          <div className="title">Партнеры и клиенты</div>
        </div>
        <div className="items-wrap">
          <div className="items marquee">
            <img className="item" src={partners[0]} />
            <img className="item" src={partners[1]} />
            <img className="item" src={partners[2]} />
            <img className="item" src={partners[3]} />
            <img className="item" src={partners[4]} />
            <img className="item" src={partners[5]} />
          </div>
          <div aria-hidden="true" class="items marquee">
            <img className="item" src={partners[0]} />
            <img className="item" src={partners[1]} />
            <img className="item" src={partners[2]} />
            <img className="item" src={partners[3]} />
            <img className="item" src={partners[4]} />
            <img className="item" src={partners[5]} />
          </div>
        </div>
      </section>
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
      <Footer />
    </div>
  );
};

export default Home;
