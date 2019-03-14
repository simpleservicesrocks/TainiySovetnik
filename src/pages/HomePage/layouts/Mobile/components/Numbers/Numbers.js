import React, { Component } from "react";
import styles from "./styles";
import { css } from "aphrodite";
export default class Numbers extends Component {
  render() {
    return (
      <div className={css(styles.number_mobile_wrapper)} id="black_el">
        <div className={css(styles.numbers_wrapper_outer)}>
          <div className={css(styles.numbers_wrapper)}>
            <p className={css(styles.numbers_year)}>2004</p>
            <p className={css(styles.number_desc)}>
              {this.props.lang === "ru"
                ? "год основания агенства"
                : "agency was established"}
            </p>
          </div>
          <div
            className={`${css(styles.numbers_wrapper)} ${css(
              styles.extra_margarine
            )}`}
          >
            <p className={css(styles.numbers_year)}>400</p>
            <p className={css(styles.number_desc)}>
              {this.props.lang === "ru"
                ? "реализованных проектов"
                : "implemented projects"}
            </p>
          </div>
          <div className={css(styles.numbers_wrapper)}>
            <p className={css(styles.numbers_year)}>99</p>
            <p className={css(styles.number_desc)}>
              {this.props.lang === "ru"
                ? "клиентов на начало 2018 года"
                : "clients by 2018"}
            </p>
          </div>
        </div>
        <div className={css(styles.numbers_workplaces)}>
          <p className={css(styles.numbers_wp_t1)}>
            {this.props.lang === "ru" ? "Работаем в:" : "We work in:"}
          </p>
          <p className={css(styles.numbers_wp_t2)}>
            {this.props.lang === "ru"
              ? "Казахстане, Кыргызстане, Туркменистане, Таджикистане, Узбекистане, Грузии, Азербайджане"
              : "Kazakhstan, Kyrgyzstan, Turkmenistan, Tajikistan, Uzbekistan, Georgia, Azerbaijan"}
          </p>
        </div>
      </div>
    );
  }
}
