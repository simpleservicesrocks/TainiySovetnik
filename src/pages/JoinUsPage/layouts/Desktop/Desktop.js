import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import principles from '../arr'
export default class Desktop extends Component {
  state={
    current: 0
  }
  itemHandler = (i) =>{
    this.setState({current: i})
  }
  
  render() {
      const desc = this.props.lang === 'ru' ? principles[this.state.current].desc_ru :principles[this.state.current].desc_en
      const description = <p className={css(styles.desc_text)} dangerouslySetInnerHTML={{__html: desc}}/>
    return (
      <div className={css(styles.page, styles.fadeIn)}>
        <div className={css(styles.wrap)}>
          <div className={css(styles.block, styles.left_block)}>
            <div className={css(styles.title)}>
              {this.props.lang==='ru' ? <p>Наши<br/>принципы</p>:<p>Our<br/>principes</p>}
            </div>
            <div className={css(styles.items_wrap)}>
              {principles.map((item, i)=>{
                const text = this.props.lang==="ru" ? item.titile_ru : item.title_en
                return(
                  <p key={i} className={css(styles.items, this.state.current === i ? styles.item_picked : styles.item_not_picked)} onClick={()=>this.itemHandler(i)}>{text}</p>
                )
              })}
            </div>
          </div>
          <div className={css(styles.block, styles.desc)}>
              {description}
          </div>
        </div>
      </div>
    );
  }
}
