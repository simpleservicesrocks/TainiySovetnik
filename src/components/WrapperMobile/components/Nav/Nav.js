import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Ionicon from 'react-ionicons'
export default class Nav extends Component {
  render() {
    return (
      <nav
        className={`${css(styles.nav_mobile_wrapper)} ${this.props.isModalVisible || this.props.isColorWhite ? "cwhite": ""} trans1`}
      >
        <span
          className={`pointer ${css(styles.nav_mobile_span)} mix`}
          onClick={this.props.handleModal}
        >
          <Ionicon icon="ios-menu" color={this.props.isModalVisible || this.props.isColorWhite ? 'white' : 'black'} className="trans1"/>
          <p className={`${css(styles.nav_mobile_p)} `}>{this.props.lang === 'ru' ? 'МЕНЮ' : 'MENU'}</p>
        </span>
      </nav>
    );
  }
}
