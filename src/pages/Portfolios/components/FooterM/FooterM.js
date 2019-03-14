import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import portfolios from "../../../../database/portfolios";
import {NavLink} from 'react-router-dom'
export default class componentName extends Component {
  render() {
    return (
      <footer className={css(styles.footer)}>
        {portfolios.map(item => {
          return (
            item.id !== this.props.id && (
              <NavLink to={process.env.PUBLIC_URL + item.link} key={item.id}>
                <div className={css(styles.portfolio_item)}>
                  <div className={css(styles.portfolio_brand)}>
                    <p>{item.brand}</p>
                  </div>
                  <div className={css(styles.portfolio_image)}>
                    <img src={item.logo} alt="" style={{width: "100%", height: '200px', objectFit: 'cover'}}/>
                  </div>
                  <div className={css(styles.portfolio_desc)}>
                    <p className={css(styles.text)}>{this.props.lang==="ru" ? item.desc_ru:item.desc_en}</p>
                  </div>
                </div>
              </NavLink>
            )
          );
        })}
      </footer>
    );
  }
}
