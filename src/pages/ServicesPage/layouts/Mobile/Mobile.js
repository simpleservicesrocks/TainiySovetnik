import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Swiper from "react-id-swiper";
import arr from "../arr";
export default class Mobile extends Component {
  constructor(props){
    super(props)
    this.swiper = null
    this.state = {
      isMenuOpen: true,
      currentSlide: 0
    };
  }
  menuHandler = i => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen, currentSlide: i });
  };
  goNextHandler = () => {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  };
  render() {
    return (
      <div className={css(styles.fadeIn, styles.page)}>
        {this.state.isMenuOpen ? (
          <div className={css(styles.itemsWrap)}>
            {arr.map((item, i) => {
              return (
                <p className={css(styles.item)} onClick={()=>this.menuHandler(item.index)} key={i}>
                {this.props.lang === 'ru' ? item.name_ru : item.name_en}
                </p>
              );
            })}
          </div>
        ) : (
          <Swiper
          initialSlide={this.state.currentSlide}
            className={css(styles.fadeIn, styles.swiper)}
            ref={node => {
              if (node) this.swiper = node.swiper;
            }}
          >
            {arr.map(item=>{
              return(
                <div key={item.index} className={css(styles.card)}>
                <div className={css(styles.hWrap)}>
                  <p className={css(styles.h)}>{this.props.lang === 'ru' ? item.name_ru : item.name_en}</p>
                </div>
                  <p className={css(styles.t)}>{this.props.lang === 'ru' ? item.text_ru : item.text_en}</p>
                </div>
              )
            })}
          </Swiper>
        )}
        <div className={css(styles.btnWrap)}>
          <div className={css(styles.btnInside)}>
            {!this.state.isMenuOpen && (
              <p className={css(styles.back)} onClick={this.menuHandler}>
                {this.props.lang === 'ru' ? 'Назад' : 'Return'} 
              </p>
            )}
            {!this.state.isMenuOpen && (
              <p className={css(styles.next)} onClick={this.goNextHandler}>
                {this.props.lang === 'ru' ? 'Следующая' : 'Next'} 
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
