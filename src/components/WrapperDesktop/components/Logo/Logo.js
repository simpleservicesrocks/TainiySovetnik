import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { NavLink } from "react-router-dom";
import logo_black from "../../../../icons/logo_black.svg";
import logo_white from "../../../../icons/logo_white.svg";
export default class Logo extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <NavLink to={process.env.PUBLIC_URL + "/"}>
          {this.props.isHeaderBlack ? (
            <img
              style={{ width: "150px", margin: "80px 80px 0 0" }}
              src={logo_white}
              alt="logo"
            />
          ) : (
            <img
              style={{ width: "150px", margin: "80px 80px 0 0" }}
              src={logo_black}
              alt="logo"
            />
          )}
        </NavLink>
      </div>
    );
  }
}
