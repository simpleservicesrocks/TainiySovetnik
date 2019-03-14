import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
import Footer from '../../../components/Footer/Footer'
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.gedeon_wrapper)}`}>
      <div className={css(styles.wrapInside)}>
        <div className={css(styles.wrap)}>
          <p className={css(styles.t1)}>
            Каждый третий житель Казахстана страдает гипертонией. Часто больной
            не знает, что эта проблема может серьёзно угрожать его здоровью.
            Фармацевтическая компания Gedeon Richter, крупнейший производитель
            лекарств в Восточнойи Центральной Европе, вместе «Тайным советником»
            провелав Казахстане Всемирный день борьбы с гипертонией.
          </p>
          <p className={css(styles.t2)}>
            Мы заручились поддержкой «Национального центра проблем формирования
            здорового образа жизни» и привлекли к сотрудничеству терапевтов и
            кардиологов, среди них и главного кардиолога страны.
            <br/>
            <br/>
            <span style={{color: "#ed1c23"}}>За один день акции артериальное давление измерили у 35 500 человек.</span>
            <br/>
            У трети
            артериальная гипертония была выявлена впервые. Врачи объяснили
            каждому, почемуважно следить за давлением и как правильно его
            измерять.
            <br/>
            <span style={{color: "#ed1c23"}}>CМИ выпустили 150 публикаций и сюжетов на радио и ТВ.</span>
            <br/>
            <br/>
            Работу агентства высоко оценило руководство Gedeon Richter и
            рекомендовало опыт казахстанского представительства другим
            региональным офисам компании.
          </p>
        </div>
        </div>
        <Footer id={10}/>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  gedeon_wrapper: {
    height: "100%"
  },
  wrapInside:{
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  wrap: {
    width: "700px",
  },
  t1: {
    fontFamily: "SFUIDisplay-Light",
    lineHeight: "27px",
    fontWeight: 300,
    fontSize: "15px",
    marginBottom: "40px"
  },
  t2:{
      fontFamily: "SFUIDisplay-Light",
      lineHeight: "27px",
      fontWeight: 300,
      fontSize: "15px",
      color: "#acacac",
      marginBottom: "50px"
  }
});
