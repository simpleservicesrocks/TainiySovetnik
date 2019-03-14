import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Dates extends Component {
  render() {
    return (
      <div className={css(styles.dates_wrapper)} id="black_el">
        <div className={css(styles.inside)}>
          <div className={css(styles.insideBox)}>
            <p className={css(styles.t1)}>2004</p>
            <p className={css(styles.t2)}>
              {this.props.lang === "ru"
                ? "год основания агенства"
                : "agency was established"}
            </p>
          </div>
          <div className={css(styles.insideBox)}>
            <p className={css(styles.t1)}>400</p>
            <p className={css(styles.t2)}>
              {this.props.lang === "ru"
                ? "реализованных проектов"
                : "implemented projects"}
            </p>
          </div>
          <div className={css(styles.insideBox)}>
            <p className={css(styles.t1)}>99</p>
            <p className={css(styles.t2)}>
              {this.props.lang === "ru"
                ? "клиентов на начало 2018 года"
                : "clients by 2018"}
            </p>
          </div>
        </div>
        <div className={css(styles.abso)}>
          <p className={css(styles.tt1)}>
            {this.props.lang === "ru" ? "Работаем в:" : "We work in:"}
          </p>
          <p className={css(styles.tt2)}>
            {this.props.lang === "ru"
              ? "Казахстане, Кыргызстане, Туркменистане, Таджикистане, Узбекистане, Грузии, Азербайджане"
              : "Kazakhstan, Kyrgyzstan, Turkmenistan, Tajikistan, Uzbekistan, Georgia, Azerbaijan"}
          </p>
        </div>
      </div>
    );
  }
}
