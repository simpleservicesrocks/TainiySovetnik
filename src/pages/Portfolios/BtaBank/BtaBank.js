import React, { Component } from "react";
import { Mobile, Desktop } from "./layouts";
export default class BtaBank extends Component {
    componentDidMount =()=>{
        this.props.handleColor('black')
        this.props.handleHeader('БТА Банк')
      }
  render() {
    return (
      <React.Fragment>
        {this.props.isMobile ? <Mobile /> : <Desktop />}
      </React.Fragment>
    );
  }
}
