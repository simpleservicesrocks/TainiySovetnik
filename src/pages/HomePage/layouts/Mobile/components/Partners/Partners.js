import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import * as logos from "../../../../../../icons/brands/index";
const arr = [
  { icon: logos.bank, link: "http://bta.kz/" },
  { icon: logos.gedeon, link: "http://g-richter.kz/" },
  { icon: logos.hnm, link: "https://www.hm.com/kz" },
  {
    icon: logos.nestle,
    link: "https://www.nestle.ru/aboutus/nestle_in_eurasia"
  },
  { icon: logos.png, link: "https://us.pg.com/" },
  {
    icon: logos.ritz,
    link: "http://www.ritzcarlton.com/ru/hotels/kazakhstan/almaty"
  },
  { icon: logos.samsung, link: "https://www.samsung.com/kz_ru/" },
  { icon: logos.visa, link: "https://www.visa.com.kz/ru_KZ" },
  { icon: logos.xerox, link: "http://www.xerox.kz/" }
];
export default class Partners extends Component {
  render() {
    return (
      <div className={css(styles.partners_mobile_wrapper)}>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          {arr.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  width: "50%",
                  height: "80px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: "20px"
                }}
              >
                <img
                  alt="partner logo"
                  src={item.icon}
                  key={i}
                  style={{ width: "70%", maxHeight: 80 }}
                />
              </div>
            );
          })}
        </div>

        {this.props.lang === "ru" ? (
          <p className={css(styles.partners_row_text)}>И еще 90 клиентов</p>
        ) : (
          <p className={css(styles.partners_row_text)}>And 90 more clients</p>
        )}
      </div>
    );
  }
}
