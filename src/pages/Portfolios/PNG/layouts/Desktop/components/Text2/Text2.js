import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
export default class Text2 extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <p className={css(styles.h1)}>
          {this.props.lang === "ru"
            ? "Кампания Like A Girl"
            : "Like A Girl Campaign"}
        </p>
        <p className={css(styles.t1)}>
          {this.props.lang === "ru"
            ? "Like A Girl – глобальная кампания гигиенических продуктов Always. Мы проводили кампанию в два этапа: первый – в 2014 году, а второй этап охватил 2015 и 2016 года."
            : "Like A Girl was a global campaign for Always beauty care products. We ran it in two phases: the first in 2014 and the second in 2015-2016."}{" "}
        </p>
        <p className={css(styles.t1)}>
          {this.props.lang === "ru"
            ? "Начало кампании положило глобальное видео, транслировавшее ключевое сообщение, затем привлекли узнаваемых местных героев для создания и распространения контента, провели конкурсы – сформировали сообщество вокруг идеи кампании. Задействовали социальные сети и возможности медиа-партнёров."
            : "We kicked off the campaign with a global video conveying the key message, then had recognizable local personalities produce and disseminate content and launch contests, thus building up a community around the campaign’s idea. We also used opportunities offered by social networks and our media partners."}
        </p>
        <div className={css(styles.div)}>
          <div className={css(styles.div_l)}>
            {this.props.lang === "ru"
              ? "В распространение глобального видео вовлекли восьмерых популярных«инстаблогеров»."
              : "We had eight popular Instagram bloggers disseminate our global video."}
          </div>
          <div className={css(styles.div_2)}>
            <p>
              572 000<span style={{ color: "#acacac" }}> {this.props.lang === 'ru' ? 'просмотров' : 'views'}</span>
            </p>
            <p>
              300
              <span style={{ color: "#acacac" }}> {this.props.lang === 'ru' ? 'позитивных комментариев' : 'positive comments'}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  wrap: {
    width: "600px",
    marginTop: "60px"
  },
  h1: {
    fontSize: "30px",
    fontFamily: "SFUIDisplay-Light",
    fontWeight: 300,
    marginBottom: "30px"
  },
  t1: {
    fontFamily: "SFUIDisplay-Light",
    fontSize: "15px",
    fontWeight: 300,
    color: "#acacac",
    marginBottom: "20px"
  },
  div: {
    display: "flex",
    flexDirection: "row",
    marginTop: "60px"
  },
  div_l: {
    width: "387px",
    height: "60px",
    fontFamily: "SFUIDisplay-Bold",
    lineHeight: "30px",
    fontWeight: 700,
    fontSize: "15px"
  },
  div_2: {
    fontFamily: "SFUIDisplay-Light",
    lineHeight: "30px",
    fontSize: "15px"
  }
});
