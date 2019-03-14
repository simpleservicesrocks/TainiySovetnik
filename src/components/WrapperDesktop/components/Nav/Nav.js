import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Ionicon from "react-ionicons";
export default class Nav extends Component {
  render() {
    return (
      <div className={css(styles.nav_wrapper, styles.nav_wrapper_sm)}>
        <p
          className={`${css(styles.nav_t)} ${
            this.props.isColorWhite ||
            this.props.isModalVisible ||
            this.props.isHeaderBlack
              ? "cwhite"
              : "cblack"
          } trans1`}
        >
          {this.props.header}
        </p>
        <div
          className={css(styles.nav_menu_wrapper)}
          onClick={this.props.handleModal}
        >
          <Ionicon
            icon="ios-menu"
            color={`${
              this.props.isColorWhite ||
              this.props.isModalVisible ||
              this.props.isMenuBlack
                ? "white"
                : "black"
            }`}
            size={30}
            className={`trans1 ${css(styles.burger)}`}
          />
          <p
            className={`${css(styles.nav_menu)} ${
              this.props.isColorWhite ||
              this.props.isModalVisible ||
              this.props.isMenuBlack
                ? "cwhite"
                : "cblack"
            } trans1 test ${this.props.lang==='en' ? css(styles.nav_en) : ""}`}
          >
            {this.props.lang === "ru" ? "МЕНЮ" : "MENU"}
          </p>
        </div>
        <div className={css(styles.nav_social)}>
          <a
            href="https://www.instagram.com/tayniy.sovetnik/"
            className={css(styles.nav_social_a)}
          >
            instagram
          </a>
          <a
            href="https://www.youtube.com/channel/UCHVztc9Wh704awsyBxq9mHQ"
            className={css(styles.nav_social_a)}
          >
            youtube
          </a>
          <a
            href="https://www.facebook.com/agencyts/"
            className={css(styles.nav_social_a)}
          >
            facebook
          </a>
        </div>
      </div>
    );
  }
}
