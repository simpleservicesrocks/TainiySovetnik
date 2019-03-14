import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { fadeIn } from "react-animations";
import Footer from "../../../components/Footer/Footer";
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.page)}`}>
        <div className={css(styles.pageInside)}>
          <div className={css(styles.inner)}>
            {this.props.lang === "ru" ? (
              <p>
                Отель The Ritz-Carlton входит в международную сеть
                пятизвёздочных отелей, известных своей роскошью и королевскими
                стандартами качества. В Алматы отель был построен компаний
                Capital Partners Kazakhstan и открылся в ноябре 2013 года.
              </p>
            ) : (
              <p>
                The Ritz-Carlton is a member of an international network of
                five-star hotels known for their luxury and supreme standards.
                The Almaty hotel was built by Capital Partners Kazakhstan and
                opened in November 2013.
              </p>
            )}
            <br />
            <p style={{ color: "#acacac" }}>
              {this.props.lang === "ru"
                ? "Агентство «Тайный советник» осуществляло информационное сопровождение открытия «Ритц-Карлтон».Знаковое для города событие получило освещение в 40 публикациях в средствах массовой информации."
                : "Tayniy Sovetnik was contracted to provide informational support for the opening of The Ritz-Carlton. This milestone event was covered in forty publications in the media. "}
              <br />
              <br />
              <span style={{ color: "#e73e2d" }}>
                {this.props.lang === "ru"
                  ? "В 2014 и 2015 агентство являлось"
                  : "In 2014-2015 our Agency was The Ritz-Carlton’s PR partner, "}
              </span>{" "}
              {this.props.lang === "ru"
                ? "PR-партнером и оказывало отелю полный спектр услуг по связям с общественностью: работало с традиционными медиа и блогерами, организовывало собственные мероприятия «Ритц-Карлтон» и освещало совместные с партнерами спецпроекты. Ежемесячно отель получал десять публикаций в глянцевых изданиях."
                : "rendering a full range of PR services, including coverage in traditional and digital media, the organization of corporate events, and coverage of special partner projects. The hotel had ten publications a month in glossy magazines."}
            </p>
          </div>
        </div>
        <Footer id={3} />
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  page: {
    width: "100%",
    height: "100%"
  },
  inner: {
    width: "600px",
    fontFamily: "SFUIDisplay-Light",
    lineHeight: "27px",
    fontWeight: 300,
    fontSize: "15px"
  },
  pageInside: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
