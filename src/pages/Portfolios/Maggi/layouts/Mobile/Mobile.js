import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { logo } from "../../../../../database/portfolio/maggi";
import FooterM from "../../../components/FooterM/FooterM";
export default class Mobile extends Component {
  render() {
    const yt_h = window.innerWidth / 1.777;
    return (
      <div>
        <img src={logo} alt="" className={css(styles.img)} />
        <div className={css(styles.wrap)}>
          {this.props.lang === "ru" ? (
            <p>
              Мы предложили мировому бренду говорить с женской аудиторией через
              личный опыт, которым делятся популярные блогеры.
            </p>
          ) : (
            <p>
              We proposed that this global brand engage with a female audience
              through popular bloggers sharing their personal experiences.
            </p>
          )}
          <br />
          {this.props.lang === "ru" ? (
            <p style={{ color: "#acacac" }}>
              В сентябре 2017 агентство «Тайный советник» создало
              образовательный концепт «Счастливая кухня Maggi ». В серии из
              десяти позитивных видеороликов известные блогеры делились
              секретами использования листов для жарки Maggi в приготовлении
              самых разнообразных блюд.
            </p>
          ) : (
            <p style={{ color: "#acacac" }}>
              In September 2017 Tayniy Sovetnik developed the educational
              concept Счастливая кухня Maggi® (“Maggi’s Happy Kitchen”). In a
              series of ten positive videos, popular bloggers shared their
              secrets of using Maggi cooking papers to prepare various dishes.
            </p>
          )}
        </div>
        <iframe
          title="video 1"
          width="100%"
          height={yt_h}
          src="https://www.youtube.com/embed/CnaXcbqDJ7w?rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <br />
        <br />
        <br />
        <iframe
          title="video 2"
          width="100%"
          height={yt_h}
          src="https://www.youtube.com/embed/YOLOlFHKd8I"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div>
          <div className={css(styles.wrapper)}>
            <p className={css(styles.h)} style={{ marginBottom: 10 }}>
              10 {this.props.lang === "ru" ? "эпизодов" : "episodes"}
            </p>
            <p className={css(styles.h)}>3 000 000</p>
            <p className={css(styles.t)} style={{ paddingBottom: 20 }}>
              {this.props.lang === "ru"
                ? "просмотров, в течении 2х месяцев"
                : "views in the first two months"}
            </p>
          </div>
        </div>
        <FooterM id={7} lang={this.props.lang}/>
      </div>
    );
  }
}
