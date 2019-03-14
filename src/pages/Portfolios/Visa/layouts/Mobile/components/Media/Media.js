import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import FooterM from '../../../../../components/FooterM/FooterM'
export default class Media extends Component {
  render() {
    const yt_h = window.innerWidth / 1.777;
    return (
      <div>
        <iframe
          title="visa video"
          width="100%"
          height={yt_h}
          src="https://www.youtube.com/embed/o6v55RL-sL4?rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className={css(styles.wrap)}>
          <div className={css(styles.wblock)}>
            <p>
              6 <span style={{ color: "#acacac" }}>{this.props.lang === 'ru' ? 'видео-публикаций' : 'videos'}</span>
            </p>
            <p>
              51 <span style={{ color: "#acacac" }}>{this.props.lang === 'ru' ? 'репостов' : 'reposts'}</span>
            </p>
            <p>
              40 500 <span style={{ color: "#acacac" }}>{this.props.lang === 'ru' ? 'просмотров' : 'views'}</span>
            </p>
          </div>
          <div className={css(styles.wblock)}>
            <p>#CashlessSummit</p>
            <p>#CashlessChallenge</p>
            <p>#Visa</p>
          </div>
        </div>
        <div className={css(styles.wrap2)}>
          <p className={css(styles.h)}>{this.props.lang === "ru" ? "Кампания" : "Campaign"} #лучшечемкэш</p>
          <p className={css(styles.t)}>
          {this.props.lang === "ru"
              ? "Весной 2016 мы провели «вирусную» кампанию с участием популярных казахстанских и киргизских вайнеров. Цель кампании – в развлекательной манере рассказать о преимуществах платежных карт перед наличными."
              : "In the spring of 2016 we ran a viral campaign involving popular personalities from the video app Vine from Kazakhstan and Kyrgyzstan. The objective was to show why credit cards are better than cash in an entertaining manner."}
          </p>
        </div>
        <FooterM id={6}/>
      </div>
    );
  }
}
