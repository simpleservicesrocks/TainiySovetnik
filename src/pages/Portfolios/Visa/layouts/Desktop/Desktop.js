import React, { Component } from 'react'
import { StyleSheet, css } from "aphrodite";
import { fadeIn } from "react-animations";
import {Intro, Logo,Text1,Youtube, Instagram} from './components'
import * as visa from '../../../../../database/portfolio/visa'
import Footer from '../../../components/Footer/Footer'
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.page)}`}>
        <Intro lang={this.props.lang}/>
        <Logo logo={visa.logo} lang={this.props.lang}/>
        <Text1 lang={this.props.lang}/>
        <Youtube lang={this.props.lang}/>
        <Instagram lang={this.props.lang}/>
        <Footer id={6} lang={this.props.lang}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
    fadeIn:{
        animationName: fadeIn,
        animationDuration: '2s'
    },
    page:{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    }
})