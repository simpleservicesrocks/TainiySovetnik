import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Info1 extends Component {
  render() {
    return (
      <div className={css(styles.info1_mobile_wrapper)}>
        <p className={css(styles.info1_h)}>
          {this.props.lang === "ru"
            ? "Мы работаем в странах Центральной Азии с 2004 года. Специализируемся на событийных коммуникациях, бренд-маркетинге, отношениях с медиа на любых платформах."
            : "We have been working in Central Asian since 2004. We specialize in event communications, brand marketing and media relations on any platform."}
        </p>
        <p className={css(styles.info1_t1)}>
          {this.props.lang === "ru"
            ? "Практикуем холистический подход: для нас нет незначительных деталей — мы выстраиваем коммуникацию, в которой все составляющие взаимосвязаны и в сумме дают нечто большее, нечто более эффектное и волнительное."
            : "We adhere to a holistic approach where no detail is neglected. We develop communication strategies in which all elements are interconnected and produce a result that is far bigger, far more efficient, and far more exciting."}
        </p>
        <p className={css(styles.info1_t2)}>
          {this.props.lang === "ru"
            ? "70% новых заказчиков приходят к нам по рекомендации других клиентов."
            : "70% of new clients come to us via referrals."}
        </p>
      </div>
    );
  }
}
