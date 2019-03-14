import React, { Component } from "react";
import Ionicons from "react-ionicons";
import arr from "../arr";
import { css } from "aphrodite";
import styles from "./styles";
export default class Options extends Component {
  render() {
    let icons = [];
    for (let i = 0; i < arr.length; i++) {
      icons.push(
        <span className={css(styles.icon)} key={i}>
          <a href={`#${i}`} data-menuanchor={`${i}`}>
            <Ionicons
              icon="ios-remove"
              color={this.props.currentIndex === i ? "black" : "#acacac"}
              onClick={() => this.props.indexHandler(i)}
            />
          </a>
        </span>
      );
    }
    return (
      <div className={css(styles.options)} id="menu">
        {icons}
      </div>
    );
  }
}
