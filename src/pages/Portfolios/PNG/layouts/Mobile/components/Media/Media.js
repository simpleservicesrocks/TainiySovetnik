import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Media extends Component {
  render() {
    const yt_h = window.innerWidth / 1.777;
    return (
      <div className={css(styles.mainWrap)}>
        <img src={this.props.insta1} alt="" className={css(styles.img)} />
        <div className={css(styles.wrap)}>
          <p className={css(styles.t1)}>
            {this.props.lang === "ru"
              ? "Придали кампании локальный характер, создав своё видео #какдевчонка и записав видео-интервью с местными героинями."
              : "We made the campaign local by using our own video titled #какдевчонка and video interviews with local heroines."}
          </p>
          <p className={css(styles.t2)} style={{ marginTop: "15px" }}>
            580 000{" "}
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru" ? "просмотров" : "views"}
            </span>
          </p>
          <p className={css(styles.t2)}>
            200{" "}
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru"
                ? "позитивных комментариев"
                : "positive comments"}
            </span>
          </p>
        </div>
        <iframe
          style={{ marginTop: "60px" }}
          title="video main"
          width="100%"
          height={yt_h}
          src="https://www.youtube.com/embed/TZOXyaiuLHU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <p className={css(styles.t3, styles.wrap)}>
          {this.props.lang === "ru"
            ? "Совместно с порталом cosmo.kz запустили промо-сайт, где агрегировали и публиковали дополнительный контент проекта: видео, полезные статьи, интервью."
            : "A promo website was launched jointly with cosmo.kz, on which we collected and published additional content for the project, including videos, useful articles and interviews."}
          <br />
          <br />
          {this.props.lang === "ru"
            ? "На сайте дали старт фотоконкурсу в Инстаграме."
            : "An Instagram photo contest was announced on the site."}
        </p>
        <p className={css(styles.t4, styles.wrap)}>
          {this.props.lang === "ru"
            ? "Задействовали в продвижении конкурса популярных Инстаграм-пользователей."
            : "We involved popular Instagram figures in promotional activities."}
        </p>
      </div>
    );
  }
}
