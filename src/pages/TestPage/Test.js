import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
// import big_logo from "../../icons/Big_logo.svg";
export default class Test extends Component {
  state = {
    isLoading: true,
    startAnimation: false
  };
  componentDidMount = () => {
    this.setState({ isLoading: false }, () => {
      this.startAnimation();
    });
  };
  startAnimation = () => {
    setTimeout(() => {
      this.setState({ startAnimation: true });
    }, 2000);
  };
  render() {
    return (
      <div className={css(styles.page, styles.fadeIn)}>
        {/* <div
          className={css(
            styles.logo,
            this.state.startAnimation && styles.animation
          )}
        >
          <img
            src={big_logo}
            alt="main_logo"
            className={css(
              styles.img,
              this.state.startAnimation && styles.img_anim
            )}
          />
        </div> */}
        <iframe
          title="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OSUxrSe5GbI?controls=0&loop=1&autoplay=1&controls=0&showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
    );
  }
}
