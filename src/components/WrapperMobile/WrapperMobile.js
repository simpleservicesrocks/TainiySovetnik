import React, { Component } from 'react'
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import {Nav, Logo, Modal} from './components'
export default class WrapperMobile extends Component {
  state={
    isModalVisible: false
  }
  handleModal = () =>{
    this.setState({isModalVisible: !this.state.isModalVisible})
  }
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.wrapper)}`}>
        <Nav handleModal={this.handleModal} isModalVisible={this.state.isModalVisible} isColorWhite={this.props.isColorWhite} lang={this.props.lang}/>
        <Logo isModalVisible={this.state.isModalVisible} lang={this.props.lang} isColorWhite={this.props.isColorWhite}/>
        <Modal isModalVisible={this.state.isModalVisible} handleModal={this.handleModal} lang={this.props.lang} handleLanguage={this.props.handleLanguage}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
    fadeIn:{
      animationName: fadeIn,
      animationDuration: '2s'
    },
    wrapper:{
      zIndex: 99999999999999
    }

});