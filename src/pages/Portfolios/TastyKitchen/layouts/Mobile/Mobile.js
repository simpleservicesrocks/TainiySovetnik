import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import FooterM from '../../../components/FooterM/FooterM'
export default class Mobile extends Component {
  render() {
    const yt_h = window.innerWidth / 1.777
    return (
      <div className={css(styles.mainWrap, styles.fadeIn)}>
        <div className={css(styles.wrap)}>
          <p className={css(styles.t)}>
          {this.props.lang === "ru"
              ? "Гастрономический фестиваль «Вкусная Алма-Ата» — собственный проект агентства. Осенью 2015 и 2016 мы устраивали грандиозный семейный праздник в историческом центре Алматы — парке КБТУ."
              : "The food festival Tasty Alma-Ata is the Agency’s pet project. In the autumn of 2015 and 2016 we hosted a grand celebration for the whole family in Almaty’s historical center, the park at Kazakh-British Technical University."}
          </p>
        </div>
        <iframe
          style={{ marginTop: "60px", marginBottom: "60px" }}
          title="video"
          width='100%'
          height={yt_h}
          src="https://www.youtube.com/embed/Es3yw-Omsuk"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className={css(styles.wrap)}>
          <p className={css(styles.t1)}>{this.props.lang === 'ru' ? 'В 2016 году мы насчитали' : 'In 2016, we attracted'}</p>
          <p className={css(styles.t2)}>15 000 {this.props.lang === 'ru' ? 'гостей' : 'guests'}</p>
        </div>
        <div className={css(styles.wrap)}>
          <p className={css(styles.t1)}>Свои точки открыли</p>
          <p className={css(styles.t2)}>30 кафе и ресторанов города</p>
        </div>
        <div className={css(styles.wrap)}>
          <p className={css(styles.t1)}>В 2016 году мы насчитали</p>
          <p className={css(styles.t2)} style={{paddingBottom: "20px"}}>15 000 гостей</p>
        </div>
        <FooterM id={8} lang={this.props.lang}/>
      </div>
    );
  }
}
