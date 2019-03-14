import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Footer from "../../../components/Footer/Footer";
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.fullpage)}`}>
        <div className={css(styles.fpInside)}>
          <p className={css(styles.t1)}>
            {this.props.lang === "ru"
              ? "Гастрономический фестиваль «Вкусная Алма-Ата» — собственный проект агентства. Осенью 2015 и 2016 мы устраивали грандиозный семейный праздник в историческом центре Алматы — парке КБТУ."
              : "The food festival Tasty Alma-Ata is the Agency’s pet project. In the autumn of 2015 and 2016 we hosted a grand celebration for the whole family in Almaty’s historical center, the park at Kazakh-British Technical University."}
          </p>
          <iframe
            title="video"
            style={{ marginTop: "80px" }}
            width="768"
            height="434"
            src="https://www.youtube.com/embed/Es3yw-Omsuk"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className={css(styles.wrap)}>
            <div className={css(styles.w1)}>
              <p className={css(styles.wsm)}>{this.props.lang === 'ru' ? 'В 2016 году мы насчитали' : 'In 2016, we attracted'}</p>
              <div>
                <p className={css(styles.wlg)}>15 000</p>
                <p className={css(styles.wm)}>{this.props.lang === 'ru' ? 'гостей' : 'guests'}</p>
              </div>
            </div>
            <div className={css(styles.w2)}>
              <p className={css(styles.wsm)}>Свои точки открыли</p>
              <div>
                <p className={css(styles.wlg)}>30</p>
                <p className={css(styles.wm)}>кафе и ресторанов города</p>
              </div>
            </div>
            <div className={css(styles.w3)}>
              <p className={css(styles.wsm)}>Каждую минуту продавалось</p>
              <div>
                <p className={css(styles.wlg)}>14 блюд</p>
              </div>
            </div>
          </div>
        </div>
        <Footer id={8} lang={this.props.lang}/>
      </div>
    );
  }
}
