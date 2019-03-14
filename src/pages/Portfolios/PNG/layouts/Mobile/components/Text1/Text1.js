import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class componentName extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <p className={css(styles.t1)}>
          {this.props.lang === "ru"
            ? "Procter&Gamble — мировой гигант FMCG: производит бытовую химию, средства женской и детской гигиены, косметику."
            : "Procter&Gamble is a world leader in FMCG, producing household cleaning products, beauty products, children’s goods and cosmetics."}
        </p>
        <p className={css(styles.t2)}>
          {this.props.lang === "ru"
            ? "Для P&G мы разрабатываем и реализуем комплексные стратегии продвижения брендов, охватывая отношения с медиа, celebrity endorsement, работу с благотворительными организациями, проведение мероприятий и активности в социальных сетях."
            : "We design and implement comprehensive brand strategies for P&G which include media relations, celebrity endorsement, working with charity organizations, events, and activities in social networks."}
        </p>
      </div>
    );
  }
}
