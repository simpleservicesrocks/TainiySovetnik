import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Info2 extends Component {
  render() {
    return (
      <div className={css(styles.info2_mobile_wrapper)}>
        <p className={css(styles.info2_mobile_h)}>
          {this.props.lang === "ru"
            ? "Направление деятельности"
            : "Our Activities"}
        </p>
        <p className={`${css(styles.info2_mobile_t)}`}>
          {this.props.lang === "ru"
            ? "Сегодня невозможно оставаться в рамках одного направления. Мы меняемся вместе с миром и нашими клиентами."
            : "Today, you can’t limit yourself to one line of work. We adapt to our clients and to a changing world."}
        </p>
        <p className={`${css(styles.info2_mobile_t)}`}>
          {this.props.lang === "ru"
            ? "Мы существуем на стыке нескольких дисциплин: стратегического планирования, медиа-аналитики, создания контента, событийного и бренд-маркетинга."
            : "Our work brings together several competences: strategic planning, media analytics, content production, and event and brand marketing."}
        </p>
        <p
          className={`${css(styles.info2_mobile_t)}  ${css(
            styles.info2_mobile_tb
          )}`}
        >
          {this.props.lang === "ru"
              ? "Мы создаём интегрированные коммуникации и формируем общественное мнение, одинаково эффективно работая на любых коммуникационных платформах."
              : "We build integrated communications and form public opinion, using various communication platforms to equally great effect."}
        </p>
      </div>
    );
  }
}
