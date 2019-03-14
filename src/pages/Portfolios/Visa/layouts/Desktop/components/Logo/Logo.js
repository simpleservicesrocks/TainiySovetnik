import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Logo extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <img src={this.props.logo} alt="" />
        <div className={css(styles.wrap1)}>
          <div className={css(styles.wrap1_inside)}>
            <div className={css(styles.wrap1_block)}>
              <p>
                <span style={{ color: "black" }}>8</span>
                {this.props.lang === "ru"
                  ? " панельных сесий"
                  : " panel seessions"}
              </p>
              <p>
                <span style={{ color: "black" }}>25</span>
                {this.props.lang === "ru" ? " спикеров" : " speakers"}
              </p>
              <p>
                <span style={{ color: "black" }}>200</span>{" "}
                {this.props.lang === "ru" ? "посетителей" : "visitors"}
              </p>
            </div>
            <div className={css(styles.wrap1_block)}>
              <p>
                <span style={{ color: "black" }}>2000</span>{" "}
                {this.props.lang === "ru"
                  ? "зрителей прямой трансляции на visa.kapital.kz"
                  : "viewers on visa.kapital.kz broadcast"}
              </p>
              <p>
                <span style={{ color: "black" }}>21</span>
                {this.props.lang === "ru"
                  ? "публикация в Tier 1 медиа"
                  : "publications in Tier 1 media"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
