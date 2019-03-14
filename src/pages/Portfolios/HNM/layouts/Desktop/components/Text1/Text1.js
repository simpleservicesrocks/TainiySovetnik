import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text1 extends Component {
  render() {
    return (
      <div className={css(styles.text1_wrapper)}>
        {this.props.lang === "ru" ? (
          <p>
            Международные розничные гиганты пришли в Казахстан с агентством
            «Тайный советник». Мы сопровождали открытия флагманских магазинов
            <span style={{ color: "#e73e2d" }}>
              Topshop, GAP, H&M, Marks & Spencer, Celio:
            </span>{" "}
            организовали мероприятипо случаю открытия магазинов, провели
            рекламные кампании, задействовали традионные СМИ и блогеров.
          </p>
        ) : (
          <p>
            International retail giants came to Kazakhstan, assisted by Tayniy
            Sovetnik. We supported the opening of flagship stores of{" "}
            <span style={{ color: "#e73e2d" }}>
              Topshop, GAP, H&M, Marks & Spencer and Celio
            </span>{" "}
            by organizing events and advertising campaigns involving traditional
            media and bloggers.
          </p>
        )}
      </div>
    );
  }
}
