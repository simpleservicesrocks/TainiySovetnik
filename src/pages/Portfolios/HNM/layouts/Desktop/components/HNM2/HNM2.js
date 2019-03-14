import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles';
export default class HNM2 extends Component {
  render() {
    return (
      <div className={css(styles.logo_wrapper)}>
        <img src={this.props.logo} style={{width: '145px', height: '95px'}} alt=""/>
      </div>
    )
  }
}
