import React, { Component } from 'react'
import {css} from 'aphrodite'
import styles from './styles'
import * as img from '../../../../../../../database/portfolio/hnm'
export default class Photos extends Component {
  render() {
    return (
      <div className={css(styles.photos_wrapper)}>
        <img src={img.img1} className={css(styles.photos_p)} alt="pics"/>
        <img src={img.img2} className={css(styles.photos_p, styles.p2)} alt="pics"/>
        <img src={img.img3} className={css(styles.photos_p)} alt="pics"/>
      </div>
    )
  }
}
