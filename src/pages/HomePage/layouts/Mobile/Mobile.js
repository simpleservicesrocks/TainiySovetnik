import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { Welcome, Numbers, Clients, Partners } from "./components";
import Ionicons from "react-ionicons";
export default class Mobile extends Component {
  state = {
    isArrowDown: true
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.handleBottom);
  };
  handleScroll = () => {
    let el = document.getElementById("black_el");
    if (
      el.clientHeight - window.pageYOffset <= 50 &&
      window.pageYOffset - el.clientHeight <= 500
    ) {
      this.props.handleColor("white");
    } else {
      this.props.handleColor("black");
    }
  };
  handleBottom = () => {
    if (
      window.pageYOffset + window.innerHeight ===
      document.body.scrollHeight
    ) {
      this.setState({ isArrowDown: false });
    }
    if (window.pageYOffset === 0) {
      this.setState({ isArrowDown: true });
    }
  };
  handlePageScroll = () => {
    if (this.state.isArrowDown) {
      window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
    } else {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  render() {
    return (
      <div className={css(styles.fadeIn, styles.page)} id="welcome_wrapper">
        <Welcome  lang={this.props.lang}/>
        <Numbers  lang={this.props.lang}/>
        <Clients  lang={this.props.lang}/>
        <Partners lang={this.props.lang}/>
        <Ionicons
          onClick={this.handlePageScroll}
          icon={this.state.isArrowDown ? "ios-arrow-down" : "ios-arrow-up"}
          color="#acacac"
          className={css(styles.arrow)}
          fontSize="30px"
        />
      </div>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  page: {
    height: "100%"
  },
  arrow: {
    position: "fixed",
    right: 30,
    bottom: 30
  }
});