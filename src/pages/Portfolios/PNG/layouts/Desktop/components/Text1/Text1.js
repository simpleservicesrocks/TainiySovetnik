import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
export default class Text1 extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <p>
          {this.props.lang === "ru"
            ? "Procter&Gamble — мировой гигант FMCG: производит бытовую химию, средства женской и детской гигиены, косметику."
            : "Procter&Gamble is a world leader in FMCG, producing household cleaning products, beauty products, children’s goods and cosmetics."}

          <br />
          <br />
          <span style={{ color: "#acacac" }}>
            {this.props.lang === "ru"
              ? "Для P&G мы разрабатываем и реализуем комплексные стратегии продвижения брендов, охватывая отношения с медиа, celebrity endorsement, работу с благотворительными организациями, проведение мероприятий и активности в социальных сетях."
              : "We design and implement comprehensive brand strategies for P&G which include media relations, celebrity endorsement, working with charity organizations, events, and activities in social networks."}
          </span>
        </p>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    width: "625px",
    marginTop: "300px",
    marginBottom: "120px",
    fontFamily: "SFUIDisplay-Light",
    fontWeight: 300,
    lineHeight: "33px",
    fontSize: "15px"
  }
});
