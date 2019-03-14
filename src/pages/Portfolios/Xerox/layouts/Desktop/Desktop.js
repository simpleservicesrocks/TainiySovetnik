import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
import Footer from "../../../components/Footer/Footer";
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.wrap)}`}>
        <div className={css(styles.insideWrap)}>
          <div className={css(styles.wrapper)}>
            <p className={css(styles.h)}>
              Xerox – не просто производитель техники, а партнёр, который
              помогает бизнесу во всех концах мира оптимизи-ровать
              бизнес-процессы и улучшать корпоративную культуру. В течение
              восьми лет с 2007 года «Тайный советник» выполнял роль
              пресс-службы компаниив Центральной Азии.
            </p>
            <p className={css(styles.t)}>
              Агентство укрепило репутацию Xerox в центрально-азиатском регионе
              и помогло увеличить продажи компании. «Тайный советник» готовил и
              распространял специальную ежеквартальную рассылку для партнёров,
              организовывал конференции и продуктовые семинары, мастер-классы по
              продажам.
              <br/>
              <br/>
              К тестированию принтеров и много-функциональных
              устройств мы привлекали казахстанских блогеров, публиковали обзоры
              продукции Xerox в <span style={{color: "#ed1c23"}}>главных IT-изданиях страны.</span>
            </p>
          </div>
        </div>
        <Footer id={2} />
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  wrap: {
    width: "100%",
    height: "100%"
  },
  insideWrap: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    width: "600px"
  },
  h: {
    fontFamily: "SFUIDisplay-Light",
    fontSize: "15px",
    fontWeight: 300,
    lineHeight: "27px"
  },
  t:{
    fontFamily: "SFUIDisplay-Light",
    fontSize: '15px',
    lineHeight: '27px',
    fontWeight: 300,
    color: "#acacac",
    marginTop: "60px"
  }
});
