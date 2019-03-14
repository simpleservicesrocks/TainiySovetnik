import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import { Nav, Modal, Logo } from "./components";
export default class WrapperDesktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)}`} >
        <Nav
          header={this.props.header}
          handleModal={this.props.handleModal}
          isColorWhite={this.props.isColorWhite}
          isModalVisible={this.props.isModalVisible}
          isMenuBlack={this.props.isMenuBlack}
          isHeaderBlack={this.props.isHeaderBlack}
          lang={this.props.lang}
        />
        <Modal
          isModalVisible={this.props.isModalVisible}
          handleModal={this.props.handleModal}
          handleLanguage={this.props.handleLanguage}
          lang={this.props.lang}
        />
        <Logo isHeaderBlack={this.props.isHeaderBlack}/>
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
