import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { logo_black, logo_white } from "../../../../icons/company_logo";
import { NavLink } from "react-router-dom";
export default class Logo extends Component {
  render() {
    return (
      <NavLink to={process.env.PUBLIC_URL+"/"}>
        <div className={css(styles.logo_mobile_wrapper)}>
          <img
            src={this.props.isModalVisible||this.props.isColorWhite ? logo_white : logo_black}
            className={css(styles.logo_mobile_img)}
            alt="logo"
          />
        </div>
      </NavLink>
    );
  }
}
