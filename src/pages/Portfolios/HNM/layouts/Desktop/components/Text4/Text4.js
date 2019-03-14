import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import arr from "./arr";
export default class Text4 extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.h)}>
          <p>
            {this.props.lang === "ru"
              ? "События в СМИ"
              : "Events in Mass Media"}
          </p>
        </div>
        <div className={css(styles.tw)}>
          {arr.map((item, index) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                key={index}
                style={{ color: "black" }}
              >
                <p className={css(styles.twp)}>{item.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
