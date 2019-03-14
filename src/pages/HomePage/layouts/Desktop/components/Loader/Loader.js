import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite/no-important";
import logo from "../../../../../../icons/logo_black.svg";
import anime from "animejs";
export default class Loader extends Component {
  animationSequence = () => {
    const timeline = anime.timeline();
    timeline
      .add({
        targets: document.getElementById("logo"),
        opacity: 1,
        duration: 2000
      })
      .add({
        targets: document.getElementById("dd"),
        right: 80,
        top: 80,
        width: "150px",
        duration: 2000,
        easing: "easeInOutSine"
      })
      .add({
        targets: document.getElementById("overlay"),
        opacity: 0,
        duration: 2000,
        complete: this.props.stopAnimation
      });
  };
  render() {
    return (
      <div className={css(styles.overlay)} id="overlay">
        <div id="dd" className={css(styles.dd)}>
          <img
            id="logo"
            src={logo}
            alt="logo"
            className={css(styles.img)}
            onLoad={this.animationSequence}
          />
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    bottom: 0,
    backgroundColor: "white",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  dd: {
    width: "600px",
    position: "absolute",
    display: "flex"
  },
  img: {
    width: "100%",
    height: "100%",
    opacity: 0
  }
});
