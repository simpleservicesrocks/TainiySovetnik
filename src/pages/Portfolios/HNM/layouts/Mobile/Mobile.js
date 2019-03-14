import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import {
  LogoMain,
  Text1,
  Text2,
  LogoSmall,
  Carousel,
  Text3,
  Photos,
  Text4
} from "./components";
import FooterM from '../../../components/FooterM/FooterM'
export default class Mobile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`${css(styles.fadeIn)} ${css(styles.padding)}`}>
          <LogoMain />
          <Text1 lang={this.props.lang}/>
          <LogoSmall />
          <Text2 lang={this.props.lang}/>
          <Carousel />
          <Text3 lang={this.props.lang}/>
          <Photos />
          <Text4 />
        </div>
        <div className={`${css(styles.fadeIn)}`}>
        <FooterM id={1} lang={this.props.lang}/>
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
  padding: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});
