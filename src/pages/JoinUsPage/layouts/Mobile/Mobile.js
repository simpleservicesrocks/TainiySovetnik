import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles'
import principles from './arr'
import Swiper from "react-id-swiper";
export default class Mobile extends Component {
  state={
    current: 0
  }
  swiperHandler = (i) =>{
    this.setState({current: this.state.current+i})
  }
  render() {
    const params = {
      on: {
        slideNextTransitionStart: ()=>{
          this.swiperHandler(1)
        },
        slidePrevTransitionStart: ()=>{
          this.swiperHandler(-1)
        }
      }
    }
    return (
      <div style={{position: 'relative', height: '100%', fontFamily: "SFUIDisplay-Regular"}}>
      <div className={css(styles.absolute)}>
        <p>{this.props.lang==='ru'? "Наши принципы":"Our principles"}</p>
        <div className={css(styles.abs_full)}>
          {principles.map((item,i)=>{
            return(
              <p className={css(styles.abs_text, this.state.current===i?styles.abs_text_selected: styles.abs_text_not_selected)}>{this.props.lang==='ru' ? item.titile_ru : item.title_en}</p>
            )
          })}
        </div>
      </div>
      <div className={css(styles.page, styles.fadeIn)}>
      <Swiper {...params}>
        {principles.map((item,i)=>{
          return(
            <div key={i} className={css(styles.big_wrap)}>
              <div className={css(styles.big_inside)}>
                <p className={css(styles.big_text)} dangerouslySetInnerHTML={{__html: this.props.lang==='ru' ? item.desc_ru : item.desc_en}}/>
              </div>
            </div>
          )
        })}
      </Swiper>
      </div>
      </div>
    )
  }
}
