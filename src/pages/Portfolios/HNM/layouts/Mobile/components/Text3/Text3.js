import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text3 extends Component {
  render() {
    return (
      <div className={css(styles.text3_wrapper)}>
        <p className={css(styles.text3_t)}>
          {this.props.lang === "ru"
            ? "Открытие флагманского магазина в Алматы ставит рекорд: многочасовые очереди и 3 тысячи посетителей в первый день."
            : "The opening of the flagship store in Almaty sets a record: people waited in line for hours, with 3,000 visitors on the first day."}
        </p>
        <br />
        <p className={css(styles.text3_t)}>
{this.props.lang === 'ru' ? 'Охват кампании в Инстаграме в соцсетях – 2 000 000' : 'Coverage in Instagram and social networks - 2 000 000'}
        </p>
      </div>
    );
  }
}
