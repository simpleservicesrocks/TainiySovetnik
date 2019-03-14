import React, { Component } from "react";
import styles from "./styles";
import { css } from "aphrodite";
export default class Welcome extends Component {
  render() {
    return (
      <div className={css(styles.welcome_mobile_wrapper)}>
        <p className={css(styles.welcome_mobile_t1)}>
          {this.props.lang === 'ru' ? 'Мы делаем проекты,' : 'We do projects'}
          <br />{this.props.lang === 'ru' ? 'о которых говорят и пишут' : 'that people talk and write about'}
        </p>
        <p className={css(styles.welcome_mobile_t2)}>
          {this.props.lang === 'ru' ? 'Вы знакомы с нами, просто' : 'You know us,'}
          <br />
          {this.props.lang === 'ru' ? 'ещё этого не знаете' : 'but just don’t know it yet'}
        </p>
      </div>
    );
  }
}
