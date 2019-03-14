import React, { Component } from 'react'
import Swiper from 'react-id-swiper';
import './carousel.css'
import {css} from 'aphrodite'
import styles from './styles'
import car from '../../icons/car.png'
export default class Carousel extends Component {
  render() {
      const options = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    return (
      <div className={css(styles.car_wrapper)}>
        <Swiper {...options}>
            <div><img src={car} alt=""/></div>
            <div><img src={car} alt=""/></div>
            <div><img src={car} alt=""/></div>
        </Swiper>
      </div>
    )
  }
}
