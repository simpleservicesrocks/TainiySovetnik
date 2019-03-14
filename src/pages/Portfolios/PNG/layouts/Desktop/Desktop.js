import React, { Component } from 'react'
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations'
import * as png from '../../../../../database/portfolio/png'
import {Logo, Text1, Text2, Insta,Youtube, Text3, Insta2} from './components'
import Footer from '../../../components/Footer/Footer'
export default class Desktop extends Component {
  render() {
    return (
      <div className={`${css(styles.fadeIn)} ${css(styles.page)}`}>
        <Text1 lang={this.props.lang}/>
        <Logo logo={png.logo_main}/>
        <Text2 lang={this.props.lang}/>
        <Insta lang={this.props.lang}/>
        <Youtube/>
        <Text3 images={[png.img1, png.img2]} lang={this.props.lang}/>
        <Insta2 insta={[png.insta, png.insta2, png.insta3, png.insta4]} lang={this.props.lang}/>
        <Footer id={4} lang={this.props.lang}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: "2s"
    },
    page:{
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})