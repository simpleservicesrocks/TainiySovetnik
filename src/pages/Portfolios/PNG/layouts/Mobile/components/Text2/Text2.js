import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text2 extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <p className={css(styles.h)}>
          {this.props.lang === "ru"
            ? "Кампания Like A Girl"
            : "Like A Girl Campaign"}
        </p>
        <p className={css(styles.t)}>
          <br />
          {this.props.lang === "ru"
            ? "Like A Girl – глобальная кампания гигиенических продуктов Always. Мы проводили кампанию в два этапа: первый – в 2014 году, а второй этап охватил 2015 и 2016 года."
            : "Like A Girl was a global campaign for Always beauty care products. We ran it in two phases: the first in 2014 and the second in 2015-2016."}{" "}
          <br />
          <br />
          {this.props.lang === "ru"
            ? "Начало кампании положило глобальное видео, транслировавшее ключевое сообщение, затем привлекли узнаваемых местных героев для создания и распространения контента, провели конкурсы – сформировали сообщество вокруг идеи кампании. Задействовали социальные сети и возможности медиа-партнёров."
            : "We kicked off the campaign with a global video conveying the key message, then had recognizable local personalities produce and disseminate content and launch contests, thus building up a community around the campaign’s idea. We also used opportunities offered by social networks and our media partners."}
        </p>
        <br />
        <br />
        <p className={css(styles.t1)}>
        {this.props.lang === "ru"
              ? "В распространение глобального видео вовлекли восьмерых популярных«инстаблогеров»."
              : "We had eight popular Instagram bloggers disseminate our global video."}
        </p>
        <p className={css(styles.t2)}>
          572 000 <span style={{ color: "#acacac" }}> {this.props.lang === 'ru' ? 'просмотров' : 'views'}</span>
        </p>
        <p className={css(styles.t2)}>
          300 <span style={{ color: "#acacac" }}> {this.props.lang === 'ru' ? 'позитивных комментариев' : 'positive comments'}</span>
        </p>
      </div>
    );
  }
}
