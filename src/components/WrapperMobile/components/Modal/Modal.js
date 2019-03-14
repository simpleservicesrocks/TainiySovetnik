import React, { Component } from "react";
import styles from "./styles";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <div
        className={`${css(styles.modal_wrapper)} ${
          this.props.isModalVisible
            ? css(styles.hideModal)
            : css(styles.showModal)
        }`}
      >
        <div className={css(styles.modal_inside_wrapper)}>
          <div className={css(styles.modal_links_wrapper)}>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/about"}
              className={`cwhite`}
            >
              {this.props.lang === "ru" ? "О нас" : "About Us"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/services"}
              className={`cwhite`}
            >
              {this.props.lang === "ru" ? "Услуги" : "Services"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/portfolio"}
              className={`cwhite`}
            >
              {this.props.lang === "ru" ? "Кейсы" : "Cases"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/team"}
              className={`cwhite`}
            >
              {this.props.lang === "ru" ? "Команда" : "Our Team"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/join_us"}
              className={`cwhite`}
            >
              {this.props.lang === "ru" ? "Хочу в советники" : "Work with us"}
            </NavLink>
          </div>
          <div className={css(styles.modal_social)}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tayniy.sovetnik/"
              className={css(styles.modal_social_text)}
            >
              instagram
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/agencyts/"
              className={css(styles.modal_social_text)}
            >
              facebook
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCHVztc9Wh704awsyBxq9mHQ"
              className={css(styles.modal_social_text)}
            >
              youtube
            </a>
          </div>
          <div className={css(styles.modal_address)}>
            <p className={css(styles.modal_address_text)}>
              {" "}
              {this.props.lang === "ru"
                ? "«Тайный советник»"
                : "Tainyi Sovetnik"}
            </p>
            <p className={css(styles.modal_address_text)}>hello@ts.agency</p>
            <p className={css(styles.modal_address_text)}>
              {this.props.lang === "ru"
                ? "Казахстан, г. Алматы, ул. Достык 128, ЖК “Терренкур”"
                : "Office 2 (127), Dostyk 128, Almaty, 050063, Kazakhstan"}
            </p>
            <a
              href="tel:+7 727 355 17 27"
              className={css(styles.modal_address_text)}
            >
              +7 727 355 17 27
            </a>
          </div>
          <div
            className={css(styles.modal_language)}
            onClick={this.props.handleLanguage}
          >
            <p className={css(styles.modal_language_text)}>ру | en</p>
          </div>
        </div>
      </div>
    );
  }
}
