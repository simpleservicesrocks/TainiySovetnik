import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text2 extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <p className={css(styles.h)}>
          {this.props.lang === "ru"
            ? "Открытие в Алматы и Астане Kazakhstan"
            : "The opening in Almaty and Astana Kazakhstan"}
        </p>
        <p className={css(styles.t)}>
          {this.props.lang === "ru"
            ? "В 2017 году шведский гигант приходит в Казахстан. Агентство взяло на себя полное сопровождение бренда: отношения с медиа, организацию пресс-туров, работу с блогерами и селебрити, организацию открытия в двух городах, создание брендированного контента."
            : "In 2017 the Swedish retail giant came to Kazakhstan. Our Agency was contracted to provide full support to the brand, including media relations, press tours, involving bloggers and celebrities, openings in two cities, and producing brand content."}
        </p>
      </div>
    );
  }
}
