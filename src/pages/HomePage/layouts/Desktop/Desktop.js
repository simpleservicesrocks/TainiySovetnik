import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { Welcome, Dates, Clients, Brands, Loader } from "./components";
import disableScroll from "disable-scroll";
export default class Desktop extends Component {
  state = {
    isLoaderVisible: false
  };
  detectBlackEl = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    let body = document.body,
      html = document.documentElement;
    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const calc = (scrollTop * 100) / height;
    this.props.handleHalfColor(calc);
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.detectBlackEl);
    this.runOnceADay()

  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.detectBlackEl);
    disableScroll.off()
  };
  stopAnimation = () => {
    this.setState({ isLoaderVisible: false }, () => {
      disableScroll.off();
    });
  };
  runOnceADay = () =>{
    const a = this.hasOneDayPassed()
    if(a){
      disableScroll.on()
      this.setState({isLoaderVisible: true})
    }
    return false
  }
  hasOneDayPassed = () =>{
   const date = new Date().toLocaleDateString()
   if(localStorage.getItem("home_app_date") === date){
     //localstorage date is equal to today !=> animation
     return false
   }
   else{
     //localstorage date doesn't equal to today => animation
    localStorage.setItem("home_app_date", date);
    return true;
   }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isLoaderVisible && (
          <Loader stopAnimation={this.stopAnimation} />
        )}
        <div className={`${css(styles.fadeIn)} ${css(styles.fullPage)}`}>
          <Welcome lang={this.props.lang} />
          <Dates lang={this.props.lang} />
          <Clients lang={this.props.lang} />
          <Brands lang={this.props.lang} />
        </div>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2s"
  },
  fullPage: {
    height: "100%",
    position: "relative",
    zIndex: -100
  }
});
