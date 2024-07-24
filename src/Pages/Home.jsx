import CallUs from "../components/CallUs/CallUs";
import Footer from "../components/Footer/Footer";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import ServicesItem from "../components/ServicesItem/ServicesItem";
import { res, projects } from "../helpers/projectList";

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="main">
          <div className="head">
            <h1 className="head_title">
              TEQ World: IT-решения для вашего успеха
            </h1>
            <div className="head_right">
              <div className="head_text">
                пр. Сарыарка, 6, <br /> БЦ Арман, офис 311 <br /> г. Астана{" "}
                <br /> <br />
                info@teq.kz
              </div>
              <div className="head_right_btns">
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
        <div className="services_items">
          {projects.map((project, index) => {
            return (
              <ServicesItem
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </div>
        <div className="onlyLine">
          <div className="line"></div>
        </div>
        <PartnersSection />
        <CallUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
