import { res } from "../../helpers/projectList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_head">
        <img src={res.logo} alt="" />
        <nav className="footer_nav">
          <div className="item">Главная</div>
          <div className="item">О компании</div>
          <div className="item">Услуги</div>
          <div className="item">Решения</div>
          <div className="item">Новости</div>
          <div className="item">Вакансии</div>
          <div className="item">Контакты</div>
        </nav>
      </div>
      <div className="line"></div>
      <div className="footer_bottom">
        <div className="footer_bottom_items">
          <div className="item">
            Адрес <br /> г. Астана, пр. Сарыарка, 6
          </div>
          <div className="item">
            Email <br /> info@teq.kz
          </div>
          <div className="item">
            Телефон <br /> +7 7172 677 191
          </div>
        </div>
        <div className="footer_bottom_contact">
          <div className="text">TEQ World © 2023</div>
          <div className="contacts">
            <img src={res.instagram} alt="" />
            <img src={res.facebook} alt="" />
            <img src={res.linkedin} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
