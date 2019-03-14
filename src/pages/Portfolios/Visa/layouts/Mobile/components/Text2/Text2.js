import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text2 extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        {this.props.lang === "ru" ? (
          <p>
            Visa — международная платёжная система, ежегодный торговый оборот по
            картам Visa составляет 4,8 триллиона долларов США. «Тайный советник»
            — официальная пресс-служба компании Visa в странах Центральной Азии
            с 2007
          </p>
        ) : (
          <p>
            Visa is an international payment system with an annual card
            transactions turnover of USD 4.8 trillion. Tayniy Sovetnik is the
            official press service of Visa in Central Asia since 2007.{" "}
          </p>
        )}
        <p style={{ marginTop: "60px", lineHeight: "33px", color: "#acacac" }}>
          {this.props.lang === "ru"
            ? "«Тайный советник» более 10 лет является пресс-службой международной платежной системы Visa в странах Центральной Азии — и сопровождает коммуникационные кампании."
            : "Tayniy Sovetnik has been Visa’s aide in Central Asia for over a decade, supporting its communications campaigns."}
        </p>

        <p style={{ marginTop: "40px", fontSize: "30px" }}>{this.props.lang === 'ru' ? 'Продвижение' : 'Promotion'}</p>
        <p style={{ color: "#acacac", marginTop: "30px" }}>
          {this.props.lang === "ru"
            ? "Чтобы актуализировать в обществе тему безналичных платежей, в преддверии саммита мы запустили кампанию с блогером Ержаном Рашевым, который бросил себе вызов — Visa Cashless Challenge – и на две недели отказался от наличных денег."
            : "To raise awareness of cashless payments prior to the summit, we embarked on a campaign jointly with blogger Yerzhan Rashev who took up the “Visa Cashless Challenge” himself – that is, refrained from using cash for two weeks."}
        </p>
        <p style={{ color: "#acacac", marginTop: "20px" }}>
        {this.props.lang === "ru"
            ? "В ходе «челленджа» Ержан встретился с местными предпринимателями и управленцами, чтобы узнать об их жизни без наличных."
            : "During this time Yerzhan met with local businesspeople and managers to learn how they do without cash."}
        </p>
      </div>
    );
  }
}
