import Benefit from "../components/Benefit/Benefit";
// import PrincipleItem from "../components/PrincipleItem/Principle";
import styles from "./AboutUs.module.scss";
import { res, sertificate } from "../helpers/projectList";
import PartnersSection from "../components/PartnersSection/PartnersSection";
import Footer from "../components/Footer/Footer";
import TeamBlock from "../components/TeamBlock/TeamBlock";
import CallUs from "../components/CallUs/CallUs";
import AdvantageItem from "../components/AdvantageItem/AdvantageItem";
import PrinciplesItem from "../components/PrinciplesItem/PrinciplesItem";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className={styles.aboutus}>
          <div className={styles.aboutus_head}>
            <div className={styles.aboutus_head_content}>
              <div className={styles.title}>
                Мы - молодая и амбициозная команда
              </div>
              <div className={styles.subtitle}>
                Мы любим принимать вызовы и решать интересные задачи посредством
                цифровых инструментов.
              </div>
            </div>
            <div className="line"></div>
          </div>
          <div className={styles.aboutus_bottom}>
            <div className="titleMini">О нас</div>
            <div className="descrMini">
              Мы – компания, являющаяся молодым и глобальным игроком на рынке
              ИТ-услуг. Мы стартовали в 2018 году в международном технопарке IT
              стартапов, и с тех пор наш путь был наполнен вызовами и
              достижениями.
            </div>
          </div>
          <div className="benefits">
            <div className="items">
              <Benefit
                name="Надежность"
                descr="Наши клиенты и партнеры могут быть уверены в том, что на нас можно положиться. В любой нестандартной ситуации мы готовы прийти на помощь и оказать поддержку."
              />
              <Benefit
                name="Качество"
                descr="Самые высокие стандарты качества во всех направлениях работы — наше кредо. Мы стремимся предоставлять лучший возможный сервис и трудимся на результат, который оправдает вложения."
              />
              <Benefit
                name="Инновации"
                descr="В стремительно меняющихся обстоятельствах мы всегда готовы предложить нашим клиентам самые современные технологии, подходы и продукты для решения актуальных задач бизнеса"
              />
            </div>
            <div className="scroll"></div>
          </div>
          <div className="line"></div>
          <div className="principles">
            <div className="titleMini">
              Наша <span>команда</span> работает <br /> по принципам:
            </div>
            <div className="principles_content">
              <PrinciplesItem
                itemImg={res.star}
                title="Мы бросаем вызов нашим конкурентам — больше ценности за ту же стоимость."
              />
              <PrinciplesItem
                itemImg={res.star}
                title="Мы бросаем вызов нашим клиентам — не боимся задавать неудобные вопросы и помогать клиентам выйти на новый уровень в их отраслях."
              />
              <PrinciplesItem
                itemImg={res.star}
                title="Мы бросаем вызов самим себе — с радостью берёмся за нетривиальные проекты."
              />
              <PrinciplesItem
                itemImg={res.star}
                title="Наша цель – содействие в создании и внедрении качественного конкурентоспособного ИТ-продукта и обеспечении высокого уровня лояльности ваших клиентов и партнёров."
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="thank">
            <div className="titleMini">Благодарственные письма</div>
            <div className="descrMini">ДОСТИЖЕНИЯ</div>
            <div className="sertificate">
              <div className="items">
                <img src={sertificate.sertificate1} alt="" />
                <img src={sertificate.sertificate2} alt="" />
                <img src={sertificate.sertificate3} alt="" />
              </div>
              <div className="scroll"></div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="advantages">
          <div className="titleMini">Наши преимущества</div>
          <div className="descrMini">ДОСТИЖЕНИЯ</div>
          <div className="items">
            <AdvantageItem title="+1500" subtitle="Реализованных проектов" />
            <AdvantageItem title="+60" subtitle="Члены команды" />
            <AdvantageItem title="5" subtitle="Годы на рынке" />
            <AdvantageItem title="16" subtitle="Наград" />
          </div>
          <div className="line"></div>
        </div>
        <TeamBlock />
        <PartnersSection />
        <CallUs />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
