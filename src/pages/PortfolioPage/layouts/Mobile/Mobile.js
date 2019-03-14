import React, { Component } from 'react'
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import {Companies} from './components'
export default class Mobile extends Component {
  render() {
    return (
      <div className={css(styles.fadeIn)}>
        <Companies lang={this.props.lang}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: "2s"
    }
  });