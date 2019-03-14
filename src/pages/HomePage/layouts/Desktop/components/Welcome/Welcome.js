import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Welcome extends Component {
  render() {
    return (
      <div className={css(styles.welcome_wrapper)}>
        <div className={css(styles.welcome_inside)}>
          <p className={css(styles.welcome_t1)}>
            {this.props.lang === "ru"
              ? "Мы делаем проекты, о которых говорят и пишут"
              : "We do projects that people talk and write about"}
          </p>
          <p className={css(styles.welcome_t2)} style={this.props.lang === 'en' ? {marginLeft: '1px'} : {}}>
            {this.props.lang === "ru"
              ? "Вы знакомы с нами, просто ещё этого не знаете"
              : "You know us, but just don’t know it yet"}
          </p>
        </div>
      </div>
    );
  }
}
