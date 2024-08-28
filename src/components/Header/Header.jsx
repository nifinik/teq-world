import React from "react";
import styles from "./Header.module.scss";
import logo from "../../img/icons-svg/teq.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoSide}>
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navItem_active : styles.navItem
          }
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navItem_active : styles.navItem
          }
          to="/aboutus"
        >
          О нас
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navItem_active : styles.navItem
          }
          to="/services"
        >
          Услуги
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navItem_active : styles.navItem
          }
          to="/contacts"
        >
          Контакты
        </NavLink>
      </nav>
      <button className="secBtn">Связаться с нами</button>
    </header>
  );
};

export default Header;
