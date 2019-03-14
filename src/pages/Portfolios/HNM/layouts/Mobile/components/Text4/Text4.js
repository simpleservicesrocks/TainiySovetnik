import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
export default class Text4 extends Component {
  render() {
    const a = [
      {id: 0,name: "Robb Report Kazakhstan", link: "https://robb.report/"},
      {id: 1,name: "Forbes Kazakhstan", link: "https://forbes.kz/"},
      {id: 2,name: "L’Officiel Kazakhstan", link: "http://lofficiel.kz/"},
      {id: 3,name: "Buro 24/7", link: "https://www.buro247.kz/"},
      {id: 4,name: "Cosmo.kz", link: "https://cosmo.kz/"},
      {id: 5,name: "Бизнес и Власть", link: "http://and.kz/"},
      {id: 6,name: "Kapital.kz", link: "https://kapital.kz/"},
      {id: 7,name: "Informburo", link: "https://informburo.kz/"},
      {id: 8,name: "Kursiv.kz", link: "https://kursiv.kz/"},
    ];
    const b = [
      { city_ru: "Алматы", city_en: "Almaty", x: "61", y: "45 964 000" },
      { city_ru: "Астане", city_en: "Astana", x: "60", y: "35 882 400" }
    ];
    return (
      <div className={css(styles.text4_wrapper)}>
        <p className={css(styles.text4_h)}>{this.props.lang === 'ru' ? 'События в СМИ' : 'Events in Mass Media'}</p>
        <ul className={css(styles.text4_ul)}>
          {a.map(item => {
            return <li key={item.id}><a target="_blank" rel="noopener noreferrer" href={item.link} style={{color: "#acacac"}}>{item.name}</a></li>;
          })}
        </ul>
        <p className={css(styles.text4_h)}>{this.props.lang === 'ru' ? 'Медийный эффект' : 'Media effect'}</p>
        {b.map(item => {
          return (
            <div key={item.city_en}>
              <p className={css(styles.text4_a_h)}>{this.props.lang === 'ru' ? item.city_ru : item.city_en}:</p>
              <div className={css(styles.text4_a_t_w)}>
                <p className={css(styles.text4_a_t)}>{this.props.lang === 'ru' ? 'упомнинаний' : 'mentions'} - {item.x}</p>
                <p className={css(styles.text4_a_t)}>{this.props.lang === 'ru' ? 'охват' : 'coverage'} - {item.y}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
