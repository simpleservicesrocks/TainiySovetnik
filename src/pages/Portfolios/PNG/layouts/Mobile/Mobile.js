import React, { Component } from 'react'
import { css } from 'aphrodite';
import styles from './styles';
import {Text1, Logo,Text2, Media} from './components'
import * as png from '../../../../../database/portfolio/png'
import FooterM from '../../../components/FooterM/FooterM'
export default class Mobile extends Component {
  render() {
    return (
      <div className={css(styles.fadeIn)}>
        <Text1 lang={this.props.lang}/>
        <Logo logo={png.logo_main}/>
        <Text2 lang={this.props.lang}/>
        <Media insta1={png.insta1} lang={this.props.lang}/>
        <FooterM id={4} lang={this.props.lang}/>
      </div>
    )
  }
}
