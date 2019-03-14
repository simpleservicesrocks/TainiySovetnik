import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text3 extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <div className={css(styles.wrap1)}>
          <p>
            {this.props.lang === "ru"
              ? "Совместно с порталом cosmo.kz запустили промо-сайт, где агрегировали и публиковали дополнительный контент проекта: видео, полезные статьи, интервью."
              : "A promo website was launched jointly with cosmo.kz, on which we collected and published additional content for the project, including videos, useful articles and interviews."}
            <br />
            <br />
            <br />
            {this.props.lang === "ru"
              ? "На сайте дали старт фотоконкурсу в Инстаграме."
              : "An Instagram photo contest was announced on the site."}
            <br />
            <br />
          </p>
        </div>
        <div className={css(styles.wrap2)}>
          <img src={this.props.images[0]} alt="" />
          <img src={this.props.images[1]} alt="" className={css(styles.img2)} />
        </div>
      </div>
    );
  }
}
