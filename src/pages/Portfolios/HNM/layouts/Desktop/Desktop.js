import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite';
import {fadeIn } from 'react-animations'
import {HNM1, Text1, HNM2, Text2, Carou, Text3, Gallery,Text4, Text5} from './components'
import Footer from '../../../components/Footer/Footer'
import * as hnm from '../../../../../database/portfolio/hnm'
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.hnm_wrapper)}`}>
        <HNM1 logo={hnm.hnm_big}/>
        <Text1 lang={this.props.lang}/>
        <HNM2 logo={hnm.hnm_logo_big}/>
        <Text2 lang={this.props.lang}/>
        <Carou car={hnm.car}/>
        <Text3 lang={this.props.lang}/>
        <Gallery pics={[hnm.img1, hnm.img2, hnm.img3]}/>
        <Text4 lang={this.props.lang}/>
        <Text5 lang={this.props.lang}/>
        <Footer id={1} lang={this.props.lang}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
  fadeIn:{
    animationName: fadeIn,
    animationDuration: '2s'
  },
  hnm_wrapper:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column"
  }
})