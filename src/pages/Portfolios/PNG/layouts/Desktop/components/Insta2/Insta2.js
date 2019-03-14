import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Insta2 extends Component {
  render() {
    return (
      <div className={css(styles.wrap)}>
        <div className={css(styles.w1)}>
          <div className={css(styles.w1inside)}>
            <div className={css(styles.w1left)}>
              <p>
                {this.props.lang === "ru"
                  ? "Задействовали в продвижении конкурса популярных Инстаграм-пользователей."
                  : "We involved popular Instagram figures in promotional activities."}
              </p>
            </div>
            <div className={css(styles.w1right)}>
              <p>450 {this.props.lang === 'ru' ? 'участниц' : 'participants'}</p>
              <p>520 {this.props.lang === 'ru' ? 'фотографий' : 'photos'}</p>
            </div>
          </div>
        </div>
        <div className={css(styles.w2)}>
          {this.props.insta.map((item, index) => {
            return <img src={item} alt="insta" key={index} />;
          })}
        </div>
        <div className={css(styles.w3)}>
          <div className={css(styles.w3inside)}>
            <div className={css(styles.w3_left)}>
              <p>
                {this.props.lang === 'ru' ? 'Глобальные' : 'Global'}
                <br />
                {this.props.lang === 'ru' ? 'результаты' : 'results'}
              </p>
            </div>
            <div className={css(styles.w3_middle)}>
              <p className={css(styles.w3_sm)}>{this.props.lang === 'ru' ? 'В 2014 году' : 'In 2014'}</p>
              <p className={css(styles.w3_lg)}>3 000 000</p>
              <p className={css(styles.w3_sm)}>{this.props.lang === 'ru' ? 'просмотров контента' : 'content views'}</p>
            </div>
            <div className={css(styles.w3_middle)}>
              <p className={css(styles.w3_sm)}>{this.props.lang === 'ru' ? 'В 2015-2016 годах' : 'In 2015-2016'}</p>
              <p className={css(styles.w3_lg)}>1 000 000</p>
              <p className={css(styles.w3_sm)}>{this.props.lang === 'ru' ? 'просмотров контента' : 'content views'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
