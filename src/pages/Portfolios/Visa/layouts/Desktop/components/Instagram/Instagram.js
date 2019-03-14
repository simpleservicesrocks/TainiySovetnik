import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Instagram extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <div className={css(styles.mini)}>
          <p className={css(styles.h)}>
            {this.props.lang === "ru" ? "Кампания" : "Campaign"} #лучшечемкэш
          </p>
          <p className={css(styles.hsub)}>
            {this.props.lang === "ru"
              ? "Весной 2016 мы провели «вирусную» кампанию с участием популярных казахстанских и киргизских вайнеров. Цель кампании – в развлекательной манере рассказать о преимуществах платежных карт перед наличными."
              : "In the spring of 2016 we ran a viral campaign involving popular personalities from the video app Vine from Kazakhstan and Kyrgyzstan. The objective was to show why credit cards are better than cash in an entertaining manner."}
          </p>
        </div>
        <div className={css(styles.insta)} />
        <div className={css(styles.info)}>
          <div className={css(styles.infoblock)}>
            <p>
              18{" "}
              <span style={{ color: "#acacac" }}>
                {this.props.lang === "ru" ? "вайнеров" : "viners"}
              </span>
            </p>
            <p>
              1 819 329{" "}
              <span style={{ color: "#acacac" }}>
                {this.props.lang === "ru" ? "фолловеров" : "followers"}
              </span>
            </p>
            <p>
              18{" "}
              <span style={{ color: "#acacac" }}>
                {this.props.lang === "ru" ? "постов" : "posts"}
              </span>
            </p>
          </div>
          <div className={css(styles.infoblock)}>
            <p>
              2 333 326{" "}
              <span style={{ color: "#acacac" }}>
                {this.props.lang === "ru" ? "просмотров" : "views"}
              </span>
            </p>
            <p>
              212 480{" "}
              <span style={{ color: "#acacac" }}>
                {this.props.lang === "ru" ? "лайков" : "likes"}
              </span>
            </p>
            <p>
              2 026{" "}
              <span style={{ color: "#acacac" }}>
                {this.props.lang === "ru" ? "комментариев" : "comments"}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
