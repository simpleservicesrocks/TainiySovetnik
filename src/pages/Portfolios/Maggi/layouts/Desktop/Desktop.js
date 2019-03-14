import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
import { logo } from "../../../../../database/portfolio/maggi";
import Footer from "../../../components/Footer/Footer";
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.wrapper)}`}>
        <img src={logo} style={{ marginTop: "255px" }} alt="" />
        <div className={css(styles.textWrap)}>
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
          width="767"
          height="428"
          src="https://www.youtube.com/embed/CnaXcbqDJ7w?rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <br />
        <br />
        <iframe
          title="video 2"
          width="767"
          height="428"
          src="https://www.youtube.com/embed/YOLOlFHKd8I"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className={css(styles.text2wrap)}>
          <p className={css(styles.t1)}>
            10 {this.props.lang === "ru" ? "эпизодов" : "episodes"}
          </p>
          <div>
            <p className={css(styles.t1)}>3 000 000 </p>
            <p className={css(styles.t2)}>
              {this.props.lang === "ru"
                ? "просмотров, в течении 2х месяцев"
                : "views in the first two months"}
            </p>
          </div>
        </div>
        <Footer id={7} lang={this.props.lang}/>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  textWrap: {
    width: "600px",
    fontFamily: "SFUIDisplay-Light",
    fontWeight: 300,
    lineHeight: "27px",
    fontSize: "15px",
    marginTop: "60px",
    marginBottom: "60px"
  },
  text2wrap: {
    width: "600px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "150px",
    flexDirection: "row",
    marginBottom: "100px"
  },
  t1: {
    fontFamily: "SFUIDisplay-Bold",
    fontSize: "40px",
    fontWeight: 700
  },
  t2: {
    fontFamily: "SFUIDisplay-Light",
    fontSize: "15px",
    fontWeight: 300
  }
});
