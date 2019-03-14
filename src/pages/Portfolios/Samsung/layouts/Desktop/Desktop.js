import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
import Footer from '../../../components/Footer/Footer'
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.fullpage)}`}>
        <div className={css(styles.pageWrap)}>
        <div className={css(styles.wrap)}>
          <p>
            Samsung Electronics — один из мировых лидеров
            <br />в производстве электроники
            <br />
            <br />
            <span style={{ color: "#ed1c23" }}>
              «Тайный советник» сотрудничал с компанией Samsung Electronics
              Kazakhstan & CA с 2008 по 2016,
            </span>
            <span style={{color: "#acacac"}}>
              сопровождая запуски новых продуктов в Казахстане. Мы
              взаимодействовали с аудиторией на всех коммуникационных
              платформах, одинаково эффективно работая и с классическими и
              электронными медиа, и в точках продаж, и на специальных закрытых
              мероприятиях для премиальной аудитории.
            </span>
          </p>
        </div>
        </div>
        <Footer id={5}/>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  fullpage: {
    height: "100%",
    width: "100%"
  },
  pageWrap:{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
  },
  wrap: {
    width: "600px",
    fontFamily: "SFUIDisplay-Light",
    fontSize: "15px",
    fontWeight: 300,
    lineHeight: "27px",
  }
});
