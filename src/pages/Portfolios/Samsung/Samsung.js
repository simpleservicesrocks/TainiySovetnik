import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class Samsung extends Component {
    componentDidMount =()=>{
        this.props.handleColor('black')
        this.props.handleHeader('Samsung')
      }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile /> : <Desktop />}
      </React.Fragment>
    );
  }
}