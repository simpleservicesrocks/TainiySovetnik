import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Clients extends Component {
  render() {
    return (
      <div className={css(styles.page)}>
        <div className={css(styles.wrap)}>
          <p className={css(styles.h)}>
            {this.props.lang === "ru"
              ? "Клиенты и проекты"
              : "Clients and projects"}
          </p>
          <p className={css(styles.t)}>
            {this.props.lang === "ru"
              ? <span>В течение 13 лет мы выполнили 400 проектов разного масштаба и характера.</span>
              : <span>Over the past 13 years, we’ve implemented some 400 projects of different scale<br/>and nature</span>}
            <br />
            {this.props.lang === "ru"
              ? <span>Работая над проектом, мы не просто придерживаемся графика и объема работ, но стремимся к тому, чтобы наша работа помогала команде нашего клиента и бренду стать сильнее.</span>
              : <span>When we work on a project, we not only stick to the time schedule and terms<br/>of reference, but strive to make our client’s team and brand stronger</span>}
            <br />
            {this.props.lang === "ru"
              ? "Гордимся тем, что с некоторыми крупнейшими клиентами мы работаем совместно уже много лет."
              : "We take particular pride in working for a number of large clients for many years"}
          </p>
        </div>
      </div>
    );
  }
}
