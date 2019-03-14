import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Gedeon extends Component {
    componentDidMount =()=>{
        this.props.handleColor('black')
        this.props.handleHeader('Gedeon Ritcher')
        window.scrollTo(0, 0)
      }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile /> : <Desktop />}
      </React.Fragment>
    );
  }
}
