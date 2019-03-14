import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles';
export default class Gallery extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        {this.props.pics.map((item, index)=>{
            return(
                <img src={item} alt="" className={index === 0 ? css(styles.img1) : index===1 ? css(styles.img2) : index===2 ? css(styles.img3) : "" } key={index}/>
            )
        })}
      </div>
    )
  }
}
