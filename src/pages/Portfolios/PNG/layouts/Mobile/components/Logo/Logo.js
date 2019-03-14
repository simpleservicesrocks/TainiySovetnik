import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles';
export default class Logo extends Component {
  render() {
    return (
      <img src={this.props.logo} className={css(styles.img)} alt=""/>
    )
  }
}
