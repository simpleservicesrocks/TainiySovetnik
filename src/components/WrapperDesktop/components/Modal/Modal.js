import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { NavLink } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <div
        className={`${css(styles.modal_wrapper)} ${
          this.props.isModalVisible ? css(styles.shown) : css(styles.hidden)
        }`}
      >
        <div className={css(styles.modal_inside)}>
          <div
            className={`${css(styles.modal_inside_block)} ${css(
              styles.mib_left
            )}`}
          >
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/about"}
              className={`${css(styles.mib_a)} cwhite`}
            >
              {this.props.lang === "ru" ? "О нас" : "About Us"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/services"}
              className={`${css(styles.mib_a)} cwhite`}
            >
              {this.props.lang === "ru" ? "Услуги" : "Services"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/portfolio"}
              className={`${css(styles.mib_a)} cwhite`}
            >
              {this.props.lang === "ru" ? "Кейсы" : "Cases"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/feedback"}
              className={`${css(styles.mib_a)} cwhite`}
            >
              {this.props.lang === "ru" ? "Отзывы" : "Testimonials"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/team"}
              className={`${css(styles.mib_a)} cwhite`}
            >
              {this.props.lang === "ru" ? "Команда" : "Our Team"}
            </NavLink>
            <NavLink
              onClick={this.props.handleModal}
              to={process.env.PUBLIC_URL + "/join_us"}
              className={`${css(styles.mib_a)} cwhite`}
            >
              {this.props.lang === "ru" ? "Хочу в советники" : "Work with us"}
            </NavLink>
          </div>
          <p
            className={css(styles.language)}
            onClick={this.props.handleLanguage}
          >
            <span
              className={this.props.lang === "ru" ? css(styles.lang_selected) : ""}
            >
              ру
            </span>{" "}
            |{" "}
            <span
              className={this.props.lang === "en" ? css(styles.lang_selected) : ""}
            >
              en
            </span>
          </p>
          <div
            className={`${css(styles.modal_inside_block)} ${css(
              styles.mib_right
            )}`}
          >
            <p className={css(styles.mib_t)}>
              {this.props.lang === "ru"
                ? "«Тайный советник»"
                : "Tainyi Sovetnik"}
            </p>
            <p className={css(styles.mib_t)}>hello@ts.agency</p>
            <p className={css(styles.mib_t)}>
              {this.props.lang === "ru"
                ? "Казахстан, г. Алматы, ул. Достык 128, ЖК “Терренкур”"
                : "Office 2 (127), Dostyk 128, Almaty, 050063, Kazakhstan"}
            </p>
            <p className={css(styles.mib_t)}>+7 727 355 17 27</p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
