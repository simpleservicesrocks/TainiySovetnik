import React, { Component } from 'react'
import {css, StyleSheet} from 'aphrodite'
export default class Logo extends Component {
  render() {
    return (
      <img src={this.props.logo} className={css(styles.img)} alt=""/>
    )
  }
}
const styles = StyleSheet.create({
    img:{
        width: "767px",
        height: "338px"
    }
})