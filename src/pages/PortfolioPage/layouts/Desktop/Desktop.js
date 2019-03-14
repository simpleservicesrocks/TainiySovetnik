import React, { Component } from 'react'
import portfolios from '../../../../database/portfolios'
import { css } from 'aphrodite';
import styles from './styles';
import {NavLink} from 'react-router-dom'
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.portfolios_wrapper)} ${css(styles.fadeIn)}`}>
        <div className={css(styles.portfolios_inside)}>
          {portfolios.map((item, i)=>{
            return(
              <NavLink to={process.env.PUBLIC_URL+item.link} key={i}>
              <div className={css(styles.portfolio_item)}>
                <div className={css(styles.portfolio_brand)}>
                  <p>{item.brand}</p>
                </div>
                <div style={{width: "350px", height: "200px"}}>
                  <img src={item.logo} alt="" style={{width: "100%", height: "100%",objectFit: "cover"}}/>
                </div>
                <div className={css(styles.portfolio_desc)}>
                  <p>{this.props.lang === "ru" ? item.desc_ru: item.desc_en}</p>
                </div>
              </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    )
  }
}
