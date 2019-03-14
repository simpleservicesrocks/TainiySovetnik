import React, { Component } from 'react'
import styles from './styles'
import {css} from 'aphrodite'
import {NavLink} from 'react-router-dom'
import portfolios from '../../../../../../database/portfolios'
export default class Companies extends Component {
  render() {
    return (
      <div className={css(styles.companies_mobile_wrapper)}>
        {portfolios.map((item, index)=>{
            return(
            <NavLink to= {process.env.PUBLIC_URL+item.link} key={index}>
                <div className={css(styles.companies_mobile_card)}>
                    <div className={css(styles.company_brand)}>
                        <p className={css(styles.company_brand_t)}>{item.brand}</p>
                    </div>
                    <img src={item.logo} className={css(styles.company_logo)} alt=""/>
                    <div className={css(styles.company_desc)}>
                        <p className={css(styles.company_text)}>{this.props.lang === "ru" ? item.desc_ru : item.desc_en}</p>
                    </div>
                </div>
            </NavLink>
            )
        })}
      </div>
    )
  }
}
