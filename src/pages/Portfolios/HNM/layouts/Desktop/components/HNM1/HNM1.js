import React, { Component } from 'react'
import { css,StyleSheet } from 'aphrodite';
export default class HNM1 extends Component {
  render() {
    return (
      <div className={css(styles.logo_wrapper)}>
        <img src={this.props.logo} alt="" style={{width: "740px"}}/>
      </div>
    )
  }
}
const styles = StyleSheet.create({
    logo_wrapper:{
        width:'767px',
        height: '338px',
        marginTop: '285px'
    }
})