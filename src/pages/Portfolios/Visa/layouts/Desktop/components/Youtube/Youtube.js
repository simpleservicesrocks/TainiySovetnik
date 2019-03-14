import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Youtube extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <p className={css(styles.h)}>
          {this.props.lang === "ru" ? "Продвижение" : "Promotion"}
        </p>
        <p className={css(styles.t1)}>
          {this.props.lang === "ru"
            ? "Чтобы актуализировать в обществе тему безналичных платежей, в преддверии саммита мы запустили кампанию с блогером Ержаном Рашевым, который бросил себе вызов — Visa Cashless Challenge – и на две недели отказался от наличных денег."
            : "To raise awareness of cashless payments prior to the summit, we embarked on a campaign jointly with blogger Yerzhan Rashev who took up the “Visa Cashless Challenge” himself – that is, refrained from using cash for two weeks."}
          <br />
          <br />
          {this.props.lang === "ru"
            ? "В ходе «челленджа» Ержан встретился с местными предпринимателями и управленцами, чтобы узнать об их жизни без наличных."
            : "During this time Yerzhan met with local businesspeople and managers to learn how they do without cash."}
        </p>
        <div className={css(styles.container)}>
          <iframe
            title="visa video"
            width="385"
            height="217"
            src="https://www.youtube.com/embed/o6v55RL-sL4?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className={css(styles.blockcont)}>
            <div className={css(styles.halfcont)}>
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
            <div className={css(styles.halfcont)}>
              <p>#CashlessSummit</p>
              <p>#CashlessChallenge</p>
              <p>#Visa</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
