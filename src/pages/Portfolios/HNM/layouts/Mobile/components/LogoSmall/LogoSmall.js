import React, { Component } from 'react'
import {css} from 'aphrodite'
import styles from './styles'
import logo_small from '../../icons/hnm.png'
export default class LogoSmall extends Component {
  render() {
    return (
      <div className={css(styles.logo_small_wrapper)}>
        <img src={logo_small} style={{width: '69px', height: '45px'}} alt=""/>
      </div>
    )
  }
}
