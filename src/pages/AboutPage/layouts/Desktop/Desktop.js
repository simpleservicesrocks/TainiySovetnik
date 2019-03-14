import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Desktop extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <div className={css(styles.twrap)}>
          <p>
            {this.props.lang === "ru"
              ? <p>Мы работаем в странах Центральной Азии с 2004 года. Специализируемся на событийных коммуникациях, бренд-маркетинге, отношениях с медиа<br/>на любых платформах.</p>
              : "We have been working in Central Asian since 2004. We specialize in event communications, brand marketing and media relations on any platform."}
            {this.props.lang === "en" && <br />}
            <br />
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru"
                ? <p>Практикуем холистический подход: для нас нет незначительных<br/>деталей — мы выстраиваем коммуникацию, в которой все<br/>составляющие взаимосвязаны и в сумме дают нечто большее, нечто более эффектное и волнительное.</p>
                : <p>We adhere to a holistic approach where no detail is neglected. We develop communication strategies in which all elements are interconnected and produce<br/>a result that is far bigger, far more efficient, and far more exciting.</p>}
              {this.props.lang === "ru"
                ? <React.Fragment><br/><p>70% новых заказчиков приходят к нам по рекомендации других клиентов.</p></React.Fragment>
                : "70% of new clients come to us via referrals."}
              <br />
            </span>
          </p>
        </div>
        <div className={css(styles.twrap2)}>
          <p className={css(styles.h)}>
            {this.props.lang === "ru"
              ? "Направление деятельности"
              : "Our Activities"}
          </p>
          <p className={css(styles.t)}>
            {this.props.lang === "ru"
              ? "Сегодня невозможно оставаться в рамках одного направления. Мы меняемся вместе с миром и нашими клиентами."
              : <p>Today, you can’t limit yourself to one line of work. We adapt to our clients<br/>and to a changing world.</p>}
            <br />
            {this.props.lang === "ru"
              ? <p>Мы существуем на стыке нескольких дисциплин: стратегического планирования, медиа-аналитики, создания контента, событийного<br/>и бренд-маркетинга.</p>
              : "Our work brings together several competences: strategic planning, media analytics, content production, and event and brand marketing."}
            {this.props.lang==="en" && <br />}
            <br />
            {this.props.lang === "ru"
              ? "Мы создаём интегрированные коммуникации и формируем общественное мнение, одинаково эффективно работая на любых коммуникационных платформах."
              : "We build integrated communications and form public opinion, using various communication platforms to equally great effect."}
          </p>
          <p />
        </div>
      </div>
    );
  }
}
