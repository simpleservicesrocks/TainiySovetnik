import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles';
import Swiper from "react-id-swiper";
export default class Carou extends Component {
  render() {
    const params ={
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }
    return (
      <div className={css(styles.wrapper)}>
        <Swiper {...params}>
            <img src={this.props.car} alt=""/>
            <img src={this.props.car} alt=""/>
            <img src={this.props.car} alt=""/>
        </Swiper>
      </div>
    )
  }
}
