import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { Info1, Info2 } from "./components";
export default class Mobile extends Component {
  render() {
    return (
      <div className={css(styles.fadeIn)}>
        <Info1 lang={this.props.lang}/>
        <Info2 lang={this.props.lang}/>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  }
});
