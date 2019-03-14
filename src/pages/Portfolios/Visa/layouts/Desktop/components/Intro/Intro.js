import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Intro extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <p className={css(styles.h)}>Cashless Summit Kazakhstan</p>
        {this.props.lang === "ru" ? (
          <p className={css(styles.t)}>
            «Тайный советник» создали концепцию и в сентябре 2017 года
            организовали первый в Центральной Азии Cashless Summit Kazakhstan,
            посвященный развитию безналичной экономики в регионе.
          </p>
        ) : (
          <p className={css(styles.t)}>
            Tayniy Sovetnik developed the concept of the first Cashless Summit
            Kazakhstan dedicated to the development of a cashless economy in
            Central Asia, and hosted the event in September 2017.
          </p>
        )}
      </div>
    );
  }
}
