import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { insta1 } from "../../../../../../../database/portfolio/png";
export default class Insta extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <img src={insta1} alt="" />
        <div className={css(styles.div_r)}>
          <p>
            {this.props.lang === "ru"
              ? "Придали кампании локальный характер, создав своё видео #какдевчонка и записав видео-интервью с местными героинями."
              : "We made the campaign local by using our own video titled #какдевчонка and video interviews with local heroines."}
          </p>
          <span>
            <p>
              580 000 <span style={{ color: "#acacac" }}>{this.props.lang === 'ru' ? 'просмотров' : 'views'}</span>
            </p>
            <p>
              200{" "}
              <span style={{ color: "#acacac" }}>{this.props.lang === 'ru' ? 'позитивных комментариев' : 'positive comments'}</span>
            </p>
          </span>
        </div>
      </div>
    );
  }
}
