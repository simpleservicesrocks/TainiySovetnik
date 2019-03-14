import React, { Component } from 'react'
import {Text1, Text2, Media} from './components'
import { css, StyleSheet } from 'aphrodite';
import {fadeIn} from 'react-animations'
import * as visa from '../../../../../database/portfolio/visa'
import FooterM from '../../../components/FooterM/FooterM'
export default class Mobile extends Component {
  render() {
    return (
      <div className={css(styles.fadeIn)}>
        <Text1 logo={visa.logo} lang={this.props.lang}/>
        <Text2 lang={this.props.lang}/>
        <Media lang={this.props.lang}/>
        <FooterM lang={this.props.lang} id={6}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
  fadeIn:{
    animationName: fadeIn,
    animationDuration: "2s"
  }
})