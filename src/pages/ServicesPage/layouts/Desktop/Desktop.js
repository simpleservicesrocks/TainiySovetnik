import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Swiper from "react-id-swiper";
import arr from "../arr";
export default class Desktop extends Component {
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
      <div className={`${css(styles.fadeIn)} ${css(styles.wrap)}`}>
        {this.state.isMenuOpen ? (
          <div className={`${css(styles.fadeIn)} ${css(styles.inside)}`}>
            {arr.map(item => {
              return (
                <p
                  className={css(styles.item)}
                  key={item.index}
                  onClick={() => this.menuHandler(item.index)}
                >
                  {this.props.lang === 'ru' ? item.name_ru : item.name_en}
                </p>
              );
            })}
          </div>
        ) : (
          <Swiper
            initialSlide={this.state.currentSlide}
            className={css(styles.fadeIn)}
            ref={node => {
              if (node) this.swiper = node.swiper;
            }}
          >
            {arr.map(item => {
              return (
                <div key={item.index} className={css(styles.card)}>
                  <p className={css(styles.h)}>{this.props.lang === 'ru' ? item.name_ru : item.name_en}</p>
                  <p className={css(styles.t)}>{this.props.lang === 'ru' ? item.text_ru.split('\n').map((a,b)=>{return(<p key={b}>{a}</p>)}) : item.text_en.split('\n').map((a,b)=>{return(<p key={b}>{a}</p>)})}</p>
                </div>
              );
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
