import React, { Component } from 'react'
import {css} from 'aphrodite'
import styles from './styles'
import logo from '../../icons/hnm_asset1.png'
export default class LogoMain extends Component {
  render() {
    return (
      <div className={css(styles.logo_wrapper)}>
        <img src={logo} className={css(styles.logo_img)} alt=""/>
      </div>
    )
  }
}
