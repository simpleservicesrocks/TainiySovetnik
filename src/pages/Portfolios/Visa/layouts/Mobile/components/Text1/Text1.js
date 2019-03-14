import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text1 extends Component {
  render() {
    return (
      <div>
        <div className={css(styles.wrap1)}>
          <p>Саshless Summit Kazakhstan</p>
          <br />
          <p className={css(styles.t)}>
            {this.props.lang === "ru"
              ? "«Тайный советник» создали концепцию и в сентябре 2017 года организовали первый в Центральной Азии Cashless Summit Kazakhstan, посвященный развитию безналичной экономики в регионе."
              : "Tayniy Sovetnik developed the concept of the first Cashless Summit Kazakhstan dedicated to the development of a cashless economy in Central Asia, and hosted the event in September 2017."}
          </p>
        </div>
        <img src={this.props.logo} alt="" style={{ width: "100%" }} />
        <div className={css(styles.t1wrap)}>
          <p>
            8{" "}
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru"
                ? " панельных сесий"
                : " panel seessions"}
            </span>
          </p>
          <p>
            25
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru" ? " спикеров" : " speakers"}
            </span>
          </p>
          <p>
            200{" "}
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru" ? "посетителей" : "visitors"}
            </span>
          </p>
          <p>
            2 000{" "}
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru"
                ? "зрителей прямой трансляции на visa.kapital.kz"
                : "viewers on visa.kapital.kz broadcast"}
            </span>
          </p>
          <p>
            21{" "}
            <span style={{ color: "#acacac" }}>
              {this.props.lang === "ru"
                ? "публикация в Tier 1 медиа"
                : "publications in Tier 1 media"}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
